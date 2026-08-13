'use client';

import { useState } from 'react';

const CHIP =
  'inline-flex h-6.5 items-center whitespace-nowrap border border-[color-mix(in_srgb,var(--color-accent)_45%,transparent)] px-2.5 text-xs tracking-[.03em] text-accent-700';

interface SkillChipsProps {
  visible?: string[];
  hidden?: string[];
}

/**
 * Two chips show by default; the rest expand inline behind a dashed toggle.
 * One boolean of state per role.
 */
export default function SkillChips({ visible = [], hidden = [] }: SkillChipsProps) {
  const [open, setOpen] = useState(false);

  if (!visible.length && !hidden.length) return null;

  return (
    <div className="mt-1.5 flex flex-wrap gap-1.5">
      {visible.map((skill) => (
        <span key={skill} className={CHIP}>
          {skill}
        </span>
      ))}

      {open &&
        hidden.map((skill) => (
          <span key={skill} className={CHIP}>
            {skill}
          </span>
        ))}

      {hidden.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex h-6.5 cursor-pointer items-center gap-1.5 border border-dashed border-[color-mix(in_srgb,var(--color-accent)_55%,transparent)] bg-transparent px-2.5 font-body text-xs tracking-[.03em] text-accent-700 transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)]"
        >
          {open ? 'Show less' : `+${hidden.length} skills`}
        </button>
      )}
    </div>
  );
}
