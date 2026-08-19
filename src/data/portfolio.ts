export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  github: string;
  image?: string;
  color?: string;
  thumbnail?: string;
  gallery?: string[];
  role?: string;
  duration?: string;
  client?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  designPoints?: string[];
  process?: string;
  tech?: string[];
  pdfUrl?: string;
}

export const siteConfig = {
  name: "김경환",
  title: "웹 \xB7 시각 디자인",
  tagline:
    "브랜드의 본질을 시각 언어로 번역합니다. " +
    "사용자 경험과 조형적 완성도를 동시에 잡는 디자인을 만듭니다.",
  email: "whdhrdus07@gmail.com",
  github: "https://github.com/whdhrdus07-beep/todo-app",
  linkedin: "https://linkedin.com/in/kyunghwankim",
  resumeUrl: "#",
  phone: "010-9362-2979",
};

export const about = {
  description: [
    "안녕하세요! 웹과 시각 디자인을 통해 " +
      "브랜드의 메시지를 명확하고 아름답게 전달하는 디자이너입니다.",
    "사용자 경험과 시각적 완성도를 모두 중요하게 생각하며, " +
      "클라이언트와의 소통을 바탕으로 문제를 정의하고 " +
      "목적에 맞는 디자인 솔루션을 제안합니다.",
  ],
  highlights: [
    { label: "경력", value: "1.8+ years" },
    { label: "위치", value: "Ulsan, Korea" },
    { label: "관심 분야", value: "Visual Design \xB7 Marketing \xB7 Branding" },
  ],
};

export const projects: Project[] = [
  {
    title: "Todo App",
    description:
      "React + Vite + Tailwind CSS로 만든 할 일 관리 웹앱. " +
      "우선순위, 실시간 시계, 필터, localStorage 저장을 지원합니다.",
    tags: ["UI/UX", "Figma", "Web Design", "React"],
    href: "https://todo-app-hawni.vercel.app",
    github: "https://github.com/whdhrdus07-beep/todo-app",
    color: "from-primary/15 to-primary-soft/10",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2주",
    client: "개인 프로젝트",
    problem:
      "기존 할 일 앱들이 단순한 체크박스 기능만 제공하여, 작업의 우선순위와 진행 상황을 한눈에 파악하기 어려웠습니다.",
    solution:
      "우선순위 기반 정렬, 실시간 시계 연동, 카테고리 필터, 로컬 저장 기능을 통합하여 생산성에 초점을 맞춘 앱을 설계했습니다.",
    keyFeatures: [
      "우선순위에 따른 자동 정렬 (High / Medium / Low)",
      "실시간 시계와 마감 시간 연동",
      "카테고리별 필터링 및 검색",
      "localStorage 기반 오프라인 저장",
      "다크/라이트 테마 지원",
    ],
    designPoints: [
      "오렌지 accent를 메인 CTA에 집중시켜 사용자의 시선 유도",
      "넉넉한 여백과 명확한 타이포 계층으로 정보 스캔 효율 향상",
      "카드 기반 그리드 레이아웃으로 모바일 친화적 UI 구현",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript", "localStorage"],
    thumbnail: "",
    gallery: [],
  },
  {
    title: "Brand Identity — Café Luna",
    description:
      "로컬 카페 브랜드 아이덴티티 디자인. " +
      "로고, 컬러 시스템, 메뉴판 및 SNS 템플릿을 제작했습니다.",
    tags: ["Branding", "Logo", "Print", "Visual Design"],
    href: "#",
    github: "https://github.com/whdhrdus07-beep/todo-app",
    color: "from-primary/20 to-primary/5",
    role: "Visual Designer",
    duration: "3주",
    client: "Café Luna (개인 카페)",
    problem:
      "신규 오픈하는 로컬 카페가 대형 프랜차이즈와 차별화되는 브랜드 정체성을 필요로 했습니다.",
    solution:
      "따뜻한 느낌의 러스틱 브랜딩을 컨셉으로, 로고부터 메뉴판, SNS 템플릿까지 일관된 아이덴티티를 구축했습니다.",
    keyFeatures: [
      "컨셉 기반 로고 디자인 (러스틱 & 웜톤)",
      "5가지 컬러 시스템 정의 및 활용 가이드",
      "메뉴판 대형 벽면 디자인",
      "인스타그램 SNS 템플릿 12종",
      "명함, 테이크아웃 컵 디자인",
    ],
    designPoints: [
      "따뜻한 오렌지·브라운 계열 색상으로 브랜드 톤앤매너 정의",
      "타이포그래피와 일러스트가 어우러진 수제 느낌 강조",
      "실제 인쇄물까지 고려한 300dpi 출력 대응",
    ],
    tech: ["Photoshop", "Illustrator", "InDesign", "Figma"],
    thumbnail: "",
    gallery: [],
  },
  {
    title: "E-Commerce Web UI",
    description:
      "패션 브랜드 온라인 쇼핑몰 UI/UX 디자인. " +
      "모바일 퍼스트 레이아웃과 제품 상세 페이지를 설계했습니다.",
    tags: ["UI/UX", "Figma", "Web Design", "Mobile"],
    href: "#",
    github: "https://github.com/whdhrdus07-beep/todo-app",
    color: "from-primary/10 to-primary-soft/5",
    role: "UI/UX Designer",
    duration: "4주",
    client: "패션 브랜드 (클라이언트)",
    problem:
      "모바일 쇼핑 경험이 데스크톱 위주로 설계되어, 모바일 사용자의 이탈률이 높았습니다.",
    solution:
      "모바일 퍼스트 접근으로 제품 디스커버리부터 결제까지의 사용자 플로우를 재설계했습니다.",
    keyFeatures: [
      "모바일 퍼스트 반응형 레이아웃",
      "스와이프 기반 제품 갤러리",
      "빠른 장바구니 추가 & 체크아웃 플로우",
      "개인화 추천 위젯",
      "접근성 대응 (WCAG 2.1 AA)",
    ],
    designPoints: [
      "제품 이미지가 주인공이 되는 미니멀 UI",
      "시각적 계층을 통한 CTA 강조",
      "컴포넌트 기반 디자인 시스템 구축",
    ],
    tech: ["Figma", "Prototyping", "Design System", "Zeplin"],
    thumbnail: "",
    gallery: [],
  },
];

export const skills = [
  {
    category: "Design",
    items: [
      { name: "UI/UX", percent: 90 },
      { name: "Branding", percent: 85 },
      { name: "Typography", percent: 80 },
      { name: "Layout", percent: 88 },
      { name: "Color System", percent: 82 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Figma", percent: 92 },
      { name: "Photoshop", percent: 88 },
      { name: "Illustrator", percent: 85 },
      { name: "After Effects", percent: 70 },
      { name: "InDesign", percent: 78 },
    ],
  },
  {
    category: "Web",
    items: [
      { name: "HTML/CSS", percent: 90 },
      { name: "Responsive Design", percent: 85 },
      { name: "Design System", percent: 80 },
      { name: "Prototyping", percent: 85 },
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];