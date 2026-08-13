import Reveal from '@/components/Reveal';
import SkillChips from '@/components/SkillChips';
import { Kicker, SectionTitle, Tag } from '@/components/ui';
import { EXPERIENCE } from '@/constants/site';
import type { Role as RoleData } from '@/types';

/** One role on the vertical rail, with its accent square marker. */
function Role({ role }: { role: RoleData }) {
  return (
    <div className="relative flex flex-col gap-2.5 border-l border-divider pl-6.5">
      <span className="absolute top-2.25 -left-0.75 h-1.25 w-1.25 bg-accent" />

      <div className="flex flex-wrap items-baseline gap-3">
        <span className="font-heading text-[21px] uppercase">{role.title}</span>
        <Tag>{role.type}</Tag>
      </div>

      <span className="text-[13px] tracking-[.04em] text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]">
        {role.meta}
      </span>

      {role.body && (
        <p className="m-0 max-w-[68ch] text-sm leading-[1.65] text-[color-mix(in_srgb,var(--color-text)_80%,transparent)] text-pretty">
          {role.body}
        </p>
      )}

      {role.bullets && (
        <ul className="m-0 flex max-w-[74ch] list-none flex-col gap-2.5 p-0 text-sm leading-[1.65] text-[color-mix(in_srgb,var(--color-text)_80%,transparent)]">
          {role.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-pretty">
              <span className="mt-3 h-px w-1.25 flex-none bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <SkillChips visible={role.visibleSkills} hidden={role.hiddenSkills} />
    </div>
  );
}

export default function Experience() {
  return (
    <Reveal id="experience" className="border-t border-divider py-18">
      <Kicker className="mb-5">02 — Experience</Kicker>
      <SectionTitle className="mb-11">Work Experience</SectionTitle>

      <div className="flex flex-col">
        {EXPERIENCE.map((job, i) => (
          <article
            key={job.company}
            className={`flex flex-wrap gap-x-10 gap-y-7 border-t border-divider py-8.5 ${
              i === EXPERIENCE.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="flex min-w-50 flex-[0_1_240px] flex-col gap-1.5">
              <h3 className="m-0 text-[26px] uppercase">{job.company}</h3>
              <span className="text-[13px] tracking-[.06em] text-accent-700">{job.duration}</span>
              <span className="text-[13px] text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]">
                {job.location}
              </span>
            </div>

            <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-8.5">
              {job.roles.map((role) => (
                <Role key={role.title + role.meta} role={role} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
