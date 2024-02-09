'use server'

import Header from "../header"

export default async function Hero() {
  return (
    <div className="relative justify-center flex items-center overflow-hidden">
      <div className="w-full h-[105vh] overflow-hidden relative  bg-cover">
        
       
        <Header />
      </div>
      <div className="w-full h-8 bg-neutral-100 -mb-0.5 rounded-t-[20px] bottom-0 absolute z-20" />
    </div>
  )
}



