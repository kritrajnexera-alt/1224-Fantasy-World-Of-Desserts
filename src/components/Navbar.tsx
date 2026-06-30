'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border">
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-nav text-xs tracking-[4px] uppercase text-ink no-underline font-bold">
          1224
        </Link>

        <div className="hidden md:flex items-center gap-0">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && <span className="text-red mx-3 text-[6px]">·</span>}
              <Link
                href={link.href}
                className={`font-nav text-[12px] tracking-[4px] uppercase no-underline transition-colors duration-200 hover:text-red min-h-[44px] flex items-center px-3 ${
                  pathname === link.href ? 'text-red' : 'text-ink'
                }`}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-[1px] bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-5 h-[1px] bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1px] bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg z-40 flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-nav text-sm tracking-[4px] uppercase no-underline ${
                pathname === link.href ? 'text-red' : 'text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
