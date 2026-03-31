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
    icon: Cloud,
    title: 'Cloud Architecture',
    description:
      'Design and implement resilient, multi-region AWS architectures using Lambda, DynamoDB, CloudFront, and API Gateway. From serverless to container-native.',
    tags: ['Lambda', 'DynamoDB', 'CloudFront', 'CDK'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: Shield,
    title: 'Security Engineering',
    description:
      'Security-first design grounded in OWASP Top 10, Zero Trust principles, AWS WAF, Shield Advanced, and IAM least-privilege. Threat modeling included.',
    tags: ['WAF', 'IAM', 'GuardDuty', 'Security Hub'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/40',
  },
  {
    icon: Brain,
    title: 'AI/ML Integration',
    description:
      'Embed generative AI into your products using Amazon Bedrock (Claude, Nova), SageMaker, and custom RAG pipelines. From prototype to production.',
    tags: ['Bedrock', 'Claude', 'SageMaker', 'RAG'],
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'hover:border-violet-500/40',
  },
  {
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    description:
      'Accelerate delivery with AWS CodePipeline, GitHub Actions, Amplify Gen 2, and automated infrastructure testing via CDK assertions and cfn-nag.',
    tags: ['CodePipeline', 'Amplify', 'GitHub Actions', 'CDK'],
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'hover:border-amber-500/40',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Production Next.js 15 applications with TypeScript, Tailwind CSS, and Server Actions — deployed on Amplify Hosting with edge optimizations.',
    tags: ['Next.js 15', 'TypeScript', 'React 19', 'Amplify'],
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'hover:border-sky-500/40',
  },
  {
    icon: TrendingDown,
    title: 'FinOps & Cost Optimization',
    description:
      'Right-size workloads, leverage Savings Plans, Spot instances, and implement cost allocation tagging to reduce AWS bills by up to 40%.',
    tags: ['Cost Explorer', 'Savings Plans', 'Spot', 'Tagging'],
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
            What I Do
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            End-to-End{' '}
            <span className="text-gradient">Cloud Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From architecture design to production deployment — every service
            is delivered with security, scalability, and long-term maintainability
            in mind.
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
            Discuss your project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
