import { regionData } from "../../../data/regions";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    "dong-출장마사지": string;
  }>;
}

// 🟢 1. 동 단위 7개 템플릿 순환 동적 SEO 메타 태그 생성 (출장 + [중간단어] + 마사지 분리 패턴)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district, "dong-출장마사지": dongParam } = resolvedParams;
  
  // URL의 '역삼동-출장마사지' 형태에서 '-'를 기준으로 앞의 동 이름만 추출
  const rawDong = dongParam ? decodeURIComponent(dongParam).split("-")[0] : "";
  const decodedDong = rawDong;

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || district;
  const regionName = regionInfo?.name || "수도권";

  // 동 이름 및 구 이름의 문자열 해시 기반 7개 템플릿 균등 분기
  const hash = (decodedDong + district).split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const seed = hash % 7;

  let title = "";
  let description = "";

  switch (seed) {
    case 0:
      title = `${decodedDong} 출장 힐링 마사지 24시 신속방문 제휴안내 | 릴렉스몽`;
      description = `${districtName} ${decodedDong} 출장 힐링 마사지 실시간 예약. 30분 내 빠른 도착과 100% 현장 후불 정찰제로 편안한 홈타이·스웨디시를 경험하세요.`;
      break;
    case 1:
      title = `${districtName} ${decodedDong} 출장 타이 마사지 홈케어 추천 - 릴렉스몽`;
      description = `${decodedDong} 전지역 어디서나 부르는 프라이빗 출장 타이 마사지! 지친 일상에 활력을 더하는 1:1 맞춤 힐링 테라피 코스를 안내해드립니다.`;
      break;
    case 2:
      title = `${decodedDong} 출장 아로마 마사지 타이·아로마 힐링 케어 | 릴렉스몽`;
      description = `${regionName} ${districtName} ${decodedDong} 인근 전문 테라피스트 항시 대기. 내 공간에서 편하게 받는 안심 후불제 출장 아로마 마사지 서비스.`;
      break;
    case 3:
      title = `${decodedDong} 출장 스웨디시 마사지 제휴업체 정보 [릴렉스몽]`;
      description = `${decodedDong} 출장 스웨디시 마사지 고객 만족도 최우수 샵 추천! 24시간 연중무휴 신속 방문 서비스로 수준 높은 바디케어를 제공합니다.`;
      break;
    case 4:
      title = `${decodedDong} 출장 홈타이 마사지 1:1 방문 홈타이 예약 - 릴렉스몽`;
      description = `${districtName} ${decodedDong} 전구역 30분 도착 보장. 철저한 위생 관리와 정찰제 요금으로 신뢰받는 출장 홈타이 마사지 베스트 제휴점 모음.`;
      break;
    case 5:
      title = `${decodedDong} 출장 릴렉스 마사지 안심 후불제 테라피 추천 | 릴렉스몽`;
      description = `${decodedDong} 힐링 테라피 전문 힐러 실시간 배차! 건식 타이부터 프리미엄 스웨디시까지 맞춤형 출장 릴렉스 마사지를 지금 확인하세요.`;
      break;
    case 6:
    default:
      title = `${districtName} ${decodedDong} 출장 홈케어 마사지 베스트 제휴점 가이드 | 릴렉스몽`;
      description = `${regionName} ${districtName} ${decodedDong} 출장 홈케어 마사지 24시 상시 상담. 피로 회복을 위한 최고급 1:1 홈케어 코스 및 요금 안내.`;
      break;
  }

  return {
    title,
    description,
    keywords: [
      `${districtName} ${decodedDong} 출장 힐링 마사지`,
      `${decodedDong} 출장 힐링 마사지`,
      `${decodedDong} 출장 타이 마사지`,
      `${decodedDong} 출장 스웨디시 마사지`,
      `${decodedDong} 출장 아로마 마사지`,
      `${decodedDong} 출장 홈케어 마사지`,
      "릴렉스몽",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "릴렉스몽",
      images: [
        {
          url: "/my-banner.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// 🎯 제휴 업체 데이터
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

export default async function DongPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, "dong-출장마사지": dongParam } = resolvedParams;
  
  const rawDong = dongParam ? decodeURIComponent(dongParam).split("-")[0] : "";
  const decodedDong = rawDong;

  const regionInfo = regionData[region];
  const districtObj = regionInfo?.districts[district];
  const districtName = districtObj?.name || district;

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* 상단 네온 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="릴렉스몽 로고"
              className="w-10 h-10 rounded-xl object-cover border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                릴렉스몽
              </span>
              <span className="text-[10px] text-gray-400 tracking-tighter uppercase">
                RELAXMONG &middot; SEOUL &middot; GYEONGGI &middot; INCHEON
              </span>
            </div>
          </Link>

          <Link
            href={`/${region}/${district}`}
            className="text-xs px-4 py-2 rounded-xl bg-neutral-800 text-amber-400 font-extrabold border border-amber-500/30 hover:bg-neutral-700 transition-all"
          >
            ← {districtName} 전체 목록으로
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        {/* 📍 동 맞춤 비주얼 배너 */}
        <section className="text-center my-2">
          <div className="mb-8 overflow-hidden rounded-3xl border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative w-full">
            <img
              src="/my-banner.png"
              alt={`${districtName} ${decodedDong} 출장 힐링 마사지 메인 배너`}
              className="w-full h-auto object-cover block"
            />
          </div>
        </section>

        {/* 제휴 업체 카드 리스트 */}
        <section className="space-y-6">
          <div className="flex justify-between items-end mb-4 px-2">
            <div>
              <h1 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                <span>🔥</span> {districtName} {decodedDong} 출장 힐링 마사지 추천 제휴업체
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                {decodedDong} 전지역 30분 도착 가능한 100% 후불 정찰제 프리미엄 샵입니다.
              </p>
            </div>
          </div>

          {shops.map((shop) => (
            <article
              key={shop.id}
              className="bg-gradient-to-b from-[#141416] to-[#0d0d0f] border border-amber-500/25 hover:border-amber-500/60 transition-all duration-300 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group"
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={shop.image}
                  alt={`${decodedDong} ${shop.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/30"></div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`text-[11px] font-black px-3 py-1 rounded-full shadow-lg ${shop.badgeColor}`}
                  >
                    {shop.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 -mt-6 relative z-10">
                <div className="mb-2">
                  <span className="text-xs text-amber-400/90 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 inline-block mb-2">
                    📍 {districtName} {decodedDong} 전지역 신속 방문 (출장 힐링 마사지)
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {shop.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mb-5 font-medium bg-black/40 p-3 rounded-xl border border-white/5">
                  {shop.desc}
                </p>

                <div className="bg-black/60 rounded-2xl p-4 mb-6 space-y-2.5 border border-white/5 shadow-inner">
                  <div className="text-[11px] text-amber-400 font-bold tracking-wider mb-1 uppercase">
                    💎 대표 코스 및 요금 안내
                  </div>
                  {shop.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-xs md:text-sm items-center py-1.5 border-b border-white/5 last:border-0"
                    >
                      <span className="text-gray-200 flex items-center gap-2 font-medium">
                        {course.best && (
                          <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-black">
                            BEST
                          </span>
                        )}
                        {course.name}
                      </span>
                      <span className="font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                        {course.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <a
                    href={`tel:${shop.phone}`}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black py-4 rounded-2xl text-xs md:text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] transform active:scale-95"
                  >
                    <span className="text-base">📞</span> 전화로 즉시예약
                  </a>
                  <a
                    href={`sms:${shop.phone}?body=${encodeURIComponent(
                      `${districtName} ${decodedDong} ${shop.name} 출장 힐링 마사지 예약 문의드립니다. (릴렉스몽 보고 연락드렸어요)`
                    )}`}
                    className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-black py-4 rounded-2xl text-xs md:text-sm border border-white/10 transition-all hover:border-amber-500/40 transform active:scale-95 shadow-md"
                  >
                    <span className="text-base">💬</span> 간편 문자상담
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="bg-[#030303] border-t border-white/10 py-10 text-center text-gray-500 text-xs mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <p className="text-gray-400 font-bold">릴렉스몽은 건전하고 안전한 1:1 방문 홈케어 정보 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; RELAXMONG ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}