$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $projectRoot 'output/deploy/release.json'
$manifest = Get-Content -Raw -LiteralPath $manifestPath | ConvertFrom-Json -AsHashtable
$publicResults = @($manifest.files.GetEnumerator() | ForEach-Object -Parallel {
    $ErrorActionPreference = 'Stop'
    $file = $_
    $response = Invoke-WebRequest -Uri ('https://jiasheng.4bytedigi.com/' + $file.Key) -TimeoutSec 20
    $body = $response.RawContentStream.ToArray()
    $actualSha = [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData($body)).ToLowerInvariant()
    $matches = $actualSha -eq $file.Value
    $normalizedMatch = $false
    # The zone's existing Cloudflare Web Analytics setting injects its public beacon.
    # Accept only that observed script; the remaining HTML must match byte for byte.
    if ($file.Key -eq 'index.html' -and -not $matches) {
        $html = [Text.Encoding]::UTF8.GetString($body)
        $beaconPattern = '<script\b(?=[^>]*\bsrc="https://static\.cloudflareinsights\.com/beacon\.min\.js/)[^>]*>.*?</script>\r?\n'
        if ([regex]::Matches($html, $beaconPattern).Count -eq 1) {
            $normalizedBytes = [Text.Encoding]::UTF8.GetBytes([regex]::Replace($html, $beaconPattern, ''))
            $normalizedSha = [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData($normalizedBytes)).ToLowerInvariant()
            $normalizedMatch = $normalizedSha -eq $file.Value
        }
    }
    [ordered]@{
        path=$file.Key
        status=[int]$response.StatusCode
        bytes=$body.Length
        sha256Matches=$matches
        matchesAfterRemovingCloudflareAnalytics=$normalizedMatch
        verified=($matches -or $normalizedMatch)
        contentType=[string]$response.Headers['Content-Type']
        cacheControl=[string]$response.Headers['Cache-Control']
    }
} -ThrottleLimit 4)
if ($publicResults.Count -ne $manifest.files.Count -or @($publicResults | Where-Object { -not $_.verified -or $_.status -ne 200 }).Count -gt 0) {
    $publicResults | ConvertTo-Json
    throw 'Public file verification failed'
}
$report = [ordered]@{
    checkedAt=[DateTime]::UtcNow.ToString('o')
    origin='https://jiasheng.4bytedigi.com'
    release=$manifest.release
    status='verified'
    files=$publicResults
}
$report | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $projectRoot 'output/deploy/public-verification.json') -Encoding utf8
Write-Output "Public HTTPS: all $($publicResults.Count) files returned 200 and verified against the uploaded release."
$publicResults | Where-Object { $_.path -in @('index.html','Chua-Jia-Sheng-Resume.pdf','assets/index-DonGYCwP.js') } | ConvertTo-Json -Depth 3
