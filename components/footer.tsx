import Link from 'next/link';
import { Zap, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const FOOTER_LINKS = {
  Services: [
    { label: 'AI Solutions', href: '#services' },
    { label: 'Web & App Development', href: '#services' },
    { label: 'Cloud Infrastructure', href: '#services' },
    { label: 'Startup Partnerships', href: '#services' },
  ],
  Company: [
    { label: 'Services', href: '#services' },
    { label: 'Security', href: '#security' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4 group">
              <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-gradient">Flux Applications</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A Sydney-based software studio building AI solutions, web platforms,
              and custom applications for ambitious businesses.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {year} Flux Applications. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
            <span>·</span>
            <span>Built with Next.js 15 &amp; Amplify Gen 2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
