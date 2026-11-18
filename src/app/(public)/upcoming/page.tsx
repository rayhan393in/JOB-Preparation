'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  Calendar,
  Clock,
  Briefcase,
  Building2,
  FileText,
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon,
  MapPin,
  ExternalLink,
  Download,
  Filter,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const upcomingExams = [
  {
    id: 'bcs-2026-prelim',
    organization: 'Bangladesh Public Service Commission',
    jobTitle: 'BCS Cadre (Preliminary)',
    circularNumber: 'BPSC/Circular/2026/01',
    publicationDate: '2026-01-15',
    applicationDeadline: '2026-02-15',
    examDate: '2026-05-15',
    examDateStatus: 'confirmed' as const,
    post: 'BCS Cadre (Admin, Police, Foreign, Tax, Customs, etc.)',
    eligibility: 'Bachelor\'s degree (any discipline), Age: 21-30 years',
    syllabus: 'Bangla, English, Mathematics, Mental Ability, Bangladesh Affairs, International Affairs, General Science, ICT, Geography, Ethics',
    officialCircularUrl: 'https://www.bpsc.gov.bd/circular/2026-01',
    officialWebsiteUrl: 'https://www.bpsc.gov.bd',
    examStage: 'Preliminary',
    status: 'upcoming' as const,
    examCategory: 'bcs-preliminary',
    isVerified: true,
  },
  {
    id: 'bpdb-ae-2026',
    organization: 'Bangladesh Power Development Board (BPDB)',
    jobTitle: 'Assistant Engineer (Electrical)',
    circularNumber: 'BPDB/Recruit/2026/03',
    publicationDate: '2026-02-01',
    applicationDeadline: '2026-03-01',
    examDate: '2026-06-10',
    examDateStatus: 'tentative' as const,
    post: 'Assistant Engineer (Electrical) - 200 Posts',
    eligibility: 'B.Sc. in EEE from recognized university, BEC registration, Age: 18-30 years',
    syllabus: 'Circuit Analysis, Machines, Power Systems, Power Electronics, Control Systems, Measurements, Electronics, General Knowledge',
    officialCircularUrl: 'https://www.bpdb.gov.bd/circular/2026-03',
    officialWebsiteUrl: 'https://www.bpdb.gov.bd',
    examStage: 'Written + Viva',
    status: 'upcoming' as const,
    examCategory: 'eee-technical',
    isVerified: true,
  },
  {
    id: 'pgcb-ae-2026',
    organization: 'Power Grid Company of Bangladesh (PGCB)',
    jobTitle: 'Assistant Engineer (Electrical)',
    circularNumber: 'PGCB/HR/2026/02',
    publicationDate: '2026-02-10',
    applicationDeadline: '2026-03-15',
    examDate: '2026-07-01',
    examDateStatus: 'estimated' as const,
    post: 'Assistant Engineer (Electrical) - 150 Posts',
    eligibility: 'B.Sc. in EEE, BEC registration, Age: 18-30 years',
    syllabus: 'Power System Engineering, Protection, Substation, Transmission, Distribution, Control Systems, General Aptitude',
    officialCircularUrl: 'https://www.pgcb.gov.bd/circular/2026-02',
    officialWebsiteUrl: 'https://www.pgcb.gov.bd',
    examStage: 'Written + Viva',
    status: 'upcoming' as const,
    examCategory: 'power-sector',
    isVerified: true,
  },
  {
    id: 'psc-non-cadre-2026',
    organization: 'Bangladesh Public Service Commission',
    jobTitle: 'Non-Cadre Posts (Various)',
    circularNumber: 'BPSC/Non-Cadre/2026/04',
    publicationDate: '2026-03-01',
    applicationDeadline: '2026-04-01',
    examDate: '2026-08-15',
    examDateStatus: 'tentative' as const,
    post: 'Section Officer, Assistant Director, Assistant Commissioner (Non-Cadre), etc.',
    eligibility: 'Master\'s/Bachelor\'s degree as per post, Age: 21-32 years',
    syllabus: 'Bangla, English, Mathematics, General Knowledge, ICT, Mental Ability',
    officialCircularUrl: 'https://www.bpsc.gov.bd/circular/2026-04',
    officialWebsiteUrl: 'https://www.bpsc.gov.bd',
    examStage: 'Written + Viva',
    status: 'upcoming' as const,
    examCategory: 'non-cadre',
    isVerified: true,
  },
  {
    id: 'wzpdcl-sae-2026',
    organization: 'West Zone Power Distribution Company (WZPDCL)',
    jobTitle: 'Sub-Assistant Engineer (Electrical)',
    circularNumber: 'WZPDCL/Recruit/2026/01',
    publicationDate: '2026-03-15',
    applicationDeadline: '2026-04-15',
    examDate: '2026-09-01',
    examDateStatus: 'estimated' as const,
    post: 'Sub-Assistant Engineer (Electrical) - 300 Posts',
    eligibility: 'Diploma in Electrical Engineering, BEC registration, Age: 18-30 years',
    syllabus: 'Electrical Circuits, Machines, Power Systems, Installation, Safety, General Knowledge, Bangla, English, Mathematics',
    officialCircularUrl: 'https://www.wzpdcl.org.bd/circular/2026-01',
    officialWebsiteUrl: 'https://www.wzpdcl.org.bd',
    examStage: 'Written',
    status: 'upcoming' as const,
    examCategory: 'power-sector',
    isVerified: true,
  },
  {
    id: 'bank-officer-2026',
    organization: 'Bangladesh Bank / Commercial Banks',
    jobTitle: 'Officer / Senior Officer',
    circularNumber: 'BB/Recruit/2026/01',
    publicationDate: '2026-04-01',
    applicationDeadline: '2026-05-01',
    examDate: '2026-10-15',
    examDateStatus: 'estimated' as const,
    post: 'Officer (General) - Various Banks',
    eligibility: 'Bachelor\'s/Master\'s degree, Age: 21-30 years',
    syllabus: 'Bangla, English, Mathematics, General Knowledge, ICT, Mental Ability, Banking Knowledge',
    officialCircularUrl: 'https://www.bb.org.bd/career/2026-01',
    officialWebsiteUrl: 'https://www.bb.org.bd',
    examStage: 'Written + Viva',
    status: 'upcoming' as const,
    examCategory: 'general',
    isVerified: true,
  },
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'bcs-preliminary', label: 'BCS Preliminary' },
  { value: 'bcs-written', label: 'BCS Written' },
  { value: 'non-cadre', label: 'Non-Cadre' },
  { value: 'eee-technical', label: 'EEE Technical' },
  { value: 'power-sector', label: 'Power Sector' },
  { value: 'other-engineering', label: 'Other Engineering' },
  { value: 'general', label: 'General Jobs' },
];

