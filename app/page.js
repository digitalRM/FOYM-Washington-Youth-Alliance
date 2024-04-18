import Hero from "@/components/sections/1 - Hero";
import Image from "next/image";
import Bento from "../components/sections/2 - Bento";
import Info from "../components/sections/3 - Info";
import Footer from "../components/sections/4 - Footer";
import InfoFlip from "@/components/sections/5 - InfoFlip";

export default function Home() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">  
      <div className=" h-full max-h-[2000px]">
        <Hero />
      </div>
      <InfoFlip />
      <Bento />
      <Info />
      <Footer />
    </div>
  );
}
