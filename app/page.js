import Hero from "@/components/sections/1 - Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <div className="relative h-dvh overflow-w-hidden">
        <Hero />
      </div>
    </div>
  );
}
