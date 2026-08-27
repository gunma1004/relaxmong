import "./globals.css"; //
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://relaxmong.netlify.app'),
  title: {
    default: '릴렉스몽 - 프리미엄 1:1 홈케어 테라피',
    template: '%s | 릴렉스몽',
  },
  description: '릴렉스몽 공식 프리미엄 홈케어 테라피. 서울·경기·인천 전 지역 30분 도착, 100% 현장 정찰제 및 맞춤 힐링 바디케어.',
  openGraph: {
    title: '릴렉스몽 - 프리미엄 1:1 홈케어 테라피',
    description: '서울·경기·인천 100% 후불 정찰제 프리미엄 힐링 홈케어.',
    url: 'https://relaxmong.netlify.app',
    siteName: '릴렉스몽',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}