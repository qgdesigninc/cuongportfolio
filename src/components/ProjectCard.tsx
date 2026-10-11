import { useState } from 'react';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  layoutVariant?: 'wide' | 'tall' | 'standard' | 'panoramic';
  onSelect: (project: Project) => void;
}

export function ProjectCard({
  project,
  layoutVariant = 'standard',
  onSelect,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  // Aspect ratio classes based on layout
  const aspectClass =
    layoutVariant === 'wide'
      ? 'aspect-16/10'
      : layoutVariant === 'tall'
      ? 'aspect-3/4'
      : layoutVariant === 'panoramic'
      ? 'aspect-16/9 md:aspect-21/9'
      : 'aspect-4/3';

  return (
    <article
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Xem chi tiết dự án ${project.title}`}
      className="group flex flex-col justify-between bg-white rounded-2xl border border-[#171717]/10 p-4 sm:p-5 transition-all duration-300 hover:shadow-xl hover:border-[#171717]/25 focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:outline-none cursor-pointer h-full"
    >
      {/* Visual Image Area */}
      <div className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-[#EFECE6] mb-4`}>
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} – ${project.categoryVi}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#171717]/50">
            <ImageIcon className="w-8 h-8 mb-2 opacity-60" />
            <span className="text-xs font-medium">{project.title}</span>
          </div>
        )}

        {/* Hover quick tag overlay */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#171717] text-white shadow-md">
            <ArrowUpRight className="w-4 h-4 text-[#C7F36B]" />
          </span>
        </div>
      </div>

      {/* Card Content & Metadata (Zero-Pill Discipline) */}
      <div className="flex flex-col flex-1 justify-between pt-1">
        <div>
          {/* Metadata line: unboxed text with typographic dot separator */}
          <div className="flex items-center justify-between text-xs text-[#171717]/60 mb-2 font-medium">
            <div className="flex items-center gap-1.5 truncate">
              <span>{project.categoryVi}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#171717]/40 truncate">{project.category}</span>
            </div>
            <span className="tabular-nums font-mono text-[#171717]/70 shrink-0 ml-2">{project.year}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#171717] font-display group-hover:text-black transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Short overview excerpt */}
          <p className="text-xs text-[#171717]/70 mt-2 line-clamp-2 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Card Footer: Client and action prompt */}
        <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#171717]/5 text-xs">
          <span className="text-[#171717]/50 truncate max-w-[200px]">
            {project.client}
          </span>
          <span className="font-semibold text-[#171717] flex items-center gap-1 group-hover:underline">
            Chi tiết
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
}
