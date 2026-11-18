'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Calendar,
  Clock,
  Target,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Zap,
  Users,
  Brain,
  RotateCcw,
  AlertTriangle,
} from 'lucide-react';

const todayExam = {
  id: 'daily-2026-11-18',
  title: 'Daily Exam - 18 November 2026',
  date: '2026-11-18',
  startTime: '06:00',
  endTime: '23:59',
  duration: 30,
  totalQuestions: 30,
  totalMarks: 30,
  correctMarks: 1,
  negativeMarks: 0.5,
  subjects: [
    { name: 'Bangla', topic: 'সমাস (Compound)', questions: 10, color: 'navy' },
    { name: 'English', topic: 'Preposition', questions: 10, color: 'blue' },
    { name: 'Mathematics', topic: 'Percentage & Ratio', questions: 10, color: 'green' },
  ],
  status: 'live' as const,
};

const upcomingExams = [
  { date: '2026-11-19', title: 'Daily Exam - 19 November', subjects: ['Bangla: কারক', 'English: Tense', 'Math: Profit & Loss'], status: 'scheduled' },
  { date: '2026-11-20', title: 'Daily Exam - 20 November', subjects: ['Bangla: বানান', 'English: Voice', 'Math: Time & Work'], status: 'scheduled' },
  { date: '2026-11-21', title: 'Daily Exam - 21 November', subjects: ['Bangla: সমাস', 'English: Narration', 'Math: Algebra'], status: 'scheduled' },
  { date: '2026-11-22', title: 'Daily Exam - 22 November', subjects: ['Bangla: বাগধারা', 'English: Preposition', 'Math: Geometry'], status: 'scheduled' },
  { date: '2026-11-23', title: 'Daily Exam - 23 November', subjects: ['Bangla:ূপসর্গ-প্রত্যয়', 'English: Articles', 'Math: Speed & Distance'], status: 'scheduled' },
  { date: '2026-11-24', title: 'Daily Exam - 24 November', subjects: ['Bangla: বাংলা সাহিত্য', 'English: Vocabulary', 'Math: Probability'], status: 'scheduled' },
];

const eeeTodayExam = {
  id: 'eee-daily-2026-11-18',
  title: 'EEE Daily Exam - 18 November 2026',
  date: '2026-11-18',
  startTime: '06:00',
  endTime: '23:59',
  duration: 30,
  totalQuestions: 30,
  totalMarks: 30,
  correctMarks: 1,
  negativeMarks: 0.5,
  subjects: [
    { name: 'Power Electronics', topic: 'Rectifiers', questions: 10, color: 'amber' },
    { name: 'Electrical Machines', topic: 'Transformers', questions: 10, color: 'orange' },
    { name: 'Control Systems', topic: 'Stability Analysis', questions: 10, color: 'red' },
  ],
  status: 'live' as const,
};

const patterns = [
  {
    id: 'balanced',
    name: 'Balanced Preparation',
    description: 'Covers all subjects evenly across the routine. Best for comprehensive syllabus coverage and building strong foundations.',
    icon: Award,
    color: 'navy',
    subjectsPerDay: 3,
    questionsPerSubject: 10,
    bestFor: 'Early preparation phase (6+ months before exam)',
  },
  {
    id: 'weakness',
    name: 'Weakness-Based',
    description: 'Allocates more questions to your identified weak topics. Uses adaptive analytics to target low-accuracy areas.',
    icon: Brain,
    color: 'amber',
    subjectsPerDay: 3,
    questionsPerSubject: 'Variable (5-15)',
    bestFor: 'Mid preparation phase (3-6 months before exam)',
  },
  {
    id: 'revision',
    name: 'Revision-Based',
    description: 'Focuses on spaced repetition of previously studied topics. Follows 1, 3, 7, 14, 30-day intervals for long-term retention.',
    icon: RotateCcw,
    color: 'green',
    subjectsPerDay: 2,
    questionsPerSubject: 15,
    bestFor: 'Final preparation phase (1-3 months before exam)',
  },
];

