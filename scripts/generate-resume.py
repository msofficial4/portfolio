from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)
from pypdf import PdfReader, PdfWriter


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "malik-shahzaib-resume.pdf"
PORTFOLIO_OUTPUT = ROOT / "public" / "resume" / "malik-shahzaib-portfolio.pdf"
COMBINED_OUTPUT = ROOT / "public" / "resume" / "malik-shahzaib-resume-and-portfolio.pdf"

NAVY = colors.HexColor("#17324D")
BLUE = colors.HexColor("#1F6F8B")
TEXT = colors.HexColor("#263442")
MUTED = colors.HexColor("#5D6B78")
LIGHT = colors.HexColor("#D9E4EA")


def register_fonts():
    regular = Path("C:/Windows/Fonts/arial.ttf")
    bold = Path("C:/Windows/Fonts/arialbd.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("ResumeSans", str(regular)))
        pdfmetrics.registerFont(TTFont("ResumeSans-Bold", str(bold)))
        return "ResumeSans", "ResumeSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()


def header_footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(LIGHT)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 13 * mm, width - doc.rightMargin, 13 * mm)
    canvas.setFont(FONT, 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 8.5 * mm, "Malik Shahzaib | PHP, Laravel & WordPress Developer")
    canvas.drawRightString(width - doc.rightMargin, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def bullets(items, styles):
    result = []
    for item in items:
        result.append(Paragraph(f"<bullet>&bull;</bullet>{item}", styles["bullet"]))
    return result


def role(title, company, dates, items, styles):
    heading = Table(
        [[Paragraph(title, styles["role"]), Paragraph(dates, styles["date"])],
         [Paragraph(company, styles["company"]), ""]],
        colWidths=[122 * mm, 48 * mm],
    )
    heading.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ]))
    return KeepTogether([heading, Spacer(1, 2), *bullets(items, styles), Spacer(1, 6)])


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=16 * mm,
        bottomMargin=19 * mm,
        title="Malik Shahzaib - Resume",
        author="Malik Shahzaib",
        subject="PHP, Laravel and WordPress Developer Resume",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=header_footer))

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle("Name", parent=base["Title"], fontName=FONT_BOLD, fontSize=24,
                               leading=26, textColor=NAVY, spaceAfter=2, alignment=TA_LEFT),
        "tagline": ParagraphStyle("Tagline", parent=base["Normal"], fontName=FONT, fontSize=11,
                                  leading=14, textColor=BLUE, spaceAfter=5),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName=FONT, fontSize=8.2,
                                  leading=11, textColor=MUTED, spaceAfter=0),
        "section": ParagraphStyle("Section", parent=base["Heading2"], fontName=FONT_BOLD, fontSize=10,
                                  leading=12, textColor=NAVY, spaceBefore=8, spaceAfter=4,
                                  uppercase=True),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName=FONT, fontSize=8.7,
                               leading=12.2, textColor=TEXT, spaceAfter=4),
        "role": ParagraphStyle("Role", parent=base["Heading3"], fontName=FONT_BOLD, fontSize=9.4,
                               leading=11.5, textColor=TEXT, spaceAfter=0),
        "company": ParagraphStyle("Company", parent=base["Normal"], fontName=FONT, fontSize=8.4,
                                  leading=10.5, textColor=BLUE),
        "date": ParagraphStyle("Date", parent=base["Normal"], fontName=FONT_BOLD, fontSize=8,
                               leading=10, textColor=MUTED, alignment=TA_RIGHT),
        "bullet": ParagraphStyle("Bullet", parent=base["BodyText"], fontName=FONT, fontSize=8.35,
                                 leading=11.3, textColor=TEXT, leftIndent=10, firstLineIndent=-7,
                                 bulletIndent=0, spaceAfter=2.2),
        "skill_label": ParagraphStyle("SkillLabel", parent=base["Normal"], fontName=FONT_BOLD,
                                      fontSize=8.2, leading=10.5, textColor=NAVY),
        "skill_text": ParagraphStyle("SkillText", parent=base["Normal"], fontName=FONT,
                                     fontSize=8.2, leading=10.5, textColor=TEXT),
    }

    story = [
        Paragraph("MALIK SHAHZAIB", styles["name"]),
        Paragraph("PHP, Laravel & WordPress Developer", styles["tagline"]),
        Paragraph(
            "Lahore, Punjab, Pakistan &nbsp;&nbsp;|&nbsp;&nbsp; +92 309 4600297 &nbsp;&nbsp;|&nbsp;&nbsp; "
            '<link href="mailto:msofficial48@gmail.com" color="#5D6B78">msofficial48@gmail.com</link><br/>'
            '<link href="https://linkedin.com/in/msofficial" color="#5D6B78">linkedin.com/in/msofficial</link>'
            " &nbsp;&nbsp;|&nbsp;&nbsp; "
            '<link href="https://gitlab.com/msofficial48" color="#5D6B78">gitlab.com/msofficial48</link>',
            styles["contact"],
        ),
        Spacer(1, 5),
        HRFlowable(width="100%", thickness=1.2, color=BLUE, spaceBefore=0, spaceAfter=2),
        Paragraph("Professional Summary", styles["section"]),
        Paragraph(
            "Full-stack web developer with 6+ years of experience delivering Laravel applications, custom WordPress "
            "solutions, WooCommerce stores, and secure third-party integrations. Experienced in translating business "
            "requirements into maintainable software, improving legacy code, troubleshooting production issues, and "
            "deploying applications to Linux VPS and cloud environments. Known for dependable delivery, collaborative "
            "problem-solving, and a practical focus on performance, security, and user experience.",
            styles["body"],
        ),
        Paragraph("Core Skills", styles["section"]),
    ]

    skill_rows = [
        [Paragraph("Backend", styles["skill_label"]), Paragraph("PHP, Laravel, REST APIs, OOP, MySQL, database design", styles["skill_text"])],
        [Paragraph("CMS & Commerce", styles["skill_label"]), Paragraph("WordPress, custom themes and plugins, WooCommerce, payment gateways", styles["skill_text"])],
        [Paragraph("Frontend", styles["skill_label"]), Paragraph("JavaScript, HTML5, CSS3, jQuery, responsive and mobile-first development", styles["skill_text"])],
        [Paragraph("DevOps & Tools", styles["skill_label"]), Paragraph("Git, Linux VPS, Google Cloud, DNS, SSL, cPanel/WHM, server deployment", styles["skill_text"])],
        [Paragraph("Practices", styles["skill_label"]), Paragraph("Requirements analysis, code reviews, debugging, web security, performance optimization", styles["skill_text"])],
    ]
    skills = Table(skill_rows, colWidths=[34 * mm, 136 * mm], hAlign="LEFT")
    skills.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 3),
        ("TOPPADDING", (0, 0), (-1, -1), 1.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ]))
    story.extend([skills, Paragraph("Professional Experience", styles["section"])])

    story.append(role(
        "Laravel Developer", "Catalyic Technology | Lahore", "Dec 2022 - Present",
        [
            "Translate client requirements into technical specifications and maintainable Laravel features across web and e-commerce projects.",
            "Integrate payment gateways and third-party services, validating secure data flows and reliable application behavior.",
            "Diagnose complex defects, modernize legacy code, and build reusable components that shorten delivery cycles and improve stability.",
            "Collaborate with cross-functional teams through Git-based workflows, code reviews, feature integration, and release preparation.",
            "Configure and support Linux VPS environments, DNS, SSL, and basic Google Cloud services for production deployments.",
        ], styles,
    ))
    story.append(role(
        "PHP & WordPress Developer", "Techvengers | Lahore", "Aug 2020 - Nov 2022",
        [
            "Built and maintained responsive WordPress websites, custom themes, plugins, and PHP functionality aligned with client requirements.",
            "Delivered WooCommerce solutions and integrations supporting tailored online purchasing and operational workflows.",
            "Converted design files into responsive, mobile-first WordPress experiences with consistent cross-device behavior.",
            "Improved site speed, reliability, and security through plugin audits, caching, updates, and targeted code optimization.",
            "Migrated websites to WordPress while preserving content, data integrity, and core functionality.",
        ], styles,
    ))
    story.append(role(
        "SEO Specialist", "Uplift Pakistan | Lahore", "Apr 2019 - Jul 2020",
        [
            "Improved client search visibility through on-page optimization, metadata enhancements, content recommendations, and backlink development.",
            "Partnered with content teams to produce search-focused content designed to grow qualified organic traffic.",
        ], styles,
    ))
    story.extend([
        Paragraph("Education", styles["section"]),
        Table(
            [[Paragraph("Bachelor of Science in Computer Science", styles["role"]),
              Paragraph("Virtual University of Pakistan | Lahore", styles["date"])]],
            colWidths=[105 * mm, 65 * mm],
            style=TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]),
        ),
    ])

    doc.build(story)
    print(OUTPUT)


