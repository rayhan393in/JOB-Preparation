'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  Calendar,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  PlayCircle,
  Award,
  TrendingUp,
  Brain,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
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
  unansweredMarks: 0,
  subjects: [
    { name: 'Bangla', topic: 'সমাস (Compound)', questions: 10, color: 'navy', icon: Award },
    { name: 'English', topic: 'Preposition', questions: 10, color: 'blue', icon: Target },
    { name: 'Mathematics', topic: 'Percentage & Ratio', questions: 10, color: 'green', icon: TrendingUp },
  ],
  status: 'live' as const,
  pattern: 'balanced',
};

const weeklySchedule = [
  { day: 'Mon', date: '2026-11-18', exam: todayExam, status: 'live' },
  { day: 'Tue', date: '2026-11-19', exam: { ...todayExam, id: 'daily-2026-11-19', title: 'Daily Exam - 19 Nov', subjects: [{ name: 'Bangla', topic: 'কারক (Case)', questions: 10, color: 'navy', icon: Award }, { name: 'English', topic: 'Tense', questions: 10, color: 'blue', icon: Target }, { name: 'Mathematics', topic: 'Profit & Loss', questions: 10, color: 'green', icon: TrendingUp }], status: 'scheduled' }, status: 'scheduled' },
  { day: 'Wed', date: '2026-11-20', exam: { ...todayExam, id: 'daily-2026-11-20', title: 'Daily Exam - 20 Nov', subjects: [{ name: 'Bangla', topic: 'বানান (Spelling)', questions: 10, color: 'navy', icon: Award }, { name: 'English', topic: 'Voice', questions: 10, color: 'blue', icon: Target }, { name: 'Mathematics', topic: 'Time & Work', questions: 10, color: 'green', icon: TrendingUp }], status: 'scheduled' }, status: 'scheduled' },
  { day: 'Thu', date: '2026-11-21', exam: { ...todayExam, id: 'daily-2026-11-21', title: 'Daily Exam - 21 Nov', subjects: [{ name: 'Bangla', topic: 'সমাস (Compound)', questions: 10, color: 'navy', icon: Award }, { name: 'English', topic: 'Narration', questions: 10, color: 'blue', icon: Target }, { name: 'Mathematics', topic: 'Algebra', questions: 10, color: 'green', icon: TrendingUp }], status: 'scheduled' }, status: 'scheduled' },
  { day: 'Fri', date: '2026-11-22', exam: { ...todayExam, id: 'daily-2026-11-22', title: 'Daily Exam - 22 Nov', subjects: [{ name: 'Bangla', topic: 'বাগধারা (Idioms)', questions: 10, color: 'navy', icon: Award }, { name: 'English', topic: 'Preposition', questions: 10, color: 'blue', icon: Target }, { name: 'Mathematics', topic: 'Geometry', questions: 10, color: 'green', icon: TrendingUp }], status: 'scheduled' }, status: 'scheduled' },
  { day: 'Sat', date: '2026-11-23', exam: { ...todayExam, id: 'daily-2026-11-23', title: 'Daily Exam - 23 Nov', subjects: [{ name: 'Bangla', topic: 'উপসর্গ-প্রত্যয়', questions: 10, color: 'navy', icon: Award }, { name: 'English', topic: 'Articles', questions: 10, color: 'blue', icon: Target }, { name: 'Mathematics', topic: 'Speed & Distance', questions: 10, color: 'green', icon: TrendingUp }], status: 'scheduled' }, status: 'scheduled' },
  { day: 'Sun', date: '2026-11-24', exam: { ...todayExam, id: 'daily-2026-11-24', title: 'Daily Exam - 24 Nov', subjects: [{ name: 'Bangla', topic: 'বাংলা সাহিত্য', questions: 10, color: 'navy', icon: Award }, { name: 'English', topic: 'Vocabulary', questions: 10, color: 'blue', icon: Target }, { name: 'Mathematics', topic: 'Probability', questions: 10, color: 'green', icon: TrendingUp }], status: 'scheduled' }, status: 'scheduled' },
];

