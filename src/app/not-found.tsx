import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Btn, Kicker } from '@/components/ui';

export const metadata: Metadata = {
  title: '404 | Debajyoti Saha',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-site flex-col justify-center px-8 py-24">
        <Kicker className="mb-5">Error — 404</Kicker>
        <h1 className="m-0 mb-6 font-heading text-[clamp(46px,6.4vw,78px)] leading-[.96] uppercase tracking-[-.02em]">
          This page
          <br />
          is broken
        </h1>
        <p className="m-0 mb-8 max-w-[46ch] text-[17px] leading-[1.62] text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Btn variant="primary" href="/">
            Go back home
          </Btn>
          <Btn href="/all-projects">See all projects</Btn>
        </div>
      </main>
      <Footer />
    </>
  );
}
