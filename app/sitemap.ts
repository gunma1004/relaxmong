import { MetadataRoute } from 'next';
import { regionData } from './data/regions';

export default function sitemap(): MetadataRoute.Sitemap {
  // 💡 실제 사용할 도메인 주소로 변경해주세요 (예: https://refresh-on.com)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://refresh-on.com';
  const currentDate = new Date();

  // 1. 메인 페이지
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. 서울·경기·인천 전체 구/시/군 및 세부 동 URL 자동 동적 생성
  Object.keys(regionData).forEach((regionKey) => {
    const districts = regionData[regionKey].districts;

    Object.keys(districts).forEach((districtKey) => {
      // 2-1. 구/시/군 단위 페이지 (예: /seoul/gangnam, /incheon/bupyeong)
      routes.push({
        url: `${baseUrl}/${regionKey}/${districtKey}`,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 0.8,
      });

      // 2-2. 세부 동 단위 페이지 (예: /seoul/gangnam/역삼1동)
      const dongs = districts[districtKey].dongs || [];
      dongs.forEach((dong) => {
        routes.push({
          url: `${baseUrl}/${regionKey}/${districtKey}/${encodeURIComponent(dong)}`,
          lastModified: currentDate,
          changeFrequency: 'weekly',
          priority: 0.6,
        });
      });
    });
  });

  return routes;
}