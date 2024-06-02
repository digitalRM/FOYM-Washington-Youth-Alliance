import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont"
import Image from "next/image";
import Footer from "@/components/sections/4 - Footer";
import { ArrowRightCircle } from "lucide-react";

const features = [
  {
    name: 'Lorem ipsum dolor sit amet.',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Lorem ipsum dolor sit amet.',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Lorem ipsum dolor sit amet.',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Lorem ipsum dolor sit amet.',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Lorem ipsum dolor sit amet.',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Lorem ipsum dolor sit amet.',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]

export default function ActionFund() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">  
      <Header />
      <div className=" py-12 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <h1 className="text-4xl sm:text-5xl font-black text-center mb-14 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              Our Chapters
            </span>
          </h1>

          <div className="grid grid-cols-3 w-full h-full justify-center items-center my-24 gap-3">
            {
              features.map((feature, index) => (
                <div key={index} className="w-full h-full relative rounded-xl">
                  <div className="w-full h-full bg-neutral-200/50 rounded-xl p-8 flex flex-col items-center justify-center">
                    <Image src="/action-fund.png" alt="Image of the white house in the US" width={1280} height={720}  className="rounded-xl mb-8" />
                    <p className="text-black/50 text-left">{feature.description}</p>
                    <div className="flex flex-row items-center justify-center w-full mt-8">
                      <p className="text-xl font-semibold text-black text-left mr-auto tracking-tight">{feature.name}</p>
                      <ArrowRightCircle strokeWidth={1.8} className="h-8 w-8 text-black" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
         

        </div>
      </div>
      <Footer />
    </div>
  )
}
