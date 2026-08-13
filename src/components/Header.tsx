import ThemeSwitch from '@/components/ThemeSwitch';
import { Btn } from '@/components/ui';
import { NAV_LINKS, SOCIAL } from '@/constants/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-divider bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] backdrop-blur-[8px]">
      <nav className="mx-auto flex max-w-site items-center gap-4 px-8 py-4 md:gap-7">
        <a
          href="#top"
          className="mr-auto font-heading text-[17px] font-semibold uppercase tracking-[.14em] text-text no-underline"
        >
          Debajyoti Saha
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[.1em] text-text no-underline transition-colors duration-200 hover:text-accent-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <ThemeSwitch />

        <Btn
          variant="primary"
          href={SOCIAL.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex"
        >
          Resume
        </Btn>
      </nav>
    </header>
  );
}
