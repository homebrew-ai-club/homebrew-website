'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => (
    <>
      <p><Link href="/apply">recruitment</Link></p>
      <p><Link href="/about">about</Link></p>
      <p><Link href="/exec">exec</Link></p>
    </>
  );

  return (
    <nav className="w-full h-fit flex flex-col gap-0">
      {isHomePage ? (
        <div className="flex flex-row items-end min-h-[15vh] md:h-[12.5vh] px-4 md:px-6 py-4 md:py-0 justify-between">
          <div className="flex flex-col">
            <h1 className="mb-[-10px] md:mb-[-15px] text-2xl md:text-3xl lg:text-4xl">homebrew</h1>
            <p className="text-sm md:text-base lg:text-lg whitespace-normal max-w-[80vw] md:max-w-none">northwestern's home for passionate builders</p>
          </div>
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
      ) : (
        <div className="flex flex-row justify-between items-center min-h-[10vh] md:h-[7vh] px-4 md:px-5 py-4 md:py-0">
          <h3 className="text-xl md:text-2xl"><Link href="/" className="!no-underline">homebrew</Link></h3>
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
      )}
      
      {/* Mobile menu */}
      <div className={`md:hidden w-full bg-background transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-4 py-4">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 