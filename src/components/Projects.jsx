import { projects } from '../projects';
import ProjectCard from './ProjectCard';
import { useEffect, useRef } from 'react';

export default function Projects() {
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
      const cards = containerRef.current.querySelectorAll('.fade-up');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-[1126px] mx-auto w-full" ref={containerRef}>
      <h2 className="font-mono text-2xl text-text-primary mb-12 font-semibold fade-up uppercase">PROJECTS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="fade-up">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
