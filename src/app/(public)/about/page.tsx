'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  GraduationCap,
  Target,
  BookOpen,
  Users,
  Shield,
  Brain,
  Globe,
  Heart,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const team = [
  {
    name: 'Dr. Mohammad Rahman',
    role: 'Founder & CEO',
    bio: 'Former BCS Cadre Officer with 15+ years in education technology. PhD in Educational Technology from BUET.',
    avatar: 'MR',
  },
  {
    name: 'Prof. Ayesha Siddiqua',
    role: 'Academic Director',
    bio: 'Professor of English Literature at DU. 20+ years guiding BCS aspirants. Author of 5+ exam preparation books.',
    avatar: 'AS',
  },
  {
    name: 'Eng. Kamal Hossain',
    role: 'Technical Lead (EEE)',
    bio: 'Senior Engineer at BPDB. MSc in Power Systems from BUET. Expert in EEE recruitment patterns.',
    avatar: 'KH',
  },
  {
    name: 'Dr. Farhana Islam',
    role: 'Content Strategist',
    bio: 'PhD in Bangla Literature. Former question setter for PSC. Specialist in Bengali language examination patterns.',
    avatar: 'FI',
  },
];

const milestones = [
  { year: '2022', title: 'Platform Conceptualized', description: 'Identified gaps in existing exam prep platforms for Bangladesh context.' },
  { year: '2023', title: 'Alpha Launch', description: 'Released beta version with 500 users. Daily exam system and question bank core features.' },
  { year: '2024', title: 'Public Launch', description: 'Full platform launch with all exam categories. 10,000+ registered users in first month.' },
  { year: '2025', title: 'AI Integration', description: 'Launched AI-powered adaptive revision and question generation. 50,000+ active users.' },
  { year: '2026', title: 'Scale & Expand', description: '75,000+ users. Added written exam module, recruitment circulars, and mobile apps.' },
];

const values = [
  { icon: Target, title: 'Accuracy First', description: 'Every question verified. No fabricated historical data. Source transparency guaranteed.' },
  { icon: Brain, title: 'Smart Preparation', description: 'Data-driven priority scoring. Adaptive revision. Focus on what matters for your exam.' },
  { icon: Shield, title: 'Student Privacy', description: 'Your data never sold. Secure exam environment. GDPR compliant. Full data control.' },
  { icon: Globe, title: 'Bilingual Excellence', description: 'Full Bangla & English support. Native Bengali content. Cultural context preserved.' },
  { icon: Heart, title: 'Community Driven', description: 'Contributor submissions. Peer discussions. Mentor guidance. We grow together.' },
  { icon: Award, title: 'Result Oriented', description: 'Features built for outcomes. Track progress. Measure improvement. Celebrate success.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-6 text-base px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" aria-hidden="true" />
              About JOBPREP BD
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Empowering Bangladesh\'s{' '}
              <span className="text-green-400">Future Officers</span>
            </h1>
            <p className="text-xl text-navy-200 mb-10 leading-relaxed">
              We\'re building the smartest examination preparation platform for Bangladesh — combining verified content, adaptive technology, and expert guidance to help you succeed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-navy-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" aria-hidden="true" />
                <span>75,000+ Active Students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" aria-hidden="true" />
                <span>55,000+ Verified Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" aria-hidden="true" />
                <span>92% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white dark:bg-navy-950">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-6">
                Democratizing Quality Exam Preparation
              </h2>
              <div className="space-y-4 text-navy-600 dark:text-navy-300 leading-relaxed">
                <p>
                  In Bangladesh, quality examination preparation has traditionally been expensive, inaccessible, or unreliable. 
                  Coaching centers charge premium fees, books contain outdated questions, and online platforms lack local context.
                </p>
                <p>
                  JOBPREP BD was founded to change this. We believe every serious aspirant — regardless of location or financial background — deserves access to:
                </p>
                <ul className="space-y-3 ml-6 list-disc">
                  <li>Verified previous examination questions with authentic sources</li>
                  <li>Intelligent daily practice tailored to their target exam</li>
                  <li>Adaptive revision that learns from their performance</li>
                  <li>Expert explanations in both Bangla and English</li>
                  <li>Transparent analytics to track real progress</li>
                </ul>
                <p>
                  Our platform combines the rigor of traditional preparation with the power of modern technology — all designed specifically for Bangladesh\'s examination landscape.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-navy-100 dark:bg-navy-800 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="h-20 w-20 rounded-full bg-navy-900 dark:bg-navy-100 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-10 w-10 text-white dark:text-navy-900" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">Platform Demo</h3>
                  <p className="text-navy-500 dark:text-navy-400 mb-6">Interactive walkthrough coming soon</p>
                  <Button variant="outline" className="gap-2">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    Request Demo
                  </Button>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 h-32 w-32 rounded-full bg-green-500/20 blur-3xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Core Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-navy-500 dark:text-navy-400 max-w-2xl mx-auto">
              Every feature, decision, and line of code reflects these principles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="card-hover h-full border-navy-200 dark:border-navy-800">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-navy-100 dark:bg-navy-800 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-navy-700 dark:text-navy-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-navy-500 dark:text-navy-400 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white dark:bg-navy-950">
        <div className="container-main">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Leadership Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Experts Who Understand Your Journey
            </h2>
            <p className="text-lg text-navy-500 dark:text-navy-400 max-w-2xl mx-auto">
              Our team combines decades of experience in Bangladesh\'s examination ecosystem — as successful candidates, educators, and examiners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="card-hover border-navy-200 dark:border-navy-800">
                <CardContent className="p-6">
                  <div className="h-20 w-20 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-2xl font-bold text-navy-700 dark:text-navy-300 mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 text-center mb-3">{member.role}</p>
                  <p className="text-sm text-navy-500 dark:text-navy-400 text-center leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-1 h-full w-0.5 bg-navy-200 dark:bg-navy-700" aria-hidden="true" />
                <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-green-600 border-4 border-white dark:border-navy-900 flex-shrink-0" aria-hidden="true" />
                <div className="bg-white dark:bg-navy-800 rounded-lg p-5 border border-navy-200 dark:border-navy-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-sm font-medium">
                      {milestone.year}
                    </Badge>
                    <h3 className="font-semibold text-navy-900 dark:text-white">{milestone.title}</h3>
                  </div>
                  <p className="text-navy-500 dark:text-navy-400 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="container-main relative text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-navy-200 mb-10 max-w-2xl mx-auto">
            Whether you\'re an aspirant, educator, or content expert — there\'s a place for you in the JOBPREP BD community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="xl" className="w-full sm:w-auto gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Start Preparing
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="w-full sm:w-auto gap-2 border-navy-300 hover:bg-navy-800 text-lg px-8 py-3">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}