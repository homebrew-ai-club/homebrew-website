'use client'
import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const NavLinks = () => (
  <>
    <p><Link href="/projects" className="nav-link">Projects</Link></p>
    <p><Link href="/exec" className="nav-link">Exec</Link></p>
    <p><Link href="/apply" className="nav-link">Recruitment</Link></p>
  </>
);

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="w-full h-fit flex flex-col gap-0">

      <div className="flex flex-row justify-between items-center px-4 md:px-5 py-2 md:py-2">
        <Link href="/" className="nav-link">
          <Image
            src="/logo/logo_whitebg_noborder.png"
            alt="homebrew logo"
            width={40}
            height={40}
            className="ml-2"
          />
        </Link>
        <div className="hidden md:flex flex-row gap-8">
          <NavLinks />
        </div>
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>


      {/* Mobile menu */}
      <div className={`md:hidden w-full bg-background transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-4 py-4">
          <NavLinks />
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar; 