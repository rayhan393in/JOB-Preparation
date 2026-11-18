'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Check,
  X,
  GraduationCap,
  Target,
  BookOpen,
  BarChart2,
  Brain,
  RotateCcw,
  Briefcase,
  Bell,
  Shield,
  Users,
  Crown,
  Sparkles,
  Infinity,
  Download,
  Video,
  MessageSquare,
  Award,
  Zap,
} from 'lucide-react';

const plans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for getting started with daily practice',
    price: 0,
    period: 'forever',
    popular: false,
    features: [
      { name: 'Daily scheduled exams (3/day)', included: true },
      { name: 'Custom exam builder (basic)', included: true },
      { name: 'Topic-wise practice (limited)', included: true },
      { name: 'Previous questions (last 5 years)', included: true },
      { name: 'Basic result analytics', included: true },
      { name: 'Weak topic identification', included: false },
      { name: 'Adaptive revision schedule', included: false },
      { name: 'AI-generated practice questions', included: false },
      { name: 'Written exam practice', included: false },
      { name: 'PDF/Excel result export', included: false },
      { name: 'Priority support', included: false },
      { name: 'Offline mode', included: false },
    ],
    cta: 'Start Free',
    color: 'navy',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For serious aspirants targeting specific exams',
    price: 299,
    period: 'month',
    popular: true,
    features: [
      { name: 'Unlimited daily scheduled exams', included: true },
      { name: 'Full custom exam builder', included: true },
      { name: 'Unlimited topic-wise practice', included: true },
      { name: 'All previous questions (20+ years)', included: true },
      { name: 'Advanced analytics & trends', included: true },
      { name: 'Weak topic identification', included: true },
      { name: 'Adaptive revision (1,3,7,14,30 days)', included: true },
      { name: 'AI-generated practice questions', included: true },
      { name: 'Written exam practice with rubrics', included: true },
      { name: 'PDF/Excel result export', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Offline mode (mobile app)', included: true },
    ],
    cta: 'Get Pro',
    color: 'green',
    badge: 'Most Popular',
  },
  {
    id: 'institutional',
    name: 'Institutional',
    description: 'For coaching centers, universities, and organizations',
    price: 9999,
    period: 'year',
    popular: false,
    features: [
      { name: 'All Pro features for all students', included: true },
      { name: 'Admin dashboard for instructors', included: true },
      { name: 'Custom question bank creation', included: true },
      { name: 'Branded platform (white-label)', included: true },
      { name: 'Bulk student management', included: true },
      { name: 'Custom exam scheduling', included: true },
      { name: 'Detailed cohort analytics', included: true },
      { name: 'API access for integration', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'On-premise deployment option', included: true },
      { name: 'SLA guarantee (99.9% uptime)', included: true },
      { name: 'Custom feature development', included: true },
    ],
    cta: 'Contact Sales',
    color: 'purple',
  },
];

