import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refresh On (리프레시온) - 서울·경기·인천 24시 프리미엄 홈케어 & 테라피 제휴 정보",
  description: "서울, 경기, 인천 수도권 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈타이, 스웨디시, 아로마 힐링 케어 제휴업체 정보 안내.",
  openGraph: {
    title: "Refresh On (리프레시온) - 서울·경기·인천 24시 프리미엄 홈케어 & 테라피 제휴 정보",
    description: "서울, 경기, 인천 수도권 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈타이, 스웨디시, 아로마 힐링 케어 제휴업체 정보 안내.",
    siteName: "Refresh On",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}