// 📍 app/page.tsx (서버 컴포넌트)
import type { Metadata } from "next";
import MainClientUI from "./MainClientUI";

// 🟢 1. 메인 페이지 정적 SEO 메타데이터 ('출장마사지' 키워드 제외 및 홈케어/테라피 중심)
export const metadata: Metadata = {
  title: "Refresh On (리프레시온) - 서울·경기·인천 24시 프리미엄 홈케어 & 테라피 제휴 정보",
  description: "서울, 경기, 인천 수도권 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈타이, 스웨디시, 아로마 힐링 케어 제휴업체 정보 안내.",
  openGraph: {
    title: "Refresh On (리프레시온) - 서울·경기·인천 24시 프리미엄 홈케어 & 테라피 제휴 정보",
    description: "서울, 경기, 인천 수도권 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈타이, 스웨디시, 아로마 힐링 케어 제휴업체 정보 안내.",
    type: "website",
    siteName: "Refresh On",
    images: [
      {
        url: "/my-banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refresh On (리프레시온) - 서울·경기·인천 24시 프리미엄 홈케어 & 테라피 제휴 정보",
    description: "서울, 경기, 인천 수도권 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈타이, 스웨디시, 아로마 힐링 케어 제휴업체 정보 안내.",
  },
};

export default function MainPage() {
  return <MainClientUI />;
}