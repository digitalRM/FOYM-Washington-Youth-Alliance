import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont"
import Footer from "@/components/sections/4 - Footer";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Cheif Executive Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  {
    name: 'West Rodriguez',
    role: 'Cheif Technology Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  {
    name: 'Brenda Harrison',
    role: 'Cheif Marketing Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  {
    name: 'Ron Barry',
    role: 'Cheif People Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  // More people...
]

const people504 = [
  {
    name: 'Brenda Harrison',
    role: 'Cheif Marketing Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  {
    name: 'Ron Barry',
    role: 'Cheif People Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  {
    name: 'Leslie Alexander',
    role: 'Cheif Executive Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  {
    name: 'West Rodriguez',
    role: 'Cheif Technology Officer',
    imageUrl:
      '/gradient.png',
    location: 'Toronto, Canada',
  },
  // More people...
]

export default function Team() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">  
      <Header />
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-extrabold  sm:text-4xl tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
              <span className={bricolage_grotesque.className}>
              Our Board of Directors
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-700">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>

            <p className="mt-12 text-lg leading-8 font-medium tracking-tight text-neutral-700">
              Washington Youth Alliance - 501(c)(3)
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name} className="text-center">
                <img className="aspect-square w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-neutral-700">{person.name}</h3>
                <p className="text-base leading-7 text-neutral-600">{person.role}</p>
              </li>
            ))}
          </ul>
          <p className="mt-24 mx-auto max-w-2xl lg:mx-0 text-lg leading-8 font-medium tracking-tight text-neutral-700">
             Washington Youth Alliance Action Fund - 501(c)(4)
          </p>
          <ul
            role="list"
            className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people504.map((person) => (
              <li key={person.name}>
                <img className="aspect-square w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-neutral-700">{person.name}</h3>
                <p className="text-base leading-7 text-neutral-600">{person.role}</p>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-12 lg:mx-0">
            <h2 className="text-3xl mt-24 font-extrabold  sm:text-4xl tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
              <span className={bricolage_grotesque.className}>
                Our Staff
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-700 max-w-2xl">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              {people.map((person) => (
                <li key={person.name} className="">
                  <img className=" h-24 w-24 mx-auto rounded-full object-cover" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
