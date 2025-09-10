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
    <div className="flex flex-col gap-10 w-[100vw]">
      {/** Hero: text left, image right */}
      <section className="flex md:flex-row flex-col gap-5">
        <div className="md:px-[20vw] p-5 py-10 md:py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-4/7 flex flex-col gap-5">
            <h1 className="x0 text-wrap mt-2">Northwestern's home for ambitious builders.</h1>
            <p className="x1">
              Homebrew is the club for Northwestern students who build projects and startups. We provide community, guidance, and resources to help members build what they believe in.
            </p>
            <div className="flex flex-row gap-8">
              <div>
                <button className="!border !border-black !bg-white !text-[#32231c] py-3 px-5" onClick={() => router.push("/projects")}>
                  <p className="!text-[20px]">Our Projects</p>
                </button>
              </div>
              <div>
                <button className="py-3 px-5" onClick={() => router.push("/apply")}>
                  <p className="!text-[20px]">Apply</p>
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-3/7 w-full">
            <div className="relative w-full h-[260px] md:h-[420px] border border-black">
              <Image
                src="/images/the_garage_sample_photo.jpg"
                alt="Students collaborating at The Garage"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/** Intro copy */}
      <section className="flex flex-row gap-15 md:px-[20vw] items-center">
        <div className="flex-1 w-3/7">
          <div className="relative w-full h-[260px] md:h-[420px] border border-black">
            <Image
              src="/images/wildhacks_image.jpg"
              alt="Students at Wildhacks"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <section className="w-4/7">
          <div className="mx-auto  p-5 md:gap-3 flex flex-col">
            <h1 className="w-full">What we do</h1>
            <p className="x1 mb-4 md:mb-5">
              Homebrew is a place for builders to commit to real progress and share it with others.
              Through weekly <span className="medium">demo nights</span> and <span className="medium">build days</span>, you'll stay accountable, learn from your peers,
              and create unforgettable experiences.
            </p>
            <h1 className="w-full">Who we are</h1>
            <p className="x1">
              Homebrew is for anyone serious about building. Our community includes SWEs, MEs, designers, marketers, creators, and more. The only requirement is taking action. If that sounds like you, we'd love to have you.
            </p>
          </div>
        </section>
      </section>

      <hr />
      {/** Member Organizations Carousel */}
      <section className="w-full">
        <div className="mx-auto p-5 md:px-[20vw] flex flex-col gap-6 justify-center items-center">
          <h2 className="w-full text-center text-wrap">Our members have worked at prominent startups and accelerators</h2>
          <div className="w-full overflow-x-auto">
            <div className="flex gap-8 px-4 md:px-8 justify-start md:justify-center min-w-max">
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
      </section>
      <hr />

      {/** The Core */}
      <section className="w-full">
        <div className="mx-auto md:px-[20vw] p-5 flex flex-col gap-8 items-center justify-center">
          <div className="w-full">
            <h1>The Core</h1>
            <p className="x1 ">Three things you can expect out of your time at Homebrew.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
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
      </section>

      {/** Final CTA */}
      <section className="w-full">
        <div className="flex flex-col p-1 md:py-10 md:px-[20vw] p-5 gap-2 justify-center text-white bg-(--accent) border-t border-b border-black">
          <h1>Ready to get started?</h1>
          <p>If you're ready to make something awesome, we'd love to have you. We <Link href="/apply">recruit</Link> in all quarters.</p>
          <p>Any questions? Email acy@u.northwestern.edu.</p>

          <div>
            <button className="my-3 !bg-white !text-[#32231c] py-3 px-5" onClick={() => router.push("/apply")}>
              <p className="!text-[20px]">Apply</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
