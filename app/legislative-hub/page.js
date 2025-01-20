import Header from "@/components/header";
import { bricolage_grotesque } from "@/components/briFont";
import Footer from "@/components/sections/4 - Footer";
import Image from "next/image";
import Link from "next/link";

const bills = [
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
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Youth Day of Action</h2>
            <div className="flex justify-center bg-[url('/wall-3.png')] bg-cover bg-center bg-no-repeat shadow-white flex-col p-4 rounded-2xl">
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
            </div>
          </section>

          {/* Bill Tracker Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Bill Tracker</h2>
            <div className="grid gap-6 md:grid-cols-2">
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
            <h2 className="text-3xl font-bold mb-6">Legislative Resources</h2>
            <div className="border bg-white rounded-xl p-6">
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
