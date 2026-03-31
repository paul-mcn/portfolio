import Link from 'next/link';
import { Cloud, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const FOOTER_LINKS = {
  Services: [
    { label: 'Cloud Architecture', href: '#services' },
    { label: 'Security Engineering', href: '#security' },
    { label: 'AI/ML Integration', href: '#services' },
    { label: 'DevOps & CI/CD', href: '#services' },
  ],
  Resources: [
    { label: 'AWS Well-Architected', href: 'https://aws.amazon.com/architecture/well-architected/', external: true },
    { label: 'OWASP Top 10', href: 'https://owasp.org/www-project-top-ten/', external: true },
    { label: 'Amazon Bedrock', href: 'https://aws.amazon.com/bedrock/', external: true },
    { label: 'Amplify Gen 2', href: 'https://docs.amplify.aws/', external: true },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter / X' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4 group">
              <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Cloud className="h-5 w-5 text-primary" />
              </div>
              <span className="text-gradient">Paul.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Senior AWS Solutions Architect building secure, scalable, and
              AI-augmented cloud systems. Available for consulting engagements.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg glass hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
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
          <p>© {year} Paul. All rights reserved.</p>
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
