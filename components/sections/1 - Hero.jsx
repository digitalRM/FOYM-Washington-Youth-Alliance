'use server'

import Image from "next/image"
import Header from "../header"
import { bricolage_grotesque } from "@/components/briFont"

export default async function Hero() {
  return (
    <div className="relative justify-center h-fit flex items-center overflow-hidden">
      <div className="w-full h-full overflow-hidden relative  bg-cover">
        <Header />
        <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 sm:pt-12 lg:pt-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto lg:-mt-24">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7]">Bill Tracker</span><span className="-ml-2.5">🎉</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQJP-KuhMXM6202X7jx6l_p7Y6r-RAYfozYmVhxaWn91bLX3rH1MMphuci_g_9M_zUX22FJ9QoC3R2h/pubhtml?widget=true&headers=false"  className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  View our new tool!
                </a>
              </div> 
            </div>
            <h1 className="mt-10 max-w-[620px] text-3xl md:text-[58px] sm:text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
              <span className={bricolage_grotesque.className}>
              Fighting For the Youth of Washington State.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600  lg:max-w-[600px]">
              We are dedicated to empowering youth across Washington State by fostering essential life
              skills, promoting digital literacy, and preparing young people for their educational and career
              futures.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:gap-2 lg:items-center sm:space-y-0 mt-6 z-[10]">
              <a href="#learn-more" className=" inline-flex items-center justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-white transition bg-gradient-to-br to-[#0C4287] from-[#7268E7] borderbackdrop-blur-xl">
                Learn More
              </a>
              <a href="https://secure.actblue.com/donate/wyadonate" className=" inline-flex items-center justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-[#0C4287] border-neutral-300/60 transition bg-white/15 border  backdrop-blur-xl shadow-sm">
                Donate to Our Mission
              </a>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 lg:mt-4 lg:flex-shrink-0 lg:flex-grow relative sm:w-[600px] lg:w-fit mx-auto">
          <svg width="100%" height="100%" className="blur-md" viewBox="0 0 253 357"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <path     d="M118.356 25C299.995 119.094 4.5519 150.026 26.1355 162.951C47.7192 175.875 346.254 189.713 175.493 244.286C60.7184 280.966 78.7617 332 175.493 332"     stroke="url(#paint0_linear_1126_224)"     strokeWidth={49}     strokeLinecap="round"   />   <defs>     <linearGradient       id="paint0_linear_1126_224"       x1="101.843"       y1="13.4377"       x2="101.843"       y2="371.624"       gradientUnits="userSpaceOnUse"     >       <stop stopColor="#14458F" />       <stop offset={1} stopColor="#5168E8" />     </linearGradient>   </defs> </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative grid grid-cols-4 grid-rows-3 gap-3" >
                <div className=" bg-white/60 shadow-lg col-span-3 border border-neutral-200/70 rounded-xl h-full p-3 sm:hover:z-10 lg:-mt-12 -rotate-3  backdrop-blur-md z-[1]">
                  <Image src="/hero.jpg" alt="card1" height={500} width={500} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div />
                <div />
                <div className=" bg-white/60 shadow-lg col-span-3 border border-neutral-200/70 rounded-xl h-full p-3 sm:hover:z-10 lg:-mt-12 -rotate-3  backdrop-blur-md z-[1]">
                  <Image src="/hero-photo2.avif" alt="card1" height={500} width={500} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className=" bg-white/60 shadow-lg col-span-3 border border-neutral-200/70 rounded-xl h-full p-3 sm:hover:z-10 lg:-mt-8 -rotate-3  backdrop-blur-md z-[1]">
                  <Image src="/photo-hero2.avif" alt="card1" height={500} width={500} className="w-full h-full object-cover rounded-lg" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      <div className="w-full h-8 bg-neutral-100 -mb-0.5 rounded-t-[20px] bottom-0 absolute z-20" />
    </div>
  )
}

<svg width="100%" height="100%" className="blur-md" viewBox="0 0 253 357"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <path     d="M118.356 25C299.995 119.094 4.5519 150.026 26.1355 162.951C47.7192 175.875 346.254 189.713 175.493 244.286C60.7184 280.966 78.7617 332 175.493 332"     stroke="url(#paint0_linear_1126_224)"     strokeWidth={49}     strokeLinecap="round"   />   <defs>     <linearGradient       id="paint0_linear_1126_224"       x1="101.843"       y1="13.4377"       x2="101.843"       y2="371.624"       gradientUnits="userSpaceOnUse"     >       <stop stopColor="#14458F" />       <stop offset={1} stopColor="#5168E8" />     </linearGradient>   </defs> </svg>