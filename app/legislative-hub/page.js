import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont";
import Footer from "@/components/sections/4 - Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Washington Youth Alliance | Legislative Hub",
  description:
    "Stay informed about youth-focused legislation in Washington State. Track bills, find advocacy resources, and learn how to get involved in the legislative process.",
};

const bills = [
  {
    name: "HB 1634 - Student Behavioral Health Support",
    description:
      "Provides school districts and public schools with assistance to coordinate comprehensive behavioral health supports for students.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Senators Thai, Eslick, Reed, Cortes, Doglio, Goodman, Salahuddin, Bergquist, Scott, Parshley, Zahn, Nance, and Shavers",
  },
  {
    name: "HB 1163/SB 5140 - Firearm Purchase Requirements",
    description:
      "Enhances requirements for firearm purchases by implementing a permit system, requiring safety training with live-fire exercises, and strengthening background checks. Includes annual permit reviews and dealer notification systems.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Rep. Bery, Taylor, Farivar, Walen, Pollet, Alvarado, Mena, and Duerr",
  },
  {
    name: "HB 1152 - Secure Firearm Storage",
    description:
      "Establishes requirements for secure storage of firearms in vehicles and residences, including specific storage conditions and penalties for violations. Creates the Washington Office of firearm safety and violence prevention.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Rep. Doglio, Walen, Ryu, Ramel, Farvivar, Berry, Leavitt, Alvarado, Mena, and Duerr",
  },
  {
    name: "HB 1136/SB 5164 - Student Navigation Support",
    description:
      "Creates an outreach and enrollment specialist program to increase postsecondary enrollment through financial aid assistance and institutional connections. Includes training programs for educators and financial aid professionals.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors: "Rep. Leavitt",
  },
  {
    name: "HB 1132 - Firearm Purchase Limits",
    description:
      "Limits bulk purchases of firearms to one per 30-day period and restricts ammunition purchases. Includes penalties for violations ranging from civil infractions to gross misdemeanors.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Rep. Farivar, Ormsby, Ryu, Ramel, Berry, Mena, Alvarado, Reed, and Parshley",
  },
  {
    name: "HB 1031 - School Temperature Standards",
    description:
      "Addresses rising school facility temperatures by developing indoor temperature standards and recommendations. Includes potential funding for implementing cooling systems.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors: "Rep. Reeves, Ryu, Ramel, and Reed",
  },
  {
    name: "HB 1124/SB 5112 - Prescribing Psychologist Certification",
    description:
      "Establishes certification for prescribing psychologists to increase access to mental health care providers. Includes authority to prescribe psychotropic medications and continuing education requirements.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Rep. Simmons, Macri, Senn, Stonier, Ormsby, Tharinger, Kloba, Duerr, Ryu, Morgan, and Reed",
  },
  {
    name: "HB 1241 - Special Education Access",
    description:
      "Improves access to special education services through enhanced evaluation processes, communication requirements, and support services. Includes funding for school psychologists and service providers.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Rep. Pollet, Couture, Callan, Farivar, Simmons, Penner, Kloba, Nance, Davis, and Salahuddin",
  },
  {
    name: "SB 5126 - Student Mental Health Network",
    description:
      "Establishes a statewide network for student mental and behavioral health support, including screening, referral services, and regional programs. Includes grant funding for school districts.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Senators Nobles, Cortes, Bateman, Hasegawa, Krishnadasan, Liias, Riccelli, Saldaña, Valdez, Wellman, and C. Wilson",
  },
  {
    name: "SB 5080 - Financial Education Requirement",
    description:
      "Makes financial education a graduation requirement starting with the class of 2033. Includes development of instructional materials and implementation guidelines.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Senators Valdez, Cortes, Harris, Krishnadasan, Liias, Nobles, Orwall, Riccelli, Saldaña, Shewmake, Trudeau, and Wilson C.",
  },
  {
    name: "SB 5123 - Student Protection Expansion",
    description:
      "Expands protected classes in public schools to include ethnicity, homelessness, immigration status, neurodivergence, and clarifies protections for gender identity and sexual orientation.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors:
      "Senators Nobles, Wilson C., Hasegawa, Liias, Lovelett, Saldaña, Slatter, Stanford, and Valdez",
  },
  {
    name: "SB 5098 - Weapons Restriction",
    description:
      "Restricts weapons possession in public spaces where children are likely to be present, including parks, playgrounds, and county fairs. Includes signage requirements and exemptions.",
    link: "https://docs.google.com/document/d/1mMD534kPOhwrFT96spfP2ogFkhQ4dXKjgWDA2g4oG_A/edit?tab=t.0",
    sponsors: "Senate Law and Justice",
  },
];

