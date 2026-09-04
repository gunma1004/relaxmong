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

// 🎯 전체 업체 데이터 (5개 모두 포함)
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
  {
    id: 3,
    name: "💎 주주테라피",
    location: "서울·경기·인천 전지역",
    desc: "⚡ 철저한 위생 관리와 럭셔리 힐링 케어로 완성하는 일상의 완벽한 휴식",
    phone: "0507-1280-3180",
    badge: "24시 상시할인",
    badgeColor: "bg-purple-600 text-white",
    image: "/shop3.jpg",
    courses: [
      { name: "타이/아로마 코스 (60분)", price: "60,000원", best: false },
      { name: "한국 스웨디시케어 (60분)", price: "140,000원", best: true },
    ],
  },
  {
    id: 4,
    name: "🌟 퀸즈홈테라피",
    location: "서울·경기·인천 전지역",
    desc: "💯 전문 테라피스트들의 체계적이고 세심한 1:1 맞춤 피로 회복 프로그램",
    phone: "0507-1280-3228",
    badge: "신규 제휴할인",
    badgeColor: "bg-blue-600 text-white",
    image: "/shop4.jpg",
    courses: [
      { name: "스탠다드 타이코스 (60분)", price: "60,000원", best: false },
      { name: "VIP 스웨디시 (90분)", price: "140,000원", best: true },
    ],
  },
  {
    id: 5,
    name: "👑 24시미녀테라피",
    location: "서울·경기·인천 전지역",
    desc: "🚀 100% 현장 후불 정찰제! 수도권 전지역 평균 30분 내 신속 방문 보장",
    phone: "0507-1280-3183",
    badge: "재방문율 99%",
    badgeColor: "bg-emerald-500 text-black",
    image: "/shop5.jpg",
    courses: [
      { name: "릴렉스 타이 코스 (60분)", price: "60,000원", best: false },
      { name: "시그니처 스웨디시 (60분)", price: "140,000원", best: true },
    ],
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
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5">
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
                  href={`/${region}/${district}/${encodeURIComponent(dong)}`}
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