import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroNav from "@/components/hero-nav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import PortfolioPDF from "@/components/PortfolioPDF";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroNav />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <PortfolioPDF />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
