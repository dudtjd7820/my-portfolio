import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김영성 | Full Stack Developer Portfolio",
  description:
    "6년 2개월 경력의 풀스택 개발자 김영성의 포트폴리오입니다. Spring Boot, Vue.js, TypeScript를 활용한 물류 시스템 개발 및 클린 아키텍처 설계 경험을 보유하고 있습니다.",
  keywords: [
    "김영성",
    "개발자 포트폴리오",
    "Full Stack Developer",
    "풀스택 개발자",
    "Spring Boot",
    "Vue.js",
    "TypeScript",
    "Java",
    "물류 시스템",
    "클린 아키텍처",
  ],
  authors: [{ name: "김영성", url: "https://github.com/kim-yeongseong" }],
  creator: "김영성",
  publisher: "김영성",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://kim-yeongseong.github.io",
    title: "김영성 | Full Stack Developer Portfolio",
    description:
      "6년 2개월 경력의 풀스택 개발자 김영성의 포트폴리오입니다. Spring Boot, Vue.js, TypeScript를 활용한 물류 시스템 개발 경험을 보유하고 있습니다.",
    siteName: "김영성 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "김영성 | Full Stack Developer Portfolio",
    description:
      "6년 2개월 경력의 풀스택 개발자 김영성의 포트폴리오입니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token", // Google Search Console 등록 후 추가
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://kim-yeongseong.github.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
