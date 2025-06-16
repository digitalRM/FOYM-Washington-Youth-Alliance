"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Menu, X } from "lucide-react";

import { bricolage_grotesque } from "./briFont";

import { Dialog as Dia } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navigation = [
  { name: "Home", href: "/" },
  // { name: 'Team', href: '/team' },
  { name: "Action Fund", href: "/action-fund" },
  { name: "FASFA & WASFA", href: "/fasfa-wasfa" },
  { name: "Legislative Hub", href: "/legislative-hub" },
  { name: "Chapters", href: "/chapters" },
  // {
  //   name: "Bill Tracker",
  //   href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJP-KuhMXM6202X7jx6l_p7Y6r-RAYfozYmVhxaWn91bLX3rH1MMphuci_g_9M_zUX22FJ9QoC3R2h/pubhtml?widget=true&headers=false",
  // },
  // { name: 'Contact', href: 'mailto:chetan@washingtonyouthalliance.org' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-[3] relative  rounded-b-3xl">
      <nav
        className="mx-auto flex lg:max-w-7xl items-center justify-between p-6 lg:px-8 max-w-2xl"
        aria-label="Global"
      >
        <a href="/" className="flex lg:flex-1 -m-1.5 p-1.5">
          <span className="sr-only">Washington Youth Alliance</span>
          <img
            className="h-14 md:h-[4.5rem] w-auto brightness-0"
            src="/wa-logo-white.png"
            alt="Washington Youth Alliance Logo"
          />
        </a>
        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden xl:flex xl:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
          <Dia>
            <DialogTrigger className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle className={bricolage_grotesque.className}>
                  <span className="text-gray-900 text-2xl bg-clip-text text-transparent bg-gradient-to-br to-[#0C4287] from-[#7268E7]">
                    Contact Us
                  </span>
                </DialogTitle>
                <DialogDescription>
                  We&apos;ll get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>

              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSe24vTIf8SyTBDSs2FZq0wFHfIi3H4QlTEobUDSkU1J2_G-ZQ/formResponse"
                method="POST"
                target="hidden_iframe"
                className="flex flex-col gap-4"
              >
                <input
                  name="entry.798380507"
                  type="text"
                  placeholder="Name"
                  className="w-full p-2.5 mt- border border-gray-300 rounded-lg"
                />
                <input
                  name="entry.805260323"
                  type="email"
                  placeholder="Email"
                  className="w-full p-2.5 mt- border border-gray-300 rounded-lg"
                />
                <textarea
                  name="entry.2116211502"
                  placeholder="Message"
                  className="w-full p-2.5 mt- border border-gray-300 rounded-lg"
                />
                <DialogFooter>
                  <button className="mt-4 inline-flex items-center w-full justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-white transition bg-gradient-to-br to-[#0C4287] from-[#7268E7] borderbackdrop-blur-xl">
                    Send
                  </button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dia>
        </div>
        <div className="hidden xl:flex xl:flex-1 xl:justify-end">
          <a
            href="https://secure.actblue.com/donate/wyaaction"
            className=" inline-flex items-center justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-[#0C4287] backdrop-blur-xl border shadow-sm"
          >
            Donate to Action Fund
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Washington Youth Alliance</span>
              <img
                className="h-14 w-auto brightness-0"
                src="/wa-logo-white.png"
                alt="Washington Youth Alliance Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="https://secure.actblue.com/donate/wyaaction"
                className=" inline-flex items-center w-full justify-center px-4 py-2.5 font-semibold text-sm rounded-lg text-[#0C4287] backdrop-blur-xl border shadow-sm"
              >
                Donate to Action Fund
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