const statuses = [
  { value: 'all', label: 'All Status' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'ongoing', label: 'Ongoing' },
  { value: 'completed', label: 'Completed' },
];

export default function UpcomingExamsPage() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [activeStatus, setActiveStatus] = React.useState('all');
  const [showFilters, setShowFilters] = React.useState(false);

  const filteredExams = upcomingExams.filter((exam) => {
    const categoryMatch = activeCategory === 'all' || exam.examCategory === activeCategory;
    const statusMatch = activeStatus === 'all' || exam.status === activeStatus;
    return categoryMatch && statusMatch;
  });

  const getDaysUntil = (dateString: string) => {
    const examDate = new Date(dateString);
    const today = new Date();
    const diffTime = examDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4 text-base px-4 py-2">
              <Briefcase className="h-4 w-4 mr-2" aria-hidden="true" />
              Verified Recruitment Information
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Upcoming Job <span className="text-green-400">Examinations</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Official recruitment circulars with verified dates, eligibility, syllabus, and direct links.
              Never miss an application deadline again.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & List */}
      <section className="py-12 bg-white dark:bg-navy-950">
        <div className="container-main">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label htmlFor="category-filter" className="sr-only">Filter by Category</label>
              <select
                id="category-filter"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="input-field w-full"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="status-filter" className="sr-only">Filter by Status</label>
              <select
                id="status-filter"
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value)}
                className="input-field w-full"
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-navy-600 dark:text-navy-400">
              Showing <span className="font-semibold text-navy-900 dark:text-white">{filteredExams.length}</span> of {upcomingExams.length} examinations
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export CSV
            </Button>
          </div>

          {/* Exam Cards */}
          <div className="space-y-6">
            {filteredExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} daysUntil={getDaysUntil(exam.examDate!)} formatDate={formatDate} />
            ))}

            {filteredExams.length === 0 && (
              <Card className="border-navy-200 dark:border-navy-800 text-center py-12">
                <CardContent>
                  <AlertCircle className="h-12 w-12 text-navy-300 dark:text-navy-600 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">No examinations found</h3>
                  <p className="text-navy-500 dark:text-navy-400">Try adjusting your filters</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-12 bg-navy-50 dark:bg-navy-900/50 border-y border-navy-100 dark:border-navy-800">
        <div className="container-main">
          <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-6">Date Status Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LegendItem icon={CheckCircle} color="green" title="Confirmed" description="Officially announced examination date by the recruiting organization." />
            <LegendItem icon={ClockIcon} color="amber" title="Tentative" description="Date indicated by organization but subject to change. Prepare accordingly." />
            <LegendItem icon={AlertCircle} color="red" title="Estimated" description="Our projection based on historical patterns. Not officially confirmed." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="container-main relative text-center">
          <h2 className="text-3xl font-bold mb-6">Never Miss a Deadline</h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Create a free account to get personalized notifications for your target exams, application deadline reminders, and syllabus updates.
          </p>
          <Link href="/auth/register">
            <Button size="xl" className="gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Enable Job Alerts
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ExamCard({ exam, daysUntil, formatDate }: { exam: typeof upcomingExams[0]; daysUntil: number; formatDate: (date: string) => string }) {
  const statusColors = {
    confirmed: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-800 dark:text-green-300', icon: CheckCircle },
    tentative: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-800 dark:text-amber-300', icon: ClockIcon },
    estimated: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-800 dark:text-red-300', icon: AlertCircle },
  };

  const statusConfig = statusColors[exam.examDateStatus];
  const StatusIcon = statusConfig.icon;

  return (
    <Card className="border-navy-200 dark:border-navy-800 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-navy-700 dark:text-navy-300" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">{exam.jobTitle}</h3>
                <p className="text-navy-500 dark:text-navy-400 text-sm">{exam.organization}</p>
              </div>
              <Badge variant="outline" className={cn(statusConfig.bg, statusConfig.text, 'ml-auto')}>
                <StatusIcon className="h-3 w-3 mr-1" aria-hidden="true" />
                {exam.examDateStatus.charAt(0).toUpperCase() + exam.examDateStatus.slice(1)}
              </Badge>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
              <div className="flex items-center gap-2 text-navy-600 dark:text-navy-300">
                <Calendar className="h-4 w-4 text-navy-400" aria-hidden="true" />
                <span>{formatDate(exam.examDate!)}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-600 dark:text-navy-300">
                <Clock className="h-4 w-4 text-navy-400" aria-hidden="true" />
                <span className={daysUntil <= 30 ? 'font-semibold text-red-600' : ''}>
                  {daysUntil > 0 ? `${daysUntil} days left` : 'Exam ongoing'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-navy-600 dark:text-navy-300">
                <FileText className="h-4 w-4 text-navy-400" aria-hidden="true" />
                <span>Apply by {formatDate(exam.applicationDeadline)}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-600 dark:text-navy-300">
                <Badge variant="secondary" className="text-xs capitalize">{exam.examCategory.replace('-', ' ')}</Badge>
              </div>
            </div>

            <div className="space-y-2 text-sm text-navy-600 dark:text-navy-300 mb-4">
              <p><span className="font-medium text-navy-900 dark:text-white">Post:</span> {exam.post}</p>
              <p><span className="font-medium text-navy-900 dark:text-white">Eligibility:</span> {exam.eligibility}</p>
              <p><span className="font-medium text-navy-900 dark:text-white">Syllabus:</span> {exam.syllabus}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={exam.officialCircularUrl} target="_blank" rel="noopener noreferrer" className="btn-outline gap-2 text-sm">
                <FileText className="h-4 w-4" aria-hidden="true" />
                View Circular
              </a>
              <a href={exam.officialWebsiteUrl} target="_blank" rel="noopener noreferrer" className="btn-outline gap-2 text-sm">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Official Site
              </a>
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Add Reminder
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 lg:w-48 flex-shrink-0">
            <div className="text-center p-4 rounded-lg bg-navy-50 dark:bg-navy-800/50">
              <div className="text-3xl font-bold text-navy-900 dark:text-white">{daysUntil > 0 ? daysUntil : 0}</div>
              <div className="text-sm text-navy-500 dark:text-navy-400">Days Remaining</div>
            </div>
            <Badge variant={exam.isVerified ? 'success' : 'warning'} className="gap-1">
              <CheckCircle className="h-3 w-3" aria-hidden="true" />
              {exam.isVerified ? 'Verified' : 'Unverified'}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}

function LegendItem({ icon: Icon, color, title, description }: { icon: React.ComponentType<{ className?: string }>; color: 'green' | 'amber' | 'red'; title: string; description: string }) {
  const colorClasses = {
    green: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30',
    amber: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30',
    red: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30',
  };

  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={cn('h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0', colorClasses[color])}>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold text-navy-900 dark:text-white">{title}</h4>
            <p className="text-sm text-navy-500 dark:text-navy-400 mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}