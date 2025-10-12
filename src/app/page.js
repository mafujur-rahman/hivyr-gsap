import About from "@/components/homePage/about/About";
import Banner from "@/components/homePage/banner/Banner";
import CTA from "@/components/homePage/cta/CTA";
import FAQ from "@/components/homePage/faq/FAQ";
import Offerings from "@/components/homePage/offerings/Offerings";
import Pricing from "@/components/homePage/pricing/Pricing";
import Service from "@/components/homePage/service/Service";
import WhyHivyr from "@/components/homePage/whyHivyr/WhyHivyr";
import Footer from "@/components/shared/footer/Footer";


export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Offerings />
      <WhyHivyr />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