def build_portfolio():
    projects = [
        ("Design Matix", "https://designmatix.co.uk", "Custom WordPress development"),
        ("Design Matix Marketplace", "https://marketplace.designmatix.co.uk", "Laravel APIs"),
        ("Attenuator", "https://attenuator.designmatix.co.uk", "Laravel APIs"),
        ("Genset", "https://genset.designmatix.co.uk", "Laravel APIs"),
        ("The Yoga Tree", "https://theyogatree.ie", "WordPress plugin development"),
        ("Catalyic Technology", "https://catalyictechnology.com", "WordPress"),
        ("Mayfair EMS", "https://ems.mayfair.com.pk", "Laravel"),
        ("Nippon Paint Dost", "https://dost.nipponpaint.com.pk", "Laravel + APIs"),
        ("Complixcel", "https://complixcel.com", "Laravel"),
        ("FoxPhish", "https://foxphish.com", "Laravel"),
        ("Cornell AF", "https://cornellaf.com", "WordPress"),
        ("Exam Papers Practice", "https://www.exampaperspractice.co.uk", "WordPress"),
        ("Design Matix EMS", "https://ems.designmatix.co.uk", "Laravel APIs"),
        ("Trailer", "https://trailer.designmatix.co.uk", "Laravel APIs"),
        ("Datamatics Technologies", "https://datamaticstechnologies.com", "WordPress"),
        ("Ballachy", "https://ballachy.com", "WordPress"),
        ("ABSRS", "https://absrs.com", "WordPress"),
        ("Learn Quran Kids", "https://learnqurankids.com", "WordPress"),
        ("Premier Composites", "https://www.premiercomposites.co.uk", "WordPress"),
        ("Inspired Home Care", "https://www.inspiredhomecare.com", "WordPress"),
        ("Battery Guyz", "https://batteryguyz.com", "WordPress"),
    ]

    def portfolio_footer(canvas, doc):
        canvas.saveState()
        width, _ = A4
        canvas.setStrokeColor(LIGHT)
        canvas.setLineWidth(0.5)
        canvas.line(doc.leftMargin, 13 * mm, width - doc.rightMargin, 13 * mm)
        canvas.setFont(FONT, 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(doc.leftMargin, 8.5 * mm, "Malik Shahzaib | Selected Web Development Portfolio")
        canvas.drawRightString(width - doc.rightMargin, 8.5 * mm, f"Page {doc.page}")
        canvas.restoreState()

    doc = BaseDocTemplate(
        str(PORTFOLIO_OUTPUT), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=15 * mm, bottomMargin=19 * mm, title="Malik Shahzaib - Portfolio",
        author="Malik Shahzaib", subject="Selected Laravel and WordPress projects",
    )
    doc.addPageTemplates(PageTemplate(
        id="portfolio", frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="portfolio-main")],
        onPage=portfolio_footer,
    ))
    base = getSampleStyleSheet()
    title = ParagraphStyle("PortfolioTitle", parent=base["Title"], fontName=FONT_BOLD, fontSize=23,
                           leading=26, textColor=NAVY, alignment=TA_LEFT, spaceAfter=2)
    subtitle = ParagraphStyle("PortfolioSubtitle", parent=base["Normal"], fontName=FONT, fontSize=10.5,
                              leading=14, textColor=BLUE, spaceAfter=4)
    intro = ParagraphStyle("PortfolioIntro", parent=base["BodyText"], fontName=FONT, fontSize=8.8,
                           leading=12, textColor=TEXT, spaceAfter=7)
    project_name = ParagraphStyle("ProjectName", parent=base["Normal"], fontName=FONT_BOLD, fontSize=8.8,
                                  leading=10.5, textColor=NAVY, spaceAfter=1)
    project_url = ParagraphStyle("ProjectUrl", parent=base["Normal"], fontName=FONT, fontSize=7.4,
                                 leading=9, textColor=BLUE, spaceAfter=1)
    project_tech = ParagraphStyle("ProjectTech", parent=base["Normal"], fontName=FONT, fontSize=7.6,
                                  leading=9.2, textColor=MUTED)

    def project_card(index, project):
        name, url, technology = project
        display_url = url.replace("https://", "").rstrip("/")
        return [
            Paragraph(f"{index}. {name}", project_name),
            Paragraph(f'<link href="{url}" color="#1F6F8B">{display_url}</link>', project_url),
            Paragraph(technology, project_tech),
        ]

    left = projects[:11]
    right = projects[11:]
    rows = []
    for row_index in range(max(len(left), len(right))):
        left_card = project_card(row_index + 1, left[row_index]) if row_index < len(left) else []
        right_card = project_card(row_index + 12, right[row_index]) if row_index < len(right) else []
        rows.append([left_card, right_card])
    grid = Table(rows, colWidths=[84.5 * mm, 84.5 * mm], hAlign="LEFT")
    grid.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LINEBELOW", (0, 0), (-1, -2), 0.35, LIGHT),
        ("LINEAFTER", (0, 0), (0, -1), 0.35, LIGHT),
    ]))
    story = [
        Paragraph("SELECTED PORTFOLIO", title),
        Paragraph("Laravel, API, WordPress & WooCommerce Projects", subtitle),
        Paragraph(
            "A selection of production websites and web applications delivered across custom WordPress development, "
            "plugin work, Laravel platforms, and API integrations. Project links are clickable.", intro,
        ),
        HRFlowable(width="100%", thickness=1.2, color=BLUE, spaceBefore=0, spaceAfter=5),
        grid,
    ]
    doc.build(story)
    print(PORTFOLIO_OUTPUT)


def build_combined():
    writer = PdfWriter()
    for source in (OUTPUT, PORTFOLIO_OUTPUT):
        reader = PdfReader(str(source))
        for page in reader.pages:
            writer.add_page(page)
    writer.add_metadata({
        "/Title": "Malik Shahzaib - Resume and Portfolio",
        "/Author": "Malik Shahzaib",
        "/Subject": "PHP, Laravel and WordPress Developer Resume and Portfolio",
    })
    with COMBINED_OUTPUT.open("wb") as stream:
        writer.write(stream)
    print(COMBINED_OUTPUT)


if __name__ == "__main__":
    build()
    build_portfolio()
    build_combined()
