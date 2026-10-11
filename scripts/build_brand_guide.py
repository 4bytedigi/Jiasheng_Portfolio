"""Build the four-page brand guide using the site's Geist font and colors."""
from pathlib import Path
from html import escape
import json
import re

from fontTools.ttLib import TTFont as SourceFont
from fontTools.varLib.instancer import instantiateVariableFont
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/pdf/Chua-Jia-Sheng-Brand-Guidelines.pdf'
TEMP = ROOT / 'tmp/pdfs/brand-guide'
TEMP.mkdir(parents=True, exist_ok=True)
OUT.parent.mkdir(parents=True, exist_ok=True)
profile = json.loads((ROOT / 'src/profile.json').read_text(encoding='utf-8-sig'))
css = (ROOT / 'src/styles.css').read_text(encoding='utf-8-sig')
def token(name):
    return re.search(r'--' + re.escape(name) + r':\s*(#[\da-fA-F]+)', css).group(1)
INK, GRAY, BLUE, SURFACE = [token(n) for n in ['ink', 'secondary', 'accent', 'surface']]
LINE, STUDY = token('line'), '#ecf2f8'
SOURCE_FONT = ROOT / 'node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2'
for weight, name in [(400, 'Geist'), (600, 'Geist-Semibold')]:
    target = TEMP / f'Geist-{weight}.ttf'
    if not target.exists():
        variable = SourceFont(SOURCE_FONT)
        axes = {axis.axisTag: axis.defaultValue for axis in variable['fvar'].axes}
        axes['wght'] = weight
        static = instantiateVariableFont(variable, axes, inplace=False)
        static.flavor = None
        static.save(target)
    # Give each instance its own PDF font identity; otherwise ReportLab aliases
    # the two weights because the variable font's PostScript name is identical.
    instance = SourceFont(target)
    for record in instance['name'].names:
        if record.nameID == 6:
            record.string = f'Geist-Guide-{weight}'.encode(record.getEncoding())
    instance.save(target)
    pdfmetrics.registerFont(TTFont(name, target))
pdfmetrics.registerFontFamily('Geist', normal='Geist', bold='Geist-Semibold')

W, H = A4
M, CW = 44, W - 88
c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle('Chua Jia Sheng - Brand guidelines')
c.setAuthor('Chua Jia Sheng résumé project')
c.setSubject('Personal identity, colors, typography, layout, imagery and voice')

def box(x, top, w, h, fill, radius=0, border=None):
    c.setFillColor(HexColor(fill))
    c.setStrokeColor(HexColor(border or fill))
    c.roundRect(x, H-top-h, w, h, radius, fill=1, stroke=bool(border))

def text(value, x, top, size=11, color=INK, bold=False):
    c.setFont('Geist-Semibold' if bold else 'Geist', size)
    c.setFillColor(HexColor(color))
    c.drawString(x, H-top-size, value)

def para(value, x, top, width=CW, size=11, color=GRAY, bold=False, leading=None):
    style = ParagraphStyle('p', fontName='Geist-Semibold' if bold else 'Geist',
                           fontSize=size, leading=leading or size*1.5,
                           textColor=HexColor(color))
    p = Paragraph(value, style)
    _, height = p.wrap(width, H)
    if top + height > H - 54:
        raise ValueError(f'Paragraph exceeds page body: {value[:50]}')
    p.drawOn(c, x, H-top-height)
    return height

def rule(top, x=M, width=CW):
    c.setStrokeColor(HexColor(LINE))
    c.setLineWidth(.6)
    c.line(x, H-top, x+width, H-top)

def mark(x, top, size=38):
    box(x, top, size, size, INK, radius=size*9/32)
    # Match the site's optical downward adjustment instead of centering by bbox.
    text('js.', x+size*.2, top+size*.08, size*.69, '#ffffff', bold=True)

