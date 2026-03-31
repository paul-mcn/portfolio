import {
  Cloud,
  Shield,
  Brain,
  GitBranch,
  Code2,
  TrendingDown,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SERVICES = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description:
      'We embed intelligent automation and generative AI directly into your business workflows — from conversational assistants and document processing to custom LLM-powered features that save time and unlock new revenue.',
    tags: ['LLM Integration', 'Claude', 'RAG Pipelines', 'Automation'],
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'hover:border-violet-500/40',
  },
  {
    icon: Code2,
    title: 'Web & App Development',
    description:
      'Modern, performant web and mobile applications built with the latest stack. From marketing sites and SaaS platforms to complex internal tools — delivered with clean code and long-term maintainability in mind.',
    tags: ['Next.js 15', 'TypeScript', 'React', 'Mobile'],
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'hover:border-sky-500/40',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Scalable, cost-effective AWS infrastructure designed to grow with your business. We handle architecture, deployment, and ongoing reliability so you can focus on your product.',
    tags: ['AWS', 'Serverless', 'DynamoDB', 'CDK'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: Shield,
    title: 'Security Engineering',
    description:
      'Security built in from the ground up — not bolted on at the end. Every product we ship is hardened against the OWASP Top 10 with Zero Trust principles and AWS best practices baked into the architecture.',
    tags: ['OWASP', 'Zero Trust', 'WAF', 'IAM'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/40',
  },
  {
    icon: GitBranch,
    title: 'Startup Partnerships',
    description:
      'We understand the startup pace. Whether you need to validate an MVP fast or scale a proven product, we move with urgency, keep scope tight, and build for the stage you are actually at.',
    tags: ['MVP', 'Rapid Delivery', 'Scalable', 'Agile'],
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'hover:border-amber-500/40',
  },
  {
    icon: TrendingDown,
    title: 'Product Consulting',
    description:
      'Not sure where to start? We help you map the right technical approach for your goals — whether that is choosing the right AI tools, scoping a new platform, or untangling an existing system.',
    tags: ['Discovery', 'Architecture Review', 'Roadmapping', 'AI Strategy'],
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'hover:border-rose-500/40',
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative">
      {/* Section glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">
            What We Build
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Software that gives you{' '}
            <span className="text-gradient">an edge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From AI automation to full-stack platforms — we build products that
            are secure, scalable, and designed to deliver real business outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`group relative glass gradient-border transition-all duration-300 ${service.border} hover:shadow-lg hover:-translate-y-1`}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Discuss your project with us
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
