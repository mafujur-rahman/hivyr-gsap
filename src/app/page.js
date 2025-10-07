import About from "@/components/homePage/about/About";
import Banner from "@/components/homePage/banner/Banner";
import Offerings from "@/components/homePage/offerings/Offerings";
import Service from "@/components/homePage/service/Service";


export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Offerings />
    </div>
  );
}