const faqs = [
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately, while downgrades apply at the end of your current billing period.',
  },
  {
    question: 'Is there a free trial for Pro?',
    answer: 'Yes, we offer a 14-day free trial for Pro plan. No credit card required to start. You\'ll get full access to all Pro features during the trial.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bKash, Nagad, Rocket, credit/debit cards (Visa, Mastercard), and bank transfers. All payments are processed securely through SSLCommerz.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Absolutely. You can cancel anytime from your account settings. Your access continues until the end of the paid period. No questions asked.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Yes! Students with valid .edu.bd email or university ID get 50% off Pro plan. Institutional plans have volume discounts starting at 50+ licenses.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes. We use bank-grade encryption (AES-256), secure Supabase infrastructure, and never sell your data. GDPR compliant. Full data export available anytime.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4 text-base px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" aria-hidden="true" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Choose Your <span className="text-green-400">Preparation Plan</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed mb-8">
              Start free forever. Upgrade when you need more power. No hidden fees. Cancel anytime.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant={billingCycle === 'monthly' ? 'default' : 'outline'}
                onClick={() => setBillingCycle('monthly')}
                className="gap-2 bg-white text-navy-900 hover:bg-navy-100"
              >
                Monthly
              </Button>
              <Button
                variant={billingCycle === 'yearly' ? 'default' : 'outline'}
                onClick={() => setBillingCycle('yearly')}
                className="gap-2 bg-white text-navy-900 hover:bg-navy-100"
              >
                Yearly <Badge variant="secondary" className="ml-2 text-xs">Save 20%</Badge>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white dark:bg-navy-950 relative">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-navy-500 dark:text-navy-400">Everything you need to know about our plans</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group card-base border-navy-200 dark:border-navy-800">
                <summary className="p-6 flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-navy-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-navy-400 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-6 text-navy-600 dark:text-navy-300 border-t border-navy-100 dark:border-navy-800">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="container-main relative text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Preparation?</h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Join 75,000+ aspirants. Start free, upgrade when you\'re ready. No risk, all reward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="xl" className="gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Create Free Account
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="gap-2 border-navy-300 hover:bg-navy-800 text-lg px-8 py-3">
                Contact Sales for Institutional
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanCard({ plan, billingCycle }: { plan: typeof plans[0]; billingCycle: 'monthly' | 'yearly' }) {
  const isYearly = billingCycle === 'yearly';
  const displayPrice = plan.id === 'free' ? 0 : isYearly ? Math.round(plan.price * 12 * 0.8) : plan.price;
  const displayPeriod = plan.id === 'free' ? 'forever' : isYearly ? 'year (save 20%)' : plan.period;

  const colorClasses = {
    navy: { border: 'border-navy-200 dark:border-navy-700', accent: 'text-navy-700 dark:text-navy-300', bg: 'bg-navy-100 dark:bg-navy-800', badge: 'bg-navy-100 text-navy-800 dark:bg-navy-800 dark:text-navy-200' },
    green: { border: 'border-green-500 dark:border-green-500 ring-2 ring-green-500', accent: 'text-green-700 dark:text-green-300', bg: 'bg-green-100 dark:bg-green-900/30', badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' },
    purple: { border: 'border-purple-500 dark:border-purple-500', accent: 'text-purple-700 dark:text-purple-300', bg: 'bg-purple-100 dark:bg-purple-900/30', badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200' },
  };

  const colors = colorClasses[plan.color as keyof typeof colorClasses];

  return (
    <Card className={cn('relative flex flex-col h-full', colors.border, plan.popular && 'ring-2 ring-green-500 dark:ring-green-500')}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200">
            {plan.badge}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <div className={cn('h-12 w-12 rounded-xl mx-auto mb-4 flex items-center justify-center', colors.bg)}>
          <GraduationCap className="h-6 w-6" style={{ color: colors.accent }} aria-hidden="true" />
        </div>
        <CardTitle className="text-2xl font-bold text-navy-900 dark:text-white">{plan.name}</CardTitle>
        <p className="text-navy-500 dark:text-navy-400 text-sm mt-2">{plan.description}</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-navy-900 dark:text-white">
              {plan.id === 'free' ? 'Free' : `৳${displayPrice.toLocaleString()}`}
            </span>
            <span className="text-navy-500 dark:text-navy-400">/{displayPeriod}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-6 flex-1">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={cn('h-5 w-5 flex-shrink-0 flex items-center justify-center mt-0.5', feature.included ? 'text-green-500' : 'text-navy-300 dark:text-navy-600')}>
                {feature.included ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </div>
              <span className={cn('text-sm', feature.included ? 'text-navy-700 dark:text-navy-300' : 'text-navy-400 dark:text-navy-500 line-through')}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        <Link href={plan.id === 'institutional' ? '/contact' : '/auth/register'}>
          <Button
            className="w-full"
            variant={plan.popular ? 'default' : 'outline'}
            size="lg"
          >
            {plan.cta}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';