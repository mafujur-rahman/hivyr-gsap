import About from "@/components/homePage/about/About";
import Banner from "@/components/homePage/banner/Banner";
import FAQ from "@/components/homePage/faq/FAQ";
import Offerings from "@/components/homePage/offerings/Offerings";
import Service from "@/components/homePage/service/Service";
import WhyHivyr from "@/components/homePage/whyHivyr/WhyHivyr";
import CallToActionWithFooter from "@/components/shared/footer/CallToActionWithFooter";


export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Offerings />
      <WhyHivyr />
      <FAQ />
      <CallToActionWithFooter />
    </div>
  );
}
