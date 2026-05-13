import { useParams, Link } from 'react-router-dom';
import { projects } from '../projects';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text-muted">
        PROJECT NOT FOUND
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 px-6 max-w-[860px] mx-auto w-full">

      {/* NAV */}
      <div className="flex items-center justify-between mb-16">
        <Link
          to="/"
          className="text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          ← Back
        </Link>

        <span className="text-sm text-text-muted">
          Case Study
        </span>
      </div>

      {/* HERO */}
      <header className="mb-16">

        <p className="text-sm text-text-muted mb-4">
          Selected Work
        </p>

        <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-[1.15] tracking-[-0.02em]">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-text-secondary leading-[1.7] max-w-2xl">
          {project.summary}
        </p>

        {/* TOOLS */}
        <div className="flex flex-wrap gap-2 mt-8">
          {project.tools.map(tool => (
            <span
              key={tool}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-text-muted"
            >
              {tool}
            </span>
          ))}
        </div>

      </header>

      {/* IMAGE */}
      <div className="mb-20">
        <div className="aspect-video w-full bg-surface border border-white/10 rounded-lg overflow-hidden">
          {!imgError ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-text-muted text-xs">
              PREVIEW IMAGE
            </div>
          )}
        </div>
      </div>

      {/* STORY */}
      <div className="space-y-18">

    

        {/* PROBLEM */}
        <section className="space-y-3">
          <h2 className="text-base font-medium text-text-primary">
            Problem
          </h2>
          <div className="h-[1px] w-10 bg-white/10" />
          <p className="text-lg text-text-secondary leading-[1.8]">
            {project.problem}
          </p>
        </section>

        {/* APPROACH */}
        <section className="space-y-3">
          <h2 className="text-base font-medium text-text-primary">
            Approach
          </h2>
          <div className="h-[1px] w-10 bg-white/10" />
          <p className="text-lg text-text-secondary leading-[1.8]">
            {project.solution}
          </p>
        </section>

        {/* RESULT */}
        <section className="space-y-3">
          <h2 className="text-base font-medium text-text-primary">
            Result
          </h2>
          <div className="h-[1px] w-10 bg-white/10" />
          <p className="text-lg text-text-secondary leading-[1.8]">
            {project.result}
          </p>
        </section>

      </div>

      {/* END */}
      <div className="mt-24 pt-10 border-t border-white/10 text-center">
        <p className="text-xs text-text-muted tracking-wider uppercase">
          End of case study
        </p>
      </div>

    </div>
  );
}