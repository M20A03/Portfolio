import { NextResponse } from "next/server";

// Comprehensive portfolio knowledge base for Mayank Raj Gupta
const PORTFOLIO_SYSTEM_PROMPT = `
You are Mayank AI, the authentic personal AI Assistant for Mayank Raj Gupta, representing him on his official developer portfolio (mayankraj.me).
Speak in first-person as Mayank's assistant ("Mayank is...", "He has built..."). Be genuine, articulate, grounded, and technically precise.

ABOUT MAYANK RAJ GUPTA:
- Role: Full-Stack & MERN Developer, Research Fellow & AI Systems Architect, BCA Scholar at Christ University, Bangalore (Class of 2025–2028).
- Academic Record: Scored 3.3 CGPA in his previous semester while simultaneously balancing intense research, building live mobile and web apps, and learning new stacks. Actively working hard to push his CGPA even higher this semester.
- Pivot: Bold and successful pivot from a Commerce background in high school to Computer Science, clearing the entrance for Christ University on his very first attempt.
- Location: Bangalore, Karnataka, India.
- Email: mayankrajgupta01@gmail.com | Phone: +91 9835139865
- GitHub: https://github.com/M20A03 | LinkedIn: https://www.linkedin.com/in/mayank-raj-gupta-159020396

CORE RESEARCH & BREAKTHROUGH PROJECTS UNDER DR. SMRUTI MA'AM:
1. University Hardware & Vision Prototype (College-Affiliated):
   - Mayank was inducted in mid-July into a college-affiliated research project under Dr. Smruti Ma'am that had been stalled for nearly 6 months at less than 10% progress.
   - Upon inspecting the physical setup, Mayank identified fundamental structural flaws in the model.
   - Entrusted by Dr. Smruti Ma'am to redesign it from scratch (even though no such model existed in the world to copy), he faced initial failure, extreme self-doubt, and spent hours calculating each measurement.
   - Over 15 grueling days alone, he re-engineered and iterated over 50 different component variations until he single-handedly built a functioning physical prototype.
   - That working model is with the team right now, actively being used to gather datasets for the software and computer vision pipeline.
2. Computer Vision & Deep Learning Pipeline:
   - Built custom architectures and training pipelines from scratch.
   - Overcame initial low accuracy (~30%) by curating, cleaning, and preprocessing a massive dataset of 50,000+ images, successfully elevating model accuracy to 81%.

COLLEGE INCUBATION CENTER STARTUP WORK:
- A startup from Christ University's Incubation Centre approached Mayank to build their website.
- Mayank evaluated their roadmap and proactively proposed building mobile apps as well.
- Overcoming earlier struggles with Android development, he rebuilt his architectural foundations and single-handedly completed 70% of both Android apps plus the full website in just one week!
- Two live Android apps + the web platform are scheduled for official launch this October. The startup founder was extremely impressed by his execution speed.

CAMPUS LEADERSHIP & PEER MENTORING:
- Teaching Full-Stack Java: When Dr. Smruti Ma'am requested help teaching full-stack Java with Eclipse and MySQL to the class, Mayank helped teach because he had mastered the stack beforehand.
- Teaching Python Lab: Taught the entire class how to bridge frontend (Streamlit) with backend (Flask) to build and deploy full applications.
- Go-to Class Helper: Known across his section as the first person anyone (friend or stranger) approaches for assignment help, coding doubts, and exam prep because he genuinely loves helping people.
- Computer Science Association (CSA) - Samagra: Single-handedly designed, built, and maintains the official departmental web portal (Samagra) centralizing academic resources and club activities.
- Flux Registration Engine: Developed the complete event registration and ticketing website for the department fest Flux (postponed to February).
- CAPS (Tech Tank): Formerly a technical volunteer; consciously stepped down to responsibly balance deep learning research under Dr. Smruti Ma'am and the Samagra portal.

TECHNICAL STACK (MERN & MORE):
- MERN Stack: MongoDB (Mongoose, aggregations, indexing), Express.js (RESTful APIs, JWT, middleware), React 19, Node.js.
- Modern Web: Next.js 15 (App Router, Server Components, SSR/SSG), TypeScript (strict mode), Tailwind CSS v4, Framer Motion, Radix UI / shadcn/ui.
- Languages: JavaScript (ES6+), TypeScript, Python (Flask, Streamlit, Pandas, NumPy, OpenCV, PyTorch), Java (Eclipse), C++, C.
- Databases: MongoDB, MySQL (advanced relational modeling), PostgreSQL (Supabase with pgvector), Firebase / Cloud Firestore.
- Mobile: Android Native App Development (Java/Kotlin, XML, Jetpack).
- AI & Agentic Tools: Claude API, Gemini API, OpenAI API, DeepSeek, YOLOv11 Computer Vision, AntiGravity AI.

FLAGSHIP SOFTWARE PROJECTS:
1. Credex: Real-time Indian Rupee (₹) SaaS financial spend auditor powered by Claude API with Lakh/Crore localization and spring-physics charts.
2. GMT Mart: High-performance e-commerce storefront with neon cyberpunk aesthetics and Firebase serverless backend.
3. Samagra: Official portal for the Computer Science Association at Christ University.
4. Incubation Startup Apps: Two live Android apps + web platform launching in October 2026.

RECRUITER & PLACEMENT FAQs:
- Availability: Open for Software Engineering & Full-Stack / MERN Internships, Junior Developer roles, and selective freelance contracts.
- Location: Available onsite in Bangalore or remotely worldwide.
- Work Ethic: "I love to do things that others think are impossible. When code or hardware fails 50 times, I don't give up—I debug, adapt, and build until it succeeds."
- Resume: Downloadable on /resume.

STYLE & TONE:
- Be warm, confident, and humble.
- Format responses with clean Markdown: bullet points, bold key highlights, and natural paragraphs.
- Provide direct suggestions for related questions.
`;

