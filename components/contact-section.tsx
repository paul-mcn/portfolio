'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { submitContactForm } from '@/app/actions/contact';
import { contactFormSchema } from '@/lib/validations';

type Status = 'idle' | 'loading' | 'success' | 'error';

const BUDGET_OPTIONS = [
  { value: 'under-10k', label: 'Under $10k' },
  { value: '10k-50k', label: '$10k – $50k' },
  { value: '50k-100k', label: '$50k – $100k' },
  { value: 'over-100k', label: 'Over $100k' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

const INFO_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@paul.dev',
    href: 'mailto:hello@paul.dev',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote · US & EU Timezones',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '' as string,
  });

  function update(field: keyof typeof formData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (clientErrors[field]) {
      setClientErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side Zod validation (mirrors server — belt-and-suspenders)
    const parsed = contactFormSchema.safeParse(formData);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as string;
        if (!errs[field]) errs[field] = issue.message;
      }
      setClientErrors(errs);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const result = await submitContactForm(formData);
    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '', budget: '' });
    } else {
      setStatus('error');
      setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s build something{' '}
            <span className="text-gradient">exceptional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass gradient-border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-5">Contact Info</h3>
              <div className="space-y-5">
                {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass gradient-border rounded-2xl p-6">
              <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Ideal Projects
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'AWS cloud migrations & modernisations',
                  'AI/ML product integration',
                  'Security audits & remediation',
                  'Serverless application development',
                  'FinOps & architecture review',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-emerald-400">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass gradient-border rounded-2xl p-6 md:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="p-4 rounded-full bg-emerald-500/15">
                    <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus('idle')}
                    className="mt-2"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={(e) => update('name', e.target.value)}
                        className={cn(clientErrors.name && 'border-destructive')}
                        disabled={status === 'loading'}
                        autoComplete="name"
                      />
                      {clientErrors.name && (
                        <p className="text-xs text-destructive">{clientErrors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={cn(clientErrors.email && 'border-destructive')}
                        disabled={status === 'loading'}
                        autoComplete="email"
                      />
                      {clientErrors.email && (
                        <p className="text-xs text-destructive">{clientErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => update('company', e.target.value)}
                        disabled={status === 'loading'}
                        autoComplete="organization"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => update('budget', e.target.value)}
                        disabled={status === 'loading'}
                        className={cn(
                          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                          'disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-150',
                        )}
                      >
                        <option value="">Select a range...</option>
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project — what are you building, what's the timeline, and what challenges are you facing?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={cn(clientErrors.message && 'border-destructive')}
                      disabled={status === 'loading'}
                    />
                    <div className="flex justify-between">
                      {clientErrors.message ? (
                        <p className="text-xs text-destructive">{clientErrors.message}</p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-muted-foreground">
                        {formData.message.length}/2000
                      </span>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    className="w-full"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Your data is encrypted and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
