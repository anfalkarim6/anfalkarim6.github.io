import { getCollection, type CollectionEntry } from 'astro:content';

export type Essay = CollectionEntry<'essays'> & { sheet: string; minutes: number };
export type Project = CollectionEntry<'projects'> & { sheet: string };

const words = (s = '') =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}()[\]#*_>`]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;

/** Essays, newest first. Sheet numbers count up in order of publication (A-101 is the first essay). */
export async function getEssays(): Promise<Essay[]> {
  const all = await getCollection('essays');
  const chronological = [...all].sort((a, b) => a.data.published.getTime() - b.data.published.getTime());
  return chronological
    .map((e, i) => ({ ...e, sheet: `A-${101 + i}`, minutes: Math.max(2, Math.round(words(e.body) / 220)) }))
    .reverse();
}

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return [...all].sort((a, b) => a.data.order - b.data.order).map((p, i) => ({ ...p, sheet: `A-${201 + i}` }));
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const formatDate = (d: Date) => `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
/** Drawing-sheet date: 12.10.26 */
export const sheetDate = (d: Date) =>
  [d.getUTCDate(), d.getUTCMonth() + 1, d.getUTCFullYear() % 100].map((n) => String(n).padStart(2, '0')).join('.');

/** Unsplash's imgix CDN handles resizing and modern formats. */
export function unsplash(id: string, width: number, height?: number) {
  const p = new URLSearchParams({ auto: 'format', fit: 'crop', w: String(width), q: '72' });
  if (height) p.set('h', String(height));
  return `https://images.unsplash.com/${id}?${p}`;
}
export function unsplashSrcset(id: string, widths = [480, 800, 1200, 1600, 2200], ratio?: number) {
  return widths.map((w) => `${unsplash(id, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`).join(', ');
}
