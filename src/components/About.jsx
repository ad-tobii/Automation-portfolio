import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 max-w-[1126px] mx-auto w-full">
      <div ref={sectionRef} className="fade-up grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
        <div className="w-[280px] h-[340px] border border-border bg-surface shrink-0 mx-auto md:mx-0 overflow-hidden rounded-[4px]">
          <img 
            src="/images/avatar.jpg" 
            alt="Oluwatobi" 
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
              e.target.parentElement.innerHTML = '<span class="text-text-muted font-mono text-sm">/images/avatar.jpg</span>';
            }}
          />
        </div>
        
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-mono text-2xl text-text-primary mb-6 font-semibold uppercase">ABOUT</h2>
          
          <div className="font-sans text-text-secondary text-base leading-relaxed mb-8 max-w-2xl">
            <p className="mb-4">
              I am a Fullstack Engineer specializing in AI automation and workflow optimization. 
              I bridge the gap between complex business processes and intelligent systems, 
              building custom tools that eliminate repetitive work and scale output.
            </p>
            <p>
              My approach focuses on writing clean, maintainable code while leveraging the latest in 
              LLM capabilities and API integrations to solve real-world operational bottlenecks.
            </p>
          </div>
          
          <ul className="space-y-3 font-sans text-text-primary text-sm max-w-2xl">
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1 text-xs">■</span>
              <span>Building end-to-end automation pipelines and internal tooling</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1 text-xs">■</span>
              <span>Partnering with agencies, startups, and sales teams</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1 text-xs">■</span>
              <span>Based globally, working remotely</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
