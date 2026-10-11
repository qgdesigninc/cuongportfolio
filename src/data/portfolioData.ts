/**
 * Centralized Portfolio Data File
 * Editable source for all designer info, projects, services, and contacts.
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryVi: string;
  categoryKey: 'all' | 'brand' | 'menu' | 'packaging' | 'digital' | 'poster' | 'print';
  year: string;
  image: string;
  gallery: string[];
  client: string;
  timeframe: string;
  overview: string;
  objectives: string[];
  creativeDirection: string;
  deliverables: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  titleVi: string;
  description: string;
  deliverables: string[];
}

export const DESIGNER_INFO = {
  name: 'Trí Nguyễn',
  title: 'Graphic Designer & Visual Director',
  location: 'TP. Hồ Chí Minh & Hà Nội, Việt Nam',
  locationShort: 'Vietnam',
  status: 'Sẵn sàng nhận dự án mới',
  availabilityPeriod: 'Q2 – Q3 2026',
  email: 'yuhah.haha06@gmail.com',
  telegram: '@tringuyen_design',
  bio: 'Tôi là Trí Nguyễn, một nhà thiết kế đồ họa độc lập tại Việt Nam. Tôi theo đuổi phong cách tối giản giàu cấu trúc, kết hợp sự chuẩn xác của chủ nghĩa Swiss Typography với cảm quan thị giác Á Đông đương đại. Tôi tin rằng thiết kế không chỉ là việc tạo ra những hình ảnh bắt mắt, mà là xây dựng một ngôn ngữ thị giác chặt chẽ, chân thực và có khả năng định vị thương hiệu bền vững.',
  portraitImage: '/src/assets/images/designer_portrait_1791735177415.jpg',
  heroSpreadImage: '/src/assets/images/hero_editorial_showcase_1791735121824.jpg',
  philosophy: [
    {
      title: 'Bản chất trước hình thức',
      description: 'Mọi đường nét, màu sắc và kiểu chữ đều bắt nguồn từ câu chuyện cốt lõi và mục tiêu chiến lược của thương hiệu.',
    },
    {
      title: 'Kỷ luật hệ thống',
      description: 'Một bộ nhận diện tốt vận hành như một hệ sinh thái nhất quán, linh hoạt liền mạch từ ấn phẩm in ấn đến màn hình kỹ thuật số.',
    },
    {
      title: 'Khoảng thở & Giá trị bền vững',
      description: 'Không lạm dụng chi tiết thừa. Tôn trọng khoảng trắng và các cấu trúc lưới trường tồn thay vì chạy theo xu hướng nhất thời.',
    },
  ],
  skills: [
    'Brand Identity & Systems',
    'Editorial & Book Design',
    'Packaging & Structural Labels',
    'Custom Typography & Lettering',
    'Art Direction & Lookbook',
    'Print Production & Pre-press',
    'Social & Digital Campaigns',
    'Grid Systems & Layout Design',
  ],
  tools: [
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe Photoshop',
    'Figma',
    'Glyphs App',
    'Adobe Lightroom',
    'Cinema 4D Basics',
    'Motion / After Effects',
  ],
  socials: [
    { name: 'Behance', url: 'https://behance.net', handle: 'behance.net/tringuyen' },
    { name: 'Dribbble', url: 'https://dribbble.com', handle: 'dribbble.com/tringuyen' },
    { name: 'Instagram', url: 'https://instagram.com', handle: '@tringuyen.design' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'linkedin.com/in/tringuyen' },
  ],
};

export const CATEGORIES = [
  { key: 'all', labelVi: 'Tất cả dự án', labelEn: 'All Works' },
  { key: 'brand', labelVi: 'Nhận diện thương hiệu', labelEn: 'Brand Identity' },
  { key: 'menu', labelVi: 'Menu & Ẩm thực', labelEn: 'Cafe & Beverage' },
  { key: 'packaging', labelVi: 'Bao bì & Nhãn dán', labelEn: 'Packaging' },
  { key: 'digital', labelVi: 'Truyền thông số', labelEn: 'Social Campaign' },
  { key: 'poster', labelVi: 'Poster & Quảng cáo', labelEn: 'Poster & Ads' },
  { key: 'print', labelVi: 'Ấn phẩm in ấn', labelEn: 'Print & Book' },
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'aether-brand-identity',
    title: 'AETHER Studio',
    category: 'Brand Identity',
    categoryVi: 'Nhận diện thương hiệu',
    categoryKey: 'brand',
    year: '2025',
    image: '/src/assets/images/project_brand_identity_1791735136647.jpg',
    gallery: [
      '/src/assets/images/project_brand_identity_1791735136647.jpg',
      '/src/assets/images/hero_editorial_showcase_1791735121824.jpg',
      '/src/assets/images/project_print_editorial_1791735239796.jpg',
    ],
    client: 'Aether Architecture & Craft',
    timeframe: '8 Tuần',
    overview:
      'Hệ thống nhận diện thương hiệu hoàn chỉnh cho văn phòng kiến trúc và thiết kế cảnh quan đương đại tại Sài Gòn, tôn vinh hình khối hình học và chất liệu tự nhiên.',
    objectives: [
      'Xây dựng phong cách nhận diện tối giản, sang trọng nhưng ấm áp với chất liệu giấy mỹ thuật',
      'Thiết kế font chữ tùy biến cho logo mark và hệ lưới tỷ lệ vàng chuẩn xác',
      'Đồng bộ hóa văn phòng phẩm in ấn cao cấp kết hợp kỹ thuật ép nhũ đồng mờ trên giấy cotton thô',
    ],
    creativeDirection:
      'Sử dụng gam màu bone white, matte black và đá travertine tự nhiên, kết hợp kiểu chữ serif khắc nét cổ điển đối trọng với typography sans-serif hiện đại.',
    deliverables: [
      'Visual Identity System & Logo Suite',
      'Brand Guidelines Book (84 trang)',
      'Stationery & Foil-stamped Business Cards',
      'Architectural Portfolio Template',
      'Office Signage & Material Standards',
    ],
    featured: true,
  },
  {
    id: 'mizu-hoa-cafe-menu',
    title: 'Mizu & Hoa Cà Phê & Trà',
    category: 'Cafe & Beverage Menu',
    categoryVi: 'Menu quán trà & Cà phê',
    categoryKey: 'menu',
    year: '2025',
    image: '/src/assets/images/project_menu_cafe_1791735151888.jpg',
    gallery: [
      '/src/assets/images/project_menu_cafe_1791735151888.jpg',
      '/src/assets/images/hero_editorial_showcase_1791735121824.jpg',
    ],
    client: 'Mizu & Hoa Tea Lounge, Saigon',
    timeframe: '4 Tuần',
    overview:
      'Thiết kế thực đơn biên tập và trải nghiệm bàn cho không gian trà thảo mộc & cà phê kết hợp phong cách Nhật Bản - Việt Nam tại Quận 1, TP. Hồ Chí Minh.',
    objectives: [
      'Tối ưu hóa khả năng đọc trong điều kiện ánh sáng dịu nhẹ của quán',
      'Phân tầng thông tin mạch lạc giữa dòng trà Kyoto truyền thống và đặc sản cà phê hoa sen phin Việt Nam',
      'Ứng dụng chất liệu giấy xơ thủ công chống ẩm kết hợp kẹp đồng nguyên khối',
    ],
    creativeDirection:
      'Lấy cảm hứng từ thẩm mỹ Wabi-sabi và tinh thần tối giản, với kiểu chữ thanh thoát kết hợp nét vẽ biểu trưng hoa sen và hạc giấy origami mộc mạc.',
    deliverables: [
      'Editorial Table Menu Cards',
      'Bar Counter Display Signage',
      'Coaster & Embossed Cup Sleeves',
      'Signature Tea Cards (Bộ thẻ ghi chú nguồn gốc trà)',
      'Digital Interactive Menu for iPad',
    ],
    featured: true,
  },
  {
    id: 'luna-botanicals-packaging',
    title: 'Luna Botanicals',
    category: 'Packaging & Label Design',
    categoryVi: 'Bao bì & Nhãn dán',
    categoryKey: 'packaging',
    year: '2024',
    image: '/src/assets/images/project_packaging_1791735163655.jpg',
    gallery: [
      '/src/assets/images/project_packaging_1791735163655.jpg',
      '/src/assets/images/project_brand_identity_1791735136647.jpg',
    ],
    client: 'Luna Natural Cosmetics',
    timeframe: '6 Tuần',
    overview:
      'Hệ thống bao bì dòng tinh dầu dưỡng ẩm hữu cơ cao cấp chiết xuất từ hoa hồng và phong lữ vùng cao nguyên Đà Lạt.',
    objectives: [
      'Tạo dấu ấn khác biệt trên quầy kệ mỹ phẩm hữu cơ phân khúc cao cấp',
      'Kết hợp nét vẽ thực vật học tinh tế với bố cục kiểu chữ chuẩn mực',
      'Sử dụng vật liệu thủy tinh màu hổ phách tái chế và vỏ hộp giấy kraft tự nhiên',
    ],
    creativeDirection:
      'Hình minh họa thực vật khắc nét tối giản phối cùng họa tiết trăng khuyết và nhũ vàng dập chìm sang trọng, mang lại cảm giác an yên và thuần khiết.',
    deliverables: [
      'Dropper Bottle Label Design (30ml & 50ml)',
      'Outer Gift Packaging Box Structure',
      'Embossed Die-cut Sleeves',
      'Botanical Illustration Library',
      'Pre-press Print Master Specifications',
    ],
    featured: true,
  },
  {
    id: 'dong-streetwear-campaign',
    title: 'ĐỒNG: Tradition Reborn',
    category: 'Social Media Campaign',
    categoryVi: 'Chiến dịch truyền thông số',
    categoryKey: 'digital',
    year: '2024',
    image: '/src/assets/images/project_social_campaign_1791735215029.jpg',
    gallery: [
      '/src/assets/images/project_social_campaign_1791735215029.jpg',
      '/src/assets/images/project_poster_design_1791735228101.jpg',
    ],
    client: 'ĐỒNG Apparel Hanoi',
    timeframe: '5 Tuần',
    overview:
      'Định hướng thị giác và bộ tài nguyên truyền thông kỹ thuật số cho chiến dịch ra mắt bộ sưu tập thời trang đường phố đương đại lấy cảm hứng từ văn hóa dân gian Việt Nam.',
    objectives: [
      'Tạo năng lượng thị giác mạnh mẽ, phá cách thu hút thế hệ trẻ thành thị',
      'Kết hợp typography khổ lớn với ảnh chụp lookbook phong cách đường phố Hà Nội đêm',
      'Chuẩn hóa hệ thống bố cục cho Instagram Reels, Carousel và TikTok',
    ],
    creativeDirection:
      'Tương phản cao giữa kiểu chữ Gothic đậm tính tuyên ngôn, ánh sáng neon cam/xanh và họa tiết hoa văn truyền thống cách điệu.',
    deliverables: [
      'Campaign Visual Identity Key Art',
      'Social Media Content System (24 Layouts)',
      'Motion Typography Title Cards',
      'Digital Lookbook PDF & Web Edition',
      'Influencer Unboxing Media Kit',
    ],
  },
  {
    id: 'resonance-sound-architecture',
    title: 'Resonance Sound & Space',
    category: 'Poster & Advertising',
    categoryVi: 'Poster & Quảng cáo triển lãm',
    categoryKey: 'poster',
    year: '2024',
    image: '/src/assets/images/project_poster_design_1791735228101.jpg',
    gallery: [
      '/src/assets/images/project_poster_design_1791735228101.jpg',
      '/src/assets/images/hero_editorial_showcase_1791735121824.jpg',
    ],
    client: 'Saigon Contemporary Arts Center',
    timeframe: '3 Tuần',
    overview:
      'Chuỗi poster giám tuyển cho tuần lễ liên hoan âm thanh và kiến trúc đương đại Sài Gòn, hội tụ các kiến trúc sư và nghệ sĩ âm thanh quốc tế.',
    objectives: [
      'Thể hiện sự cộng hưởng hữu cơ giữa tần số âm thanh và cấu trúc hình khối không gian',
      'Ứng dụng hệ thống lưới Swiss Grid với kiểu chữ condensed cực lớn tạo sức hút thị giác từ xa',
      'Điểm nhấn màu xanh lá chanh vivid lime green trên nền đen sâu thẳm',
    ],
    creativeDirection:
      'Cấu trúc hình học modular phân mảng mô phỏng nhịp điệu của âm bass và mặt cắt công trình kiến trúc, in bằng kỹ thuật Risograph hai lớp màu đặc biệt.',
    deliverables: [
      'B1 & A0 Exhibition Poster Series (3 variants)',
      'Digital Billboards & LED Screen Assets',
      'Folding Event Guide & Map',
      'Silkscreen VIP Pass & Merchandise Badges',
    ],
  },
  {
    id: 'architectural-framework-book',
    title: 'Urban Framework Monograph',
    category: 'Print Design',
    categoryVi: 'Thiết kế in ấn & Xuất bản',
    categoryKey: 'print',
    year: '2023',
    image: '/src/assets/images/project_print_editorial_1791735239796.jpg',
    gallery: [
      '/src/assets/images/project_print_editorial_1791735239796.jpg',
      '/src/assets/images/hero_editorial_showcase_1791735121824.jpg',
    ],
    client: 'Urban Architecture Publishing',
    timeframe: '10 Tuần',
    overview:
      'Thiết kế biên tập cho ấn phẩm chuyên khảo kiến trúc đô thị 280 trang, khảo cứu các giải pháp cấu trúc mật độ nhà ở hiện đại tại các đô thị Đông Nam Á.',
    objectives: [
      'Xây dựng hệ thống phân cấp lưới 12 cột cho các bản vẽ kỹ thuật và tiểu luận chuyên ngành',
      'Gia công bìa cứng bọc vải linen xám than với chữ ép nhũ vàng dập sâu bền bỉ',
      'Kiểm soát nghiêm ngặt độ sắc nét của đường vẽ vector trên giấy mỹ thuật không tráng phủ',
    ],
    creativeDirection:
      'Thẩm mỹ sách kiến trúc kinh điển của châu Âu, khoảng trắng hào phóng, số trang và chú thích dạng tabular số học chuẩn xác.',
    deliverables: [
      'Complete 280-page Monograph Editorial Layout',
      'Hardcover Linen Binding & Foil Stamping Design',
      'Technical Infographics & Diagram Styling',
      'Pre-press Color Calibration & Proof Approval',
      'Archival Slipcase Box Design',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'brand-identity',
    number: '01',
    titleEn: 'Brand Identity',
    titleVi: 'Nhận diện thương hiệu',
    description:
      'Xây dựng hệ thống nhận diện từ nền tảng: từ ý niệm cốt lõi, logo mark, hệ màu, hệ kiểu chữ đến tài liệu quy chuẩn thương hiệu toàn diện.',
    deliverables: [
      'Định vị ngôn ngữ thị giác',
      'Hệ thống logo & biến thể',
      'Quy chuẩn typography & bảng màu',
      'Stationery & văn phòng phẩm',
      'Brand Guidelines Book (PDF & Web)',
    ],
  },
  {
    id: 'graphic-design',
    number: '02',
    titleEn: 'Graphic Design & Art Direction',
    titleVi: 'Thiết kế đồ họa & Giám đốc thị giác',
    description:
      'Sáng tạo các ấn phẩm thị giác mang tính định hình phong cách, poster nghệ thuật, brochure sự kiện và key visual cho triển lãm, sự kiện văn hóa.',
    deliverables: [
      'Key Visual sự kiện & triển lãm',
      'Poster nghệ thuật & quảng cáo',
      'Brochure, Lookbook & Catalog',
      'Định hướng concept hình ảnh',
      'Visual asset kit cho thương hiệu',
    ],
  },
  {
    id: 'packaging-design',
    number: '03',
    titleEn: 'Packaging & Label Design',
    titleVi: 'Thiết kế bao bì & Nhãn dán',
    description:
      'Giải pháp bao bì từ kết cấu hộp đến đồ họa nhãn dán, tối ưu hóa công năng bảo quản, trải nghiệm unboxing và sức hút nổi bật trên quầy kệ.',
    deliverables: [
      'Thiết kế nhãn chai lọ, hũ mỹ phẩm & thực phẩm',
      'Cấu trúc hộp giấy, bao bì quà tặng',
      'Quy chuẩn chất liệu in (ép kim, dập nổi, bế khuôn)',
      'Bộ mockup 3D thương mại',
      'Bàn giao file in chuẩn xưởng sản xuất',
    ],
  },
  {
    id: 'digital-campaigns',
    number: '04',
    titleEn: 'Digital Campaigns & Systems',
    titleVi: 'Chiến dịch truyền thông số',
    description:
      'Hệ thống tài nguyên truyền thông cho nền tảng số, giữ trọn tính nhất quán của bộ nhận diện trên mạng xã hội, website và các chiến dịch quảng cáo.',
    deliverables: [
      'Bộ template mạng xã hội đa định dạng',
      'Digital campaign key visuals',
      'Motion graphics title & transition cards',
      'Banner quảng cáo số & newsletter layout',
      'Hướng dẫn ứng dụng cho team nội dung',
    ],
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    titleVi: 'Khám phá & Định hướng',
    titleEn: 'Discovery & Direction',
    desc: 'Lắng nghe tầm nhìn của khách hàng, phân tích bối cảnh thị trường và xác lập moodboard định hướng mỹ thuật rõ ràng.',
  },
  {
    step: '02',
    titleVi: 'Ý niệm & Thiết kế',
    titleEn: 'Concept & Iteration',
    desc: 'Phát triển các phương án thiết kế độc bản, thử nghiệm trên hệ lưới typography và chất liệu thực tế để chọn hướng đi tối ưu.',
  },
  {
    step: '03',
    titleVi: 'Hoàn thiện & Bàn giao',
    titleEn: 'Refinement & Delivery',
    desc: 'Hiệu chỉnh chi tiết tỉ mỉ, biên soạn cẩm nang hướng dẫn sử dụng và bàn giao toàn bộ tệp thiết kế hoàn chỉnh sẵn sàng cho in ấn & số hóa.',
  },
];
