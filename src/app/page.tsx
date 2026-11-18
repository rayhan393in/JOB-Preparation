'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  GraduationCap,
  Target,
  BookOpen,
  Clock,
  BarChart2,
  Brain,
  RotateCcw,
  Briefcase,
  Zap,
  Shield,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  BookMarked,
  PenTool,
  FileText,
  Calendar,
  PlayCircle,
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Daily Scheduled Exams',
    description: 'Multi-subject daily examinations with smart scheduling based on your target exam, weaknesses, and historical priorities.',
    href: '/exams/daily',
  },
  {
    icon: BookOpen,
    title: 'Custom Exam Builder',
    description: 'Create your own exams with flexible configuration: subjects, topics, difficulty, sources, and marking schemes.',
    href: '/practice/custom',
  },
  {
    icon: BookMarked,
    title: 'Previous Questions Database',
    description: 'Access verified historical questions from BCS, Government Jobs, EEE, and Engineering recruitment exams with detailed explanations.',
    href: '/questions/previous',
  },
  {
    icon: BarChart2,
    title: 'Topic Frequency Analysis',
    description: 'Smart priority scoring based on historical frequency, recent trends, exam coverage, and syllabus importance.',
    href: '/analytics/topics',
  },
  {
    icon: Brain,
    title: 'Adaptive Revision',
    description: 'Personalized revision schedules using spaced repetition (1, 3, 7, 14, 30 days) based on your performance.',
    href: '/revision',
  },
  {
    icon: PenTool,
    title: 'Written Examination Support',
    description: 'Practice descriptive answers, mathematical derivations, circuit diagrams with examiner evaluation and rubrics.',
    href: '/exams/written',
  },
  {
    icon: Zap,
    title: 'AI-Generated Practice',
    description: 'Admin-controlled AI question generation from approved materials, always reviewed before entering verified bank.',
    href: '/ai-practice',
  },
  {
    icon: Briefcase,
    title: 'Upcoming Job Alerts',
    description: 'Verified recruitment circulars with countdown timers, eligibility, syllabus, and official links.',
    href: '/upcoming',
  },
];

const examCategories = [
  {
    id: 'bcs-preliminary',
    title: 'BCS Preliminary',
    bnTitle: 'বিসিএস প্রাথমিক',
    description: 'Complete preparation for BCS Preliminary examination with daily exams, topic-wise practice, and previous questions.',
    subjects: ['Bangla', 'English', 'Mathematics', 'Mental Ability', 'Bangladesh Affairs', 'International Affairs', 'General Science', 'ICT', 'Geography', 'Ethics'],
    icon: Award,
    color: 'navy',
    href: '/preparation/bcs-preliminary',
    stats: { questions: 15000, exams: 500, users: 25000 },
  },
  {
    id: 'bcs-written',
    title: 'BCS Written',
    bnTitle: 'বিসিএস লিখিত',
    description: 'Comprehensive written examination preparation with model answers, rubrics, and examiner evaluation system.',
    subjects: ['Bangla', 'English', 'Bangladesh Affairs', 'International Affairs', 'General Science', 'Optional Subjects'],
    icon: PenTool,
    color: 'green',
    href: '/preparation/bcs-written',
    stats: { questions: 8000, exams: 200, users: 15000 },
  },
  {
    id: 'eee-technical',
    title: 'EEE Technical Jobs',
    bnTitle: 'ইইই টেকনিক্যাল চাকরি',
    description: 'Specialized preparation for EEE Assistant Engineer, Sub-Assistant Engineer, and Power Sector recruitment.',
    subjects: ['Circuit Analysis', 'Machines', 'Power Systems', 'Power Electronics', 'Control Systems', 'Measurements', 'Electronics'],
    icon: Zap,
    color: 'amber',
    href: '/preparation/eee-technical',
    stats: { questions: 12000, exams: 300, users: 18000 },
  },
  {
    id: 'general-jobs',
    title: 'General Government Jobs',
    bnTitle: 'সাধারণ সরকারি চাকরি',
    description: 'Preparation for all general cadre and non-cadre government job examinations.',
    subjects: ['Bangla', 'English', 'Mathematics', 'General Knowledge', 'ICT', 'Mental Ability'],
    icon: Users,
    color: 'blue',
    href: '/preparation/general-jobs',
    stats: { questions: 20000, exams: 800, users: 50000 },
  },
];

const stats = [
  { label: 'Active Students', value: '75,000+', icon: Users },
  { label: 'Questions in Bank', value: '55,000+', icon: FileText },
  { label: 'Completed Exams', value: '2,500+', icon: Calendar },
  { label: 'Success Rate', value: '92%', icon: TrendingUp },
];

