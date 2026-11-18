'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Award,
  PenTool,
  Zap,
  Users,
  BookOpen,
  Target,
  FileText,
  Calendar,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Shield,
  Brain,
} from 'lucide-react';

const categories = [
  {
    id: 'bcs-preliminary',
    title: 'BCS Preliminary',
    bnTitle: 'বিসিএস প্রাথমিক',
    description: 'Complete preparation for BCS Preliminary examination — the gateway to Bangladesh Civil Service. Covers all 10 subjects with topic-wise practice, daily scheduled exams, and 20+ years of verified previous questions.',
    longDescription: 'The BCS Preliminary is a 200-mark MCQ examination covering 10 subjects. Our platform provides structured daily preparation with minimum 2 subjects per day, smart topic prioritization based on historical frequency analysis, and adaptive revision for weak areas.',
    subjects: ['Bangla', 'English', 'Mathematics', 'Mental Ability', 'Bangladesh Affairs', 'International Affairs', 'General Science', 'ICT', 'Geography & Environment', 'Ethics & Good Governance'],
    icon: Award,
    color: 'navy',
    href: '/preparation/bcs-preliminary',
    stats: { questions: 15000, exams: 500, users: 25000, subjects: 10 },
    features: ['Daily 30-question multi-subject exams', 'Topic-wise practice with priority scoring', 'Previous 20+ years verified questions', 'Adaptive revision (1,3,7,14,30 days)', 'Written exam preparation module', 'Bangla & English explanations'],
    targetPosts: ['BCS Cadre (Admin, Police, Foreign, Tax, etc.)', 'All 27 BCS Cadres'],
  },
  {
    id: 'bcs-written',
    title: 'BCS Written',
    bnTitle: 'বিসিএস লিখিত',
    description: 'Comprehensive written examination preparation with model answers, marking rubrics, examiner evaluation system, and practice for all compulsory and optional subjects.',
    longDescription: 'BCS Written examination requires descriptive answers, essays, mathematical derivations, and analytical writing. Our platform supports answer typing with mathematical notation, image/PDF upload, draft saving, and structured evaluation with partial marking rubrics.',
    subjects: ['Bangla (Compulsory)', 'English (Compulsory)', 'Bangladesh Affairs', 'International Affairs', 'General Science', 'Optional Subject (27 choices)'],
    icon: PenTool,
    color: 'green',
    href: '/preparation/bcs-written',
    stats: { questions: 8000, exams: 200, users: 15000, subjects: 8 },
    features: ['Model answers with rubrics', 'Mathematical notation support', 'Circuit diagram upload', 'Examiner evaluation workflow', 'Partial marking support', 'Draft auto-save'],
    targetPosts: ['All BCS Cadres (Written Phase)'],
  },
  {
    id: 'eee-technical',
    title: 'EEE Technical Jobs',
    bnTitle: 'ইইই টেকনিক্যাল চাকরি',
    description: 'Specialized preparation for Electrical & Electronic Engineering recruitment — Assistant Engineer, Sub-Assistant Engineer, Power Sector (BPDB, PGCB, WZPDCL, etc.), and other technical posts.',
    longDescription: 'Technical engineering recruitment requires deep subject knowledge across 15+ EEE subjects. Our platform covers circuit analysis, machines, power systems, power electronics, control systems, measurements, electronics, and more with engineering-style explanations including derivations, circuit diagrams, and SI units.',
    subjects: [
      'Electrical Circuit Analysis', 'Electrical Machines', 'Power System Engineering', 
      'Power Electronics', 'Control Systems', 'Electrical Measurements',
      'Analog Electronics', 'Digital Electronics', 'Engineering Mathematics',
      'Renewable Energy', 'Electrical Installation & Safety', 'Communication Engineering',
      'Microprocessors & Microcontrollers', 'Signals & Systems', 'Embedded Systems', 'VLSI Fundamentals'
    ],
    icon: Zap,
    color: 'amber',
    href: '/preparation/eee-technical',
    stats: { questions: 12000, exams: 300, users: 18000, subjects: 16 },
    features: ['Engineering derivations & formulas', 'Circuit diagram explanations', 'SI units & standards', 'Topic-wise technical practice', 'Previous BPDB/PGCB/DESA questions', 'Daily EEE multi-subject exams'],
    targetPosts: ['Assistant Engineer (BPDB, PGCB, WZPDCL, DESCO, DPDC)', 'Sub-Assistant Engineer', 'Technical posts in Power Sector'],
  },
  {
    id: 'general-jobs',
    title: 'General Government Jobs',
    bnTitle: 'সাধারণ সরকারি চাকরি',
    description: 'Preparation for all general cadre and non-cadre government job examinations including PSC Non-Cadre, Bank jobs, Railway, Primary Teacher, and other public sector recruitment.',
    longDescription: 'General government job exams share a common syllabus but vary in pattern. Our platform provides flexible preparation with customizable exam builder, topic frequency analysis across different recruiting bodies, and targeted practice for specific job announcements.',
    subjects: ['Bangla', 'English', 'Mathematics', 'General Knowledge', 'ICT', 'Mental Ability', 'Bangladesh Affairs', 'International Affairs'],
    icon: Users,
    color: 'blue',
    href: '/preparation/general-jobs',
    stats: { questions: 20000, exams: 800, users: 50000, subjects: 8 },
    features: ['Custom exam builder for any pattern', 'Multi-recruiter question bank', 'Bank/PSC/Railway specific practice', 'Daily general knowledge updates', 'Current affairs integration', 'Bengali language focus'],
    targetPosts: ['PSC Non-Cadre', 'Bank Officer/Cashier', 'Railway', 'Primary Teacher', 'Upazila/Union level posts'],
  },
  {
    id: 'non-cadre',
    title: 'Non-Cadre (PSC)',
    bnTitle: 'নন-ক্যাডর (পিএসসি)',
    description: 'Dedicated preparation for Bangladesh Public Service Commission Non-Cadre recruitment examinations with syllabus-specific practice and previous question analysis.',
    longDescription: 'PSC Non-Cadre exams have distinct patterns and syllabus emphasis. We provide targeted preparation with subject-wise weightage, topic priority based on PSC-specific historical data, and custom mock tests matching the exact examination format.',
    subjects: ['Bangla', 'English', 'Mathematics', 'General Knowledge', 'ICT', 'Mental Ability'],
    icon: Briefcase,
    color: 'purple',
    href: '/preparation/non-cadre',
    stats: { questions: 8000, exams: 150, users: 12000, subjects: 6 },
    features: ['PSC-specific topic priority', 'Non-Cadre pattern mock tests', 'Previous 15+ years questions', 'Syllabus version tracking', 'Written test preparation', 'Viva voce guidance'],
    targetPosts: ['Assistant Commissioner (Non-Cadre)', 'Section Officer', 'Assistant Director', 'Other Class-I Non-Cadre posts'],
  },
  {
    id: 'power-sector',
    title: 'Power Sector Jobs',
    bnTitle: 'বিদ্যুৎ খাতের চাকরি',
    description: 'Specialized preparation for power generation, transmission, and distribution companies — BPDB, PGCB, WZPDCL, NESCO, DESCO, DPDC, RPCL, APSCL, and more.',
    longDescription: 'Power sector recruitment has unique technical and general knowledge requirements. Our platform covers both engineering subjects (for technical posts) and general subjects (for administrative posts) with company-specific question patterns and recent circular analysis.',
    subjects: ['Power System Engineering', 'Power Plant Engineering', 'Electrical Machines', 'Power Electronics', 'Control Systems', 'General Knowledge', 'Bangla', 'English', 'Mathematics', 'ICT'],
    icon: Shield,
    color: 'orange',
    href: '/preparation/power-sector',
    stats: { questions: 10000, exams: 250, users: 20000, subjects: 10 },
    features: ['Company-specific question patterns', 'Technical + General combined prep', 'Recent circular analysis', 'BPDB/PGCB/WZPDCL focused', 'Administrative post preparation', 'Technical post preparation'],
    targetPosts: ['Assistant Engineer (All Power Companies)', 'Sub-Assistant Engineer', 'Assistant Director (Admin)', 'Accounts Officer', 'Medical Officer'],
  },
  {
    id: 'engineering-jobs',
    title: 'Other Engineering Jobs',
    bnTitle: 'অন্যান্য ইঞ্জিনিয়ারিং চাকরি',
    description: 'Preparation for engineering recruitment in Civil, Mechanical, Chemical, CSE, Textile, and other engineering disciplines across government and semi-government organizations.',
    longDescription: 'Engineering recruitment exams share common general subjects but have discipline-specific technical papers. We provide modular preparation — combine general subjects with your engineering discipline\'s technical syllabus for targeted practice.',
    subjects: ['Engineering Mathematics', 'General Engineering', 'Discipline-Specific Technical', 'Bangla', 'English', 'General Knowledge'],
    icon: Brain,
    color: 'red',
    href: '/preparation/engineering-jobs',
    stats: { questions: 15000, exams: 400, users: 30000, subjects: 12 },
    features: ['Multi-discipline technical coverage', 'Modular subject combination', 'RHD/LGED/BWDB patterns', 'University recruitment prep', 'Project-based questions', 'Technical derivation practice'],
    targetPosts: ['Assistant Engineer (Civil/Mech/Chem/CSE)', 'Sub-Assistant Engineer (All disciplines)', 'University Lab/Tech posts', 'RHD/LGED/BWDB engineers'],
  },
  {
    id: 'institution-specific',
    title: 'Institution-Specific Exams',
    bnTitle: 'প্রতিষ্ঠান-নির্দিষ্ট পরীক্ষা',
    description: 'Targeted preparation for specific institutional recruitment — BUET, DU, CUET, KUET, RUET admission tests, university faculty recruitment, and specialized organization exams.',
    longDescription: 'Different institutions have unique examination patterns, syllabus emphasis, and question styles. Our platform allows institution-specific practice with curated question banks, pattern analysis, and customized mock tests for each organization.',
    subjects: ['Varies by Institution', 'Custom Syllabus Mapping'],
    icon: GraduationCap,
    color: 'indigo',
    href: '/preparation/institution-specific',
    stats: { questions: 5000, exams: 100, users: 8000, subjects: 'Variable' },
    features: ['Institution-specific question banks', 'Pattern analysis per organization', 'Custom mock test builder', 'Admission test preparation', 'Faculty recruitment prep', 'Syllabus mapping tool'],
    targetPosts: ['BUET/DU/CUET Admission', 'University Faculty Posts', 'Research Organization Jobs', 'Specialized Institute Recruitment'],
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4 text-base px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" aria-hidden="true" />
              8 Examination Categories
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Choose Your <span className="text-green-400">Target Examination</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Specialized preparation modules for every major recruitment exam in Bangladesh.
              Each category has tailored content, question banks, and practice patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                <Card className="card-hover h-full overflow-hidden border-navy-200 dark:border-navy-800 group-hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className={cn('h-16 flex items-end', `bg-${category.color}-900`)} />
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <Badge variant="outline" className={cn('mb-2', `bg-${category.color}-100 text-${category.color}-800 dark:bg-${category.color}-900/30 dark:text-${category.color}-300`)}>
                          {category.bnTitle}
                        </Badge>
                        <h3 className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <category.icon className="h-10 w-10 text-navy-200 dark:text-navy-700 group-hover:text-green-500 transition-colors flex-shrink-0" aria-hidden="true" />
                    </div>
                    <p className="text-navy-500 dark:text-navy-400 text-sm mb-4 leading-relaxed flex-1">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.subjects.slice(0, 4).map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                      {category.subjects.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{category.subjects.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-navy-500 dark:text-navy-400 border-t border-navy-100 dark:border-navy-800 pt-4 mb-4">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" aria-hidden="true" />
                        <span>{category.stats.questions.toLocaleString()} Q</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{category.stats.exams} Exams</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" aria-hidden="true" />
                        <span>{category.stats.users.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full gap-2 justify-center group-hover:bg-green-50 dark:group-hover:bg-green-900/20 group-hover:text-green-600 dark:group-hover:text-green-400">
                      Explore
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-navy-50 dark:bg-navy-900/50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Compare Categories</h2>
            <p className="text-lg text-navy-500 dark:text-navy-400">Quick overview to help you choose the right preparation path.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-navy-200 dark:border-navy-700">
                  <th className="table-head">Category</th>
                  <th className="table-head">Best For</th>
                  <th className="table-head">Subjects</th>
                  <th className="table-head">Questions</th>
                  <th className="table-head">Key Feature</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id} className="table-row">
                    <td className="table-cell font-medium text-navy-900 dark:text-white">{category.title}</td>
                    <td className="table-cell text-navy-600 dark:text-navy-300 text-sm">{category.targetPosts[0]}</td>
                    <td className="table-cell text-center">
                      <Badge variant="secondary">{category.stats.subjects}</Badge>
                    </td>
                    <td className="table-cell text-center font-mono">{category.stats.questions.toLocaleString()}+</td>
                    <td className="table-cell text-navy-600 dark:text-navy-300 text-sm">{category.features[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="container-main relative text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Create a free account and take our diagnostic assessment. We\'ll recommend the best preparation path based on your target exam, current level, and available time.
          </p>
          <Link href="/auth/register">
            <Button size="xl" className="gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Start Free Assessment
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}