import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dự án', href: '#work' },
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Dịch vụ', href: '#services' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#171717]/10 py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand mark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#171717] whitespace-nowrap shrink-0"
            aria-label="Trí Nguyễn Homepage"
          >
            <span className="w-2.5 h-2.5 bg-[#171717] rounded-xs group-hover:bg-[#C7F36B] transition-colors" />
            <span className="font-display font-bold tracking-wide uppercase text-sm md:text-base">
              {DESIGNER_INFO.name}
            </span>
            <span className="hidden sm:inline-block text-xs font-normal text-[#171717]/50 tracking-normal">
              / Design Studio
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#171717]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#171717] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#171717] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action / Availability */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-xs font-medium text-[#171717]/70 border border-[#171717]/15 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="whitespace-nowrap">{DESIGNER_INFO.status}</span>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-[#171717] bg-[#C7F36B] hover:bg-[#b5e552] rounded-lg transition-colors border border-[#171717]/10 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
            >
              <span>Bắt đầu dự án</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171717] hover:bg-[#171717]/5 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F7F6F2] pt-24 px-6 flex flex-col justify-between pb-10 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#171717]/70 border border-[#171717]/15 rounded-full px-3 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>{DESIGNER_INFO.status}</span>
            </div>

            <nav className="flex flex-col gap-4 text-2xl font-bold font-display text-[#171717]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2 border-b border-[#171717]/10 hover:text-[#171717]/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#171717]/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#171717] bg-[#C7F36B] rounded-lg cursor-pointer"
            >
              <span>Bắt đầu dự án</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-[#171717]/60 text-center">
              {DESIGNER_INFO.location} · {DESIGNER_INFO.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
