import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[87.5vh] w-full overflow-hidden px-6 py-6">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 to-transparent" />
        <Image
          src="/images/the_garage_sample_photo.jpg"
          alt="a club meeting"
          width={1920}
          height={1080}
          priority
          className="rounded-[40px] w-full h-full object-cover sepia"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
        />
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="w-full h-[40%] flex flex-col items-center justify-center pt-6">
            <p className="mb-3 md:max-w-[38vw] text-center">Homebrew is open to anyone who wants to build! Technical or non-technical, software or hardware.</p>
            <p>Join our community on <Link href="https://discord.gg/VeXD2c9tqW" className="font-bold">Discord</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
