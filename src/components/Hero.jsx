import { useEffect, useRef } from 'react';

export default function Hero() {
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

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.fade-up');
      elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 150}ms`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className=" mt-8 min-h-screen flex flex-col justify-center items-center pt-14 pb-20 px-6 max-w-[1126px] mx-auto w-full relative text-center" ref={containerRef}>
      <div className="w-full max-w-4xl flex flex-col items-center">
        <p className="fade-up font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-accent mb-6 font-semibold">
          AI AUTOMATION · FULLSTACK ENGINEER
        </p>
        
        <h1 className="fade-up font-mono text-text-primary font-semibold leading-[1.1] tracking-tight mb-16" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
          I Build AI-Powered<br />
          Workflows That Save<br />
          Teams Hours Daily.
        </h1>

        <div className="fade-up flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          <div className="flex flex-col items-center">
            <span className="font-mono text-[40px] sm:text-[48px] text-accent leading-none mb-2">6+</span>
            <span className="font-sans text-[12px] uppercase text-text-muted tracking-wider font-semibold">Projects</span>
          </div>
          
          <div className="w-[1px] h-12 bg-border hidden sm:block"></div>
          
          <div className="flex flex-col items-center">
            <span className="font-mono text-[40px] sm:text-[48px] text-accent leading-none mb-2">100%</span>
            <span className="font-sans text-[12px] uppercase text-text-muted tracking-wider font-semibold">Satisfaction</span>
          </div>
          
          <div className="w-[1px] h-12 bg-border hidden sm:block"></div>
          
          <div className="flex flex-col items-center">
            <span className="font-mono text-[40px] sm:text-[48px] text-accent leading-none mb-2">150+</span>
            <span className="font-sans text-[12px] uppercase text-text-muted tracking-wider font-semibold">Hours Reclaimed</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center">
        <div className="animate-scroll-pulse text-white/50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
