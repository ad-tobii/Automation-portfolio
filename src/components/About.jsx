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
    I’m an AI Automation & Full-Stack Engineer focused on building systems that 
    eliminate operational bottlenecks and replace fragmented manual workflows with scalable infrastructure.
  </p>

  <p className="mb-4">
    I approach projects as business problems first and technical challenges second, 
    designing systems for lead generation, automated outreach, proposal operations, 
    AI voice agents, and content workflows that can run with minimal oversight.
  </p>

  <p className="mb-4">
    When needed, I build the full product layer too, from clean interfaces and APIs 
    to structured data systems and internal tooling.
  </p>

  <p>
    The result is faster operations, more predictable execution, and less time lost to repetitive work.
  </p>
</div>
      
        </div>
      </div>
    </section>
  );
}
