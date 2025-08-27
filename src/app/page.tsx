"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"

// Logo data for member organizations
// Note: Add your logo images to /public/companyLogos/ directory
const memberLogos = [
  {
    name: "Tonal",
    image: "/companyLogos/tonal-logo.jpeg",
    link: "https://tonal.com"
  },
  {
    name: "Aviato",
    image: "/companyLogos/aviato-logo.jpeg",
    link: "https://www.aviato.co/"
  },
  {
    name: "TRMNL4",
    image: "/companyLogos/trmnl4-logo.webp",
    link: "https://trmnl4.com/"
  },
  {
    name: "Beam",
    image: "/companyLogos/beam-logo.png",
    link: "https://beam.cloud"
  },
  {
    name: "Y Combinator",
    image: "/companyLogos/yc-logo.png",
    link: "https://ycombinator.com"
  },
  {
    name: "Partiful",
    image: "/companyLogos/partiful-logo.jpeg",
    link: "https://partiful.com"
  }
];

export default function Home() {
  const router = useRouter();


  return (
    <div className="flex flex-col">
      {/** Hero section */}
      <div className="min-h-[90vh] w-full flex flex-col md:grid md:grid-cols-7 md:grid-rows-7 px-0">
        {/* Upper Left - Main Title */}
        <div className="flex-1 md:row-span-4 md:col-span-5 p-4 md:py-10 md:px-[5vw] border-r border-b border-black md:flex md:flex-col gap-5  justify-center">
          <p className="x0 text-wrap">
            Homebrew <Image
              src="/logo/logo.svg"
              alt="homebrew logo"
              width={60}
              height={60}
              className="inline-block mx-0 align-middle"
            /> is NU's community of builders.
          </p>
          <p className="x1 max-w-[1500px]">
            Homebrew is the club for Northwestern students who build projects and startups. We provide community, guidance, and resources to help members build what they believe in.
          </p>
          <div>
            <button className="py-3 px-5" onClick={() => router.push("/apply")}>
              <p className="!text-[20px]">Apply</p>
            </button>
          </div>
        </div>

        {/* Upper Right - Empty (hidden on mobile) */}
        <div className="hidden md:block md:row-span-4 md:col-span-2 md:p-12 border-b border-black flex items-center justify-center">
        </div>


        {/* Bottom Left - Description */}
        <div className="flex flex-col  md:row-span-3 md:col-span-5 p-4 md:py-10 md:px-[5vw] border-r border-b border-black md:flex justify-center">
          <div className="max-w-[1500px]">
            <h2>What we do</h2>
            <p className="x1 mb-4 md:mb-10">
              Homebrew is a place for builders to commit to real progress and share it with others.
              Through weekly <span className="medium">demo nights</span> and <span className="medium">build days</span>, you'll stay accountable, learn from your peers,
              and create unforgettable experiences.
            </p>
            <h2>Who we are</h2>
            <p className="x1">
              Homebrew is for anyone serious about building. Our community includes SWEs, MEs, designers, marketers, creators, and more. The only requirement is taking action. If that sounds like you, we'd love to have you.
            </p>
          </div>
        </div>

        {/* Bottom Right - Image */}
        <div className="flex-1 md:row-span-3 md:col-span-2 md:border-b bg-gray-50 flex items-center justify-center">
          <Image
            src="/images/computer_in_field.png"
            alt="computer in field"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Three benefits section */}
      <div className="flex flex-col p-1 md:py-10 md:px-[5vw] gap-8 ">
        <div>
          <h1>The Core</h1>
          <p className="x1 ">Three things you can expect out of your time at Homebrew.</p>
        </div>
        <div className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-black">
            <h3>Coworking Days</h3>
            <p>Stay locked in with Homebrew's coworking days, where you can work on your latest creation together with other motivated members.</p>
          </div>
          <div className="p-4 border border-black">
            <h3>Accountability and Support</h3>
            <p>Every few weeks, members do a casual demo of their recent project(s), and get support and feedback from other members!</p>
          </div>
          <div className="p-4 border border-black">
            <h3>Network</h3>
            <p>Connect with Homebrew's powerful network of other ambitious students, VCs, and founders. We will make connections to the right people to support you.</p>
          </div>
        </div>
      </div>

      {/** Member Organizations Carousel */}
      <div className="flex flex-col p-1 md:py-10 md:px-[5vw] gap-6 justify-center items-start">
        <h2 className="text-center">Our members have experience at prominent startups</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-8 px-4 md:px-8">
            {memberLogos.map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 hover:opacity-75 transition-opacity duration-200"
              >
                <Image
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={60}
                  className="h-10 md:h-18 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/** Final CTA */}
      <div className="flex flex-col p-1 md:py-10 md:px-[5vw] gap-2 justify-center text-white bg-(--accent) border-t border-b border-black">
        <h1>Ready to get started?</h1>
        <p>If you're hungry to make something awesome, we'd love to have you. We <Link href="/apply">recruit</Link> in all quarters.</p>
        <p>Any questions? Email acy@u.northwestern.edu.</p>

        <div>
          <button className="my-3 !bg-white !text-[#32231c] py-3 px-5" onClick={() => router.push("/apply")}>
            <p className="!text-[20px]">Apply</p>
          </button>
        </div>
      </div>
    </div>
  );
}
