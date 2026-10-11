import { useState } from 'react';
import { User, Check, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#171717]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#171717]/60 mb-3">
          <span>02. About Designer</span>
          <span aria-hidden="true">/</span>
          <span>Giới thiệu bản thân</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#171717]/10 bg-[#EFECE6] shadow-md group">
              {!imgError ? (
                <img
                  src={DESIGNER_INFO.portraitImage}
                  alt={`Chân dung ${DESIGNER_INFO.name} – Graphic Designer`}
                  className="w-full aspect-3/4 object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full aspect-3/4 bg-neutral-200 flex flex-col items-center justify-center p-8 text-center text-[#171717]/50">
                  <User className="w-12 h-12 mb-3 opacity-40" />
                  <p className="text-sm font-semibold">{DESIGNER_INFO.name}</p>
                  <p className="text-xs text-[#171717]/60 mt-1">Portrait Placeholder</p>
                </div>
              )}

              {/* Minimal caption tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-[#171717]/10 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#171717] block">{DESIGNER_INFO.name}</span>
                  <span className="text-[#171717]/60">{DESIGNER_INFO.title}</span>
                </div>
                <span className="text-[11px] font-mono text-[#171717]/70">VN / 2026</span>
              </div>
            </div>

            {/* Quick Fact Strip */}
            <div className="bg-white rounded-xl border border-[#171717]/10 p-5 space-y-3 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-[#171717]/5">
                <span className="text-[#171717]/50">Vị trí địa lý</span>
                <span className="font-semibold text-[#171717]">{DESIGNER_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#171717]/5">
                <span className="text-[#171717]/50">Trạng thái nhận việc</span>
                <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  {DESIGNER_INFO.status}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#171717]/5">
                <span className="text-[#171717]/50">Liên hệ trực tiếp</span>
                <span className="font-mono font-medium text-[#171717]">{DESIGNER_INFO.email}</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-[#171717]/50">Chuyên môn chính</span>
                <span className="font-semibold text-[#171717]">Identity & Editorial Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Skills */}
          <div className="lg:col-span-7 space-y-12">
            {/* Biography */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] font-display tracking-tight mb-6">
                Kiến tạo ngôn ngữ thị giác chặt chẽ, tối giản và bền vững.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#171717]/80 leading-relaxed font-normal">
                <p>{DESIGNER_INFO.bio}</p>
                <p>
                  Tôi tin rằng vẻ đẹp của một thiết kế xuất phát từ cấu trúc mạch lạc: từ khoảng cách lề, tỷ lệ kiểu chữ cho đến cảm giác chạm của loại giấy được chọn. Mỗi dự án là một sự hợp tác đồng điệu để chắt lọc câu chuyện độc bản của thương hiệu thành hình khối rõ nét.
                </p>
              </div>
            </div>

            {/* Design Philosophy */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#171717]/60" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717] font-display">
                  Triết lý thiết kế (Design Philosophy)
                </h3>
              </div>

              <div className="space-y-4">
                {DESIGNER_INFO.philosophy.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-xl border border-[#171717]/10 hover:border-[#171717]/25 transition-all"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-[#171717]/40">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <h4 className="text-sm font-bold text-[#171717] font-display">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed pl-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#171717]/10">
              {/* Disciplines */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-4 font-display">
                  Kỹ năng chuyên môn
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#171717]">
                  {DESIGNER_INFO.skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2 py-1 border-b border-[#171717]/5 last:border-b-0">
                      <Check className="w-3.5 h-3.5 text-[#171717]/60 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 mb-4 font-display">
                  Công cụ & Phần mềm
                </h4>
                <div className="flex flex-wrap gap-2">
                  {DESIGNER_INFO.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white border border-[#171717]/10 rounded-lg text-xs font-medium text-[#171717]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
