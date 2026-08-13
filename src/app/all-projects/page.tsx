import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AllProjectsGrid from '@/components/AllProjectsGrid';
import Reveal from '@/components/Reveal';
import { Kicker, SectionTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'All Projects | Debajyoti Saha',
  description: 'Every relevant project by Debajyoti Saha, filterable by stack.',
};

export default function AllProjectsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-site px-8 pb-24">
        <Reveal className="pt-24 pb-10">
          <Kicker className="mb-5">Index — Repositories</Kicker>
          <SectionTitle>All Projects</SectionTitle>
        </Reveal>
        <AllProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