interface Intent {
  category: string;
  keywords: string[];
  reply: string;
  suggestions: string[];
}

const SEMANTIC_INTENTS: Intent[] = [
  {
    category: "smruti_research",
    keywords: ["smruti", "dr smruti", "mam", "research", "hardware", "prototype", "computer vision", "50 times", "50000", "50,000", "images", "mid-july", "mid july", "measurements", "iteration", "dataset"],
    reply: "Mayank works closely with **Dr. Smruti Ma'am** on university-affiliated research in the Department of Computer Science:\n\n• **Hardware & Vision Prototype:** In mid-July, Mayank joined a project that had been stalled for 6 months at <10% output. He identified fundamental structural flaws in the model. Entrusted by Dr. Smruti Ma'am to redesign it from scratch—with no existing model in the world to reference—he iterated through **over 50 component redesigns across 15 grueling days alone** until it worked. That working model is with the team right now, actively collecting datasets for the software/vision pipeline!\n• **Computer Vision Pipeline:** Built custom deep learning pipelines from scratch, overcoming an initial 30% accuracy by curating and preprocessing **50,000+ images**, pushing accuracy to **81%**.",
    suggestions: ["Tell me about Incubation Startup", "Teaching Experience", "MERN Stack Details", "View Resume"]
  },
  {
    category: "incubation_startup",
    keywords: ["incubation", "startup", "android", "apps", "mobile app", "october", "founder", "client", "play store", "2 apps", "app development"],
    reply: "Mayank was approached by a startup from **Christ University's Incubation Centre** to build their digital platform:\n\n• **Strategic Pivot:** While they initially asked for just a website, Mayank evaluated their vision and proposed building their mobile applications as well.\n• **Rapid Execution:** Overcoming earlier struggles with Android development, he rebuilt his architectural foundations and **single-handedly completed 70% of both Android apps plus their full website in just one week**!\n• **Launch:** Both live Android apps and the web platform are scheduled for official launch this **October**. The startup founder was extremely impressed with his turnaround velocity.",
    suggestions: ["Dr. Smruti Research", "Credex Architecture", "MERN Stack Skills", "Contact Mayank"]
  },
  {
    category: "teaching_peer_help",
    keywords: ["teach", "teaching", "classmates", "java", "eclipse", "flask", "streamlit", "help", "assignment", "exam help", "peers", "friends", "class"],
    reply: "Mayank is known across his section as the **go-to person for academic and coding help**:\n\n• **Teaching Full-Stack Java:** When Dr. Smruti Ma'am asked for help teaching Java full-stack with Eclipse and MySQL to the class, Mayank helped guide the class because he had mastered the stack beforehand.\n• **Python Lab Leadership:** Taught the entire class how to bridge frontend **Streamlit** with backend **Flask** to build and deploy interactive apps.\n• **Peer Mentorship:** Whether someone is a close friend or a stranger, Mayank always takes out time to debug classmates' code, explain assignment concepts, and share study materials.",
    suggestions: ["Samagra Department Portal", "Research with Dr. Smruti", "Academic CGPA", "Contact Mayank"]
  },
  {
    category: "samagra",
    keywords: ["samagra", "csa", "department portal", "association", "portal", "cs department"],
    reply: "Mayank is a core technical volunteer for the **Computer Science Association (CSA)** at Christ University:\n\n• **Built from Scratch:** He single-handedly designed, built, and maintains **Samagra**, the official departmental web portal.\n• **Features:** Centralizes academic resources, faculty details, 6 student clubs, and committee showcases.\n• **Stability:** The platform is already live and running smoothly, serving hundreds of students across the department.",
    suggestions: ["Flux Event", "Dr. Smruti Research", "MERN Stack Experience", "View Resume"]
  },
  {
    category: "flux",
    keywords: ["flux", "fest", "event", "postponed", "february", "ticket", "registration portal"],
    reply: "For the departmental fest **Flux**, Mayank took the initiative to build the entire **online event registration and ticketing system single-handedly**.\n\n• The portal was built and fully tested with live verification workflows.\n• The departmental event was subsequently **postponed to February**, where the platform will be used for registrations.",
    suggestions: ["Samagra Portal", "Incubation Startup Apps", "Tech Stack", "Contact Mayank"]
  },
  {
    category: "caps",
    keywords: ["caps", "tech tank", "club", "volunteer", "stepped down", "left"],
    reply: "Mayank was previously a technical volunteer with **CAPS in Tech Tank** at Christ University.\n\nHe made the responsible decision to step down from CAPS so he could dedicate his full focus to his deep learning research under Dr. Smruti Ma'am and the engineering of the Samagra departmental portal.",
    suggestions: ["Dr. Smruti Research", "Samagra Portal", "View Resume", "Contact Mayank"]
  },
  {
    category: "cgpa",
    keywords: ["cgpa", "grade", "marks", "gpa", "score", "3.3", "academics", "percentage", "studies"],
    reply: "Mayank scored a **3.3 CGPA** in his previous semester at Christ University.\n\nHe achieved this while balancing intensive laboratory research with Dr. Smruti Ma'am, building live Android apps for an incubation startup, developing Samagra, and shipping 18+ real-world projects. He is actively working hard to push his academic score even higher this semester!",
    suggestions: ["Pivot from Commerce", "Dr. Smruti Research", "Projects Overview", "Contact Mayank"]
  },
  {
    category: "mern_stack",
    keywords: ["mern", "stack", "mongodb", "express", "node", "react", "fullstack", "full stack", "backend", "frontend", "javascript", "typescript"],
    reply: "Mayank is a **MERN Stack Specialist** proficient in **MongoDB, Express.js, React 19, and Node.js**, combined with **Next.js 15** and **TypeScript**:\n\n• **Frontend:** React 19, Next.js App Router, Tailwind CSS v4, Framer Motion, and shadcn/ui.\n• **Backend:** Node.js, Express RESTful APIs, JWT Auth, and Serverless Edge Functions.\n• **Databases:** MongoDB (Mongoose), MySQL (relational schemas), PostgreSQL (Supabase with pgvector), and Firebase.\n• **Workflow:** Strict TypeScript, automated testing, and CI/CD pipelines.",
    suggestions: ["Credex Architecture", "Incubation Startup", "Dr. Smruti Research", "View Resume"]
  },
  {
    category: "projects",
    keywords: ["project", "projects", "credex", "gmt", "samagra", "flux", "roshan", "yolo", "work", "portfolio", "built", "showcase", "case study"],
    reply: "Mayank has built and deployed **18+ production case studies**, including:\n\n1. **Incubation Center Startup:** 2 live Android apps + website launching in October.\n2. **Dr. Smruti Research Prototype:** Custom hardware setup + computer vision pipeline.\n3. **Credex:** AI-driven financial spend auditor built with Claude API, Indian Rupee (₹) Lakh/Crore formatting, and spring charts.\n4. **Samagra:** Official web portal for the Computer Science Association at Christ University.\n5. **GMT Mart:** High-speed e-commerce storefront with neon cyberpunk aesthetics and Firebase serverless backend.\n\nExplore them in the **[Projects Section](#projects)**!",
    suggestions: ["Tell me about Credex", "Incubation Startup Apps", "Dr. Smruti Research", "View Resume"]
  },
  {
    category: "credex",
    keywords: ["credex", "fintech", "rupee", "finance", "spend", "audit", "lakh", "crore"],
    reply: "**Credex** is Mayank's flagship financial intelligence SaaS platform tailored for the Indian market:\n\n• **Core Engine:** Built on Next.js, React 19, and TypeScript with real-time Claude API integration for automated spend classification.\n• **Indian Localization:** Currency parsing supporting Rupee (₹), Lakhs (L), and Crores (Cr).\n• **UI/UX:** Interactive spring-physics charts, responsive dashboards, and zero-latency state updates.\n\nCheck out the full case study in the **[Projects Section](#projects)**!",
    suggestions: ["Incubation Startup Apps", "MERN Stack Details", "View Resume", "Contact Mayank"]
  },
  {
    category: "christ_university",
    keywords: ["christ", "university", "college", "bca", "campus", "bangalore"],
    reply: "Mayank is pursuing his **Bachelor of Computer Applications (BCA)** at **Christ University, Bangalore** (Class of 2025–2028):\n\n• He is an active student leader, having built **Samagra** for the department and the **Flux** event registration system.\n• Conducts research under Dr. Smruti Ma'am in computer vision and hardware modeling.\n• Helps classmates in Java and Python labs and balances hands-on engineering with coursework in Marketing and Investment Trading.",
    suggestions: ["Pivot from Commerce", "Dr. Smruti Research", "Teaching Experience", "Contact Mayank"]
  },
  {
    category: "pivot",
    keywords: ["pivot", "commerce", "switch", "background", "story", "origin", "non-cs", "non cs", "first attempt"],
    reply: "Mayank made a bold and successful **pivot from a Commerce background in high school to Computer Science**, clearing Christ University's BCA entrance on his **very first attempt**!\n\nThis gives him a distinct advantage over traditional engineers: he doesn't just write code; he understands unit economics, startup business models, customer conversion, and product strategy.",
    suggestions: ["Academic CGPA", "Dr. Smruti Research", "View Projects", "Contact Mayank"]
  },
  {
    category: "hire_me",
    keywords: ["hire", "job", "offer", "recruiting", "recruiter", "interview", "salary", "internship", "opportunity", "availability", "available", "full time", "part time", "contract"],
    reply: "Mayank is **actively open for Software Engineering / MERN Internships, Junior Developer roles, and selective Freelance projects**!\n\n• **Location:** Available onsite in Bangalore or remotely worldwide.\n• **Key Differentiator:** Extreme problem-solving grit (iterating 50+ times to solve stalled research problems), fast shipping speed (70% of 2 apps built in 1 week), and clean TypeScript code.\n• **Contact:** Email directly at **mayankrajgupta01@gmail.com** or call **+91 9835139865**!",
    suggestions: ["Download Resume", "Email Mayank", "View Projects", "Dr. Smruti Research"]
  },
  {
    category: "contact",
    keywords: ["contact", "email", "phone", "call", "reach", "message", "whatsapp", "linkedin", "github", "address", "location"],
    reply: "You can reach Mayank directly via:\n\n• **Email:** [mayankrajgupta01@gmail.com](mailto:mayankrajgupta01@gmail.com)\n• **Phone:** [+91 9835139865](tel:+919835139865)\n• **LinkedIn:** [linkedin.com/in/mayank-raj-gupta](https://www.linkedin.com/in/mayank-raj-gupta-159020396)\n• **GitHub:** [github.com/M20A03](https://github.com/M20A03)\n• **Location:** Bangalore, Karnataka, India\n\nYou can also use the contact form at the bottom of the page!",
    suggestions: ["Send Email", "View Resume", "Check Projects", "MERN Skills"]
  },
  {
    category: "resume",
    keywords: ["resume", "cv", "curriculum", "pdf", "download", "summary"],
    reply: "You can view and download Mayank's complete recruiter-optimized resume directly on the **[/resume](/resume)** page.\n\nIt features comprehensive breakdowns of his education at Christ University, research with Dr. Smruti Ma'am, internships at Singularium and ShadowFox, and 18+ deployed projects.",
    suggestions: ["Open Resume Page", "Contact Mayank", "Projects Overview", "MERN Skills"]
  },
  {
    category: "greetings",
    keywords: ["hi", "hello", "hey", "namaste", "greetings", "good morning", "good afternoon", "good evening", "sup", "yo"],
    reply: "Namaste! I am **Mayank AI**, the interactive digital assistant for Mayank Raj Gupta.\n\nI can tell you all about his **research under Dr. Smruti Ma'am, his 2 upcoming Android apps for a campus startup, Samagra, MERN stack expertise, or how to get in touch for hiring and collaborations**. What would you like to explore?",
    suggestions: ["Dr. Smruti Research", "Incubation Startup Apps", "MERN Stack Skills", "How to Hire Mayank"]
  }
];

