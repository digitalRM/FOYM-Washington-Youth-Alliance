import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont"
import Image from "next/image";
import Footer from "@/components/sections/4 - Footer";

const features = [
  {
    name: 'FAFSA (Free Application for Federal Student Aid)',
    eligibility: "US citizens, permanent residents, and certain non-citizens.",
    purpose: "Determines your eligibility for federal grants, loans, and other financial aid.",
  },
  {
    name: 'WASFA (Washington Application for State Financial Aid)',
    eligibility: "Undocumented individuals, those ineligible for FAFSA due to immigration status, and select applicants.",
    purpose: "Determines your eligibility for state grants, loans, and other financial aid.",
  },

]

const apply = [
  {
    name: 'Student Information',
    items: [
      'Social Security Number (or ITIN for WASFA)',
      'Date of Birth',
      '2022 Federal Tax Returns, W-2, 1099, and/or 1065 forms',
      'Cash, Savings, and Checking Balances',
      'Investments/Net Worth',
    ]
  },
  {
    name: 'Parent Information (if applicable)',
    items: [
      'Social Security Number (or ITIN for WASFA)',
      'Date of Birth',
      '2022 Federal Tax Returns, W-2, 1099, and/or 1065 forms',
      'Cash, Savings, and Checking Balances',
      'Investments/Net Worth',
    ]
  }
]


export default function ActionFund() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">  
      <Header />
      <div className=" py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <h1 className="text-4xl sm:text-5xl font-black text-center mb-14 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              FASFA & WASFA
            </span>
          </h1>

          <div className="flex w-full h-full justify-center items-center my-24">
            <div className="w-full h-full relative rounded-xl border-2 border-black">
              <video href="/fasfa-wasfa.mp4" controls className="rounded-[10px] shadow-2xl">
                <source src="/fasfa-wasfa.mp4" type="video/mp4" className="" />
                Your browser does not support the video tag. 
              </video>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-left mb-12 tracking-tight md:text-5xl leading-4 bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
            FAFSA and WASFA: Your Path to Financial Aid
            </span>
          </h1>
          <div className="grid gap-8 mt-4">
            <dl className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-semibold text-gray-900 text-lg">{feature.name}</dt>
                  <dd className="mt-1 text-gray-600">
                    <ol className="list-disc list-inside">
                      <li>Eligibility: {feature.eligibility}</li>
                      <li>Purpose: {feature.purpose}</li>
                    </ol>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <h1 className="text-4xl sm:text-5xl mt-12 font-black text-left mb-12 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
            What You Information You Need to Apply
            </span>
          </h1>

          <div className="grid gap-8 mt-4">
            <dl className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {apply.map((apply) => (
                <div key={apply.name}>
                  <dt className="font-semibold text-gray-900 text-lg">{apply.name}</dt>
                  <dd className="mt-1 text-gray-600">
                    <ul className="list-disc list-inside">
                      {apply.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex h-full flex-col justify-start items-start">
              <p className="text-lg font-semibold text-gray-900 mb-1">Important Reminders:</p>
              <ol className="text-gray-600 list-disc list-inside">
                <li>Student Signature: Sign the application electronically using your FSA ID.</li>
                <li>Deadlines Matter: Meeting your school&apos;s priority deadline, making timely updates, and submitting additional paperwork can significantly impact your financial aid</li>
              </ol>      
            </div>

            <div className="flex w-full h-full justify-center items-center mt-12">
              <span className="text-lg">For more information, visit the <a href="https://studentaid.gov/h/apply-for-aid/fafsa" className="text-indigo-500 underline">FAFSA</a> or <a href="https://wsac.wa.gov/wasfa" className="text-indigo-500 underline">WASFA</a> websites.</span>
            </div>
          </div>




          
          

        </div>
      </div>
      <Footer />
    </div>
  )
}
