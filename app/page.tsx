import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '릴렉스몽 | 서울·경기·인천 프리미엄 1:1 방문 홈타이 힐링 테라피',
  description: '릴렉스몽 공식 홈케어. 서울·경기·인천 전 구역 30분 내 도착, 100% 현장 정찰제 결제와 프라이빗 1:1 맞춤 바디 테라피를 제공합니다.',
  keywords: ['릴렉스몽', '홈케어', '방문테라피', '스웨디시', '타이테라피', '아로마케어', '힐링테라피'],
  alternates: {
    canonical: 'https://relaxmong.netlify.app',
  },
};

export default function HomePage() {
  return (
    <main>
      <h1>릴렉스몽 프리미엄 홈케어</h1>
      {/* 메인 페이지 컨텐츠 */}
    </main>
  );
}