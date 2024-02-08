import React from 'react'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
]

export default function Info() {
  return (
    <div className="flex justify-center bg-[url('/wall-3.png')] bg-cover bg-left bg-no-repeat shadow-white">
      <div className="overflow-hidden relative py-32 sm:py-40 w-full">
        <div className="w-full h-8 bg-neutral-100 -mt-0.5 rounded-b-[20px] top-0 absolute z-20" />
        <div className="w-full h-8 bg-neutral-100 -mb-0.5 rounded-t-[20px] bottom-0 absolute z-20" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">For Youth, By Youth.</p>
                <p className="mt-6 text-[18px] text-neutral-200">
                  In 2022 Chetan Soni helped found the Seattle Student Union (SSU), securing political and grassroots victories for his generation in Seattle and in Olympia. 
                </p>
                <p className="mt-6 text-[18px] text-neutral-200">
                  Now, he’s taking the formula state-wide to grow and establish chapters from Grays Harbor to Grant County, amplifying the organizing capacity of students all across the state under the banner of the Washington Youth Alliance. 
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:gap-2 lg:items-center sm:space-y-0 mt-6">
                  <a href="#" className=" inline-flex items-center justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-black bg-white hover:bg-white/80 transition border border-white/15 backdrop-blur-xl">
                    Donate Now
                  </a>
                  <a href="#" className=" inline-flex items-center justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-white hover:bg-white/10 hover:border-white/10 transition bg-white/15 border border-white/15 backdrop-blur-xl">
                    Donate to Action Fund
                  </a>
                </div>
                
              </div>
            </div>
            <div className=' h-[400px] w-full relative sm:-mt-3 pb-48 sm:pb-0 ml-0 sm:ml-12 lg:ml-0'>
              <div className='aspect-square absolute bg-white/30 shadow-lg border border-neutral-200/20 rounded-xl h-96 sm:-rotate-3 p-3 sm:hover:z-10 backdrop-blur-md z-[3]'>
                <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8f/f1/af/washington-state-capitol.jpg?w=1200&h=1200&s=1' alt='card1' className='w-full h-full object-cover rounded-xl'/>
              </div>
              <div className='aspect-square absolute bg-white/30 shadow-lg border border-neutral-200/20 rounded-xl h-96 ml-24 p-3 sm:hover:z-10 backdrop-blur-md z-[2]'>
                <img src='https://www.columbian.com/wp-content/uploads/2023/01/State_of_the_State_Washington_86863.jpg-d2edc1.jpg' alt='card1' className='w-full h-full object-cover rounded-xl'/>
              </div>

              <div className='aspect-square absolute bg-white/30 shadow-lg border border-neutral-200/20 rounded-xl h-96 ml-48 sm:rotate-3 p-3 sm:hover:z-10 backdrop-blur-md'>
                <img src='https://images.squarespace-cdn.com/content/v1/64ab1acccb2bd91641990cff/0f3af9f3-f981-4729-954f-19516d3f2ace/Chetan+and+Inslee.png?format=2500w' alt='card1' className='w-full h-full object-cover rounded-xl'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

