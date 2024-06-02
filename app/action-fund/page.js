import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont"
import Image from "next/image";
import Footer from "@/components/sections/4 - Footer";

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
                objectFit="cover"
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
              objectFit="cover"
              className="rounded-xl shadow-2xl"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-24 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              What We Do
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <div className="flex flex-col gap-4">
              <p className="leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Purus sit amet luctus venenatis lectus magna. Dictumst quisque sagittis purus sit. Rhoncus dolor purus non enim praesent elementum facilisis leo. Interdum consectetur libero id faucibus nisl tincidunt. Tellus id interdum velit laoreet id donec ultrices. Congue eu consequat ac felis. Nisi quis eleifend quam adipiscing. Aliquam id diam maecenas ultricies mi. Lacus vel facilisis volutpat est velit. Leo vel fringilla est ullamcorper eget nulla. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. 
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="leading-8 text-gray-600">
                Purus in mollis nunc sed id semper. Quis eleifend quam adipiscing vitae proin. In massa tempor nec feugiat nisl pretium. Nunc sed augue lacus viverra vitae congue eu consequat ac. Sed arcu non odio euismod lacinia at quis risus. Nibh sit amet commodo nulla facilisi nullam. Cras ornare arcu dui vivamus. Urna nunc id cursus metus aliquam. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Dui vivamus arcu felis bibendum ut. Dui ut ornare lectus sit amet est placerat. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Commodo sed egestas egestas fringilla. Magna fermentum iaculis eu non diam. Bibendum neque egestas congue quisque egestas diam in arcu cursus.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
