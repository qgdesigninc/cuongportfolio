import { ArrowUpRight } from 'lucide-react';
import { SERVICES, WORK_PROCESS } from '../data/portfolioData';

interface ServicesProps {
  onOpenContact: () => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#171717]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#171717]/60 mb-3">
              <span>03. Capabilities & Services</span>
              <span aria-hidden="true">/</span>
              <span>Dịch vụ thiết kế</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] font-display tracking-tight">
              Giải pháp thị giác toàn diện
            </h2>
          </div>

          <p className="text-sm text-[#171717]/70 max-w-md leading-relaxed">
            Quy trình làm việc có chiều sâu, kết hợp nghiên cứu chiến lược và chuẩn mực sản xuất in ấn lẫn kỹ thuật số cao cấp.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-[#171717]/10 border-y border-[#171717]/10 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="py-10 group transition-colors duration-200 hover:bg-white/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number & Titles */}
                <div className="lg:col-span-5">
                  <span className="text-xs font-mono font-bold text-[#171717]/40 block mb-2">
                    {service.number}.
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171717] mb-1">
                    {service.titleVi}
                  </h3>
                  <p className="text-sm text-[#171717]/60 font-medium">
                    {service.titleEn}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-[#171717]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="lg:col-span-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 block mb-3 font-display">
                    Hạng mục bao gồm
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#171717]/80">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#171717]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Process: 3-step timeline */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 font-display">
              Quy trình hợp tác (How We Work)
            </h3>
            <span className="text-xs text-[#171717]/50">3 Giai đoạn chuẩn mực</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK_PROCESS.map((proc) => (
              <div
                key={proc.step}
                className="bg-white p-6 rounded-xl border border-[#171717]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono font-bold text-[#171717]">
                      {proc.step}
                    </span>
                    <span className="w-2 h-2 rounded-xs bg-[#C7F36B]" />
                  </div>
                  <h4 className="text-base font-bold text-[#171717] font-display mb-1">
                    {proc.titleVi}
                  </h4>
                  <p className="text-xs text-[#171717]/50 mb-3">{proc.titleEn}</p>
                  <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-white border border-[#171717]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold font-display text-[#171717] mb-1">
                Cần gói giải pháp linh hoạt cho doanh nghiệp của bạn?
              </h4>
              <p className="text-xs sm:text-sm text-[#171717]/70">
                Tôi luôn sẵn sàng điều chỉnh phạm vi công việc phù hợp với quy mô dự án và ngân sách dự kiến.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#171717] bg-[#C7F36B] hover:bg-[#b5e552] rounded-xl transition-colors shrink-0 cursor-pointer shadow-xs"
            >
              <span>Nhận tư vấn & Báo giá</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
