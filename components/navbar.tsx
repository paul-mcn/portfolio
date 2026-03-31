'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Cloud, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Security', href: '#security' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-300',
        scrolled
          ? 'glass border-b border-white/10 py-3'
          : 'bg-transparent py-5',
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg group"
        >
          <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
            <Cloud className="h-5 w-5 text-primary" />
          </div>
          <span className="text-gradient">Paul.dev</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Button asChild size="sm" variant="gradient">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 mt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Button asChild size="sm" variant="gradient" className="flex-1">
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
