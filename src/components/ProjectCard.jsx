import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group block bg-surface border border-border overflow-hidden transition-all duration-200 hover:border-accent/40 rounded-[4px]"
    >
      <div className="aspect-video w-full overflow-hidden bg-[#1a1a1a]">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-text-muted font-mono text-[10px] uppercase tracking-widest">${project.title}</div>`;
          }}
        />
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool) => (
            <span 
              key={tool} 
              className="font-mono text-[10px] px-2 py-0.5 border border-white/10 text-text-secondary uppercase tracking-wider"
            >
              {tool}
            </span>
          ))}
        </div>
        
        <h3 className="font-sans text-lg font-semibold text-text-primary mb-2">
          {project.title}
        </h3>
        
        <p className="font-sans text-sm text-text-secondary mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        
        <span className="inline-flex items-center text-xs font-mono text-text-muted group-hover:text-accent transition-colors duration-200">
          VIEW CASE STUDY <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
