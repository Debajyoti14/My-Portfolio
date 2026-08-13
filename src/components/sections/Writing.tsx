import Reveal from '@/components/Reveal';
import { Kicker, SectionTitle } from '@/components/ui';
import { WRITING } from '@/constants/site';

export default function Writing() {
  return (
    <Reveal id="writing" className="border-t border-divider py-18">
      <div className="mb-9 flex items-end justify-between gap-6">
        <div>
          <Kicker className="mb-5">04 — Notes</Kicker>
          <SectionTitle>Writing</SectionTitle>
        </div>
        <span className="flex-none text-xs uppercase tracking-[.12em] text-[color-mix(in_srgb,var(--color-text)_50%,transparent)]">
          Placeholder entries
        </span>
      </div>

      <div className="flex flex-col">
        {WRITING.map((post, i) => (
          <a
            key={`${post.date}-${i}`}
            href={post.href}
            className={`grid grid-cols-[90px_1fr] items-baseline gap-x-6 gap-y-1 border-t border-divider px-2 py-5.5 text-inherit no-underline transition-[background-color,padding] duration-[250ms] hover:bg-[color-mix(in_srgb,var(--color-accent)_7%,transparent)] hover:pl-4.5 sm:grid-cols-[120px_1fr_90px] ${
              i === WRITING.length - 1 ? 'border-b' : ''
            }`}
          >
            <span className="font-heading text-sm tracking-[.06em] text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]">
              {post.date}
            </span>
            <span className="font-heading text-[22px] uppercase">{post.title}</span>
            <span className="hidden text-[11px] uppercase tracking-[.12em] text-accent-700 sm:block sm:text-right">
              Read
            </span>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
