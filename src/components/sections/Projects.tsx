import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { Btn, Corners, Kicker, SectionTitle, Tag } from '@/components/ui';
import { FEATURED_PROJECT, PROJECTS, SOCIAL } from '@/constants/site';
import type { Project } from '@/types';

const CARD_HOVER =
  'transition-[box-shadow,transform] duration-300 hover:-translate-y-0.75 hover:shadow-md';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={`blueprint flex flex-col text-inherit no-underline ${CARD_HOVER}`}
    >
      <Corners />
      <div className="duotone h-50 border-b border-divider">
        <Image
          src={project.image}
          alt={project.title}
          width={680}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="m-0 text-[22px] uppercase">{project.title}</h3>
        <p className="m-0 text-[13px] leading-[1.6] text-[color-mix(in_srgb,var(--color-text)_72%,transparent)] text-pretty">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <Reveal id="projects" className="border-t border-divider py-18">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <Kicker className="mb-5">03 — Selected work</Kicker>
          <SectionTitle>Projects</SectionTitle>
        </div>
        <Btn href={SOCIAL.github} target="_blank" rel="noreferrer" className="flex-none">
          All repositories
        </Btn>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-7">
        {/* Featured — spans the full grid, image left and copy right. */}
        <a
          href={FEATURED_PROJECT.url}
          target="_blank"
          rel="noreferrer"
          className={`blueprint col-span-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] bg-transparent text-inherit no-underline ${CARD_HOVER}`}
        >
          <Corners />
          <div className="duotone min-h-75 border-r border-divider">
            <Image
              src={FEATURED_PROJECT.image}
              alt={FEATURED_PROJECT.title}
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3.5 p-8">
            <span className="text-[10px] uppercase tracking-[.18em] text-accent-700">
              {FEATURED_PROJECT.kicker}
            </span>
            <h3 className="m-0 text-[30px] uppercase">{FEATURED_PROJECT.title}</h3>
            <p className="m-0 text-sm leading-[1.6] text-[color-mix(in_srgb,var(--color-text)_72%,transparent)] text-pretty">
              {FEATURED_PROJECT.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {FEATURED_PROJECT.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </a>

        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Reveal>
  );
}
