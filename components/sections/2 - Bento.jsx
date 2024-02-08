'use server'

import Image from "next/image"

const timeline = [
  {
    name: 'Grow Our Organization',
    description:
      'We are looking to grow our geographic footprint and create chapters all across Washington.',
    date: 'Aug 2021',
    image: '/card1.png',
    dateTime: '2021-08',
  },
  {
    name: 'Hire Staff and Advisors',
    description:
      'We are planning on hiring professional staff and advisors to help us with our mission.',
    date: 'Dec 2021',
    image: '/card2.png',
    dateTime: '2021-12',
  },
  {
    name: 'Year Round Lobbying Effort',
    description:
      'We want to establish a year round lobbying effort for the bills we support through our C4.',
    date: 'Feb 2022',
    image: '/card3.png',
    dateTime: '2022-02',
  },
  {
    name: 'Advance Youth Policies',
    description:
      'We plan to support and advance policies that benefit young people in Washington State.',
    date: 'Dec 2022',
    image: '/card4.png',
    dateTime: '2022-12',
  },
]

export default async function Bento() {
  return (
    <div className="py-0 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-xl font-semibold leading-10 py-6 tracking-tight text-blue-950 sm:text-xl sm:leading-none md:text-2xl">Our Goals For 2024</h1>
        <div className="w-full h-fit grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 grid-rows-1 gap-2 max-w-7xl">
          {timeline.map((item) => (
            <div key={item.name} className="col-span-1 row-span-1 aspect-square w-full bg-white rounded-xl shadow-lg p-4 flex flex-col justify-end bg-cover bg-center relative">
              <p className=" text-lg font-semibold leading-8 tracking-tight text-white z-[1]">{item.name}</p>
              <Image quality={90} src={item.image} alt={item.name} width="266" height="266" className="absolute inset-0 w-full h-full object-cover rounded-xl z-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

{/* <Bento />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-xl font-semibold leading-10 py-6 tracking-tight text-gray-900 sm:text-xl sm:leading-none md:text-2xl">Our Goals For 2024</h1>
          <div className="h-px w-screen bg-gray-900/10 lg:w-auto lg:flex-auto" aria-hidden="true" />
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >

                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}