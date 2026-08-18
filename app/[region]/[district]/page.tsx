import { regionData } from "../../data/regions";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
}

// 🟢 1. 구 단위 동적 SEO 메타 태그 생성 (구/시 단위 출장마사지 키워드 타깃팅)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || "상세 지역";
  const regionName = regionInfo?.name || "수도권";

  // 🎯 검색 유입 키워드를 전면에 배치하고 사이트명을 Refresh On으로 반영
  const title = `${regionName} ${districtName} 출장마사지 홈타이 추천 제휴업체 - Refresh On`;
  const description = `${regionName} ${districtName} 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이 및 스웨디시 제휴업체 실시간 안내.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
      title,
      description,
    },
  };
}

// 메인과 동일한 제휴 업체 데이터
const shops = [
  {
    id: 1,
    name: "🔥 한국미인홈케어",
    location: "서울·경기·인천 전지역 (실시간 신속 방문)",
    desc: "⭐ 만족도 1위! 지친 일상을 깨우는 정성 가득한 테라피 & 릴렉싱 프로그램",
    phone: "0507-1280-3172",
    badge: "실시간 인기폭발",
    badgeColor: "bg-red-500 text-white animate-pulse",
    image: "/shop1.jpg",
    courses: [
      { name: "릴렉스 건식 케어 (60분)", price: "60,000원", best: false },
      { name: "프리미엄 스웨디시 (60분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 2,
    name: "✨ 24시미녀홈타이",
    location: "서울·경기·인천 전지역",
    desc: "🏆 품격 있는 힐링을 선사하는 프라이빗 방문 테라피 서비스",
    phone: "0507-1280-3126",
    badge: "만족도 최우수",
    badgeColor: "bg-amber-500 text-black",
    image: "/shop2.jpg",
    courses: [
      { name: "맞춤형 바디 케어 (60분)", price: "90,000원", best: false },
      { name: "스페셜 아로마 힐링 (60분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 3,
    name: "💎 젊고마인드좋은홈타이",
    location: "서울·경기·인천 전지역",
    desc: "⚡ 칼배송보다 빠른 방문! 철저한 위생 관리와 럭셔리 케어",
    phone: "0507-1280-3174",
    badge: "24시 상시할인",
    badgeColor: "bg-purple-600 text-white",
    image: "/shop3.jpg",
    courses: [
      { name: "타이/아로마 코스 (60분)", price: "60,000원", best: false },
      { name: "한국 스웨디시케어 (60분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 4,
    name: "🌟 베테랑 혼혈스웨디시",
    location: "서울·경기·인천 전지역",
    desc: "💯 전문 힐러들의 맞춤형 피로 회복 프로그램 진행 중",
    phone: "0507-1280-3128",
    badge: "신규 제휴할인",
    badgeColor: "bg-blue-600 text-white",
    image: "/shop4.jpg",
    courses: [
      { name: "스탠다드 타이코스 (60분)", price: "60,000원", best: false },
      { name: "VIP 스웨디시 (90분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 5,
    name: "👑 어린마인드홈타이",
    location: "서울·경기·인천 전지역",
    desc: "🚀 후불제 안심 이용! 수도권 전지역 평균 25분 내 칼같이 도착",
    phone: "0507-1280-3170",
    badge: "재방문율 99%",
    badgeColor: "bg-emerald-500 text-black",
    image: "/shop5.jpg",
    courses: [
      { name: "릴렉스 타이 코스 (60분)", price: "60,000원", best: false },
      { name: "시그니처 스웨디시 (60분)", price: "140,000원", best: true },
    ]
  }
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
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 상단 네온 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Refresh On 로고" 
              className="w-10 h-10 rounded-xl object-cover border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Refresh On
              </span>
              <span className="text-[10px] text-gray-400 tracking-tighter uppercase">
                SEOUL &middot; GYEONGGI &middot; INCHEON
              </span>
            </div>
          </Link>
          
          <Link href="/" className="text-xs px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold shadow-lg hover:brightness-110 transition-all">
            🏠 메인으로 가기
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        
        {/* 📍 구 맞춤 비주얼 배너 */}
        <section className="text-center my-2">
          <div className="mb-8 overflow-hidden rounded-3xl border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative w-full">
            <img 
              src="/my-banner.png" 
              alt={`${districtName} 메인 배너`} 
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* 해당 구에 속한 모든 세부 동 목록 한눈에 보기 */}
          {dongs.length > 0 && (
            <div className="bg-gradient-to-b from-[#18181b] to-[#0f0f11] border-2 border-amber-500/40 p-6 rounded-3xl max-w-xl mx-auto mb-14 shadow-xl text-left">
              <h2 className="text-xs text-amber-400 font-black uppercase tracking-wider mb-3">
                ✨ {districtName} 세부 동 선택 (클릭시 개별 페이지 이동)
              </h2>
              <div className="flex flex-wrap gap-2">
                {dongs.map((dong, idx) => (
                  <Link 
                    key={idx} 
                    href={`/${region}/${district}/${dong}`}
                    className="bg-black/70 hover:bg-amber-500 hover:text-black text-gray-200 text-xs font-bold px-3.5 py-2 rounded-xl border border-amber-500/25 transition-all"
                  >
                    {dong}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 제휴 업체 카드 리스트 */}
        <section className="space-y-6">
          <div className="flex justify-between items-end mb-4 px-2">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                <span>🔥</span> {districtName} 추천 제휴업체 리스트
              </h2>
              <p className="text-xs text-gray-400 mt-1">{districtName} 전지역 즉시 방문 가능한 검증된 프리미엄 샵입니다.</p>
            </div>
          </div>

          {shops.map((shop) => (
            <article key={shop.id} className="bg-gradient-to-b from-[#141416] to-[#0d0d0f] border border-amber-500/25 hover:border-amber-500/60 transition-all duration-300 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group">
              
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <img 
                  src={shop.image} 
                  alt={shop.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/30"></div>
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`text-[11px] font-black px-3 py-1 rounded-full shadow-lg ${shop.badgeColor}`}>
                    {shop.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 -mt-6 relative z-10">
                <div className="mb-2">
                  <span className="text-xs text-amber-400/90 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 inline-block mb-2">
                    📍 {districtName} 전지역 신속 방문
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
                    <div key={idx} className="flex justify-between text-xs md:text-sm items-center py-1.5 border-b border-white/5 last:border-0">
                      <span className="text-gray-200 flex items-center gap-2 font-medium">
                        {course.best && <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-black">BEST</span>}
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
                    href={`sms:${shop.phone}?body=${encodeURIComponent(`${districtName} ${shop.name} 문의드립니다. (Refresh On 보고 연락드렸어요)`)}`} 
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
          <p className="text-gray-400 font-bold">Refresh On은 건전하고 안전한 제휴 마사지 정보 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; Refresh On ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}