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
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto -mt-24">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7]">Bill Tracker</span><span className="-ml-2.5">🎉</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
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
              Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip
              nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:gap-2 lg:items-center sm:space-y-0 mt-6">
              <a href="#" className=" inline-flex items-center justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-white transition bg-gradient-to-br to-[#0C4287] from-[#7268E7] borderbackdrop-blur-xl">
                Donate to AF
              </a>
              <a href="#" className=" inline-flex items-center justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-[#0C4287] border-neutral-200 transition bg-white/15 border border-white/15 backdrop-blur-xl shadow-sm">
                Donate to Action Fund
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative">
          <svg width="100%" height="100%" className="blur-md" viewBox="0 0 517 846" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M304.499 80.5C116.999 169.5 73.9993 246.5 95.4993 271C116.999 295.5 550 304.5 393.5 449C237 593.5 -12.0007 548 132.499 627.5C248.099 691.1 409.999 742 476.499 759.5" stroke="url(#paint0_linear_1126_224)" strokeWidth={178} /> <defs> <linearGradient id="paint0_linear_1126_224" x1="282.761" y1="80.5" x2="282.761" y2="759.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#14458F" /> <stop offset={1} stopColor="#5168E8" /> </linearGradient> </defs> </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative grid grid-cols-2 grid-rows-3 gap-3" >
                <div className="aspect-square bg-white/60 shadow-lg border border-neutral-200/70 rounded-xl h-full p-3 sm:hover:z-10 backdrop-blur-md z-[1]">
                  <Image src="/hero.jpg" alt="card1" height={500} width={500} className="w-full h-full object-cover rounded-lg" />
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

