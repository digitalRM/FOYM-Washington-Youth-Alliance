'use server'

import Image from "next/image"
import Header from "../header"
import { bricolage_grotesque } from "@/components/briFont"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

export default async function Hero() {
  return (
    <div className="relative justify-center h-fit flex items-center overflow-hidden">
      <div className="w-full h-full overflow-hidden relative  bg-cover">
        <Header />
        <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 sm:pt-12 lg:pt-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto lg:-mt-24">
            <Dialog className="flex">
              <DialogTrigger className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7]">The Suquamish Tribe</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <div  className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  View our message
                </div>
              </DialogTrigger>
              <DialogContent className="p-6 rounded-lg shadow-lg h-fit w-fit">
                <DialogHeader>
                  <DialogTitle><span className={bricolage_grotesque.className}><span className="font-semibold text-gray-900 bg-clip-text text-2xl text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7]">Our Message to the Suquamish Tribe</span></span> </DialogTitle>
                  <DialogDescription className="pt-2 text-gray-600">
                    The Washington Youth Alliance would like to thank the Suquamish Tribe for their generous contribution to our mission. The solidarity and support of other organizations continually inspires and enables us to further our mission of youth advocacy.
                  </DialogDescription>
                  <DialogFooter className="pt-4">
                    <Image src="/suquamish-tribe-logo.jpg" alt="Suquamish Tribe Logo" width={200} height={200} className="w-full h-full object-cover rounded-lg" />
                  </DialogFooter>
                </DialogHeader>
              </DialogContent>

            </Dialog>
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

          <div className="mt-16 sm:mt-24 lg:mt-4 lg:flex-shrink-0 lg:flex-grow relative sm:w-[600px] lg:w-fit mx-auto overflow-visible">
          {/* <svg width="100%" height="100%" className=" z-10 overflow-visible" viewBox="0 0 253 357"   fill="none"   xmlns="http://www.w3.org/2000/svg" >   <path     d="M118.356 25C299.995 119.094 4.5519 150.026 26.1355 162.951C47.7192 175.875 346.254 189.713 175.493 244.286C60.7184 280.966 78.7617 332 175.493 332"     stroke="url(#paint0_linear_1126_224)"     strokeWidth={49}     strokeLinecap="round"   />   <defs>     <linearGradient       id="paint0_linear_1126_224"       x1="101.843"       y1="13.4377"       x2="101.843"       y2="371.624"       gradientUnits="userSpaceOnUse"     >       <stop stopColor="#14458F" />       <stop offset={1} stopColor="#5168E8" />     </linearGradient>   </defs> </svg> */}
          <svg width="100%" height="100%"   className=" z-10 overflow-visible"     xmlns="http://www.w3.org/2000/svg"          fill="none"       viewBox="0 0 283 387"     >       <g filter="url(#filter0_f_1126_224)">         <path           stroke="url(#paint0_linear_1126_224)"           strokeLinecap="round"           strokeWidth="49"           d="M133.356 40c181.639 94.094-113.804 125.026-92.22 137.951 21.583 12.924 320.118 26.762 149.357 81.335-114.775 36.68-96.731 87.714 0 87.714"         ></path>       </g>       <defs>         <filter           id="filter0_f_1126_224"           width="282.019"           height="386.006"           x="0.482"           y="0.494"           colorInterpolationFilters="sRGB"           filterUnits="userSpaceOnUse"         >           <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>           <feBlend             in="SourceGraphic"             in2="BackgroundImageFix"             result="shape"           ></feBlend>           <feGaussianBlur             result="effect1_foregroundBlur_1126_224"             stdDeviation="7.5"           ></feGaussianBlur>         </filter>         <linearGradient           id="paint0_linear_1126_224"           x1="116.843"           x2="116.843"           y1="28.438"           y2="386.624"           gradientUnits="userSpaceOnUse"         >           <stop stopColor="#14458F"></stop>           <stop offset="1" stopColor="#5168E8"></stop>         </linearGradient>       </defs>     </svg>
            <div className="absolute inset-0 flex items-center justify-center overflow-visible shadow-none">
              <div className="w-full h-full relative grid grid-cols-4 grid-rows-3 gap-3 overflow-visible bg-transparent shadow-none" >
                
                <div className=" bg-white/60 shadow-lg col-span-3 border rounded-xl h-full p-3 lg:-mt-12 -rotate-3">
                  <Image src="/hero.jpg" alt="card1" height={500} width={500} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div />
                <div />
                <div className=" bg-white/60 shadow-lg col-span-3 border rounded-xl h-full p-3 lg:-mt-12 -rotate-3  backdrop-blur-md ">
                  <Image src="/hero-photo2.avif" alt="card1" height={500} width={500} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className=" bg-white/60 shadow-lg col-span-3 border  rounded-xl h-full p-3 lg:-mt-8 -rotate-3  backdrop-blur-md">
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