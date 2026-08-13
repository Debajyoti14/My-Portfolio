import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { clsx } from '@/lib/clsx';

/* — buttons —
   Square, hairline-bordered, condensed uppercase. Primary knocks the label
   out of the accent; in dark that means near-black text on light blue. */
const BTN_BASE =
  'inline-flex items-center justify-center gap-1.5 cursor-pointer no-underline ' +
  'font-heading font-semibold text-sm leading-[1.2] tracking-[.08em] uppercase ' +
  'px-3 py-1.75 rounded-none border transition-colors duration-200';

const BTN_VARIANTS = {
  primary:
    'bg-accent text-bg border-accent hover:bg-accent-300 in-data-[theme=dark]:text-[#15171a]',
  secondary:
    'bg-transparent text-text border-divider hover:bg-[color-mix(in_srgb,var(--color-text)_7%,transparent)] active:bg-[color-mix(in_srgb,var(--color-text)_14%,transparent)]',
} as const;

export type BtnVariant = keyof typeof BTN_VARIANTS;

type BtnProps<T extends ElementType> = {
  as?: T;
  variant?: BtnVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export function Btn<T extends ElementType = 'a'>({
  as,
  variant = 'secondary',
  className,
  ...props
}: BtnProps<T>) {
  const Tag = (as ?? 'a') as ElementType;
  return <Tag className={clsx(BTN_BASE, BTN_VARIANTS[variant], className)} {...props} />;
}

/* — tags — outline pill used for employment type and project stacks */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center text-[11px] tracking-[.02em] px-2.5 py-0.75',
        'rounded-none border border-accent text-accent',
        className
      )}
    >
      {children}
    </span>
  );
}

/* — blueprint frame — hairline box with four registration marks */
export function Corners() {
  return (
    <>
      <i className="corner tl" aria-hidden="true" />
      <i className="corner tr" aria-hidden="true" />
      <i className="corner bl" aria-hidden="true" />
      <i className="corner br" aria-hidden="true" />
    </>
  );
}

/* — section kicker — "01 — About" */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('text-[11px] tracking-[.18em] uppercase text-accent-700', className)}>
      {children}
    </div>
  );
}

/* — section title — 38px condensed uppercase */
export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={clsx('text-[38px] uppercase tracking-[-.01em] m-0 font-heading', className)}>
      {children}
    </h2>
  );
}
