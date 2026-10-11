"""Build the downloadable resume from the website's shared profile data."""
import json
import shutil
from datetime import datetime
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
profile = json.loads((ROOT / 'src/profile.json').read_text(encoding='utf-8'))
output = ROOT / 'output/pdf/Chua-Jia-Sheng-Resume.pdf'
output.parent.mkdir(parents=True, exist_ok=True)
ink = colors.HexColor('#202124')
secondary = colors.HexColor('#59616C')
accent = colors.HexColor('#0866D8')
line = colors.HexColor('#DEE3E9')
width = A4[0] - 96

styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=29, leading=34, textColor=ink),
    'headline': ParagraphStyle('headline', fontName='Helvetica', fontSize=10, leading=15, textColor=secondary),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.5, leading=13, textColor=ink),
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=9.1, leading=12, textColor=ink),
    'meta': ParagraphStyle('meta', fontName='Helvetica', fontSize=8.1, leading=11, textColor=secondary),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=accent, spaceBefore=16, spaceAfter=8),
    'date': ParagraphStyle('date', fontName='Helvetica', fontSize=8.1, leading=11, textColor=secondary, alignment=TA_RIGHT),
}
def p(text, style='body'):
    return Paragraph(escape(text), styles[style])

def section(title):
    return Paragraph(title, styles['section'])

def entry(title, subtitle, date='', spacing=7):
    content = [p(title, 'title'), p(subtitle, 'meta')]
    row = Table([[content, p(date, 'date')]], colWidths=[width - 90, 90])
    row.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), spacing)]))
    return row

story = [p(profile['name'], 'name'), Spacer(1, 5), p(profile['headline'], 'headline'), Spacer(1, 9)]
story.append(Paragraph('Singapore &nbsp; | &nbsp; <link href="https://www.linkedin.com/in/chua-jia-sheng/" color="#0866D8">linkedin.com/in/chua-jia-sheng</link>', styles['meta']))
story += [Spacer(1, 17), p(profile['summary']), section('Experience')]
for job in profile['experience']:
    story.append(KeepTogether([entry(job['title'], f"{job['organization']} | {job['location']}", job['period'], spacing=4), p(job['description']), Spacer(1, 9)]))
story.append(section('Education'))
for school in profile['education']:
    subtitle = school['qualification'] + (f" | {school['detail']}" if school['detail'] else '')
    story.append(entry(school['institution'], subtitle, school['period'], spacing=8))
story.append(section('Technical focus'))
story.append(p(', '.join(profile['skills'])))
story += [PageBreak(), p(profile['name'], 'headline'), section('Professional certifications & courses')]
for cert in sorted(profile['certifications'], key=lambda item: datetime.strptime(item['date'], '%b %Y'), reverse=True):
    issuer = cert['issuer'] + (' | Course completion' if cert['issuer'] == 'Udemy' else '')
    story.append(entry(cert['title'], issuer, cert['date'], spacing=5))
story.append(section('Honours & awards'))
for award in profile['awards']:
    story.append(entry(award['title'], f"{award['detail']} | {award['issuer']}", award['date'], spacing=6))

def page_frame(canvas, doc):
    canvas.setTitle('Chua Jia Sheng | Professional Resume')
    canvas.setAuthor('Chua Jia Sheng')
    canvas.setSubject('Engineering and digital technology professional profile')
    canvas.setStrokeColor(line)
    canvas.setLineWidth(.6)
    canvas.line(42, 36, A4[0]-42, 36)
    canvas.setFont('Helvetica', 7)
    canvas.setFillColor(secondary)
    canvas.drawString(42, 24, 'Chua Jia Sheng')
    canvas.drawRightString(A4[0]-42, 24, f'Professional resume | {doc.page} / 2')

doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=42, leftMargin=42, topMargin=40, bottomMargin=46)
doc.build(story, onFirstPage=page_frame, onLaterPages=page_frame)
reader = PdfReader(output)
if len(reader.pages) != 2:
    raise RuntimeError(f'Expected two pages, got {len(reader.pages)}. Review layout before publishing.')
text = ' '.join(page.extract_text() for page in reader.pages)
assert all(cert['title'] in text.replace('\n', ' ') for cert in profile['certifications']), 'Missing certification'
assert all(job['organization'] in text.replace('\n', ' ') for job in profile['experience']), 'Missing employer'
shutil.copy2(output, ROOT / 'public/Chua-Jia-Sheng-Resume.pdf')
print(f'Built and checked two-page resume: {output}')
