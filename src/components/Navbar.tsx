'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="w-full h-fit flex flex-col gap-0">
      {isHomePage ?
        <div className="flex flex-row items-end h-[12.5vh] px-6 justify-between">
          <div className="flex flex-col">
            <h1 className="mb-[-15px]">homebrew</h1>
            <p>northwestern's home for passionate builders</p>
          </div>
          <div className="flex flex-row gap-8">
            <p><Link href="/apply">recruitment</Link></p>
            <p><Link href="/about">about</Link></p>
            <p><Link href="/exec">exec</Link></p>
          </div>
        </div>
        :
        <div className="flex flex-row justify-between items-center h-[7vh] px-5 pt-0.5">
          <h3><Link href="/" className="!no-underline">homebrew</Link></h3>
          <div className="flex flex-row gap-8">
            <p><Link href="/apply">recruitment</Link></p>
            <p><Link href="/about">about</Link></p>
            <p><Link href="/exec">exec</Link></p>
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar; 