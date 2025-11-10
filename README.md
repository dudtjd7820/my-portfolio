# 🚀 김영성 - 개발자 포트폴리오

<div align="center">

[![Vercel Deploy](https://img.shields.io/badge/Vercel-Deploy-black?style=flat-square&logo=vercel)](https://kim-yeongseong.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css)

**6년 2개월 경력의 Full Stack Developer 포트폴리오**

[🌐 Live Demo](https://kim-yeongseong.vercel.app) | [📧 Contact](mailto:kim-yeongseong@naver.com) | [💼 GitHub](https://github.com/kim-yeongseong)

</div>

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [배포](#-배포)
- [개발자](#-개발자)

---

## 🎯 프로젝트 소개

개발자 이력서와 포트폴리오를 겸한 웹사이트입니다. 6년 2개월의 개발 경력, 프로젝트 이력, 기술 스택, 학습 기록 등을 시각적으로 표현했습니다.

### ✨ 특징

- 🎨 **모던한 디자인** - 라이트/다크 모드 지원
- 📱 **완벽한 반응형** - 모바일, 태블릿, 데스크톱 모두 지원
- ⚡ **빠른 성능** - Next.js 15 App Router 사용
- 🔍 **SEO 최적화** - 메타 태그, OG 이미지, sitemap 포함
- ♿ **접근성** - WCAG 가이드라인 준수
- 🎯 **TypeScript** - 타입 안정성 보장
- ✨ **부드러운 애니메이션** - Framer Motion 활용

---

## 🌟 주요 기능

### 1. Hero 섹션
- 그라데이션 애니메이션 타이틀
- 경력 강조 (6년 2개월)
- CTA 버튼 (경력 보기, GitHub, Email, LinkedIn)
- 배경 그라데이션 효과

### 2. About 섹션
- 핵심 역량 4가지 카드 표시
- 개발자 철학 및 자기소개
- 6개 카테고리 기술 스택 표시

### 3. Experience 섹션
- 📅 **타임라인 형태**로 경력 시각화
- 4개 회사 경력 상세 정보
- 각 회사별 주요 업무 및 기술 스택
- 재직 중 배지 표시

### 4. Projects 섹션
- 6개 주요 프로젝트 카드
- 프로젝트별 기술 스택, 설명, 링크
- 호버 애니메이션 효과

### 5. Studies 섹션
- 학습 및 자기개발 기록
- 카테고리별 분류
- 외부 링크 연동

### 6. Education 섹션
- 교육 이력 (KOSMO, KOSTA)
- 학습 내용 상세 표시

### 7. Contact 섹션
- 이메일, GitHub, LinkedIn 연락 수단
- 반응형 카드 레이아웃

---

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript 5.x
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.3
- **Animation**: Framer Motion 12.x
- **Icons**: lucide-react
- **Theme**: next-themes (Dark Mode)

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint 9.x
- **Version Control**: Git

### Deployment
- **Platform**: Vercel
- **Live URL**: https://kim-yeongseong.vercel.app
- **Region**: Seoul (ICN1)
- **SSL**: Automatic HTTPS
- **Analytics**: Vercel Analytics

---

## 🚀 시작하기

### Prerequisites

```bash
node >= 20.18.2
npm >= 10.9.1
```

### Installation

1. **저장소 클론**
```bash
git clone https://github.com/kim-yeongseong/my-portfolio.git
cd my-portfolio
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # 개발 서버 실행 (Turbopack)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

---

## 📁 프로젝트 구조

```
my-portfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 메인 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── Navigation.tsx     # 네비게이션 바
│   ├── Hero.tsx          # 히어로 섹션
│   ├── About.tsx         # 소개 섹션
│   ├── Experience.tsx    # 경력 타임라인
│   ├── Projects.tsx      # 프로젝트 목록
│   ├── Studies.tsx       # 학습 기록
│   ├── EducationSection.tsx  # 교육 이력
│   ├── Contact.tsx       # 연락처
│   └── Footer.tsx        # 푸터
├── data/                 # 데이터 파일
│   ├── profile.ts        # 프로필 정보
│   ├── skills.ts         # 기술 스택
│   ├── projects.ts       # 프로젝트 데이터
│   ├── studies.ts        # 학습 기록
│   ├── experience.ts     # 경력 데이터
│   └── education.ts      # 교육 이력
├── types/                # TypeScript 타입 정의
│   └── index.ts          # 공통 타입
├── public/               # 정적 파일
├── package.json          # 프로젝트 설정
├── tsconfig.json         # TypeScript 설정
├── tailwind.config.ts    # Tailwind 설정
└── next.config.ts        # Next.js 설정
```

---

## 🎨 커스터마이징

### 개인 정보 수정

1. **프로필 정보** (`data/profile.ts`)
```typescript
export const profile: Profile = {
  name: "김영성",
  role: "Full Stack Developer",
  bio: "...",
  email: "kim-yeongseong@naver.com",
  github: "https://github.com/kim-yeongseong",
};
```

2. **경력 정보** (`data/experience.ts`)
```typescript
export const experiences: Experience[] = [
  {
    company: "회사명",
    position: "직책",
    period: "2024.01 ~ 현재",
    // ...
  },
];
```

3. **프로젝트** (`data/projects.ts`)
```typescript
export const projects: Project[] = [
  {
    title: "프로젝트명",
    description: "설명",
    tags: ["React", "Node.js"],
    // ...
  },
];
```

---

## 🌐 배포

### Vercel (권장)

1. Vercel 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

```bash
# Vercel CLI 사용
npm install -g vercel
vercel
```

---

## 🤝 기여

이 프로젝트는 개인 포트폴리오이지만, 개선 제안은 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 개발자

**김영성** - Full Stack Developer

- 📧 Email: [kim-yeongseong@naver.com](mailto:kim-yeongseong@naver.com)
- 💼 GitHub: [@kim-yeongseong](https://github.com/kim-yeongseong)
- 🌐 Portfolio: [https://kim-yeongseong.vercel.app](https://kim-yeongseong.vercel.app)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Lucide Icons](https://lucide.dev/) - Icon Library
- [Vercel](https://vercel.com/) - Hosting Platform

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요! ⭐**

Made with ❤️ by [김영성](https://github.com/kim-yeongseong)

</div>
