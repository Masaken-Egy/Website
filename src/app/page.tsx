import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Trust from "@/components/sections/Trust";
import HowItWorks from "@/components/sections/HowItWorks";
import Statement from "@/components/sections/Statement";
import Tenants from "@/components/sections/Tenants";
import Housekeeping from "@/components/sections/Housekeeping";
import Model from "@/components/sections/Model";
import Coverage from "@/components/sections/Coverage";
import Faq from "@/components/sections/Faq";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <div className="grain" aria-hidden />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Trust />
        <HowItWorks />
        <Statement />
        <Tenants />
        <Housekeeping />
        <Model />
        <Coverage />
        <Faq />
        <LeadForm />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
