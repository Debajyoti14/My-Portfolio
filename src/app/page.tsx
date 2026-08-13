import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Technologies from '@/components/sections/Technologies';
// import Writing from '@/components/sections/Writing';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-site px-8 pb-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* Writing — hidden until the placeholder entries are replaced with
            the real blog source. */}
        {/* <Writing /> */}
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
