export const projects = [
  {
    id: "vapi-voice-agent",
    title: "Voice-Based Customer Support Agent",
    shortDescription: "AI voice and chat support agent that answers questions and books calls automatically.",
    tools: ["VAPI", "n8n", "Airtable", "Google Calendar", "Claude Code", "Telegram", "UseBouncer"],
    thumbnail: "/images/vapi.png",
    images: ["/images/vapi.png"],
    problem: "RelayPay's support team was spending significant time answering repetitive questions about onboarding, pricing, payout timelines, failed transactions, and compliance. While most of these questions were well-documented, responding to them manually was inefficient. For issues requiring human support, scheduling calls involved lengthy back-and-forth emails with no structured way to collect details or check availability.",
    solution: "I built a branded voice and chat support agent using VAPI, n8n, and a custom React portal. Customers enter their email upon visiting the portal — new users are validated automatically, while returning customers have their history and upcoming appointments loaded instantly. The agent answers questions using approved company documentation and intelligently escalates complex issues by checking real-time Google Calendar availability, presenting options, and booking appointments. It prevents duplicate bookings, supports rescheduling, and logs every interaction with sentiment analysis, outcome, summary, transcript, and recording URL directly into Airtable. The support team gets a live dashboard for visibility into all escalations and trends.",
    result: "First-line support is now completely automated. Customers get instant answers to common questions, and scheduling a call is reduced from multiple emails to a seamless flow that finishes in under two minutes. Duplicate bookings and invalid emails are eliminated, and the support team now focuses exclusively on complex cases requiring human judgment. Every interaction is properly tracked, giving the team valuable insights they never had before."
  },
  {
    id: "proposal-generator",
    title: "AI-Powered Proposal Automation System",
    shortDescription: "Turns discovery call data into a reviewed, client-ready proposal with no manual drafting.",
    tools: ["n8n", "OpenAI", "Airtable", "Gmail", "Google Docs"],
    thumbnail: "/images/proposal.png",
    images: ["/images/proposal.png"],
    problem: "Proposal creation was manual, repetitive, and inconsistent. Salespeople had to translate raw discovery call notes into formatted documents, copy templates, fill in client details, and chase stakeholders for approvals — a slow, error-prone process that was impossible to scale.",
    solution: "I designed a structured three-stage workflow (drafting, approval routing, and revisions) that fully automates proposal creation. GPT validates inputs and generates tailored proposal content using company templates while flagging uncertain areas for review. Reviewers can approve, reject, or request changes directly from their email. A smart revision engine uses the original notes, previous draft, and reviewer feedback to make precise updates. The system also includes hash-based deduplication and robust error handling with clear notifications.",
    result: "Manual drafting has been completely eliminated. Proposals are now produced faster, with consistent quality and proper oversight, allowing the sales team to focus on closing deals instead of formatting documents."
  },
  {
    id: "fetemi-content",
    title: "AI-Powered Content Generation & Publishing System",
    shortDescription: "End-to-end content pipeline from idea submission to scheduled publishing across three platforms.",
    tools: ["n8n", "Airtable", "OpenAI", "Firecrawl", "React/Vite"],
    thumbnail: "/images/fetemi.png",
    images: ["/images/fetemi.png"],
    problem: "Content creation was a fragmented, manual process. Turning one idea into polished posts for LinkedIn, X, and email required multiple rounds of writing, reformatting, revisions, and individual publishing — making it slow, inconsistent, and difficult to scale.",
    solution: "I built a complete end-to-end automation with a clean React/Vite frontend. Users submit a raw idea or URL (which gets scraped if needed). The system generates three full articles from different narrative angles, with optional AI images. It detects duplicates upfront using content hashing, supports both human and AI revisions with full version history, and then adapts the approved content for all three platforms in one step. Approved posts can be published immediately or scheduled via cron job.",
    result: "Content turnaround time was reduced by approximately 85%. What used to be a scattered multi-step process is now a reliable, high-quality automated pipeline that maintains brand voice across LinkedIn, X, and email."
  },
  {
    id: "lead-gen-pipeline",
    title: "AI-Powered Lead Generation System",
    shortDescription: "Automated outbound pipeline from persona definition to enriched leads with personalized outreach.",
    tools: ["n8n", "Apify", "Airtable", "Bouncer", "OpenAI"],
    thumbnail: "/images/lead-gen.png",
    images: ["/images/lead-gen.png"],
    problem: "Outbound lead generation was entirely manual. Defining personas, sourcing prospects, scraping profiles, verifying emails, enriching data, and writing personalized messages took hours per campaign with little consistency or structure.",
    solution: "I created a three-workflow n8n automation triggered by a campaign form. It validates and normalizes inputs, scrapes targeted leads with Apify, removes duplicates, verifies email deliverability, enriches company data from websites (with LinkedIn fallback), and generates personalized LinkedIn messages plus three-step cold email sequences. A global error workflow catches issues and provides clear, user-friendly diagnostics. All data is neatly organized in Airtable with a React frontend for easy review.",
    result: "Campaign execution time dropped by about 90%. The system delivers enriched, verified leads with high-quality personalized outreach at scale, replacing hours of manual work with a consistent automated pipeline."
  },
  {
    id: "kpi-reporting",
    title: "Reporting & Dashboard Automation",
    shortDescription: "Cross-departmental KPI automation that replaces a multi-day manual process with a single triggered run.",
    tools: ["Make.com", "Airtable", "Google Sheets", "Gmail"],
    thumbnail: "/images/kpi.png",
    images: ["/images/kpi.png"],
    problem: "Sales, Project Delivery, and People Operations tracked metrics in separate systems. At the end of each cycle, the operations team manually collected data from Google Sheets and two Airtable bases, performed calculations, and updated the dashboard — a process that took several days and had to be repeated for any ad-hoc requests.",
    solution: "I built a Make.com automation triggered by a single button in Airtable. It pulls data from all three sources in parallel, cleans and normalizes it, calculates key KPIs (revenue, project completion rate, employee growth, etc.), and updates the central dashboard using safe upsert operations. The system handles missing data gracefully, prevents duplicate records, and sends targeted email alerts when needed while allowing other branches to continue.",
    result: "Reporting that previously took several days now completes automatically in under three minutes. The process is accurate, repeatable, and provides real-time visibility with built-in error handling and duplicate protection."
  },
  {
    id: "invoice-processing",
    title: "AI-Powered Invoice Processing System",
    shortDescription: "Monitors a Gmail inbox and extracts, validates, and logs invoice data automatically.",
    tools: ["Make.com", "Gmail", "PDF.co", "OpenAI", "Google Sheets"],
    thumbnail: "/images/invoice.png",
    images: ["/images/invoice.png"],
    problem: "Novus Realty received dozens of invoice emails weekly. An admin had to manually identify invoices, extract key details from varying formats, and enter them into a spreadsheet — a slow, repetitive, and increasingly error-prone task.",
    solution: "I developed a Make.com pipeline that continuously monitors Gmail using broad keyword filters. Attachments are standardized via PDF.co, then OpenAI identifies genuine invoices and extracts structured data (vendor, number, amount, due date). The system checks for duplicates before logging, handles multiple invoices per email, marks processed emails as read, and writes clean records to Google Sheets.",
    result: "Manual invoice processing has been completely eliminated. The automation reliably handles different formats, incomplete emails, and duplicates, saving significant admin time while reducing errors."
  }
];