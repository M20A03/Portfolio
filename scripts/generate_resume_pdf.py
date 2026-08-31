from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "RESUME_Mayank Raj Gupta.pdf"
OUTPUT_STANDARDIZED = ROOT / "public" / "resume.pdf"

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="ResumeTitle",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=22,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=2,
        alignment=TA_LEFT,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSubtitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor("#2563eb"),
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeBody",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=10.4,
        textColor=colors.HexColor("#334155"),
        spaceAfter=1.5,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSection",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=11.5,
        textColor=colors.HexColor("#0f172a"),
        spaceBefore=4.5,
        spaceAfter=2.5,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeSmall",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=7.8,
        leading=9.5,
        textColor=colors.HexColor("#475569"),
    )
)

story = []
story.append(Paragraph("Mayank Raj Gupta", styles["ResumeTitle"]))
story.append(Paragraph("Full-Stack Developer & AI Specialist | BCA Scholar @ Christ University, Bangalore", styles["ResumeSubtitle"]))

contact = [
    ["mayankraj.gupta@bcah.christuniversity.in", "+91 9835139865", "Bangalore, India"],
    ["Portfolio: mayankraj.me", "GitHub: github.com/M20A03", "LinkedIn: linkedin.com/in/mayank-raj-gupta-159020396"],
]
contact_table = Table(contact, colWidths=[2.6 * inch, 2.3 * inch, 2.5 * inch])
contact_table.setStyle(
    TableStyle(
        [
            ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
            ("FONTSIZE", (0, 0), (-1, -1), 8),
            ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#475569")),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ]
    )
)
story.append(contact_table)
story.append(Spacer(1, 0.04 * inch))

# Professional Summary
summary = (
    "BCA student at Christ University with hands-on experience building modern full-stack web applications and Computer Vision pipelines. "
    "Proficient in React, Next.js, TypeScript, Python (YOLO11, OpenCV), and Firebase, with solid foundations in Data Structures & Algorithms "
    "and UI/UX design. Creator of multiple deployed production web portals and active national hackathon participant. "
    "Seeking a Software Engineering / AI Internship to apply full-stack problem solving and deliver user-focused product impact."
)
story.append(Paragraph("PROFESSIONAL SUMMARY", styles["ResumeSection"]))
story.append(Paragraph(summary, styles["ResumeBody"]))

# Education
story.append(Paragraph("EDUCATION", styles["ResumeSection"]))
edu_rows = [
    [
        Paragraph("<b>Bachelor of Computer Applications (BCA)</b><br/>Christ (Deemed to be University), Bangalore (2025 — 2029)", styles["ResumeBody"]),
        Paragraph("<b>3.33 / 4.0 CGPA</b> (2nd Semester)<br/><font color='#2563eb'>Coursework: DSA, OOP, DBMS, Web Architecture</font>", styles["ResumeBody"]),
    ],
    [
        Paragraph("<b>Class XII (CBSE) — Senior Secondary</b><br/>Rajkamal Saraswati Vidya Mandir, Dhanbad, Jharkhand (2023)", styles["ResumeBody"]),
        Paragraph("<b>76.0%</b>", styles["ResumeBody"]),
    ],
]
edu_table = Table(edu_rows, colWidths=[4.9 * inch, 2.5 * inch])
edu_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f8fafc")),
            ("LEFTPADDING", (0, 0), (-1, -1), 5),
            ("RIGHTPADDING", (0, 0), (-1, -1), 5),
            ("TOPPADDING", (0, 0), (-1, -1), 3),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ]
    )
)
story.append(edu_table)

