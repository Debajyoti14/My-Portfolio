import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { Btn, Corners } from '@/components/ui';
import { SOCIAL } from '@/constants/site';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: SOCIAL.github, external: true },
  { label: 'LinkedIn', href: SOCIAL.linkedin, external: true },
  { label: 'X', href: SOCIAL.x, external: true },
  { label: 'Email', href: SOCIAL.email, external: false },
];

export default function Hero() {
  return (
    <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-14 pt-24 pb-22">
      <div>
        <div className="mb-5.5 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-accent-700">
          <span className="h-px w-7 bg-accent" />
          Software Developer — Cloud, DevOps, Backend
        </div>

        <h1 className="m-0 mb-6 font-heading text-[clamp(46px,6.4vw,78px)] leading-[.96] uppercase tracking-[-.02em]">
          Hola,
          <br />
          I&apos;m Debajyoti
          <br />
          Saha
        </h1>

        <p className="m-0 mb-8 max-w-[46ch] text-[17px] leading-[1.62] text-[color-mix(in_srgb,var(--color-text)_78%,transparent)] text-pretty">
          Welcome to my portfolio website! Explore my projects and get to know me better. Feel
          free to check out my contact links for more details or potential collaborations.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <Btn variant="primary" href="#projects">
            See the work
          </Btn>
          <Btn variant="secondary" href={SOCIAL.email}>
            Get in touch
          </Btn>
        </div>

        <div className="mt-9 flex flex-wrap gap-5.5 text-[13px] tracking-[.06em]">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="border-b border-divider pb-0.5 text-text no-underline transition-colors duration-200 hover:border-accent hover:text-accent-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <figure className="blueprint duotone aspect-[4/5] w-[min(360px,100%)] justify-self-center lg:justify-self-end">
        <Corners />
        <Image
          src="/Picture.jpg"
          alt="Debajyoti Saha"
          width={720}
          height={900}
          priority
          className="h-full w-full object-cover"
        />
      </figure>
    </Reveal>
  );
}