const patterns = [
  {
    id: 'balanced',
    name: 'Balanced Preparation',
    description: 'Even distribution across all subjects. Best for comprehensive coverage.',
    icon: Award,
    color: 'navy',
    subjectsPerDay: 3,
    questionsPerSubject: 10,
    bestFor: 'Early preparation (6+ months)',
  },
  {
    id: 'weakness',
    name: 'Weakness-Based',
    description: 'More questions on weak topics. Uses your performance analytics.',
    icon: Brain,
    color: 'amber',
    subjectsPerDay: 3,
    questionsPerSubject: 'Variable',
    bestFor: 'Mid preparation (3-6 months)',
  },
  {
    id: 'revision',
    name: 'Revision-Based',
    description: 'Spaced repetition of studied topics. Follows 1,3,7,14,30-day intervals.',
    icon: RotateCcw,
    color: 'green',
    subjectsPerDay: 2,
    questionsPerSubject: 15,
    bestFor: 'Final preparation (1-3 months)',
  },
];

const completedExams = [
  { date: '2026-11-17', title: 'Daily Exam - 17 Nov', score: 78, correct: 24, wrong: 4, unanswered: 2, pattern: 'balanced' },
  { date: '2026-11-16', title: 'Daily Exam - 16 Nov', score: 82, correct: 25, wrong: 3, unanswered: 2, pattern: 'balanced' },
  { date: '2026-11-15', title: 'Daily Exam - 15 Nov', score: 70, correct: 21, wrong: 6, unanswered: 3, pattern: 'weakness' },
  { date: '2026-11-14', title: 'Daily Exam - 14 Nov', score: 85, correct: 26, wrong: 2, unanswered: 2, pattern: 'balanced' },
  { date: '2026-11-13', title: 'Daily Exam - 13 Nov', score: 68, correct: 21, wrong: 6, unanswered: 3, pattern: 'revision' },
  { date: '2026-11-12', title: 'Daily Exam - 12 Nov', score: 75, correct: 23, wrong: 4, unanswered: 3, pattern: 'balanced' },
];

export default function DailyExamsPage() {
  const [activeTab, setActiveTab] = React.useState<string>('today');
  const [weekOffset, setWeekOffset] = React.useState(0);

  return (
    <div className="min-h-screen bg-navy-50 dark:bg-navy-950">
      {/* Header */}
      <div className="bg-white dark:bg-navy-900 border-b border-navy-200 dark:border-navy-800">
        <div className="container-main py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-navy-900 dark:text-white">Daily Scheduled Exams</h1>
              <p className="text-navy-500 dark:text-navy-400 mt-1">
                Multi-subject daily examinations with smart scheduling. Minimum 2 subjects per exam.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/student/practice">
                <Button variant="outline" className="gap-2">
                  <Target className="h-4 w-4" aria-hidden="true" />
                  Custom Practice
                </Button>
              </Link>
              <Link href="/student/revision">
                <Button variant="outline" className="gap-2">
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Revision Centre
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main py-6">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="today">
              <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
              Today
            </TabsTrigger>
            <TabsTrigger value="schedule">
              <Award className="h-4 w-4 mr-2" aria-hidden="true" />
              Weekly Schedule
            </TabsTrigger>
            <TabsTrigger value="patterns">
              <Brain className="h-4 w-4 mr-2" aria-hidden="true" />
              Patterns
            </TabsTrigger>
            <TabsTrigger value="history">
              <TrendingUp className="h-4 w-4 mr-2" aria-hidden="true" />
              History
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === 'today' && (
          <TodayExamCard exam={todayExam} />
        )}

        {activeTab === 'schedule' && (
          <WeeklyScheduleView 
            schedule={weeklySchedule} 
            weekOffset={weekOffset} 
            onWeekChange={setWeekOffset} 
          />
        )}

        {activeTab === 'patterns' && (
          <PatternsView patterns={patterns} />
        )}

        {activeTab === 'history' && (
          <HistoryView exams={completedExams} />
        )}
      </div>
    </div>
  );
}

