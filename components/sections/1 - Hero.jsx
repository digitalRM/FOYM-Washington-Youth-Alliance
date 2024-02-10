'use server'
import Header from "../header"
import { bricolage_grotesque } from "@/components/briFont"


export default async function Hero() {
  return (
    <div className="relative justify-center h-fit flex items-center overflow-hidden">
      <div className="w-full h-full overflow-hidden relative  bg-cover">
        <Header />
        <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 sm:pt-12 lg:pt-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">We’re hiring</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  See open positions
                </a>
              </div> 
            </div>
            <h1 className="mt-10 max-w-[550px] text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
              <span className={bricolage_grotesque.className}>
              A better way to ship your projects</span>
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
            <svg width="100%" height="100%" className="blur-md mt-12" viewBox="0 0 881 975" fill="none" xmlns="http://www.w3.org/2000/svg" > <mask id="mask0_1123_250" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x={52} y={0} width={829} height={865} > <path d="M63.9585 68.8949C39.6032 42.6598 58.209 0 94.0064 0H840C862.644 0 881 18.3563 881 41V823.421C881 865.266 825.684 880.228 804.59 844.089L424.09 192.186C407.293 163.408 365.004 165.623 351.305 195.999L107.05 737.623C87.8379 780.224 143.44 816.639 174.813 782.002L421.76 509.365C436.039 493.601 435.892 469.534 421.42 453.946L63.9585 68.8949Z" fill="white" /> </mask> <g mask="url(#mask0_1123_250)"> <g filter="url(#filter0_f_1123_250)"> <rect x={-98} y={-176} width={1196} height={1281} fill="url(#paint0_linear_1123_250)" /> </g> <g filter="url(#filter1_f_1123_250)"> <ellipse cx={174} cy="557.5" rx={124} ry="226.5" fill="#2490F2" /> </g> <g filter="url(#filter2_f_1123_250)"> <path d="M556 36.1089C556 160.865 500.683 262 432.446 262C364.209 262 308.892 160.865 308.892 36.1089C308.892 -88.6473 107.898 -246 176.135 -246C244.372 -246 556 -88.6473 556 36.1089Z" fill="#5727F3" /> </g> <g filter="url(#filter3_f_1123_250)"> <path d="M799.652 562.152C833.786 670.384 601.776 721.686 542.655 784.173C483.534 846.661 407.937 809.578 373.804 701.346C339.671 593.114 359.927 454.719 419.047 392.231C478.168 329.743 765.519 453.92 799.652 562.152Z" fill="#4A6AEE" /> </g> <g filter="url(#filter4_f_1123_250)"> <ellipse cx="204.781" cy="205.486" rx="204.781" ry="205.486" transform="matrix(0.687265 -0.726407 0.300769 0.953697 600 -33.4902)" fill="#1D5A94" /> </g> </g> <defs> <filter id="filter0_f_1123_250" x={-198} y={-276} width={1396} height={1481} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" > <feFlood floodOpacity={0} result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feGaussianBlur stdDeviation={50} result="effect1_foregroundBlur_1123_250" /> </filter> <filter id="filter1_f_1123_250" x="-125.2" y="155.8" width="598.4" height="803.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" > <feFlood floodOpacity={0} result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feGaussianBlur stdDeviation="87.6" result="effect1_foregroundBlur_1123_250" /> </filter> <filter id="filter2_f_1123_250" x="-13.2" y="-421.2" width="744.4" height="858.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" > <feFlood floodOpacity={0} result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feGaussianBlur stdDeviation="87.6" result="effect1_foregroundBlur_1123_250" /> </filter> <filter id="filter3_f_1123_250" x="182.023" y="200.232" width="796.238" height="789.496" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" > <feFlood floodOpacity={0} result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feGaussianBlur stdDeviation="87.6" result="effect1_foregroundBlur_1123_250" /> </filter> <filter id="filter4_f_1123_250" x="473.593" y="-407.52" width="657.9" height="842.494" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" > <feFlood floodOpacity={0} result="BackgroundImageFix" /> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" /> <feGaussianBlur stdDeviation="87.6" result="effect1_foregroundBlur_1123_250" /> </filter> <linearGradient id="paint0_linear_1123_250" x1={58} y1={11} x2="874.5" y2="848.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#A769FE" /> <stop offset="0.0001" stopColor="#0C4287" /> <stop offset="0.789609" stopColor="#7268E7" /> <stop offset={1} stopColor="#0C4287" /> </linearGradient> </defs> </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5/6 h-5/6  rounded-full relative" >
                <div className="aspect-square -top-12 -left-12 absolute bg-white/60 shadow-lg border border-neutral-200/70 rounded-xl h-96 sm:-rotate-3 p-3 sm:hover:z-10 backdrop-blur-md z-[1]">
                
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


