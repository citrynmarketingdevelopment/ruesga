import type {MetadataRoute} from 'next';
import {designPages,indexable,siteOrigin} from '@/lib/design-seo';
export default function sitemap():MetadataRoute.Sitemap{return designPages.filter(indexable).map(p=>({url:siteOrigin+p.route,changeFrequency:'monthly',priority:p.route==='/'?1:0.7}))}