# Technical Projects (Including YOLO11 Project!)
story.append(Paragraph("TECHNICAL PROJECTS", styles["ResumeSection"]))
projects = [
    (
        "Automated License Plate Recognition (ALPR) — YOLO11 & Computer Vision",
        "Python, YOLO11, OpenCV, CRNN OCR, Streamlit",
        "GitHub: github.com/M20A03/License-Plate-Detection",
        [
            "Developed an end-to-end automated license plate detection system using YOLO11 for real-time vehicle plate localization.",
            "Implemented an OpenCV image preprocessing pipeline (grayscale, adaptive thresholding) and OCR for character recognition.",
            "Built and deployed an interactive Streamlit web dashboard capable of processing uploaded images and live video streams.",
        ],
    ),
    (
        "Wholesale & Retail E-Commerce Website (Roshan Enterprises)",
        "React (Vite), Firebase Auth/Firestore, Context API, Lucide",
        "Live Demo: https://e-commerce-roshan-enterprises-dhn.web.app/",
        [
            "Engineered a production-ready commerce website supporting bulk wholesale ordering and retail consumer purchases.",
            "Built dynamic catalog filtering, interactive cart management, and seamless order history tracking.",
            "Enforced mobile-first responsive layouts, 16px iOS input zoom protection, and WCAG 2.1 AA accessibility checks.",
        ],
    ),
    (
        "DSA Search Algorithm Visualizer & Space Explorer",
        "JavaScript, HTML5, CSS3, AI Integration, WebAudio API",
        "Live Demo: https://linear-and-binary-search.web.app/",
        [
            "Built 5+ step-by-step visual simulations for Linear and Binary search algorithms with dynamic visual pointer highlights.",
            "Integrated 'Star-Command AI', an intelligent conversational assistant to guide students through algorithm logic.",
            "Synthesized interactive audio frequencies for each comparison step to enhance educational comprehension.",
        ],
    ),
    (
        "MRG App: Next-Gen B2B2C Marketplace",
        "React, Next.js, Node.js, Firebase Auth & Firestore",
        "Live Demo: https://mrg-idea.web.app/",
        [
            "Developing a marketplace platform connecting wholesalers, retailers, and customers with real-time inventory management.",
            "Designed a modern, responsive UI with glassmorphism aesthetics and performance-first component architecture.",
        ],
    ),
]

for title, tech, demo, bullets in projects:
    story.append(Paragraph(f"<b>{title}</b> — <font color='#2563eb'>{demo}</font>", styles["ResumeBody"]))
    story.append(Paragraph(f"<font name='Helvetica-Oblique' color='#475569'>{tech}</font>", styles["ResumeSmall"]))
    for bullet in bullets:
        story.append(Paragraph(f"• {bullet}", styles["ResumeBody"]))
    story.append(Spacer(1, 0.02 * inch))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", styles["ResumeSection"]))
skills = [
    ("Programming Languages", "Python (NumPy, Pandas), C, C++, JavaScript (ES6+), TypeScript, SQL"),
    ("AI, ML & Vision", "YOLO11, OpenCV, Computer Vision, CRNN OCR, AI Prompt Engineering, Streamlit"),
    ("Frontend Frameworks", "React 19, Next.js 15, Angular, Tailwind CSS, Framer Motion, HTML5, CSS3"),
    ("Backend & Databases", "Node.js, Express.js, Firebase (Auth & Firestore), Python Flask, MySQL"),
    ("Developer Tools & Cloud", "Git, GitHub, Vercel, VS Code, Figma, Vite, Linux/Bash, Postman"),
]
skill_rows = [[Paragraph(f"<b>{cat}</b>", styles["ResumeBody"]), Paragraph(val, styles["ResumeBody"])] for cat, val in skills]
skill_table = Table(skill_rows, colWidths=[1.65 * inch, 5.75 * inch])
skill_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e1")),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f8fafc")),
            ("LEFTPADDING", (0, 0), (-1, -1), 4),
            ("RIGHTPADDING", (0, 0), (-1, -1), 4),
            ("TOPPADDING", (0, 0), (-1, -1), 2),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]
    )
)
story.append(skill_table)

# Hackathons & Certifications
story.append(Paragraph("HACKATHONS & CERTIFICATIONS", styles["ResumeSection"]))
certs = [
    [
        Paragraph("• <b>InHack - Hackathon (Media Meet 2026)</b> — CHRIST University", styles["ResumeBody"]),
        Paragraph("• <b>CODEX'26 National AI Hackathon</b> — Don Bosco College", styles["ResumeBody"]),
    ],
    [
        Paragraph("• <b>YUGASTR IT FEST Hackathon (2026)</b> — Ramaiah College", styles["ResumeBody"]),
        Paragraph("• <b>HACKNOVA Game Jam (2026)</b> — CHRIST University", styles["ResumeBody"]),
    ],
    [
        Paragraph("• <b>AI Prompt Engineering Masterclass</b> — Microsoft & Reliance", styles["ResumeBody"]),
        Paragraph("• <b>C & HTML5 Certified</b> — Infosys Springboard", styles["ResumeBody"]),
    ],
]
cert_table = Table(certs, colWidths=[3.7 * inch, 3.7 * inch])
cert_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
        ]
    )
)
story.append(cert_table)

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=0.35 * inch,
    leftMargin=0.35 * inch,
    topMargin=0.32 * inch,
    bottomMargin=0.32 * inch,
)

doc.build(story)

shutil.copy(OUTPUT, OUTPUT_STANDARDIZED)
print(f"Generated 1-page {OUTPUT} and {OUTPUT_STANDARDIZED}")
