import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/app/lib/constants';
import merchs from '@/app/utilis/merch';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return merchs.map((merch) => (
    {
    url: `${BASE_URL}/shop/${merch.title!.toLowerCase().replace(/\s/g, "_")}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))
}