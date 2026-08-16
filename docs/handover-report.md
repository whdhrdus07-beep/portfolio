# 포트폴리오 사이트 — 세션 인수인계 보고서

> **날짜**: 2026-08-17
> **프로젝트**: portfolio (Next.js 16 포트폴리오)
> **배포 URL**: https://hwani-portfolio.vercel.app/
> **GitHub**: https://github.com/whdhrdus07-beep/portfolio

---

## 1. 세션 개요

이 세션에서 포트폴리오 사이트를 처음부터 점검 → 개선 → 배포까지 전 과정을 진행했습니다.
Windows 경로 길이 제한 문제 해결, 디자인 시스템 토큰 구축, 접근성 개선, 콘텐츠 업데이트, Vercel 배포까지 다룹니다.

---

## 2. 기술 스택

| 항목 | 버전 |
|------|------|
| Next.js | 16.2.10 |
| React | 19.2.4 |
| TypeScript | 5 |
| Tailwind CSS | v4 (postcss 플러그인) |
| 배포 | Vercel (static export) |

---

## 3. Winodws 경로 문제 해결

### 문제
프로젝트가 깊은 디렉토리(`G:\4_F 드라이브\...\portfolio`)에 있어 Next.js 빌드 시 파일 경로 길이가 Windows MAX_PATH(260자)를 초과하여 빌드 실패.

### 해결
1. **레지스트리 변경**: `LongPathsEnabled = 1` 설정으로 Windows 긴 경로 지원 활성화
   - 경로: `HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem`
2. **짧은 경로에서 개발**: `C:\p2\portfolio`에 전체 프로젝트 복사본을 두고 빌드/개발 진행
3. **distDir 단축**: `next.config.ts`에 `distDir: ".next_build"` 설정
4. **Junction**: `C:\p` → 원본 프로젝트 경로로 junction 생성 (경로 참조용)

### 참고
- 실제 소스는 `C:\p2\portfolio`에서 관리
- 원본 `G:\...\portfolio`는 별도 백업으로 유지
- 빌드 시 `.next_build/` 디렉토리 사용 (`.next/` 아님)

---

## 4. Git 히스토리

| 커밋 | 설명 |
|------|------|
| `851564c` | feat: update profile, footer links, and project info |
| `8e6737a` | feat: add SEO meta tags and icon accessibility |
| `eb7c80b` | feat: add scroll-to-top button and social links in footer |
| `be3ac20` | refactor: change Resume button to Contact CTA in header |
| `52e446a` | feat: improve project card thumbnails with icon system |
| `9ca4478` | feat: add skip-nav and focus-visible styles for accessibility |
| `108f21e` | refactor: design system tokens, accessibility, and UX improvements |
| `6e30d55` | chore: initial portfolio site scaffold |

### 원격 저장소
- **URL**: https://github.com/whdhrdus07-beep/portfolio.git
- **브랜치**: main
- **현재 HEAD**: `851564c`

---

## 5. 변경 내용 상세

### 5.1 디자인 시스템 (globals.css)
- CSS 커스텀 프로퍼티 구축: `--background`, `--surface`, `--border`, `--accent`, `--text-*` 등
- Tailwind `@theme inline`으로 토큰 매핑
- `focus-visible` 글로벌 스타일 (키보드 접근성)
- 스크롤바 스타일

### 5.2 접근성
- **skip-nav**: Tab 키로 "본문으로 바로가기" 링크 표시 → `#main-content` 이동
- **focus-visible**: 키보드 포커스 시 에메랄드 링 표시
- **aria-expanded**: 모바일 메뉴 버튼 상태 바인딩
- **aria-label**: 모든 아이콘 버튼에 레이블
- **aria-hidden**: 장식용 SVG 아이콘 숨김
- **Escape 키**: 모바일 메뉴 닫기
- **외부 클릭**: 모바일 메뉴 외부 클릭시 닫기

### 5.3 헤더 (Header.tsx)
- Resume → Contact CTA로 변경 (`#contact` 앵커)
- 스크롤 시 배경 블러 효과
- 모바일: 햄버거 메뉴 with 외부 클릭/ESC 닫기

### 5.4 히어로 (Hero.tsx)
- 스크롤 다운 인디케이터 추가 (하단 화살표)
- CSS 토큰 컬러 적용

### 5.5 About 섹션
- "개발자" → "디자이너" 텍스트 수정
- 하이라이트 카드 hover 효과 추가

### 5.6 프로젝트 카드 (Projects.tsx)
- `ProjectThumbnail` 컴포넌트: 태그별 기하학적 아이콘 + 이니셜
- 각 프로젝트별 컬러 그라데이션 (`color` 필드)
- 이미지 로드 시 hover scale 효과
- placeholder 이미지 오버레이

### 5.7 Contact 폼
- 이메일 필드 추가
- 제출 후 5초 자동 리셋
- SVG 아이콘 (Mail, GitHub, LinkedIn)
- 모든 아이콘에 `aria-hidden`