// Fallback response synthesizer for open-ended queries
function synthesizeLocalResponse(userMessage: string): { reply: string; suggestions: string[] } {
  const normalized = userMessage.toLowerCase().trim();
  const words = normalized.split(/[^a-z0-9]+/i).filter(Boolean);
  const wordSet = new Set(words);

  let bestIntent: Intent | null = null;
  let highestScore = 0;

  for (const intent of SEMANTIC_INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (kw.includes(" ")) {
        if (normalized.includes(kw)) score += 6;
      } else if (kw.length <= 3) {
        if (wordSet.has(kw)) score += 4;
      } else {
        if (wordSet.has(kw)) {
          score += 4;
        } else if (normalized.includes(kw)) {
          score += 2;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && highestScore >= 2) {
    return {
      reply: bestIntent.reply,
      suggestions: bestIntent.suggestions
    };
  }

  // Contextual synthesis referencing Mayank's actual achievements
  return {
    reply: `That's an interesting question regarding **"${userMessage}"**!\n\nAs Mayank's portfolio assistant, I can share that Mayank is a **Full-Stack MERN Developer and BCA Scholar at Christ University (Bangalore)** known for his relentless problem-solving grit. Whether it's redesigning custom hardware prototypes through 50+ iterations under Dr. Smruti Ma'am, single-handedly developing 2 live Android apps for a college incubation startup, or building the *Samagra* portal, he thrives on tackling challenges that others consider difficult.\n\nWould you like to explore his research, check out his mobile and web projects, or connect with him directly?`,
    suggestions: [
      "Dr. Smruti Research",
      "Incubation Startup Apps",
      "MERN Stack Skills",
      "Contact Mayank"
    ]
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body?.message?.trim();
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // If Gemini API Key is available, invoke the official Gemini REST endpoint
    if (geminiKey) {
      try {
        const formattedContents = [
          ...history.slice(-6).map((h: { role: string; text: string }) => ({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }]
          })),
          {
            role: "user",
            parts: [{ text: message }]
          }
        ];

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;

        const res = await fetch(geminiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": geminiKey,
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: PORTFOLIO_SYSTEM_PROMPT }]
            },
            contents: formattedContents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600,
            }
          }),
          signal: AbortSignal.timeout(8000), // 8s timeout protection
        });

        if (res.ok) {
          const data = await res.json();
          const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (generatedText) {
            return NextResponse.json({
              reply: generatedText,
              suggestions: [
                "Dr. Smruti Research",
                "Incubation Startup Apps",
                "MERN Stack Arsenal",
                "Contact Mayank"
              ],
              source: "gemini"
            });
          }
        }
      } catch (geminiError) {
        console.warn("Gemini API call failed, falling back to semantic engine:", geminiError);
      }
    }

    // High-precision semantic engine fallback
    const fallbackData = synthesizeLocalResponse(message);
    return NextResponse.json({
      reply: fallbackData.reply,
      suggestions: fallbackData.suggestions,
      source: "semantic_engine"
    });

  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json(
      {
        reply: "I am ready to help! You can ask me about Mayank's research under Dr. Smruti Ma'am, his 2 upcoming Android apps for a campus startup, or reach out to him directly at mayankrajgupta01@gmail.com.",
        suggestions: ["Dr. Smruti Research", "Incubation Startup Apps", "MERN Stack", "Contact Info"],
        source: "fallback"
      },
      { status: 200 }
    );
  }
}
