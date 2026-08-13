'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/sections/Projects';
import { FEATURED_PROJECT, PROJECTS } from '@/constants/site';
import type { Project, ProjectType } from '@/types';

/** Projects carry an explicit mainType where known; otherwise it is inferred
 *  from the stack tags so every card lands in exactly one filter bucket. */
const inferType = (project: Project): ProjectType => {
  if (project.mainType) return project.mainType;
  if (project.tags.includes('Flutter')) return 'Flutter';
  if (project.tags.includes('Rust')) return 'Backend';
  return 'React';
};

const ALL: Project[] = [
  { ...FEATURED_PROJECT, mainType: 'Backend' as const },
  ...PROJECTS,
].map((project) => ({ ...project, mainType: inferType(project) }));

const FILTERS = ['All', 'Backend', 'Flutter', 'React'] as const;
type Filter = (typeof FILTERS)[number];

export default function AllProjectsGrid() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = useMemo(
    () => (filter === 'All' ? ALL : ALL.filter((p) => p.mainType === filter)),
    [filter]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {FILTERS.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={active}
              className={`inline-flex h-7.5 cursor-pointer items-center border px-3 font-heading text-[13px] uppercase tracking-[.08em] transition-colors duration-200 ${
                active
                  ? 'border-accent bg-accent text-bg in-data-[theme=dark]:text-[#15171a]'
                  : 'border-divider bg-transparent text-text hover:bg-[color-mix(in_srgb,var(--color-text)_7%,transparent)]'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-7">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