export default function LegislativeHub() {
  return (
    <div className="flex-col justify-center flex w-screen overflow-x-hidden scroll-smooth">
      <Header />
      <div className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-14 tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7] py-1">
            <span className={bricolage_grotesque.className}>
              Legislative Hub
            </span>
          </h1>

          {/* Lobby Day Section */}
          <section className="mb-20 overflow-visible">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              2025 Youth Day of Action
            </h2>
            {/* <div className="flex justify-center bg-[url('/wall-3.png')] bg-cover bg-right overflow-visible bg-no-repeat shadow-white flex-col p-4 rounded-2xl">
              <h3 className="text-2xl font-bold mb-0 text-white">
                <span className={bricolage_grotesque.className}>
                  March 5th, 2025
                </span>
              </h3>
              <p className="mb-6 text-white max-w-xl">
                Join us for our annual Youth Day of Action at the Washington
                State Capitol! Make your voice heard and connect with other
                young advocates.
              </p>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc36QMWOPrkMUTFGYg-2AEWDkIKgNdPdM4WCfa-NHhr8NBc2g/viewform"
                className="bg-white text-black mt-20 px-3 py-3 rounded-lg font-semibold inline-block transition-colors"
                target="_blank"
              >
                Register Now
              </Link>
            </div> */}

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-sm border rounded-2xl p-3 backdrop-blur-md">
                <Image
                  src="/1.jpg"
                  alt="Youth advocates at the Capitol"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg border"
                />
              </div>
              <div className="bg-white shadow-sm border rounded-2xl p-3 backdrop-blur-md">
                <Image
                  src="/2.jpg"
                  alt="Students meeting with legislators"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg border"
                />
              </div>
              <div className="bg-white shadow-sm border rounded-2xl p-3 backdrop-blur-md">
                <Image
                  src="/3.jpeg"
                  alt="Group photo at the Capitol"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg border"
                />
              </div>
            </div>
          </section>

          {/* Bill Tracker Embed */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Live Bill Tracker
            </h2>
            <div className="w-full aspect-[16/9] relative p-4 bg-white rounded-3xl border">
              <iframe
                src="https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vQJP-KuhMXM6202X7jx6l_p7Y6r-RAYfozYmVhxaWn91bLX3rH1MMphuci_g_9M_zUX22FJ9QoC3R2h/pubhtml?widget=true&headers=false"
                className="w-full h-full border rounded-xl "
                title="Bill Tracker Spreadsheet"
              />
            </div>
          </section>

          {/* Take Action Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Take Action!
            </h2>
            <div className="space-y-4">
              <div className="border bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  How Bills Move Through Committees
                </h3>
                <p className="text-gray-600 mb-4">
                  Bills are assigned to committees based on their subject matter
                  (e.g., Early Learning and K-12 Education). Committees hold
                  public meetings to gather testimony and comments from
                  constituents, which helps legislators decide whether to:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Pass the bill with or without changes</li>
                  <li>Create and pass a new version of the bill</li>
                  <li>Reject the bill</li>
                  <li>Take no action</li>
                </ul>
              </div>

              <div className="border bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Sign-in Pro Before a Committee Hearing
                </h3>
                <p className="text-gray-600 mb-4">
                  Show your support by signing in &quot;Pro&quot; before
                  committee hearings. Important notes:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Available only when a committee hearing is scheduled</li>
                  <li>Closes 1 hour before the hearing start time</li>
                  <li>
                    Check the bill tracker above for upcoming committee meetings
                  </li>
                </ul>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
                  <p className="text-gray-600 font-medium mb-3">
                    How to Sign In:
                  </p>
                  <ol className="list-decimal list-inside text-gray-600 ml-4 space-y-2">
                    <li>
                      From the bill tracker, click through to the bill&apos;s
                      &quot;home page&quot;
                    </li>
                    <li>Click on &quot;Sign Up to Testify...&quot;</li>
                    <li>
                      Select &quot;I would like my position noted for the
                      legislative record&quot;
                    </li>
                    <li>
                      Fill out required fields, selecting &quot;Pro&quot; and
                      noting your affiliation with the Washington Youth Alliance
                      Action Fund
                    </li>
                  </ol>
                </div>
              </div>

              <div className="border bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Provide Testimony
                </h3>
                <p className="text-gray-600 mb-4">
                  Testimony is your opportunity to highlight issues, share your
                  story, and emphasize why a bill is the right solution. You can
                  provide:
                </p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2 mb-4">
                  <li>
                    Written testimony (submit up to 24 hours after hearing
                    start)
                  </li>
                  <li>Remote testimony (sign-up closes 1 hour before)</li>
                  <li>Live testimony (sign-up closes 1 hour before)</li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-4 border">
                  <p className="font-medium mb-2">Sample Testimony Template:</p>
                  <div className="text-gray-600 italic">
                    &quot;My name is ______, I am a student of ____ School in
                    _____ County. The rise of mental and behavioral issues
                    across the country for youth is palpable, but the same
                    cannot be said for how we address their needs. Our students
                    and teachers in Washington face the challenge of filling in
                    the gaps for mental and behavioral health support. Yet the
                    lack of access, resources, and coordination for
                    evidence-based strategies leaves teachers, staff, and
                    parents without an effective support system. Unfortunately,
                    this fragmented support system leaves students vulnerable to
                    strategies that can harm rather than accurately reflect
                    their needs. SB 5126 is key to addressing the needs of our
                    schools. A statewide network for mental and behavioral
                    support will ensure that all students in Washington receive
                    the support they need. I ask you to vote in support of SB
                    5126.&quot;
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800">
                    Want to testify on behalf of the Washington Youth Alliance
                    Action Fund? Contact{" "}
                    <a
                      href="mailto:kenia@washingtonyouthalliance.org"
                      className="text-blue-900 hover:text-blue-950 underline"
                    >
                      kenia@washingtonyouthalliance.org
                    </a>{" "}
                    for materials and training.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bill Tracker Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Bill Tracker
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {bills.map((bill) => (
                <div key={bill.name} className="border bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-2">{bill.name}</h3>
                  <p className="text-gray-600 mb-2">{bill.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Sponsored by: {bill.sponsors}
                  </p>
                  <Link
                    href={bill.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                  >
                    Read One-Pager →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Legislative Resources Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Legislative Resources
            </h2>
            <div className="border bg-white rounded-2xl p-6">
              <p className="mb-4">
                For the most up-to-date information on the legislative session,
                bills, and committee hearings, visit the Washington State
                Legislature website.
              </p>
              <Link
                href="https://leg.wa.gov"
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
              >
                Visit Washington State Legislature Website →
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
