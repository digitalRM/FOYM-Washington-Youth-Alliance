import Hero from "@/components/sections/1 - Hero";
import Image from "next/image";
import Bento from "../components/sections/2 - Bento";
import Info from "../components/sections/3 - Info";
import Footer from "../components/sections/4 - Footer";
import InfoFlip from "@/components/sections/5 - InfoFlip";

const timeline = [
  {
    name: '1. Grow Our Organization',
    description:
      'We are looking to grow our geographic footprint and create chapters all across Washington.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: '2. Hire Staff and Advisors',
    description:
      'We are planning on hiring professional staff and advisors to help us with our mission.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: '3. Year Round Lobbying Effort',
    description:
      'We want to establish a year round lobbying effort for the bills we support through our C4.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: '4. Advance Youth Policies',
    description:
      'We plan to support and advance policies that benefit young people in Washington State.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]
export default function Home() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">  
      <Hero />
      <InfoFlip />
      <Bento />
      <Info />
      <Footer />
    </div>
  );
}
