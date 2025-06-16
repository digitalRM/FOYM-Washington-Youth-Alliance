import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont";
import Image from "next/image";
import Footer from "@/components/sections/4 - Footer";
import { ArrowRightCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Washington Youth Alliance | Local Chapters",
  description:
    "Washington Youth Alliance Chapters are free to start and power youth advocacy and decision-making across the state.",
};

const existingChapters = [
  {
    name: "Seattle Student Union",
    description:
      "Seattle Public Schools, your school can become a part of a growing team of youth leaders.",
    link: "https://www.seattlestudentunion.org/",
    linkText: "Connect with the Seattle Student Union here",
    status: "active",
  },
  {
    name: "Bellevue High School Chapter",
    description: "This chapter is in progress, more information coming soon…",
    status: "progress",
  },
  {
    name: "Moses Lake High School Chapter",
    description: "This chapter is in progress, more information coming soon…",
    status: "progress",
  },
  {
    name: "Renton High School Chapter",
    description: "",
    status: "active",
  },
  {
    name: "Pullman High School Chapter",
    description: "",
    status: "active",
  },
  {
    name: "Kenmore/Inglemoor High School Chapter",
    description: "",
    status: "active",
  },
  {
    name: "Kirkland/Redmond Chapter",
    description: "",
    status: "active",
  },
];

const flowChartItems = [
  {
    situation:
      "You noticed your school has a need for awareness on drug use and mental health needs",
    action: "Lead an educational community conversation",
  },
  {
    situation:
      "A friend that's great at making social media content + Your knowledge/research on gun violence prevention",
    action: "Make space for youth to share their stories",
  },
  {
    situation: "Your school/district is about to make significant changes",
    action:
      "Mobilize parents and students to get their input in decision-making spaces as early as possible",
  },
  {
    situation: "WYA's Lobby Day is coming up",
    action:
      "Invite your peers to get informed and involved during the legislative session",
  },
];

export default function Chapters() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">
      <Header />

      {/* Hero Section */}
      <div className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-14 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              Local Chapters
            </span>
          </h1>

          <div className="flex w-full h-full justify-center items-center my-24">
            <div className="w-full h-full relative rounded-xl">
              <Image
                src="/2.jpg"
                alt="Image of the white house in the US"
                width={1280}
                height={720}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Chapter Activities Flow Chart */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-balance">
              Washington Youth Alliance Chapters are free to start and power
              youth advocacy and decision-making across the state.
            </h2>
            <div className="">
              <p className="text-gray-600 mb-6">
                Washington Youth Alliance (WYA) Chapters are local, youth-led
                groups across Washington where young people organize to tackle
                the issues that directly impact their schools and communities.
                Whether you care about mental health, gun violence prevention,
                or other urgent challenges facing our generation, joining or
                starting a local chapter is an easy, free and powerful way to
                raise your voice, take action, and make change alongside your
                peers.
              </p>
            </div>
          </section>

          {/* Chapter Activities Flow Chart */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Chapter Activities
            </h2>
            <div className="">
              <p className="text-gray-600 mb-6">
                Chapters can engage in many activities based on your specific
                interests in social justice, group strengths, current issues,
                and/or WYA's engagement with the community. Think: "how can I
                combine my personal talents, my passions, and what the
                community/state needs?" to know where to get started.
              </p>
            </div>

            <div className="space-y-4">
              {flowChartItems.map((item, index) => (
                <div key={index} className="border bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <p className="text-gray-600">{item.situation}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-[#7268E7] flex-shrink-0 mx-4" />
                    <div className="flex-1 pl-4">
                      <p className="text-gray-600 font-medium">{item.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Chapter Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Chapter Benefits
            </h2>

            <div className="space-y-4">
              <div className="border bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 tracking-tighter">
                  Administrative Support & Resources
                </h3>
                <p className="text-gray-600">
                  WYA provides administrative support through our internal
                  chapter hub center, which includes resources for your group to
                  stay active. Fundraising and financial support are included
                  alongside a generous starting budget and access to
                  grants/donors to grow your impact. Chapters also have a
                  representative on the official WYA Board of Directors.
                </p>
              </div>

              <div className="border bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 tracking-tighter">
                  Leadership Compensation
                </h3>
                <p className="text-gray-600">
                  Additionally, we understand the amount of time and effort it
                  takes to lead this work, which is why chapter leaders (ex.
                  Chapter President) are given a $100 monthly stipend. More
                  compensation opportunities are available throughout the year
                  for leaders and chapter members.
                </p>
              </div>
            </div>
          </section>

          {/* Join Existing Chapter */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Join an Existing Chapter
            </h2>
            <p className="text-gray-600 mb-6">
              Reach out to a chapter in school or community near you!
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {existingChapters.map((chapter, index) => (
                <div key={index} className="border bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-2 tracking-tight">
                    {chapter.name}
                  </h3>
                  {chapter.description && (
                    <p className="text-gray-600 mb-2">{chapter.description}</p>
                  )}
                  <div className="flex items-center justify-between">
                    {chapter.link && (
                      <Link
                        href={chapter.link}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {chapter.linkText} →
                      </Link>
                    )}
                    {chapter.status === "progress" && (
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Start a Chapter */}
          <section className="mb-20" id="start-chapter">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Start a Chapter
            </h2>
            <p className="text-gray-600 mb-6">Don't see a chapter near you?</p>

            <div className="space-y-4">
              <div className="border bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 tracking-tighter">
                  Getting Started
                </h3>
                <p className="text-gray-600 mb-4">
                  Chapters can start with a small team of 3 who will lead
                  alongside the chapter leader. The only eligibility requirement
                  we have for establishing a chapter is that its members are
                  between 14-24 years old. Otherwise, your interest is more than
                  enough to get you started!
                </p>

                <div className="text-center mb-0">
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-[#7268E7] to-[#0C4287] text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors w-full"
                  >
                    Start Chapter Form
                  </Link>
                </div>
              </div>

              <div className="border bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  No Experience Needed
                </h3>
                <p className="text-gray-600">
                  You don't need to be a pro to get started, especially with
                  grassroots organizing. This type of organizing includes
                  everyday people like you! Maybe you noticed there is no mental
                  health support at your school. Or maybe you heard of a bill
                  that can affect your safety. WYA works with you to provide the
                  skills and resources to make your voice heard on the issues
                  you care about.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                  <p className="text-blue-800">
                    <strong>Questions?</strong> Connect with Kenia Soriano
                    Hernandez about our Chapters Program at{" "}
                    <a
                      href="mailto:kenia@washingtonyouthalliance.org"
                      className="underline hover:text-blue-600"
                    >
                      kenia@washingtonyouthalliance.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stay Involved */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Want to stay involved?
            </h2>
            <div className="border bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                Sign up for updates
              </h3>
              <p className="text-gray-600">
                Click on the link to start a chapter. Choose the "Connect with a
                WYA Chapter" option to get added to their contact list (events,
                volunteer opportunities, member meetings, etc.). Please refer to
                the contact us form in our home page to receive all other WYA
                updates.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
