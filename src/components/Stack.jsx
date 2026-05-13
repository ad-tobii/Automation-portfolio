import { useEffect, useRef, useState } from 'react';

const skills = [
"Process Optimization",
"System Design",
"Workflow Automation",
"AI Agent Development",
"Software Development",
"AI Integration Strategy"
];

const tools = [

  { name: "Make", icon: "https://cdn.simpleicons.org/make" },

  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },

  { name: "Apify", icon: "/images/apify.png" },

  // LLMs
  { name: "Claude Code", icon: "/images/claudecode.png" },

  // Automation
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },

  // MERN Stack
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Express", icon: "/images/expressjs.png" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },

  // Backend / DB
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },

  // Google Workspace / Antigravity
  { name: "Google Workspace", icon: "/images/google.jpg" },


  // Productivity
  { name: "Notion", icon: "/images/notion.png" },
  { name: "Slack", icon: "/images/slack.png" },

  // Scraping / Crawling
  { name: "Firecrawl", icon: "/images/firecrawl.png" }

];

function ToolIcon({ tool }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 group">
      <div
        className="
          w-14 h-14 p-3
          bg-[#18181b]
          border border-white/10
          rounded-xl
          flex items-center justify-center
          overflow-hidden
          transition-all duration-300
          hover:border-[#32cd32]/50
          hover:scale-110
        "
      >
        {!hasError ? (
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-[10px] text-gray-400 font-mono text-center leading-none">
            {tool.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
        )}
      </div>

      <span className="text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
        {tool.name}
      </span>
    </div>
  );
}

export default function Stack() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll('.fade-up');

    elements?.forEach((el, index) => {
      el.style.transitionDelay = `${index * 50}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      ref={containerRef}
      className="
        py-24 px-6
        max-w-[1126px]
        mx-auto
        w-full
        flex flex-col items-center
      "
    >
      <h2 className="text-3xl font-semibold uppercase text-white mb-2 fade-up">
        SKILLS & TOOLS
      </h2>

      <div className="w-24 h-1 bg-[#7c5cfc] mb-24 fade-up"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full items-start">
        {/* Skills */}
        <div className="fade-up">
          <h3 className="text-xl text-white mb-12 font-semibold">
            What I Excel At
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  flex items-center gap-4
                  p-5
                  bg-[#18181b]
                  border border-white/10
                  rounded-xl
                  hover:border-[#32cd32]/40
                  transition-all duration-300
                "
              >
                <div
                  className="
                    shrink-0
                    w-6 h-6
                    border border-[#32cd32]
                    rounded-full
                    flex items-center justify-center
                  "
                >
                  <svg
                    className="w-4 h-4 text-[#32cd32]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <span className="text-[15px] font-medium text-white leading-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="fade-up">
          <h3 className="text-xl text-white mb-12 font-semibold">
            Tech Stack I Use
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-12 gap-x-6">
            {tools.map((tool) => (
              <ToolIcon key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}