import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Zap,
  Cloud,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Solutions Delivered' },
  { value: 'AI-First', label: 'Development Approach' },
  { value: 'Sydney', label: 'Based in Australia' },
];

const TRUST_SIGNALS = [
  'AI solutions & intelligent automation',
  'Web & mobile application development',
  'Startup-proven engineering',
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
      <div
        className="absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-emerald-600/8 blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability badge */}
          <div className="flex justify-center mb-8">
            <Badge
              variant="emerald"
              className="px-4 py-1.5 text-sm font-medium animate-fade-in"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Now taking on new clients · Sydney, Australia
            </Badge>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            AI Solutions &amp;{' '}
            <span className="text-gradient">Software</span>
            <br />
            for Ambitious Businesses
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            We build{' '}
            <span className="text-foreground font-medium">
              AI-powered products, web applications, and custom software
            </span>{' '}
            that give your business a competitive edge. From intelligent automation
            to full-stack platforms — engineered to scale from day one.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <Button asChild size="xl" variant="gradient" className="animate-pulse-glow">
              <Link href="#services">
                Our Services <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="#contact">
                Start a Project
              </Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            {TRUST_SIGNALS.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                {cert}
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px glass rounded-2xl overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-5 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating tech pills */}
        <div className="absolute top-1/3 left-4 hidden xl:flex flex-col gap-3">
          {[
            { icon: Zap, label: 'AI Automation', color: 'text-violet-400' },
            { icon: Shield, label: 'Secure by Design', color: 'text-emerald-400' },
            { icon: Cloud, label: 'Cloud Native', color: 'text-orange-400' },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Icon className={`h-3.5 w-3.5 ${color}`} />
              {label}
            </div>
          ))}
        </div>

        <div className="absolute top-1/3 right-4 hidden xl:flex flex-col gap-3">
          {[
            { icon: Star, label: 'Next.js 15', color: 'text-blue-400' },
            { icon: Zap, label: 'LLM Integration', color: 'text-violet-400' },
            { icon: Cloud, label: 'AWS', color: 'text-amber-400' },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Icon className={`h-3.5 w-3.5 ${color}`} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
