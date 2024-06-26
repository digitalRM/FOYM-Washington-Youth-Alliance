import React from 'react'
import { bricolage_grotesque } from '../briFont'
import { BookAIcon, Landmark, School } from 'lucide-react'

const features = [
  {
    name: 'Digital Literacy',
    description:
      'In today\'s digital landscape, navigating and critically evaluating information online is more crucial than ever. Our digital literacy program equips students with the skills to identify and counteract misinformation. By leveraging peer-to-peer connections, we foster a relatable and authentic environment, encouraging students to participate in discussions and share their experiences.',
    href: '#',
    icon: BookAIcon,
  },
  {
    name: 'College and Career Readiness',
    description:
      'We provide comprehensive support to help youth navigate their post-secondary education and career options, including trade schools, vocational training, and apprenticeships. Our local chapters implement workshops, career fairs, and partnerships with local institutions to ensure students are well-prepared for their futures.',
    href: '#',
    icon: School,
  },
  {
    name: 'Building Political Power',
    description:
      'We are committed to empowering youth through strategic political engagement and advocacy. Our chapter\'s past victories (Seattle Student Union) include the successful passage of the assault weapons ban and securing over $30 million in statewide funding for youth mental health supports.',
    href: '#',
    icon: Landmark,
  },
]


export default function Info() {
  return (
    <div className="flex justify-center bg-[url('/wall-3.png')] bg-cover bg-left bg-no-repeat shadow-white">
      <div className="overflow-hidden relative py-32 sm:py-40 w-full">
        <div className="w-full h-8 bg-neutral-100 -mt-0.5 rounded-b-[20px] top-0 absolute z-20" />
        <div className="w-full h-8 bg-neutral-100 -mb-0.5 rounded-t-[20px] bottom-0 absolute z-20" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <div className="">
                <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white md:text-4xl"><span className={bricolage_grotesque.className}>Our Pillars</span></p>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                      <div key={feature.name} className="flex flex-col">
                        <dt className="text-base font-semibold leading-7 text-white">
                          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg text-[#0C4287] border-neutral-300/60 transition bg-white/15 border  backdrop-blur-xl shadow-sm">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </div>
                          {feature.name}
                        </dt>
                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                          <p className="flex-auto">{feature.description}</p>
                    
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

