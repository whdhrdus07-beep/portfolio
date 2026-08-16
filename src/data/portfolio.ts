export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  github: string;
  image?: string;
  color?: string;
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
    title: "Brand Identity — Café Luna",
    description:
      "로컬 카페 브랜드 아이덴티티 디자인. " +
      "로고, 컬러 시스템, 메뉴판 및 SNS 템플릿을 제작했습니다.",
    tags: ["Branding", "Logo", "Print"],
    href: "#",
    github: "https://github.com/whdhrdus07-beep/todo-app",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Todo App",
    description:
      "React + Vite + Tailwind CSS로 만든 할 일 관리 웹앱. " +
      "우선순위, 실시간 시계, 필터, localStorage 저장을 지원합니다.",
    tags: ["UI/UX", "Figma", "Web Design"],
    href: "https://todo-app-hawni.vercel.app",
    github: "https://github.com/whdhrdus07-beep/todo-app",
    color: "from-violet-500/20 to-indigo-500/10",
  },
  {
    title: "E-Commerce Web UI",
    description:
      "패션 브랜드 온라인 쇼핑몰 UI/UX 디자인. " +
      "모바일 퍼스트 레이아웃과 제품 상세 페이지를 설계했습니다.",
    tags: ["UI/UX", "Figma", "Web Design"],
    href: "#",
    github: "https://github.com/whdhrdus07-beep/todo-app",
    color: "from-orange-500/20 to-rose-500/10",
  },
];

export const skills = [
  {
    category: "Design",
    items: ["UI/UX", "Branding", "Typography", "Layout", "Color System"],
  },
  {
    category: "Tools",
    items: ["Figma", "Photoshop", "Illustrator", "After Effects", "InDesign"],
  },
  {
    category: "Web",
    items: ["HTML/CSS", "Responsive Design", "Design System", "Prototyping"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];