### 5.8 Footer
- **전화번호**: `tel:` 링크로 클릭 가능
- **이메일**: `mailto:` 링크
- **GitHub**: `https://github.com/whdhrdus07-beep/todo-app`
- **LinkedIn**: `https://linkedin.com/in/kyunghwankim` (향후 카카오톡으로 교체 예정)
- **스크롤 탑 버튼**: 400px 스크롤 후 나타남, 부드러운 스크롤

### 5.9 SEO 메타태그 (layout.tsx)
- Open Graph tags (og:title, og:description, og:url, og:locale)
- Twitter Card (summary_large_image)
- keywords, authors

### 5.10 콘텐츠 업데이트 (portfolio.ts)
| 항목 | 전 | 후 |
|------|-----|-----|
| 이메일 | hello@example.com | whdhrdus07@gmail.com |
| GitHub | https://github | https://github.com/whdhrdus07-beep/todo-app |
| 위치 | Seoul, Korea | Ulsan, Korea |
| 경력 | 3+ years | 1.8+ years |
| 관심분야 | UI/UX · Branding · Visual Design | Visual Design · Marketing · Branding |
| 프로젝트 | placeholder만 | Todo App 라이브 데모 + GitHub 링크 추가 |

---

## 6. 빌드 & 배포

### 빌드 명령
```bash
# 짧은 경로에서 실행 (C:\p2\portfolio)
cd C:/p2/portfolio
rm -rf .next_build
npx next build
```

### 배포
- **플랫폼**: Vercel
- **방식**: GitHub 연동 (자동 배포)
- **프로덕션 URL**: https://hwani-portfolio.vercel.app/

---

## 7. próximo 작업 (TODO)

### 즉시 필요한 것
- [ ] portfolio.ts의 `resumeUrl`: 현재 `#` — 실제 이력서 링크 넣을 것
- [ ] 프로젝트 카드 이미지: placeholder 아이콘 → 실제 스크린샷/작업물 이미지
- [ ] LinkedIn → 카카오톡 교체: Footer의 `socialLinks` 배열만 수정하면 됨
  ```ts
  const socialLinks = [
    { href: siteConfig.github, label: "GitHub" },
    { href: "https://kakao.com/...", label: "KakaoTalk" },  // ← 이것만 교체
  ];
  ```

### 개선 아이디어
- [ ] 언어 토글 (한국어/영어) — 현재 국제 방문자용 영어 버전 없음
- [ ] 다크/라이트 모드 토글
- [ ] 프로젝트 상세 페이지 분리
- [ ] 페이지네이션/무한스크롤 (프로젝트 많아질 때)
- [ ] 성능 모니터링 (Vercel Analytics)

---

## 8. 주요 파일 경로

```
C:\p2\portfolio\                          ← 개발/빌드 작업 디렉토리
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← 메타태그, skip-nav
│   │   ├── page.tsx            ← 섹션 조립
│   │   └── globals.css         ← 디자인 토큰, focus-visible
│   ├── components/
│   │   ├── Header.tsx          ← 내비게이션, 모바일 메뉴
│   │   ├── Hero.tsx            ← 히어로, 스크롤 인디케이터
│   │   ├── About.tsx           ← 프로필 섹션
│   │   ├── Projects.tsx        ← 프로젝트 카드 그리드
│   │   ├── Skills.tsx          ← 기술 스택
│   │   ├── Contact.tsx         │ 연락처 폼
│   │   └── Footer.tsx          │ 푸터, 스크롤 탑
│   └── data/
│       └── portfolio.ts        ← 모든 콘텐츠 데이터 (여기만 수정)
├── next.config.ts              ← distDir: ".next_build"
└── .gitignore                  ← .next_build/ , out/ 제외
```

---

## 9. 환경 설정 참고

### 레지스트리
```
HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem\LongPathsEnabled = 1 (DWORD)
```

### Junction
```
C:\p → G:\4_F 드라이브\Dropbox\...\프로젝트
```

### .gitignore
```
# .next/ 대신 .next_build/ 사용 (긴 경로 회피)
.next_build/
out/
node_modules/
```

---

## 10. 연관 프로젝트

| 프로젝트 | 위치 | 상태 |
|----------|------|------|
| Portfolio | `C:\p2\portfolio\` | 배포 완료 |
| Todo App | `...\프로젝트\todo-app\` | Vercel 배포 (https://todo-app-hawni.vercel.app) |
| AI-Note | `...\프로젝트\AI-Note\` | 스트리밍 자막 생성기 |
| Review Receipt | `...\프로젝트\REVIEW RECEIPT_식당 간편 리뷰 웹앱\` | 식당 리뷰 웹앱 |

---

*이 문서는 다음 개발자가 프로젝트를 빠르게 파악하고 작업을 이어갈 수 있도록 작성되었습니다.*