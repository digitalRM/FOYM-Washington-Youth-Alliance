import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont"
import Image from "next/image";
import Footer from "@/components/sections/4 - Footer";

const features = [
  {
    name: 'Youth-Led Organization',
    description:
      'The Washington Youth Alliance is entirely youth-led, with board members and staff all under the age of 30. This dynamic ensures that the initiatives remain relevant and impactful for young peoplee',
  },
  {
    name: 'Local Chapters',
    description:
      'Youth from ages 14-24 lead local city chapters across Washington State, making decisions aligned with the organization\'s vision and values. Each chapter can have a representative on the official board of directors, paired with an adult mentor',
  },
  {
    name: 'Diverse Board',
    description:
      'The board of directors is predominantly composed of BIPOC members and youth under the age of 25, ensuring diverse perspectives and strong advocacy for youth needs.',
  },
  {
    name: 'Focus Areas',
    description:
      'Key focus areas include gun violence prevention, youth mental health, digital literacy, and career readiness, addressing both school-based and broader youth issues',
  },
  {
    name: 'Racial Equity Commitment',
    description:
      'The organization is committed to racial equity, working to diversify staff and board members, and providing training on racial equity and implicit bias.',
  },
  {
    name: 'Significant Achievements',
    description:
      'Notable accomplishments include the successful passage of the assault weapons ban and securing over $30 million in statewide funding for youth mental health supports.',
  },
]

export default function ActionFund() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">  
      <Header />
      <div className=" py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <h1 className="text-4xl sm:text-5xl font-black text-center mb-14 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              The Action Fund
            </span>
          </h1>

          <div className="flex w-full h-full justify-center items-center my-24">
            <div className="w-full h-full relative rounded-xl">
              <Image
                src="/action-fund.png"
                alt="Image of the white house in the US"
                width={1280}
                height={720}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-12 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              Quick Facts
            </span>
          </h1>
          <div className="grid gap-8 mt-12">
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-semibold text-gray-900">{feature.name}</dt>
                  <dd className="mt-1 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="w-full h-full relative rounded-xl my-36">
            <Image 
              src="/action-fund-2.png"
              alt="Image of the white house in the US"
              width={1280}
              height={720}

              className="rounded-xl shadow-2xl"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-24 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              What We Do
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-12">
            <div className="flex flex-col gap-4">
              <p className="leading-8 text-gray-600">
                The Washington Youth Alliance empowers youth across Washington State by fostering essential life skills, promoting digital literacy, and preparing young people for educational and career success. We center our mission around the creation of youth-led chapters that advocate for crucial societal issues, including mental health, while ensuring that young people are well-equipped for the technological and professional demands of the future. Through community engagement and strategic partnerships, we strive to build a supportive framework that enables every young person to succeed and lead in their communities. 
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="leading-8 text-gray-600">
              The terms student and youth are often used interchangeably, but this leaves out a significant youth population—the most vulnerable. Our strategic vision emphasizes focusing on all youth. This means we are eventually moving away from just school-based organizing work to focus on collective issues that impact youth outside of school. There are a lot of intersections: gun violence prevention, digital literacy, etc. There are also a lot of unique problems that youth who are not in the education system experience, like access to healthy food, career readiness that isn't going to college, and more. In particular, black and brown students face these barriers the most. 
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
