import { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, ExternalLink } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Nhận diện thương hiệu (Brand Identity)',
    timeline: '1-2 tháng',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DESIGNER_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate successful inquiry dispatch
    setFormSubmitted(true);
  };

  const mailtoLink = `mailto:${DESIGNER_INFO.email}?subject=${encodeURIComponent(
    `Hợp tác thiết kế: [Tên dự án] – ${formData.name || 'Khách hàng'}`
  )}&body=${encodeURIComponent(
    `Xin chào Trí Nguyễn,\n\nTôi muốn trao đổi về dự án:\n- Hạng mục: ${formData.service}\n- Thời gian dự kiến: ${formData.timeline}\n\nNội dung chi tiết:\n${formData.message || '...'}\n\nTrân trọng,\n${formData.name || '...'}\nEmail: ${formData.email || '...'}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#171717]/10 bg-[#F2F0EA]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#171717]/60 mb-3">
          <span>04. Get In Touch</span>
          <span aria-hidden="true">/</span>
          <span>Liên hệ hợp tác</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Strong Headline & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#171717] font-display tracking-tight leading-[1.1] mb-6 text-balance">
                Have a project in mind?
              </h2>
              <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
                Bạn đang tìm kiếm một ngôn ngữ thị giác riêng biệt cho thương hiệu của mình? Hãy gửi email hoặc điền biểu mẫu để bắt đầu cuộc trò chuyện.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#171717]/10 shadow-xs space-y-4">
              <span className="text-xs font-semibold text-[#171717]/50 uppercase tracking-wider block">
                Hộp thư trực tiếp
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={mailtoLink}
                  className="font-mono text-base sm:text-lg font-bold text-[#171717] hover:underline truncate"
                  title="Gửi email cho Trí Nguyễn"
                >
                  {DESIGNER_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#171717] bg-[#F7F6F2] hover:bg-[#EFECE6] border border-[#171717]/15 rounded-lg transition-colors shrink-0 cursor-pointer"
                  title="Sao chép địa chỉ email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-[#171717]/5 flex items-center justify-between text-xs text-[#171717]/60">
                <span>Phản hồi trong vòng 24–48 giờ làm việc</span>
                <span className="font-medium text-[#171717]">{DESIGNER_INFO.status}</span>
              </div>
            </div>

            {/* Social Networks List */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 block mb-4 font-display">
                Mạng xã hội & Nền tảng sáng tạo
              </span>
              <div className="grid grid-cols-2 gap-3">
                {DESIGNER_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white rounded-xl border border-[#171717]/10 hover:border-[#171717]/30 transition-all flex items-center justify-between group text-xs font-medium text-[#171717]"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]/40 group-hover:text-[#171717] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#171717]/10 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-[#171717]/70" />
                <h3 className="text-base font-bold font-display text-[#171717]">
                  Gửi yêu cầu dự án (Project Brief)
                </h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center bg-[#F7F6F2] rounded-xl border border-emerald-500/20 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#C7F36B] flex items-center justify-center mx-auto text-[#171717]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-[#171717]">
                    Yêu cầu đã được gửi thành công!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#171717]/70 max-w-md mx-auto leading-relaxed">
                    Cảm ơn <strong>{formData.name}</strong>. Trí Nguyễn sẽ xem xét thông tin dự án và liên hệ lại qua email <strong>{formData.email}</strong> sớm nhất.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'Nhận diện thương hiệu (Brand Identity)',
                          timeline: '1-2 tháng',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-[#171717] bg-white border border-[#171717]/15 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      Gửi thêm yêu cầu khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#171717]/80 mb-1.5">
                        Họ và tên / Doanh nghiệp <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ví dụ: Nguyễn Văn A"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F2] border border-[#171717]/15 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#171717]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#171717]/80 mb-1.5">
                        Địa chỉ Email <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ten@email.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F2] border border-[#171717]/15 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#171717]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-[#171717]/80 mb-1.5">
                        Hạng mục quan tâm
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F2] border border-[#171717]/15 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#171717]"
                      >
                        <option>Nhận diện thương hiệu (Brand Identity)</option>
                        <option>Menu & Nhận diện F&B (Cafe & Beverage)</option>
                        <option>Thiết kế bao bì & Nhãn dán (Packaging)</option>
                        <option>Chiến dịch truyền thông số (Social Campaign)</option>
                        <option>Poster & Ấn phẩm sự kiện (Poster & Ads)</option>
                        <option>Thiết kế in ấn & Sách (Editorial & Print)</option>
                        <option>Khác / Tư vấn toàn diện</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-timeline" className="block text-xs font-semibold text-[#171717]/80 mb-1.5">
                        Thời gian dự kiến
                      </label>
                      <select
                        id="contact-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F2] border border-[#171717]/15 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#171717]"
                      >
                        <option>Gấp (Dưới 3 tuần)</option>
                        <option>1-2 tháng (Tiêu chuẩn)</option>
                        <option>2-3 tháng</option>
                        <option>Linh hoạt theo kế hoạch thương hiệu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#171717]/80 mb-1.5">
                      Mô tả sơ lược về dự án <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mục tiêu của thương hiệu, câu chuyện bạn muốn truyền tải, hoặc các liên kết tài liệu tham khảo..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F2] border border-[#171717]/15 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#171717] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-[#171717] bg-[#C7F36B] hover:bg-[#b5e552] rounded-xl transition-all cursor-pointer shadow-xs active:scale-98"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Gửi thông tin dự án</span>
                    </button>

                    <a
                      href={mailtoLink}
                      className="text-xs text-[#171717]/70 hover:text-[#171717] flex items-center gap-1 font-medium"
                    >
                      <span>Hoặc mở trình duyệt email</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
