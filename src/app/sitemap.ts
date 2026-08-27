import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';

/** Static two-page site, so the sitemap is hand-listed rather than generated.
 *  `lastModified` uses build time — the content ships with the deploy. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/all-projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
