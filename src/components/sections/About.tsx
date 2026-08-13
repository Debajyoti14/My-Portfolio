import Reveal from '@/components/Reveal';
import { Kicker } from '@/components/ui';
import { PRACTICE_AREAS } from '@/constants/site';

export default function About() {
  return (
    <Reveal id="about" className="border-t border-divider py-18">
      <Kicker className="mb-7">01 — About</Kicker>

      <div className="mb-14 flex flex-wrap items-start gap-10">
        <h2 className="m-0 max-w-[20ch] flex-[1_1_520px] font-heading text-[clamp(36px,5vw,58px)] leading-[1.04] uppercase tracking-[-.015em] text-balance">
          Tech enthusiast building systems that scale
        </h2>
      </div>

      <div className="mb-2 flex items-baseline gap-3.5">
        <span className="font-heading text-xs uppercase tracking-[.16em] text-[color-mix(in_srgb,var(--color-text)_50%,transparent)]">
          Fig. 01 — Practice areas
        </span>
        <span className="h-px flex-1 bg-divider" />
      </div>

      <div className="flex flex-col">
        {PRACTICE_AREAS.map((area, i) => (
          <div
            key={area.index}
            className={`group flex flex-wrap items-start gap-x-8 gap-y-4 border-t border-divider py-6.5 pr-3 pl-0 transition-[background-color,padding-left] duration-[250ms] hover:bg-[color-mix(in_srgb,var(--color-accent)_7%,transparent)] hover:pl-3.5 ${
              i === PRACTICE_AREAS.length - 1 ? 'border-b' : ''
            }`}
          >
            <span className="w-11.5 flex-none pt-1.25 font-heading text-[13px] tracking-[.14em] text-[color-mix(in_srgb,var(--color-accent)_65%,transparent)]">
              {area.index}
            </span>
            <span className="flex-[0_1_230px] font-heading text-[25px] leading-[1.1] uppercase">
              {area.name}
            </span>
            <p className="m-0 flex-[1_1_380px] text-sm leading-[1.7] text-[color-mix(in_srgb,var(--color-text)_76%,transparent)] text-pretty">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