def page(number, section):
    c.setFillColor(white)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    mark(M, 38, 30)
    text('Chua Jia Sheng', M+41, 43, 12, bold=True)
    text(section, W-M-146, 47, 9, GRAY)
    rule(H-48)
    text('Brand guidelines  /  Version 1.0  /  10 October 2026', M, H-35, 8, GRAY)
    text(f'{number} / 4', W-M-22, H-35, 8, GRAY)

# 1. Identity and intent
page(1, 'Personal résumé identity')
text('Brand', M, 116, 62, bold=True)
text('guidelines.', M, 178, 62, bold=True)
text('Engineering with product clarity.', M, 277, 22, bold=True)
para('A calm, precise identity for an engineering professional. Make the person, '
     'the work and the qualifications easy to understand.', M, 321, 440, 14)
principles = [
    ('Clear facts.', 'Lead with the professional record. Every claim should be traceable.'),
    ('Quiet confidence.', 'Let typography, spacing and structure do the work.'),
    ('Depth in the image.', 'Silver and glass carry the material character. The interface stays light.'),
]
for index, (title, body) in enumerate(principles):
    y = 457 + index*82
    text(title, M, y, 15, bold=True)
    para(body, M, y+25, 207, 10.5)
c.drawImage(str(ROOT/'public/images/silicon-glass.png'), 265, H-430-276,
            width=276, height=276, preserveAspectRatio=True, mask='auto')
para('For IT recruiters and professional contacts. The full identity uses Chua Jia Sheng; '
     'the compact navigation name is Jia Sheng.', M, 739, CW, 9.5)
c.showPage()

# 2. Name, mark, palette
page(2, 'Identity & color')
text('Recognizable. Restrained.', M, 102, 34, bold=True)
box(M, 165, CW, 110, SURFACE, radius=18)
mark(M+24, 187, 64)
text('Jia Sheng', M+111, 201, 27, bold=True)
text('Compact website lockup', M+111, 239, 9, GRAY)
para('Keep the lowercase <b>js.</b> and its period. Normal website mark: 32px, with 9px corners '
     'and an 11px name gap. Clear space: at least one quarter of the mark width. '
     'Recommended print minimum: 8mm. Preserve proportions and contrast.', M, 295, CW, 10.5)
