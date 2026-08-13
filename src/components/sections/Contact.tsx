import Reveal from '@/components/Reveal';
import { Btn } from '@/components/ui';
import { SOCIAL } from '@/constants/site';

export default function Contact() {
  return (
    <Reveal className="border-t border-divider pt-22">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-end gap-10">
        <h2 className="m-0 text-[clamp(38px,5vw,62px)] leading-none uppercase">
          Let's <br/>Connect
        </h2>

        <div className="flex flex-col items-start gap-4">
          <a
            href={SOCIAL.email}
            className="border-b border-accent font-heading text-[26px] tracking-[.01em] text-accent-700 no-underline transition-colors duration-200 hover:text-accent-900 break-all"
          >
            {SOCIAL.emailAddress}
          </a>
          <div className="flex flex-wrap gap-2.5">
            <Btn href={SOCIAL.github} target="_blank" rel="noreferrer">
              GitHub
            </Btn>
            <Btn href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </Btn>
            <Btn href={SOCIAL.x} target="_blank" rel="noreferrer">
              X
            </Btn>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
