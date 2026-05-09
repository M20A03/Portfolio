from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "RESUME_Mayank Raj Gupta.pdf"

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="ResumeTitle",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=24,
        leading=28,
        textColor=colors.HexColor("#111827"),
        spaceAfter=8,
        alignment=TA_LEFT,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSubtitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=14,
        textColor=colors.HexColor("#2563eb"),
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeBody",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=9.3,
        leading=12,
        textColor=colors.HexColor("#374151"),
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSection",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=14,
        textColor=colors.HexColor("#111827"),
        spaceBefore=8,
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSmall",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.4,
        leading=10.2,
        textColor=colors.HexColor("#4b5563"),
    )
)

story = []
story.append(Paragraph("Mayank Raj Gupta", styles["ResumeTitle"]))
story.append(Paragraph("Full-Stack Developer | BCA @ Christ University", styles["ResumeSubtitle"]))
contact = [
    ["mayankrajgupta01@gmail.com", "+91 9835139865", "Bangalore, India"],
    ["github.com/M20A03", "linkedin.com/in/mayank-raj-gupta-159020396", "mayankraj.me"],
]
contact_table = Table(contact, colWidths=[2.2 * inch, 2.4 * inch, 1.7 * inch])
contact_table.setStyle(
    TableStyle(
        [
            ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
            ("FONTSIZE", (0, 0), (-1, -1), 8.6),
            ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#4b5563")),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
        ]
    )
)
story.append(contact_table)
story.append(Spacer(1, 0.14 * inch))

summary = (
    "Highly motivated Bachelor of Computer Applications (BCA) student at Christ University with a focus on building fast, "
    "accessible, and conversion-ready web experiences. Expertise in React, Next.js, TypeScript, and Python, with a strong "
    "foundation in DSA, UI/UX, and AI-assisted workflows. Proven ability to deliver deployed projects with live demos, strong "
    "visual quality, and practical user flows. Eager to contribute to a product team through an internship or freelance role."
)
story.append(Paragraph("Professional Summary", styles["ResumeSection"]))
story.append(Paragraph(summary, styles["ResumeBody"]))

story.append(Paragraph("Education", styles["ResumeSection"]))
edu_rows = [
    [
        Paragraph("<b>Bachelor of Computer Applications (BCA)</b><br/>Christ University, Bangalore<br/>2025 — 2028", styles["ResumeBody"]),
        Paragraph("3.33 / 4.0 CGPA (2nd Semester)<br/><font color='#2563eb'>Core focus on Software Engineering & Data Structures</font>", styles["ResumeBody"]),
    ],
    [
        Paragraph("<b>Class XII (CBSE) - Commerce</b><br/>Rajkamal Swarswati Vidya Mandir, Dhanbad<br/>2023 — 2025", styles["ResumeBody"]),
        Paragraph("76%", styles["ResumeBody"]),
    ],
]
edu_table = Table(edu_rows, colWidths=[4.4 * inch, 2.5 * inch])
edu_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#d1d5db")),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e5e7eb")),
            ("BACKGROUND", (0, 0), (-1, -1), colors.whitesmoke),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ("TOPPADDING", (0, 0), (-1, -1), 6),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ]
    )
)
story.append(edu_table)

story.append(Paragraph("Technical Projects", styles["ResumeSection"]))
projects = [
    (
        "MRG App: Next-Gen B2B2C Marketplace",
        "Jan 2026 - Present",
        "React, Next.js, Node.js, Firebase",
        [
            "Developing a scalable marketplace connecting wholesalers, retailers, and customers (Zepto/Blinkit model).",
            "Implementing role-based flows, real-time inventory sync, and product discovery screens.",
            "Designed a premium UI/UX system focused on clarity, trust, and performance.",
        ],
    ),
    (
        "DSA Search Algorithm Visualizer & AI Assistant",
        "Feb 2026",
        "JavaScript, HTML5, CSS3, AI Integration",
        [
            "Built 5+ visual simulations for Linear and Binary search with step-by-step animations.",
            "Integrated 'Star-Command AI' to explain algorithmic concepts with guided prompts.",
            "Optimized rendering logic for smooth, interactive learning experiences.",
        ],
    ),
    (
        "Wholesale & Retail E-Commerce Platform",
        "Jan 2026",
        "React (Vite), Firebase, Context API, Lucide",
        [
            "Full-stack platform for Roshan Enterprises supporting bulk and retail purchases.",
            "Features secure checkout, product browsing, and a polished mobile-friendly shopping flow.",
            "Delivered a live demo with performance-focused UI and responsive layouts.",
        ],
    ),
]
for title, date, tech, bullets in projects:
    story.append(Paragraph(f"<b>{title}</b> <font color='#6b7280'>| {date}</font>", styles["ResumeBody"]))
    story.append(Paragraph(f"<font name='Helvetica-Oblique' color='#2563eb'>{tech}</font>", styles["ResumeSmall"]))
    bullet_paras = [Paragraph(f"• {bullet}", styles["ResumeBody"]) for bullet in bullets]
    for bullet in bullet_paras:
        story.append(bullet)
    story.append(Spacer(1, 0.04 * inch))

story.append(Paragraph("Technical Skills", styles["ResumeSection"]))
skills = [
    ("Languages", "C, C++, Python (Pandas/NumPy), JavaScript (ES6+), TypeScript"),
    ("Frontend", "React, Next.js, Angular, Tailwind CSS, Framer Motion"),
    ("Backend & Cloud", "Node.js, Firebase (Auth/Firestore), Python Flask"),
    ("Database", "MySQL, Firestore"),
    ("Developer Tools", "Git, GitHub, Vercel, VS Code, Figma"),
    ("Other", "AI Prompt Engineering, DSA, UI/UX Design"),
]
skill_rows = [[Paragraph(f"<b>{cat}</b>", styles["ResumeBody"]), Paragraph(val, styles["ResumeBody"])] for cat, val in skills]
skill_table = Table(skill_rows, colWidths=[1.35 * inch, 5.55 * inch])
skill_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#d1d5db")),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e5e7eb")),
            ("BACKGROUND", (0, 0), (-1, -1), colors.whitesmoke),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ]
    )
)
story.append(skill_table)

story.append(Paragraph("Achievements & Credentials", styles["ResumeSection"]))
achievements = [
    "YUGASTR IT FEST Hackathon (2026)",
    "HACKNOVA Game Jam Participant - CHRIST University (2026)",
    "Microsoft AI Prompt Engineering Masterclass",
    "Infosys C & HTML5 Programming Certified",
    "Leadership Skill Development - Christ University",
    "Samsung Co-pilot Workshop Attendee",
]
for item in achievements:
    story.append(Paragraph(f"• {item}", styles["ResumeBody"]))

story.append(Spacer(1, 0.12 * inch))
story.append(Paragraph("Portfolio: mayankraj.me | Live demos available for selected projects", styles["ResumeSmall"]))

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=0.55 * inch,
    leftMargin=0.55 * inch,
    topMargin=0.55 * inch,
    bottomMargin=0.5 * inch,
)

doc.build(story)
print(f"Wrote {OUTPUT}")
