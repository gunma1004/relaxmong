import { regionData } from "../../data/regions";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || "상세 지역";
  const regionName = regionInfo?.name || "수도권";

  const title = `${districtName} 출장 힐링 마사지 추천 제휴업체 순위 | 릴렉스몽`;
  const description = `${regionName} ${districtName} 전지역 30분 도착 보장! 릴렉스몽 검증된 1:1 출장 마사지.`;

  return {
    title,
    description,
    keywords: [`${regionName} ${districtName} 출장 힐링 마사지`, "릴렉스몽"],
  };
}

const shops = [
  {
    id: 1,
    name: "🔥 한국골든테라피",
    location: "서울·경기·인천 전지역",
    desc: "⭐ 만족도 1위! 프리미엄 1:1 홈힐링 테라피",
    phone: "0507-1280-3361",
    badge: "실시간 인기폭발",
    badgeColor: "bg-red-500 text-white",
    courses: [{ name: "프리미엄 스웨디시 (60분)", price: "140,000원", best: true }],
  },
];

export default async function DistrictPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;

  const regionInfo = regionData[region];
  const districtObj = regionInfo?.districts[district];
  const districtName = districtObj?.name || district;
  const regionName = regionInfo?.name || "수도권";
  const dongs = districtObj?.dongs || [];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-[#050505]/85 border-b border-amber-500/20 px-4 py-3.5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-amber-400 font-black text-xl">릴렉스몽</Link>
          <Link href="/" className="text-xs px-4 py-2 rounded-xl bg-amber-500 text-black font-extrabold">
            🏠 메인으로 가기
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <h1 className="text-2xl font-black text-white mb-2">
          🔥 {regionName} {districtName} 출장 힐링 마사지 추천 제휴업체
        </h1>
        <p className="text-xs text-gray-400 mb-8">{districtName} 전지역 30분 도착 보장</p>

        {dongs.length > 0 && (
          <div className="bg-[#18181b] border border-amber-500/40 p-6 rounded-3xl mb-10">
            <h2 className="text-xs text-amber-400 font-black mb-3">✨ {districtName} 세부 동별 출장마사지 선택</h2>
            <div className="flex flex-wrap gap-2">
              {dongs.map((dong, idx) => (
                <Link 
                  key={idx} 
                  href={`/${region}/${district}/${encodeURIComponent(dong)}-출장마사지`}
                  className="bg-black hover:bg-amber-500 hover:text-black text-gray-200 text-xs font-bold px-3 py-2 rounded-xl border border-amber-500/25 transition-all"
                >
                  {dong} 출장마사지
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-[#141416] border border-amber-500/25 p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-2">{shop.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{shop.desc}</p>
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