function TodayExamCard({ exam }: { exam: typeof todayExam }) {
  return (
    <div className="space-y-6">
      {/* Main Exam Card */}
      <Card className="border-navy-200 dark:border-navy-800">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
              </div>
              <div>
                <Badge variant="success" className="mb-2">Live Now</Badge>
                <CardTitle className="text-xl">{exam.title}</CardTitle>
                <p className="text-navy-500 dark:text-navy-400">Pattern: {exam.pattern} • Available until 11:59 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:ml-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-navy-900 dark:text-white">{exam.totalQuestions}</p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Questions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-navy-900 dark:text-white">{exam.duration}</p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-navy-900 dark:text-white">{exam.totalMarks}</p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Total Marks</p>
              </div>
              <Link href="/exam/take/daily-2026-11-18">
                <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                  Start Exam
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-6">
          {/* Subject Distribution */}
          <div>
            <h3 className="font-semibold text-navy-900 dark:text-white mb-4">Subject Distribution</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {exam.subjects.map((subject) => (
                <div key={subject.name} className="p-4 rounded-lg bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700">
                  <div className="flex items-center gap-2 mb-2">
                    <subject.icon className={cn('h-5 w-5', `text-${subject.color}-600 dark:text-${subject.color}-400`)} aria-hidden="true" />
                    <Badge variant="secondary" className={cn(`bg-${subject.color}-100 text-${subject.color}-800 dark:bg-${subject.color}-900/30 dark:text-${subject.color}-300`)}>
                      {subject.questions} Questions
                    </Badge>
                  </div>
                  <p className="font-medium text-navy-900 dark:text-white">{subject.name}</p>
                  <p className="text-sm text-navy-500 dark:text-navy-400">Topic: {subject.topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Marking Scheme */}
          <div className="grid md:grid-cols-3 gap-4 p-4 rounded-lg bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">+{exam.correctMarks}</p>
              <p className="text-sm text-navy-500 dark:text-navy-400">Correct Answer</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">-{exam.negativeMarks}</p>
              <p className="text-sm text-navy-500 dark:text-navy-400">Wrong Answer</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-navy-500">{exam.unansweredMarks}</p>
              <p className="text-sm text-navy-500 dark:text-navy-400">Unanswered</p>
            </div>
          </div>

          {/* Exam Rules */}
          <div className="p-4 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900">
            <h3 className="font-semibold text-navy-900 dark:text-white mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600" aria-hidden="true" />
              Important Rules
            </h3>
            <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Timer is server-authoritative — cannot be paused or reset</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Answers auto-save every 30 seconds</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Auto-submits at 11:59 PM deadline</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Results available instantly after submission</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />One attempt per daily exam</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Full explanations shown after submission</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={Target} title="Min Subjects" value="2" description="Per daily exam" color="blue" />
        <StatCard icon={Clock} title="Duration" value="30 min" description="Fixed for all daily exams" color="amber" />
        <StatCard icon={Award} title="Pattern" value={exam.pattern.charAt(0).toUpperCase() + exam.pattern.slice(1)} description="Auto-selected by phase" color="green" />
      </div>
    </div>
  );
}

function WeeklyScheduleView({ schedule, weekOffset, onWeekChange }: { schedule: typeof weeklySchedule; weekOffset: number; onWeekChange: (offset: number) => void }) {
  const currentWeek = schedule;
  const weekStart = new Date(currentWeek[0].date);
  const weekEnd = new Date(currentWeek[6].date);

  return (
    <div className="space-y-6">
      {/* Week Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="icon" onClick={() => onWeekChange(weekOffset - 1)}>
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </Button>
        <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
          Week of {weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </h3>
        <Button variant="outline" size="icon" onClick={() => onWeekChange(weekOffset + 1)}>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      {/* Schedule Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentWeek.map((day) => (
          <DayCard key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}

function DayCard({ day }: { day: typeof weeklySchedule[0] }) {
  const isToday = day.status === 'live';
  const exam = day.exam;

  return (
    <Card className={cn('border-navy-200 dark:border-navy-800 h-full', isToday && 'ring-2 ring-green-500')}>
      <CardContent className="p-4">
        <div className={cn('text-center mb-3', isToday && 'bg-green-50 dark:bg-green-900/20 p-3 rounded-lg')}>
          <div className="text-lg font-bold text-navy-900 dark:text-white">{day.day}</div>
          <div className="text-sm text-navy-500 dark:text-navy-400">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
          {isToday && <Badge variant="success" className="mt-1">Today</Badge>}
        </div>

        <h4 className="font-medium text-navy-900 dark:text-white text-sm mb-2 truncate">{exam.title}</h4>

        <div className="space-y-2 mb-3">
          {exam.subjects.map((subject) => (
            <div key={subject.name} className="flex items-center gap-2 text-xs">
              <Badge variant="secondary" className={cn(`bg-${subject.color}-100 text-${subject.color}-800 dark:bg-${subject.color}-900/30 dark:text-${subject.color}-300`)}>
                {subject.questions}Q
              </Badge>
              <span className="text-navy-600 dark:text-navy-300 truncate">{subject.name}: {subject.topic}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-navy-500 dark:text-navy-400 mb-3">
          <span>{exam.duration} min</span>
          <span>{exam.totalQuestions} Q</span>
        </div>

        <Badge variant={isToday ? 'success' : 'outline'} className="w-full text-center">
          {isToday ? 'Live Now' : 'Scheduled'}
        </Badge>
      </CardContent>
    </Card>
  );
}

interface ExamPattern {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  subjectsPerDay: number;
  questionsPerSubject: number | string;
  bestFor: string;
}

function PatternsView({ patterns }: { patterns: ExamPattern[] }) {
  return (
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
              <p><span className="font-medium text-navy-900 dark:text-white">Subjects/day:</span> {pattern.subjectsPerDay}</p>
              <p><span className="font-medium text-navy-900 dark:text-white">Questions/subject:</span> {pattern.questionsPerSubject}</p>
            </div>
            <Badge variant="outline" className="text-xs">
              Best for: {pattern.bestFor}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function HistoryView({ exams }: { exams: typeof completedExams }) {
  return (
    <div className="space-y-4">
      {exams.map((exam) => (
        <Card key={exam.date} className="border-navy-200 dark:border-navy-800">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white">{exam.title}</h3>
                  <p className="text-sm text-navy-500 dark:text-navy-400">{exam.date} • Pattern: {exam.pattern}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 md:ml-auto">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{exam.score}%</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Score</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-green-600">{exam.correct}</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Correct</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-red-600">{exam.wrong}</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Wrong</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-navy-500">{exam.unanswered}</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Unanswered</p>
                </div>
                <Badge variant="success">Completed</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function StatCard({ icon: Icon, title, value, description, color }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; description: string; color: string }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardContent className="p-5 text-center">
        <div className={cn('h-10 w-10 rounded-lg flex items-center justify-center mx-auto mb-3', `bg-${color}-100 dark:bg-${color}-900/30`)}>
          <Icon className={cn('h-5 w-5', `text-${color}-600 dark:text-${color}-400`)} aria-hidden="true" />
        </div>
        <p className="text-2xl font-bold text-navy-900 dark:text-white mb-1">{value}</p>
        <p className="font-medium text-navy-700 dark:text-navy-300 mb-1">{title}</p>
        <p className="text-sm text-navy-500 dark:text-navy-400">{description}</p>
      </CardContent>
    </Card>
  );
}

import Link from 'next/link';