const testimonials = [
  {
    name: 'Md. Rahim Uddin',
    role: 'BCS Cadre Officer (Admin)',
    content: 'JOBPREP BD\'s daily exam system kept me consistent. The topic-wise analysis helped me focus on high-priority areas. The explanations for EEE questions are exceptional.',
    avatar: 'RU',
  },
  {
    name: 'Fatima Akter',
    role: 'Assistant Engineer, BPDB',
    content: 'The custom exam builder let me practice exactly what I needed. Weak topic identification saved me months of random studying. Highly recommended for technical exams.',
    avatar: 'FA',
  },
  {
    name: 'Kamal Hossain',
    role: 'Non-Cadre Officer',
    content: 'Previous question database is gold. Verified sources, accurate explanations, and the revision system made sure I never forgot important topics.',
    avatar: 'KH',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="success" className="mb-6 text-base px-4 py-2">
              <span className="mr-2">🇧🇩</span>
              Bangladesh\'s #1 Job Exam Preparation Platform
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Prepare Smart. Practice Daily.{' '}
              <span className="text-green-400">Get Exam Ready.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-navy-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Structured preparation for BCS, Government Jobs, EEE Technical, Power Sector, and Engineering recruitment.
              Daily scheduled exams, AI-powered analytics, and adaptive revision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/auth/register">
                <Button size="xl" className="w-full sm:w-auto gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                  Start Free Preparation
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/preparation/categories">
                <Button size="xl" variant="outline" className="w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                  Explore Categories
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-navy-300">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent lg:from-navy-50 lg:to-transparent dark:from-navy-950 dark:to-transparent" />
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-navy-50 dark:bg-navy-900/50 border-y border-navy-100 dark:border-navy-800">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-navy-900 dark:text-white">Verified Questions</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400">Only verified previous exam questions</p>
            </div>
            <div className="p-4">
              <Shield className="h-10 w-10 text-green-600 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-navy-900 dark:text-white">Secure Platform</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400">Bank-level security & privacy</p>
            </div>
            <div className="p-4">
              <Brain className="h-10 w-10 text-green-600 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-navy-900 dark:text-white">Adaptive Learning</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400">AI-powered personalized revision</p>
            </div>
            <div className="p-4">
              <Globe className="h-10 w-10 text-green-600 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-navy-900 dark:text-white">Bilingual Support</h3>
              <p className="text-sm text-navy-500 dark:text-navy-400">English & Bengali interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-navy-950">
        <div className="container-main">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Key Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-navy-500 dark:text-navy-400 max-w-2xl mx-auto">
              Comprehensive tools designed by examination experts for serious aspirants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link key={feature.href} href={feature.href} className="group">
                <Card className="card-hover h-full group-hover:shadow-lg transition-all duration-300 border-navy-200 dark:border-navy-800">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-navy-100 dark:bg-navy-800 flex items-center justify-center mb-4 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-navy-700 dark:text-navy-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-navy-900 dark:text-white mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-navy-500 dark:text-navy-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Examination Categories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Choose Your Target Examination
            </h2>
            <p className="text-lg text-navy-500 dark:text-navy-400 max-w-2xl mx-auto">
              Specialized preparation modules for every major recruitment exam in Bangladesh.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {examCategories.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                <Card className="card-hover h-full overflow-hidden border-navy-200 dark:border-navy-800 group-hover:shadow-xl transition-all duration-300">
                  <div className={cn('p-6 h-32 flex items-end', `bg-${category.color}-900`)} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <Badge variant="outline" className={cn('mb-2', `bg-${category.color}-100 text-${category.color}-800 dark:bg-${category.color}-900/30 dark:text-${category.color}-300`)}>
                          {category.bnTitle}
                        </Badge>
                        <h3 className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <category.icon className="h-10 w-10 text-navy-200 dark:text-navy-700 group-hover:text-green-500 transition-colors flex-shrink-0" aria-hidden="true" />
                    </div>
                    <p className="text-navy-500 dark:text-navy-400 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.subjects.slice(0, 5).map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                      {category.subjects.length > 5 && (
                        <Badge variant="secondary" className="text-xs">
                          +{category.subjects.length - 5} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-navy-500 dark:text-navy-400 border-t border-navy-100 dark:border-navy-800 pt-4">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        <span>{category.stats.questions.toLocaleString()} Questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{category.stats.exams} Exams</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" aria-hidden="true" />
                        <span>{category.stats.users.toLocaleString()} Users</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/preparation/categories">
              <Button variant="outline" size="lg" className="gap-2">
                View All Categories
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white dark:bg-navy-950">
        <div className="container-main">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              3 Steps to Exam Readiness
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-2xl font-bold text-navy-900 dark:text-white">
                1
              </div>
              <div className="pt-10">
                <BookOpen className="h-12 w-12 text-navy-600 dark:text-navy-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">Choose Your Path</h3>
                <p className="text-navy-500 dark:text-navy-400">
                  Select your target exam category, create a preparation profile, and set your daily study goals.
                </p>
              </div>
            </div>
            <div className="text-center p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-2xl font-bold text-navy-900 dark:text-white">
                2
              </div>
              <div className="pt-10">
                <PlayCircle className="h-12 w-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">Practice Daily</h3>
                <p className="text-navy-500 dark:text-navy-400">
                  Take scheduled multi-subject daily exams or build custom practice sessions. Track progress in real-time.
                </p>
              </div>
            </div>
            <div className="text-center p-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-2xl font-bold text-navy-900 dark:text-white">
                3
              </div>
              <div className="pt-10">
                <TrendingUp className="h-12 w-12 text-amber-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">Analyze & Improve</h3>
                <p className="text-navy-500 dark:text-navy-400">
                  Get detailed analytics, identify weak topics, and follow adaptive revision schedules for mastery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Trusted by Aspirants</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="card-hover h-full border-navy-200 dark:border-navy-800">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-navy-600 dark:text-navy-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-700 dark:text-navy-300 font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-navy-500 dark:text-navy-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="container-main relative text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Preparation Journey?
          </h2>
          <p className="text-xl text-navy-200 mb-10 max-w-2xl mx-auto">
            Join 75,000+ aspirants who trust JOBPREP BD for their exam preparation. Free to start, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="xl" className="w-full sm:w-auto gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Create Free Account
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/preparation/categories">
              <Button size="xl" variant="outline" className="w-full sm:w-auto gap-2 border-navy-300 hover:bg-navy-800 text-lg px-8 py-3">
                Browse Examinations
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-navy-400 text-sm">
            By continuing, you agree to our <Link href="/terms" className="underline hover:text-white">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}