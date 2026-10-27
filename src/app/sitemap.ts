import type {MetadataRoute} from 'next';
import {designPages,indexable,siteOrigin} from '@/lib/design-seo';
import sourceJson from '@/data/source-sitemap.json';
const source:Record<string,{lastModified?:string}>=sourceJson;
export default function sitemap():MetadataRoute.Sitemap{return designPages.filter(indexable).map(p=>({url:siteOrigin+p.route,...(source[p.route]?.lastModified?{lastModified:source[p.route].lastModified}:{}),changeFrequency:'monthly',priority:p.route==='/'?1:0.7}))}
