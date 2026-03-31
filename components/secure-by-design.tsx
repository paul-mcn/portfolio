import {
  ShieldCheck,
  Lock,
  Eye,
  AlertTriangle,
  Key,
  Globe,
  Server,
  Fingerprint,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const OWASP_ITEMS = [
  { id: 'A01', label: 'Broken Access Control', mitigated: true },
  { id: 'A02', label: 'Cryptographic Failures', mitigated: true },
  { id: 'A03', label: 'Injection (SQL/XSS/Command)', mitigated: true },
  { id: 'A04', label: 'Insecure Design', mitigated: true },
  { id: 'A05', label: 'Security Misconfiguration', mitigated: true },
  { id: 'A06', label: 'Vulnerable Components', mitigated: true },
  { id: 'A07', label: 'Auth & Session Failures', mitigated: true },
  { id: 'A08', label: 'Software & Data Integrity', mitigated: true },
  { id: 'A09', label: 'Security Logging & Monitoring', mitigated: true },
  { id: 'A10', label: 'Server-Side Request Forgery', mitigated: true },
];

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: 'Encryption Everywhere',
    description:
      'TLS 1.3 in transit. AES-256 at rest via AWS KMS customer-managed keys. Secrets in AWS Secrets Manager — never in env vars or source code.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Key,
    title: 'Zero Trust IAM',
    description:
      'Least-privilege IAM roles per function. No wildcard permissions. Service Control Policies enforce guardrails across every AWS account.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Eye,
    title: 'Full Observability',
    description:
      'CloudTrail for audit, GuardDuty for threat detection, Security Hub for posture management, and CloudWatch Insights for real-time alerting.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: Globe,
    title: 'Edge & Network Security',
    description:
      'AWS WAF with managed rule groups. AWS Shield Advanced for DDoS protection. CloudFront with strict CSP, HSTS, and X-Frame-Options headers.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Fingerprint,
    title: 'Identity & MFA',
    description:
      'Cognito with adaptive authentication, TOTP MFA, and custom risk-based triggers. Federated identity via OIDC/SAML for enterprise clients.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    icon: Server,
    title: 'Infrastructure Hardening',
    description:
      'CIS AWS Foundations Benchmark compliance. Automated cfn-nag scanning in CI/CD. Private subnets, VPC endpoints, and no public IP exposure.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
  },
];

const COMPLIANCE_BADGES = [
  'OWASP Top 10',
  'CIS Benchmark',
  'AWS Well-Architected',
  'SOC 2 Ready',
  'GDPR Aligned',
  'HIPAA Eligible',
];

export function SecureByDesign() {
  return (
    <section id="security" className="py-24 relative bg-gradient-to-b from-transparent via-slate-950/50 to-transparent">
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-600/6 rounded-full blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="emerald" className="mb-4">
            <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
            Secure by Design
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Security is not an{' '}
            <span className="text-gradient-emerald">afterthought</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every system I build starts from the OWASP Top 10 and AWS Security
            Best Practices — not as a checklist, but as an engineering mindset.
          </p>
        </div>

        {/* OWASP Coverage */}
        <div className="glass gradient-border rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/15">
              <AlertTriangle className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">OWASP Top 10 — Full Coverage</h3>
              <p className="text-sm text-muted-foreground">
                All 10 risk categories addressed at the architecture level
              </p>
            </div>
            <div className="ml-auto">
              <Badge variant="emerald" className="text-sm px-3 py-1">
                10/10 Mitigated
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {OWASP_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-emerald-400">{item.id}</div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SECURITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="glass gradient-border hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div
                    className={`w-10 h-10 rounded-lg ${pillar.bg} flex items-center justify-center mb-2`}
                  >
                    <Icon className={`h-5 w-5 ${pillar.color}`} />
                  </div>
                  <CardTitle className="text-base">{pillar.title}</CardTitle>
                  <CardDescription className="text-sm">{pillar.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Compliance badges */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            Frameworks &amp; Standards
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COMPLIANCE_BADGES.map((badge) => (
              <Badge key={badge} variant="outline" className="px-4 py-1.5 text-sm">
                <ShieldCheck className="h-3.5 w-3.5 mr-1.5 text-emerald-400" />
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
