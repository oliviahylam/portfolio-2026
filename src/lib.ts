import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lens } from './data/site';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(lens?: Lens, group?: 'work' | 'client'): Promise<Project[]> {
  let all = (await getCollection('projects')).filter((p) => !p.data.draft);
  if (group) all = all.filter((p) => p.data.group === group);
  if (!lens) return all.sort((a, b) => a.data.order - b.data.order);
  const key = (p: Project) => (lens === 'brand' ? p.data.brandOrder ?? p.data.order : p.data.order);
  return all.filter((p) => p.data.lens.includes(lens)).sort((a, b) => key(a) - key(b));
}

export const pad = (n: number, size = 2) => String(n).padStart(size, '0');
