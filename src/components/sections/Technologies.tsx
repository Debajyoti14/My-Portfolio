import Reveal from '@/components/Reveal';
import { Corners, Kicker, SectionTitle } from '@/components/ui';
import { TECHNOLOGIES } from '@/constants/site';

export default function Technologies() {
  return (
    <Reveal id="stack" className="border-t border-divider py-18">
      {/* 04 while the Writing section (formerly 04) is commented out in page.tsx. */}
      <Kicker className="mb-5">04 — Capability</Kicker>
      <SectionTitle className="mb-3.5">Technologies</SectionTitle>
      <p className="m-0 mb-10 max-w-[58ch] text-[color-mix(in_srgb,var(--color-text)_75%,transparent)]">
        I&apos;ve worked with a variety of technologies in Web Development, Mobile App
        Development, and Backend Development.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-7">
        {TECHNOLOGIES.map((group) => (
          <div key={group.label} className="blueprint flex flex-col gap-3 p-6.5">
            <Corners />
            <span className="font-heading text-xl uppercase">{group.label}</span>
            <span className="text-sm leading-[1.7] text-[color-mix(in_srgb,var(--color-text)_75%,transparent)]">
              {group.items}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
