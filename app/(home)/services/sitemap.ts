import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/app/lib/constants';
import services from '@/app/utilis/services';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  return services.map((service) => ({
    url: `${BASE_URL}/services/${service.title!.toLowerCase().replace(/\s/g, "_")}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))
}