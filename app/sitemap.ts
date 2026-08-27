import { MetadataRoute } from 'next';
import { regionData } from './data/regions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://relaxmong.netlify.app';
  const currentDate = new Date();

  // 1. 메인 페이지 (출장마사지 제외 / 브랜드 홈케어 중심)
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. 서울·경기·인천 전체 시/구/군 및 동 단위 페이지 자동 생성
  Object.keys(regionData).forEach((regionKey) => {
    const districts = regionData[regionKey].districts;

    Object.keys(districts).forEach((districtKey) => {
      // 2-1. 시/구/군 단위 페이지 (예: /seoul/gangnam)
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
          priority: 0.7,
        });
      });
    });
  });

  return routes;
}