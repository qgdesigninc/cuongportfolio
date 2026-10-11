import { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { Project, PROJECTS, CATEGORIES } from '../data/portfolioData';

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectGrid({ onSelectProject }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.categoryKey === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#171717]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#171717]/60 mb-3">
              <span>01. Selected Work</span>
              <span aria-hidden="true">/</span>
              <span>Dự án chọn lọc</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] font-display tracking-tight">
              Tác phẩm & Hồ sơ năng lực
            </h2>
          </div>

          <p className="text-sm text-[#171717]/70 max-w-md leading-relaxed">
            Tuyển tập 6 dự án tiêu biểu trải rộng trên các lĩnh vực nhận diện thương hiệu, thiết kế menu, bao bì, truyền thông và ấn phẩm sách xuất bản.
          </p>
        </div>

        {/* Filter Navigation (Interactive segmented controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#171717] text-white shadow-xs'
                    : 'bg-white text-[#171717]/70 hover:text-[#171717] hover:bg-neutral-100 border border-[#171717]/10'
                }`}
              >
                <span>{cat.labelVi}</span>
                <span className="ml-1.5 opacity-50 text-[11px]">({cat.labelEn})</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid Layout */}
        {activeFilter === 'all' ? (
          <div className="grid grid-cols-12 gap-6 sm:gap-8">
            {/* Project 1: Brand Identity (Wide showcase) */}
            <div className="col-span-12 lg:col-span-7">
              <ProjectCard
                project={PROJECTS[0]}
                layoutVariant="wide"
                onSelect={onSelectProject}
              />
            </div>

            {/* Project 2: Cafe Menu */}
            <div className="col-span-12 lg:col-span-5">
              <ProjectCard
                project={PROJECTS[1]}
                layoutVariant="standard"
                onSelect={onSelectProject}
              />
            </div>

            {/* Project 3: Packaging */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProjectCard
                project={PROJECTS[2]}
                layoutVariant="standard"
                onSelect={onSelectProject}
              />
            </div>

            {/* Project 4: Social Campaign */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProjectCard
                project={PROJECTS[3]}
                layoutVariant="standard"
                onSelect={onSelectProject}
              />
            </div>

            {/* Project 5: Poster & Advertising */}
            <div className="col-span-12 sm:col-span-12 lg:col-span-4">
              <ProjectCard
                project={PROJECTS[4]}
                layoutVariant="standard"
                onSelect={onSelectProject}
              />
            </div>

            {/* Project 6: Print Design (Panoramic editorial layout) */}
            <div className="col-span-12">
              <ProjectCard
                project={PROJECTS[5]}
                layoutVariant="panoramic"
                onSelect={onSelectProject}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                layoutVariant="standard"
                onSelect={onSelectProject}
              />
            ))}
          </div>
        )}

        {/* Footnote about real deliverables */}
        <div className="mt-12 pt-6 border-t border-[#171717]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#171717]/60 gap-4">
          <p>
            * Các dự án trên được xây dựng trên hệ thống dữ liệu tập trung, sẵn sàng tích hợp hình ảnh & tài liệu thực tế của bạn.
          </p>
          <span className="font-mono text-[#171717] font-semibold shrink-0">
            Tổng cộng: {filteredProjects.length} dự án hiển thị
          </span>
        </div>
      </div>
    </section>
  );
}
