import { regionData } from "../../../data/regions";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    [key: string]: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;
  
  const values = Object.values(resolvedParams);
  const dongParam = values[values.length - 1] || "";
  const decodedDong = dongParam ? decodeURIComponent(dongParam).split("-")[0] : "";

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || district;

  const title = `${districtName} ${decodedDong} 출장 힐링 마사지 24시 신속방문 제휴안내 | 릴렉스몽`;
  const description = `${districtName} ${decodedDong} 출장 힐링 마사지 실시간 예약. 30분 내 빠른 도착과 100% 현장 후불 정찰제로 편안한 홈타이·스웨디시를 경험하세요.`;

  return {
    title,
    description,
    keywords: [
      `${districtName} ${decodedDong} 출장 힐링 마사지`,
      `${decodedDong} 출장 타이 마사지`,
      `${decodedDong} 출장 스웨디시 마사지`,
      "릴렉스몽",
    ],
    openGraph: { title, description, type: "website", siteName: "릴렉스몽" },
  };
}

const shops = [
  {
    id: 1,
    name: "🔥 한국골든테라피",
    location: "서울·경기·인천 전지역 (실시간 신속 방문)",
    desc: "⭐ 만족도 1위! 지친 일상을 깨우는 정성 가득한 프리미엄 1:1 홈힐링 테라피",
    phone: "0507-1280-3361",
    badge: "실시간 인기폭발",
    badgeColor: "bg-red-500 text-white animate-pulse",
    image: "/shop1.jpg",
    courses: [
      { name: "릴렉스 건식 케어 (60분)", price: "60,000원", best: false },
      { name: "프리미엄 스웨디시 (60분)", price: "140,000원", best: true },
    ],
  },
  {
    id: 2,
    name: "✨ 한국미인테라피",
    location: "서울·경기·인천 전지역",
    desc: "🏆 품격 있는 힐링을 선사하는 최고급 프라이빗 1:1 맞춤형 방문 테라피",
    phone: "0507-1280-3288",
    badge: "만족도 최우수",
    badgeColor: "bg-amber-500 text-black",
    image: "/shop2.jpg",
    courses: [
      { name: "맞춤형 바디 케어 (60분)", price: "90,000원", best: false },
      { name: "스페셜 아로마 힐링 (60분)", price: "140,000원", best: true },
    ],
  },
];

export default async function DongPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;
  
  const values = Object.values(resolvedParams);
  const dongParam = values[values.length - 1] || "";
  const decodedDong = dongParam ? decodeURIComponent(dongParam).split("-")[0] : "";

  const regionInfo = regionData[region];
  const districtObj = regionInfo?.districts[district];
  const districtName = districtObj?.name || district;

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-amber-400 font-black text-xl">릴렉스몽</Link>
          <Link href={`/${region}/${district}`} className="text-xs px-4 py-2 rounded-xl bg-neutral-800 text-amber-400 font-extrabold">
            ← {districtName} 전체 목록으로
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <h1 className="text-2xl font-black text-white mb-2">
          🔥 {districtName} {decodedDong} 출장 힐링 마사지 추천 제휴업체
        </h1>
        <p className="text-xs text-gray-400 mb-8">{decodedDong} 전지역 30분 내 신속 방문 가능한 100% 후불제 샵입니다.</p>

        <div className="space-y-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-[#141416] border border-amber-500/25 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">{shop.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{shop.desc}</p>
              <div className="space-y-2 mb-4">
                {shop.courses.map((course, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-gray-300 border-b border-white/5 py-1">
                    <span>{course.name}</span>
                    <span className="text-amber-400 font-bold">{course.price}</span>
                  </div>
                ))}
              </div>
              <a href={`tel:${shop.phone}`} className="block text-center bg-amber-500 text-black font-bold py-3 rounded-xl">
                📞 전화로 즉시예약 ({shop.phone})
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}