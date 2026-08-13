'use client';

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from 'react';

type RevealProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

/**
 * Scroll reveal. Children start at opacity 0 and animate riseIn once when
 * they enter the viewport, then stop being observed.
 *
 * Falls back to visible when IntersectionObserver is missing or the user has
 * asked for reduced motion — never leave content stuck at opacity 0.
 */
export default function Reveal<T extends ElementType = 'section'>({
  as,
  children,
  ...props
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      node.style.opacity = '1';
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Tag = (as ?? 'section') as ElementType;

  return (
    <Tag ref={ref} data-reveal="1" {...props}>
      {children}
    </Tag>
  );
}
