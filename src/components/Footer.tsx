import { ArrowUp } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#F7F6F2] text-[#171717] border-t border-[#171717]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#171717]/10 text-xs text-[#171717]/70">
          {/* Brand mark & Tagline */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-[#171717] font-display uppercase tracking-wide">
              {DESIGNER_INFO.name}
            </span>
            <span aria-hidden="true">·</span>
            <span>Graphic Designer & Visual Director</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-[#171717]/50">{DESIGNER_INFO.location}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {DESIGNER_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#171717] transition-colors font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-semibold text-[#171717] hover:text-[#171717]/70 transition-colors cursor-pointer"
            aria-label="Cuộn lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#171717]/50">
          <p>
            © {currentYear} {DESIGNER_INFO.name}. All visual assets and typography layouts crafted with care.
          </p>
          <div className="flex items-center gap-4 font-mono">
            <span>Built with React & TypeScript</span>
            <span aria-hidden="true">·</span>
            <span>Vietnam GMT+7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