const routineLengths = [
  { days: 7, label: '1 Week', description: 'Quick revision cycle' },
  { days: 15, label: '2 Weeks', description: 'Short intensive prep' },
  { days: 30, label: '1 Month', description: 'Standard monthly cycle' },
  { days: 60, label: '2 Months', description: 'Comprehensive coverage' },
  { days: 90, label: '3 Months', description: 'Deep preparation' },
  { days: 180, label: '6 Months', description: 'Full syllabus mastery' },
];

export default function DailyExamsPage() {
  const [activeTab, setActiveTab] = React.useState<string>('general');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4 text-base px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
              Daily Scheduled Examinations
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Smart Daily Practice for <span className="text-green-400">Consistent Progress</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Multi-subject daily exams with intelligent scheduling. Minimum 2 subjects per exam. 
              Adaptive patterns based on your target, weaknesses, and revision needs.
            </p>
          </div>
        </div>
      </section>

      {/* Today's Exam */}
      <section className="py-12 bg-white dark:bg-navy-950 -mt-6 relative z-10">
        <div className="container-main">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">
                <Award className="h-4 w-4 mr-2" aria-hidden="true" />
                General / BCS
              </TabsTrigger>
              <TabsTrigger value="eee">
                <Zap className="h-4 w-4 mr-2" aria-hidden="true" />
                EEE Technical
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {activeTab === 'general' ? (
            <ExamCard exam={todayExam} />
          ) : (
            <ExamCard exam={eeeTodayExam} />
          )}

          {/* Exam Details */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-navy-200 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-navy-700 dark:text-navy-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-navy-900 dark:text-white">Exam Window</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-navy-600 dark:text-navy-300">
                    <span className="font-medium text-navy-900 dark:text-white">Start:</span> 6:00 AM
                  </p>
                  <p className="text-navy-600 dark:text-navy-300">
                    <span className="font-medium text-navy-900 dark:text-white">End:</span> 11:59 PM
                  </p>
                  <p className="text-navy-600 dark:text-navy-300">
                    <span className="font-medium text-navy-900 dark:text-white">Duration:</span> 30 minutes
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-navy-200 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Target className="h-5 w-5 text-green-700 dark:text-green-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-navy-900 dark:text-white">Marking Scheme</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-navy-600 dark:text-navy-300">
                    <span className="font-medium text-navy-900 dark:text-white">Correct:</span> +1 mark
                  </p>
                  <p className="text-navy-600 dark:text-navy-300">
                    <span className="font-medium text-navy-900 dark:text-white">Wrong:</span> -0.50 marks
                  </p>
                  <p className="text-navy-600 dark:text-navy-300">
                    <span className="font-medium text-navy-900 dark:text-white">Unanswered:</span> 0 marks
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-navy-200 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-navy-900 dark:text-white">Important Rules</h3>
                </div>
                <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Auto-submit at deadline</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Answers auto-saved every 30s</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />No pause/resume once started</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Results instant after submission</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Schedule */}
      <section className="py-12 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Upcoming Schedule</h2>
              <p className="text-navy-500 dark:text-navy-400">Next 7 days of scheduled examinations</p>
            </div>
            <Link href="/student/daily-exams">
              <Button variant="outline" className="gap-2">
                View Full Calendar
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingExams.map((exam) => (
              <Card key={exam.date} className="border-navy-200 dark:border-navy-800">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-lg bg-navy-100 dark:bg-navy-800 flex flex-col items-center justify-center text-center">
                        <span className="text-xl font-bold text-navy-900 dark:text-white">
                          {new Date(exam.date).getDate()}
                        </span>
                        <span className="text-xs text-navy-500 dark:text-navy-400 uppercase">
                          {new Date(exam.date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 dark:text-white">{exam.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {exam.subjects.map((subj, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{subj}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={exam.status === 'live' ? 'success' : 'outline'}>
                        {exam.status === 'live' ? 'Live Now' : 'Scheduled'}
                      </Badge>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns */}
      <section className="py-12 bg-white dark:bg-navy-950">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Examination Patterns</h2>
            <p className="text-navy-500 dark:text-navy-400">Choose the pattern that matches your preparation phase</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {patterns.map((pattern) => (
              <Card key={pattern.id} className="border-navy-200 dark:border-navy-800 h-full">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-navy-100 dark:bg-navy-800 flex items-center justify-center mb-4">
                    <pattern.icon className="h-6 w-6 text-navy-700 dark:text-navy-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">{pattern.name}</h3>
                  <p className="text-navy-500 dark:text-navy-400 text-sm mb-4">{pattern.description}</p>
                  <div className="space-y-2 text-sm mb-4">
                    <p className="text-navy-600 dark:text-navy-300"><span className="font-medium">Subjects/day:</span> {pattern.subjectsPerDay}</p>
                    <p className="text-navy-600 dark:text-navy-300"><span className="font-medium">Questions/subject:</span> {pattern.questionsPerSubject}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Best for: {pattern.bestFor}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Routine Lengths */}
      <section className="py-12 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Routine Durations</h2>
            <p className="text-navy-500 dark:text-navy-400">Select a routine length that fits your timeline</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {routineLengths.map((routine) => (
              <Card key={routine.days} className="border-navy-200 dark:border-navy-800 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-navy-900 dark:text-white mb-1">{routine.days}</div>
                  <div className="text-navy-500 dark:text-navy-400 text-sm mb-2">{routine.label}</div>
                  <p className="text-xs text-navy-400 dark:text-navy-500">{routine.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white dark:bg-navy-950">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Why Daily Exams Work</h2>
            <p className="text-navy-500 dark:text-navy-400">Scientifically designed for maximum retention and exam readiness</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Target} title="Smart Scheduling" description="Questions distributed by historical priority, syllabus weightage, and your personal weak areas." />
            <FeatureCard icon={Brain} title="Adaptive Patterns" description="Three patterns (Balanced, Weakness, Revision) auto-selected based on your preparation phase." />
            <FeatureCard icon={RotateCcw} title="Spaced Repetition" description="Revision questions follow 1, 3, 7, 14, 30-day intervals proven for long-term memory." />
            <FeatureCard icon={TrendingUp} title="Progress Tracking" description="Daily analytics show subject-wise trends, accuracy improvement, and topic mastery levels." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="container-main relative text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Today's Exam?</h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Join thousands of aspirants taking daily exams. Track your progress, identify weaknesses, and build exam-day stamina.
          </p>
          <Link href="/auth/register">
            <Button size="xl" className="gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Start Today's Exam Free
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ExamCard({ exam }: { exam: typeof todayExam }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Badge variant="success" className="mb-2">Live Now</Badge>
            <CardTitle className="text-2xl">{exam.title}</CardTitle>
            <p className="text-navy-500 dark:text-navy-400">Available from {exam.startTime} to {exam.endTime}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 dark:text-white">{exam.totalQuestions}</div>
              <div className="text-sm text-navy-500 dark:text-navy-400">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{exam.duration}</div>
              <div className="text-sm text-navy-500 dark:text-navy-400">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 dark:text-white">{exam.totalMarks}</div>
              <div className="text-sm text-navy-500 dark:text-navy-400">Total Marks</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {exam.subjects.map((subject) => (
            <div key={subject.name} className="p-4 rounded-lg bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className={cn(`bg-${subject.color}-100 text-${subject.color}-800 dark:bg-${subject.color}-900/30 dark:text-${subject.color}-300`)}>
                  {subject.questions} Q
                </Badge>
                <span className="font-medium text-navy-900 dark:text-white">{subject.name}</span>
              </div>
              <p className="text-sm text-navy-500 dark:text-navy-400">Topic: {subject.topic}</p>
            </div>
          ))}
        </div>
        <Link href="/auth/login?redirect=/student/daily-exams">
          <Button className="w-full lg:w-auto" size="lg">
            Start Exam Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800 h-full">
      <CardContent className="p-6 text-center">
        <div className="h-12 w-12 rounded-xl bg-navy-100 dark:bg-navy-800 flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-navy-700 dark:text-navy-300" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-navy-900 dark:text-white mb-2">{title}</h3>
        <p className="text-navy-500 dark:text-navy-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}