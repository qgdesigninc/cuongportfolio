import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, MapPin, Clock } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export function Hero() {
  const [vietnamTime, setVietnamTime] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Vietnam timezone is UTC+7
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setVietnamTime(now.toLocaleTimeString('vi-VN', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#171717]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top metadata strip (Swiss-inspired editorial headers) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#171717]/10 text-xs text-[#171717]/70 font-medium">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#171717]/60" />
            <span className="font-semibold text-[#171717]">{DESIGNER_INFO.locationShort}</span>
            <span aria-hidden="true">·</span>
            <span>Based in Vietnam</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-[#171717]/60" />
              <span>Hà Nội / Sài Gòn</span>
              <span className="font-mono text-[#171717] font-semibold">{vietnamTime || '09:00:00'} (ICT)</span>
            </div>
            <span className="hidden md:inline-block" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5 text-[#171717]">
              <span className="font-semibold">Mùa làm việc:</span>
              <span>{DESIGNER_INFO.availabilityPeriod}</span>
            </div>
          </div>
        </div>

        {/* Hero Editorial Grid: Left Typography / Right Visual Monograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & Vietnamese Lead */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#171717]/80 mb-6">
              <span className="w-2 h-0.5 bg-[#C7F36B] inline-block" />
              <span>Independent Graphic Design & Visual Direction</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] font-display leading-[1.08] mb-8 text-balance">
              Designing visual experiences that make brands stand out.
            </h1>

            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed max-w-2xl font-normal mb-10">
              Tôi là một nhà thiết kế đồ họa, tập trung vào nhận diện thương hiệu, thiết kế truyền thông và trải nghiệm hình ảnh.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-[#171717] bg-[#C7F36B] hover:bg-[#b5e552] rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <span>Khám phá dự án</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#171717] bg-white hover:bg-neutral-50 border border-[#171717]/15 rounded-xl transition-colors"
              >
                <span>Về bản thân</span>
              </a>
            </div>

            {/* Micro editorial highlight footnotes */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#171717]/10 text-xs">
              <div>
                <p className="font-bold text-[#171717] text-sm font-display mb-1">01 / Hệ Thống</p>
                <p className="text-[#171717]/60 leading-snug">Quy chuẩn nhận diện & typography mạch lạc</p>
              </div>
              <div>
                <p className="font-bold text-[#171717] text-sm font-display mb-1">02 / Cảm Quan</p>
                <p className="text-[#171717]/60 leading-snug">Vật liệu in ấn & tinh tế trong từng chi tiết</p>
              </div>
              <div>
                <p className="font-bold text-[#171717] text-sm font-display mb-1">03 / Độc Bản</p>
                <p className="text-[#171717]/60 leading-snug">Sáng tạo có chiều sâu cho từng câu chuyện</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Artwork & Editorial Spread Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#171717]/10 bg-white shadow-xl group">
              {/* Image with fallback */}
              {!imgError ? (
                <img
                  src={DESIGNER_INFO.heroSpreadImage}
                  alt="Trí Nguyễn Graphic Design Editorial Monograph and Swiss typography layout"
                  className="w-full aspect-4/3 sm:aspect-16/11 object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full aspect-4/3 bg-neutral-100 flex flex-col items-center justify-center p-8 text-center">
                  <Sparkles className="w-8 h-8 text-[#171717]/40 mb-3" />
                  <p className="text-sm font-bold text-[#171717]">Editorial Visual Showcase</p>
                  <p className="text-xs text-[#171717]/60 mt-1">Swiss Typography & Brand Monograph</p>
                </div>
              )}

              {/* Graphic Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-[#171717]/10 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#171717] block">Selected Works 2024–2026</span>
                  <span className="text-[#171717]/60">Identity · Editorial · Packaging</span>
                </div>
                <span className="px-2.5 py-1 bg-[#171717] text-white font-mono text-[11px] rounded-md">
                  Vol. 04
                </span>
              </div>
            </div>

            {/* Asymmetric decorative accents */}
            <div
              className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#171717]/20 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#171717]/20 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
