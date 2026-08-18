import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://refresh-on.netlify.app"),
  title: {
    default: "Refresh On (리프레시온) - 서울·경기·인천 24시 프리미엄 홈케어 & 테라피 제휴 정보",
    template: "%s | Refresh On",
  },
  description:
    "서울, 경기, 인천 수도권 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈타이, 스웨디시, 아로마 힐링 케어 제휴업체 정보 안내.",
  keywords: [
    "Refresh On",
    "리프레시온",
    "홈케어",
    "방문테라피",
    "홈타이",
    "스웨디시",
    "아로마테라피",
    "서울 홈케어",
    "경기 홈케어",
    "인천 홈케어",
  ],
  // 🟢 네이버 서치어드바이저 소유권 확인 태그
  verification: {
    other: {
      "naver-site-verification": "991457cc6e5cd97bda215c4f3a6eb775053cf09e",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refresh On (리프레시온) - 서울·경기·인천 24시 프리미엄 홈케어 & 테라피 제휴 정보",
    description:
      "서울, 경기, 인천 수도권 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈타이, 스웨디시, 아로마 힐링 케어 제휴업체 정보 안내.",
    url: "https://refresh-on.netlify.app",
    siteName: "Refresh On",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Refresh On 로고",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased bg-[#050505] text-gray-100">{children}</body>
    </html>
  );
}