text('The core palette', M, 371, 18, bold=True)
swatches = [
    ('White', '#FFFFFF', 'Main canvas and reading surfaces'),
    ('Soft Gray', SURFACE.upper(), 'Quiet bands and supporting tiles'),
    ('Near-Black Ink', INK.upper(), 'Headings, body and selected states'),
    ('Action Blue', BLUE.upper(), 'Actions, links and keyboard focus'),
    ('Secondary Gray', GRAY.upper(), 'Descriptions, dates and metadata'),
    ('Study Tint', STUDY.upper(), 'Education overview surface'),
]
gap, sw = 15, (CW-30)/3
for index, (name, value, role) in enumerate(swatches):
    x, y = M+(index%3)*(sw+gap), 411+(index//3)*151
    box(x, y, sw, 51, value, radius=8, border=LINE if index<2 else None)
    text(name, x, y+63, 11, bold=True)
    text(value, x, y+82, 9, GRAY)
    para(role, x, y+100, sw, 9, GRAY)
para('<b>Blue has a job.</b> Use it to identify an action. Keep large reading surfaces neutral. '
     'Avoid decorative gradients, glows and competing saturated accents.', M, 741, CW, 9.5)
c.showPage()

# 3. Type and layout
page(3, 'Typography & layout')
text('One voice. Clear hierarchy.', M, 102, 33, bold=True)
text('Geist Variable', M, 164, 31, bold=True)
text('Regular 400', M, 211, 23)
text('Semibold 600', M+249, 211, 23, bold=True)
para('Self-host the font. Use 400 for reading and actions; use 600 for headings and strong labels. '
     'Write in sentence case. Keep paragraphs open and display lettering tightly tracked.', M, 256, CW, 10.5)
cols = [M, M+207, M+353, M+426]
for label, x in zip(['Website role', 'Size', 'Weight', 'Leading'], cols):
    text(label, x, 321, 9, GRAY)
rule(344)
rows = [
    ('Identity display', '58-96px*', '600', '1.08'),
    ('Section heading', '34-48px', '600', '1.10'),
    ('Professional role', '20-28px*', '400', '1.30'),
    ('Entry title', '17-20px', '600', '1.35-1.40'),
    ('Main introduction', '17px*', '400', '1.60'),
    ('Detailed résumé copy', '14px', '400', '1.60'),
    ('Metadata / controls', '12px / 14px', '400', 'Natural'),
]
for index, row in enumerate(rows):
    top = 353+index*25
    for value, x in zip(row, cols):
        text(value, x, top, 9.5, INK if x==M else GRAY)
para('* Phone display: 47-68px. Role: 19-21px. Introduction: 15px. '
     'Keep dates and counts in tabular numerals.', M, 537, CW, 9)
text('Space supports the content.', M, 581, 18, bold=True)
left = (CW-12)*1.45/2.45
box(M, 620, left, 60, SURFACE, radius=10)
box(M+left+12, 620, CW-left-12, 60, STUDY, radius=10)
text('Engineering overview', M+16, 638, 11, bold=True)
text('Study & service', M+left+28, 638, 11, bold=True)
para('Desktop overview ratio: 1.45:1. Stack below 768px. Shell: 1184px, including gutters. '
     'Side padding: 32px desktop, 24px mobile, 20px small phone.', M, 700, CW, 10)
para('Section spacing: 112px desktop / 76px mobile. Overview corners: 18px. '
     'Inputs: 10px. Primary actions: pills. Keep reading lists flat.', M, 746, CW, 9.5)
c.showPage()

# 4. Imagery, voice, interactions
page(4, 'Imagery, voice & behavior')
text('Precise in every detail.', M, 102, 35, bold=True)
c.drawImage(str(ROOT/'public/images/silicon-glass.png'), M, H-160-230,
            width=230, height=230, preserveAspectRatio=True, mask='auto')
text('Material, not decoration.', M+254, 182, 15, bold=True)
para('Cool studio light. Silver and glass. White or soft-gray ground. '
     'The processor is an abstract computing illustration, not a photo of a completed project.',
     M+254, 213, CW-254, 10.5)
para('Use Phosphor icons consistently. Label standalone icon controls; hide decorative icons '
     'from assistive technology. Keep imagery factual and uncluttered.', M+254, 311, CW-254, 10)
text('Say what is true.', M, 427, 20, bold=True)
para('Use short, direct sentences. Name the role, qualification or work performed. '
     'Preserve expected graduation dates and distinguish course completion from certification.',
     M, 462, CW, 11)
box(M, 530, CW, 87, SURFACE, radius=14)
para('<b>Computer Engineering undergraduate at NTU.</b><br/>Expected completion 2030.<br/>'
     'CompTIA Network+ N10-009 - 2026. Udemy course completion.',
     M+20, 547, CW-40, 10.5, INK)
text('Make the next action clear.', M, 649, 18, bold=True)
para('Download résumé. View LinkedIn. Reset search. Use blue pills for primary actions. '
     'Keep mobile controls at least 44px. Preserve visible keyboard focus, instant filtering '
     'and reduced-motion support.', M, 681, CW, 10.5)
para('Visual inspiration: VoltAgent / Apple DESIGN.md. Technical tokens: root DESIGN.md. '
     'Professional facts: src/profile.json. Image provenance: public/images/silicon-glass.provenance.json.',
     M, 746, CW, 8.5)
c.linkURL('https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple',
          (M, H-777, W-M, H-746), relative=0, thickness=0)
c.showPage()
c.save()

reader = PdfReader(OUT)
assert len(reader.pages) == 4, 'Expected four brand-guide pages'
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)
for required in ['Brand', 'Geist Variable', '#0066CC', 'Expected completion 2030', 'course completion']:
    assert required in all_text, f'Missing required text: {required}'
print(f'Created {OUT} ({len(reader.pages)} pages)')
