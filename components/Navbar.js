import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="z-50">
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 hidden md:block">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-white/90 transition-colors">
              Brightly Soft
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/audience"
                className={`text-white cursor-pointer hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors uppercase ${router.pathname === '/audience' ? 'text-yellow-500' : 'text-white'}`}
              >
                Audience
              </Link>
              <Link
                href="/brands"
                className={`text-white cursor-pointer hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors uppercase ${router.pathname === '/brands' ? 'text-yellow-500' : 'text-white'}`}
              >
                Brands
              </Link>
              <Link
                href="/connect"
                className={`text-white cursor-pointer hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors uppercase ${router.pathname === '/connect' ? 'text-yellow-500' : 'text-white'}`}
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const MobileNavbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <>
      {/* Top bar with brand and hamburger icon */}
      <div className="flex items-center justify-between h-20 px-2">
        <Link href="/" className="text-3xl font-bold text-white tracking-tight">
          Optimism
        </Link>
        <button
          className="focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          {/* Hamburger icon */}
          <span className="block w-8 h-1 bg-white mb-1 rounded"></span>
          <span className="block w-8 h-1 bg-white mb-1 rounded"></span>
          <span className="block w-8 h-1 bg-white rounded"></span>
        </button>
      </div>

      {/* Overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black w-screen h-screen flex flex-col justify-between">
          <div className="flex items-center justify-between h-20 px-4">
            <span className="text-3xl font-bold text-white tracking-tight">Optimism</span>
            <button
              className="text-white text-lg font-semibold tracking-wide"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              CLOSE
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start px-8 gap-8">
            <Link href="/audience" onClick={() => setMenuOpen(false)}>
              <span className="text-5xl font-extrabold text-yellow-400 block mb-2">Audience</span>
            </Link>
            <Link href="/brands" onClick={() => setMenuOpen(false)}>
              <span className="text-5xl font-extrabold text-white block mb-2">Brands</span>
            </Link>
            <Link href="/connect" onClick={() => setMenuOpen(false)}>
              <span className="text-5xl font-extrabold text-yellow-400 block mb-2">Connect</span>
            </Link>
          </div>
          <div className="flex items-end justify-between px-6 pb-8">
            <div className="flex flex-col gap-2 text-white text-base">
              <Link href="/user-agreement" className="hover:underline">User Agreement</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </div>
            {/* Decorative mark/icon bottom right */}
            <div className="text-white text-3xl select-none">—</div>
          </div>
        </div>
      )}
    </>
  );
};