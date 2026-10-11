import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onContactClick: () => void;
}

export function ProjectModal({
  project,
  onClose,
  onSelectProject,
  onContactClick,
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle keyboard shortcuts (Escape, Left, Right)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && project) {
        const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
        const nextIndex = (currentIndex + 1) % PROJECTS.length;
        onSelectProject(PROJECTS[nextIndex]);
      } else if (e.key === 'ArrowLeft' && project) {
        const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
        const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
        onSelectProject(PROJECTS[prevIndex]);
      }
    },
    [onClose, onSelectProject, project]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const currentImages = project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#F7F6F2] rounded-2xl shadow-2xl border border-[#171717]/15 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F7F6F2]/95 backdrop-blur-xs border-b border-[#171717]/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#171717]/50 font-mono">
              {String(currentIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="text-[#171717]/30">·</span>
            <span className="text-xs font-medium text-[#171717]/70 truncate max-w-[200px] sm:max-w-md">
              {project.categoryVi}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next controls */}
            <div className="hidden sm:flex items-center gap-1 mr-2 border border-[#171717]/15 rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="p-1.5 hover:bg-[#171717]/10 rounded-md transition-colors"
                title={`Dự án trước: ${prevProject.title}`}
                aria-label="Dự án trước"
              >
                <ChevronLeft className="w-4 h-4 text-[#171717]" />
              </button>
              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="p-1.5 hover:bg-[#171717]/10 rounded-md transition-colors"
                title={`Dự án tiếp theo: ${nextProject.title}`}
                aria-label="Dự án tiếp theo"
              >
                <ChevronRight className="w-4 h-4 text-[#171717]" />
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#171717] hover:bg-[#171717]/10 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Đóng cửa sổ (ESC)"
            >
              <span className="text-xs font-medium hidden sm:inline-block">ESC</span>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Gallery Area */}
          <div className="space-y-4">
            <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-[#E7E5DF] border border-[#171717]/10">
              <img
                src={currentImages[activeImageIndex] || project.image}
                alt={`${project.title} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-white text-xs rounded-md font-mono">
                {activeImageIndex + 1} / {currentImages.length}
              </div>
            </div>

            {/* Thumbnail switcher if multiple images */}
            {currentImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 sm:w-24 aspect-16/10 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#171717] scale-102 ring-2 ring-[#C7F36B]'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Title & Metadata Header */}
          <div className="border-b border-[#171717]/10 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2
                  id="modal-project-title"
                  className="text-2xl sm:text-4xl font-extrabold text-[#171717] font-display mb-2"
                >
                  {project.title}
                </h2>
                <p className="text-sm text-[#171717]/70 font-medium">
                  {project.categoryVi} <span aria-hidden="true">·</span> {project.category}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="flex items-center gap-6 text-xs text-[#171717]/70">
                <div>
                  <span className="block text-[#171717]/40">Khách hàng</span>
                  <span className="font-semibold text-[#171717]">{project.client}</span>
                </div>
                <div>
                  <span className="block text-[#171717]/40">Năm thực hiện</span>
                  <span className="font-semibold text-[#171717] font-mono">{project.year}</span>
                </div>
                <div>
                  <span className="block text-[#171717]/40">Thời gian</span>
                  <span className="font-semibold text-[#171717]">{project.timeframe}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 cols: Overview & Creative Direction */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-2 font-display">
                  01. Tổng quan dự án (Project Overview)
                </h3>
                <p className="text-sm sm:text-base text-[#171717] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-3 font-display">
                  02. Mục tiêu thiết kế (Design Objectives)
                </h3>
                <ul className="space-y-2.5">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-2 font-display">
                  03. Định hướng sáng tạo (Creative Direction)
                </h3>
                <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed bg-white p-4 rounded-xl border border-[#171717]/10">
                  {project.creativeDirection}
                </p>
              </div>
            </div>

            {/* Right 5 cols: Deliverables & Next Steps */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-xl border border-[#171717]/10 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-3 font-display">
                  04. Hạng mục bàn giao (Deliverables)
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#171717] py-1 border-b border-[#171717]/5 last:border-b-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation trigger banner */}
              <div className="bg-[#171717] text-white rounded-xl p-5 space-y-3">
                <h4 className="text-sm font-bold font-display text-white">
                  Bạn quan tâm đến dự án tương tự?
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Liên hệ trao đổi trực tiếp với Trí Nguyễn để nhận tư vấn định hướng và báo giá chi tiết.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C7F36B] text-[#171717] text-xs font-bold rounded-lg hover:bg-[#b5e552] transition-colors cursor-pointer"
                >
                  <span>Liên hệ ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Navigator Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-neutral-100 border-t border-[#171717]/10 text-xs">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-1.5 text-[#171717]/70 hover:text-[#171717] font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Dự án trước:</span>
            <span className="font-semibold text-[#171717] truncate max-w-[140px] sm:max-w-none">
              {prevProject.title}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-1.5 text-[#171717]/70 hover:text-[#171717] font-medium transition-colors"
          >
            <span className="hidden sm:inline">Dự án tiếp theo:</span>
            <span className="font-semibold text-[#171717] truncate max-w-[140px] sm:max-w-none">
              {nextProject.title}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
