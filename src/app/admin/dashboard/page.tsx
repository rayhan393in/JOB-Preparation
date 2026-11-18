'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  Users,
  Database,
  ClipboardList,
  Activity,
  TrendingUp,
  Settings,
  Shield,
  Zap,
  Calendar,
  FileText,
  PlusCircle,
  Download,
  Upload,
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowRight,
  TrendingUp as TrendingUpIcon,
  Eye,
  Edit,
  Trash2,
  Info,
} from 'lucide-react';

const stats = [
  { label: 'Total Students', value: '75,432', change: '+12%', trend: 'up', icon: Users, color: 'blue' },
  { label: 'Active Today', value: '8,234', change: '+5%', trend: 'up', icon: Activity, color: 'green' },
  { label: 'Exams Completed', value: '1,245', change: '+8%', trend: 'up', icon: ClipboardList, color: 'amber' },
  { label: 'Questions in Bank', value: '55,678', change: '+234', trend: 'up', icon: Database, color: 'purple' },
  { label: 'Pending Approval', value: '47', change: '-12', trend: 'down', icon: AlertCircle, color: 'red' },
  { label: 'System Health', value: '99.9%', change: '0%', trend: 'neutral', icon: Shield, color: 'green' },
];

const recentUsers = [
  { id: 'USR-001', name: 'Fatima Akter', email: 'fatima@email.com', role: 'student', joined: '2026-11-17', status: 'active', lastActive: '2 hours ago' },
  { id: 'USR-002', name: 'Kamal Hossain', email: 'kamal@email.com', role: 'student', joined: '2026-11-17', status: 'active', lastActive: '5 hours ago' },
  { id: 'USR-003', name: 'Dr. Rahman', email: 'rahman@university.edu', role: 'contributor', joined: '2026-11-16', status: 'pending', lastActive: '1 day ago' },
  { id: 'USR-004', name: 'Ayesha Siddiqua', email: 'ayesha@email.com', role: 'student', joined: '2026-11-16', status: 'active', lastActive: '3 hours ago' },
  { id: 'USR-005', name: 'Moderator Ali', email: 'ali@moderator.com', role: 'moderator', joined: '2026-11-15', status: 'active', lastActive: '1 hour ago' },
];

const pendingQuestions = [
  { id: 'Q-001', text: 'What is the efficiency of a transformer at full load?', subject: 'Electrical Machines', topic: 'Transformers', difficulty: 'medium', source: 'ai-generated', submittedBy: 'Dr. Rahman', submittedAt: '2026-11-17' },
  { id: 'Q-002', text: 'Calculate the fault current for a 3-phase short circuit.', subject: 'Power Systems', topic: 'Fault Analysis', difficulty: 'hard', source: 'contributor-submitted', submittedBy: 'Eng. Karim', submittedAt: '2026-11-17' },
  { id: 'Q-003', text: 'Which sorting algorithm has O(n log n) worst case?', subject: 'ICT', topic: 'Programming Basics', difficulty: 'easy', source: 'admin-created', submittedBy: 'Admin User', submittedAt: '2026-11-16' },
];

const liveExams = [
  { id: 'daily-2026-11-18', title: 'Daily Exam - 18 Nov', category: 'BCS Preliminary', started: '06:00', ends: '23:59', attempts: 1245, inProgress: 342, status: 'live' },
  { id: 'mock-bcs-001', title: 'BCS Full Mock Test', category: 'BCS Preliminary', started: '10:00', ends: '13:00', attempts: 567, inProgress: 234, status: 'live' },
  { id: 'eee-daily-001', title: 'EEE Daily - Power Systems', category: 'EEE Technical', started: '08:00', ends: '20:00', attempts: 892, inProgress: 156, status: 'live' },
];

const systemAlerts = [
  { type: 'warning', message: 'High database load detected (78% capacity)', time: '10 min ago' },
  { type: 'info', message: 'Scheduled backup completed successfully', time: '1 hour ago' },
  { type: 'success', message: 'New question batch imported: 1,234 questions', time: '2 hours ago' },
  { type: 'error', message: 'Email delivery failed for 3 users', time: '3 hours ago' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = React.useState<string>('overview');

  return (
    <div className="min-h-screen bg-navy-50 dark:bg-navy-950">
      <div className="bg-white dark:bg-navy-900 border-b border-navy-200 dark:border-navy-800">
        <div className="container-main py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-navy-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-navy-500 dark:text-navy-400 mt-1">Platform overview and management controls</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Export Report</Button>
              <Button className="gap-2 bg-green-600 hover:bg-green-700"><PlusCircle className="h-4 w-4" /> Create Exam</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-navy-200 dark:border-navy-800">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-navy-500 dark:text-navy-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-navy-900 dark:text-white mt-1">{stat.value}</p>
                    <p className={cn('text-xs mt-1', stat.trend === 'up' && 'text-green-600', stat.trend === 'down' && 'text-red-600', stat.trend === 'neutral' && 'text-navy-500')}>
                      {stat.change} vs last week
                    </p>
                  </div>
                  <div className={cn('h-10 w-10 rounded-lg flex items-center justify-center', `bg-${stat.color}-100 dark:bg-${stat.color}-900/30`)}>
                    <stat.icon className={cn('h-5 w-5', `text-${stat.color}-600 dark:text-${stat.color}-400`)} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview"><TrendingUpIcon className="h-4 w-4 mr-2" /> Overview</TabsTrigger>
            <TabsTrigger value="users"><Users className="h-4 w-4 mr-2" /> Users</TabsTrigger>
            <TabsTrigger value="questions"><Database className="h-4 w-4 mr-2" /> Questions</TabsTrigger>
            <TabsTrigger value="exams"><ClipboardList className="h-4 w-4 mr-2" /> Exams</TabsTrigger>
            <TabsTrigger value="system"><Settings className="h-4 w-4 mr-2" /> System</TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === 'overview' && <OverviewTab recentUsers={recentUsers} pendingQuestions={pendingQuestions} liveExams={liveExams} systemAlerts={systemAlerts} />}
        {activeTab === 'users' && <UsersTab users={recentUsers} />}
        {activeTab === 'questions' && <QuestionsTab questions={pendingQuestions} />}
        {activeTab === 'exams' && <ExamsTab exams={liveExams} />}
        {activeTab === 'system' && <SystemTab alerts={systemAlerts} />}
      </div>
    </div>
  );
}

function OverviewTab({ recentUsers, pendingQuestions, liveExams, systemAlerts }: any) {
  return (
    <div className="space-y-6">
      <Card className="border-navy-200 dark:border-navy-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-amber-600" /> Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickActionCard title="Create Daily Exam" description="Schedule new daily exam" icon={Calendar} href="/admin/exams/create" color="blue" />
            <QuickActionCard title="Import Questions" description="Bulk import from CSV/Excel" icon={Upload} href="/admin/import" color="green" />
            <QuickActionCard title="Generate AI Questions" description="Create practice questions" icon={Zap} href="/admin/ai-generation" color="amber" />
            <QuickActionCard title="Review Submissions" description="Approve pending questions" icon={CheckCircle} href="/admin/approval" color="purple" />
            <QuickActionCard title="Manage Users" description="View and manage accounts" icon={Users} href="/admin/users" color="indigo" />
            <QuickActionCard title="System Settings" description="Configure platform" icon={Settings} href="/admin/settings" color="gray" />
            <QuickActionCard title="View Analytics" description="Platform performance" icon={TrendingUpIcon} href="/admin/analytics" color="pink" />
            <QuickActionCard title="Audit Logs" description="Review admin actions" icon={FileText} href="/admin/audit-logs" color="red" />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-blue-600" /> Recent Registrations</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1">View All <ArrowRight className="h-3 w-3" /></Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentUsers.map((user: typeof recentUsers[0]) => (
                <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-navy-50 dark:bg-navy-800/50">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-sm font-medium text-navy-700 dark:text-navy-300">{user.name.charAt(0)}</div>
                    <div><p className="font-medium text-navy-900 dark:text-white text-sm">{user.name}</p><p className="text-xs text-navy-500 dark:text-navy-400">{user.email}</p></div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Badge variant={user.role === 'student' ? 'secondary' : user.role === 'contributor' ? 'outline' : user.role === 'moderator' ? 'warning' : 'destructive'}>{user.role}</Badge>
                    <Badge variant={user.status === 'active' ? 'success' : 'warning'}>{user.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2"><AlertCircle className="h-5 w-5 text-amber-600" /> Pending Review ({pendingQuestions.length})</CardTitle>
            <Link href="/admin/approval"><Button variant="ghost" size="sm" className="gap-1">Review All <ArrowRight className="h-3 w-3" /></Button></Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingQuestions.map((q: typeof pendingQuestions[0]) => (
                <div key={q.id} className="p-3 rounded-lg bg-navy-50 dark:bg-navy-800/50">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-navy-900 dark:text-white text-sm truncate">{q.text}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{q.subject}</Badge>
                        <Badge variant="secondary" className="text-xs">{q.topic}</Badge>
                        <Badge variant={q.difficulty === 'easy' ? 'success' : q.difficulty === 'medium' ? 'warning' : 'destructive'} className="text-xs">{q.difficulty}</Badge>
                        <Badge variant="outline" className="text-xs">{q.source}</Badge>
                      </div>
                      <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">By {q.submittedBy} \u2022 {q.submittedAt}</p>
                    </div>
                    <div className="flex gap-1"><Button variant="ghost" size="icon" className="text-green-600"><CheckCircle className="h-4 w-4" /></Button><Button variant="ghost" size="icon" className="text-red-600"><XCircle className="h-4 w-4" /></Button></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Activity className="h-5 w-5 text-green-600" /> Live Examinations</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1">Monitor All <ArrowRight className="h-3 w-3" /></Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {liveExams.map((exam: typeof liveExams[0]) => (
                <div key={exam.id} className="p-3 rounded-lg bg-navy-50 dark:bg-navy-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0"><p className="font-medium text-navy-900 dark:text-white text-sm">{exam.title}</p><p className="text-xs text-navy-500 dark:text-navy-400">{exam.category}</p></div>
                    <Badge variant="success" className="mr-2">{exam.status}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-navy-500 dark:text-navy-400"><span>{exam.attempts} attempts</span><span>{exam.inProgress} in progress</span><span>{exam.started} - {exam.ends}</span></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-red-600" /> System Alerts</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert: typeof systemAlerts[0], index: number) => (
                <div key={index} className="p-3 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-start gap-3">
                  <div className={cn('h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0', alert.type === 'error' && 'bg-red-100 dark:bg-red-900/30 text-red-600', alert.type === 'warning' && 'bg-amber-100 dark:bg-amber-900/30 text-amber-600', alert.type === 'success' && 'bg-green-100 dark:bg-green-900/30 text-green-600', alert.type === 'info' && 'bg-blue-100 dark:bg-blue-900/30 text-blue-600')}>
                    {alert.type === 'error' && <XCircle className="h-4 w-4" />}{alert.type === 'warning' && <AlertCircle className="h-4 w-4" />}{alert.type === 'success' && <CheckCircle className="h-4 w-4" />}{alert.type === 'info' && <Info className="h-4 w-4" />}
                  </div>
                  <div><p className="text-sm font-medium text-navy-900 dark:text-white">{alert.message}</p><p className="text-xs text-navy-500 dark:text-navy-400">{alert.time}</p></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function UsersTab({ users }: { users: typeof recentUsers }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between"><CardTitle>User Management</CardTitle><div className="flex gap-2"><Button variant="outline" size="sm" className="gap-1"><Download className="h-3 w-3" /> Export</Button><Button size="sm" className="gap-1"><PlusCircle className="h-3 w-3" /> Add User</Button></div></CardHeader>
      <CardContent>
        <div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b border-navy-200 dark:border-navy-700"><th className="table-head">User</th><th className="table-head">Role</th><th className="table-head">Status</th><th className="table-head">Joined</th><th className="table-head">Last Active</th><th className="table-head">Actions</th></tr></thead><tbody>{users.map((user) => (<tr key={user.id} className="table-row"><td className="table-cell"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-sm font-medium text-navy-700 dark:text-navy-300">{user.name.charAt(0)}</div><div><p className="font-medium text-navy-900 dark:text-white">{user.name}</p><p className="text-sm text-navy-500 dark:text-navy-400">{user.email}</p></div></div></td><td className="table-cell"><Badge variant={user.role === 'student' ? 'secondary' : user.role === 'contributor' ? 'outline' : user.role === 'moderator' ? 'warning' : 'destructive'}>{user.role}</Badge></td><td className="table-cell"><Badge variant={user.status === 'active' ? 'success' : 'warning'}>{user.status}</Badge></td><td className="table-cell text-navy-600 dark:text-navy-300">{user.joined}</td><td className="table-cell text-navy-600 dark:text-navy-300">{user.lastActive}</td><td className="table-cell"><div className="flex items-center gap-1"><Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button><Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button><Button variant="ghost" size="icon" className="text-red-600"><Trash2 className="h-4 w-4" /></Button></div></td></tr>))}</tbody></table></div>
      </CardContent>
    </Card>
  );
}

function QuestionsTab({ questions }: { questions: typeof pendingQuestions }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between"><CardTitle>Question Bank Management</CardTitle><div className="flex gap-2"><Button variant="outline" size="sm" className="gap-1"><Download className="h-3 w-3" /> Export</Button><Button variant="outline" size="sm" className="gap-1"><Upload className="h-3 w-3" /> Import</Button><Button size="sm" className="gap-1"><PlusCircle className="h-3 w-3" /> Add Question</Button></div></CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">{questions.map((q) => (<div key={q.id} className="p-4 rounded-lg bg-navy-50 dark:bg-navy-800/50 border border-navy-100 dark:border-navy-700"><div className="flex items-start justify-between gap-4"><div className="flex-1 min-w-0"><p className="font-medium text-navy-900 dark:text-white">{q.text}</p><div className="flex flex-wrap gap-2 mt-2"><Badge variant="secondary">{q.subject}</Badge><Badge variant="secondary">{q.topic}</Badge><Badge variant={q.difficulty === 'easy' ? 'success' : q.difficulty === 'medium' ? 'warning' : 'destructive'}>{q.difficulty}</Badge><Badge variant="outline">{q.source}</Badge><Badge variant={q.source === 'ai-generated' ? 'warning' : 'secondary'}>Pending Review</Badge></div><p className="text-xs text-navy-500 dark:text-navy-400 mt-1">Submitted by {q.submittedBy} on {q.submittedAt}</p></div><div className="flex gap-2"><Button variant="outline" size="sm" className="gap-1 text-green-600 border-green-600"><CheckCircle className="h-3 w-3" /> Approve</Button><Button variant="outline" size="sm" className="gap-1 text-red-600 border-red-600"><XCircle className="h-3 w-3" /> Reject</Button><Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button><Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button></div></div></div>))}</div>
      </CardContent>
    </Card>
  );
}

function ExamsTab({ exams }: { exams: typeof liveExams }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between"><CardTitle>Examination Monitoring</CardTitle><Button size="sm" className="gap-1"><PlusCircle className="h-3 w-3" /> Create Exam</Button></CardHeader>
      <CardContent>
        <div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b border-navy-200 dark:border-navy-700"><th className="table-head">Exam</th><th className="table-head">Category</th><th className="table-head">Window</th><th className="table-head">Attempts</th><th className="table-head">In Progress</th><th className="table-head">Status</th><th className="table-head">Actions</th></tr></thead><tbody>{exams.map((exam) => (<tr key={exam.id} className="table-row"><td className="table-cell font-medium text-navy-900 dark:text-white">{exam.title}</td><td className="table-cell"><Badge variant="secondary">{exam.category}</Badge></td><td className="table-cell text-navy-600 dark:text-navy-300">{exam.started} - {exam.ends}</td><td className="table-cell">{exam.attempts}</td><td className="table-cell"><Badge variant="warning">{exam.inProgress}</Badge></td><td className="table-cell"><Badge variant="success">{exam.status}</Badge></td><td className="table-cell"><div className="flex items-center gap-1"><Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button><Button variant="ghost" size="icon"><Activity className="h-4 w-4" /></Button><Button variant="ghost" size="icon" className="text-red-600"><XCircle className="h-4 w-4" /></Button></div></td></tr>))}</tbody></table></div>
      </CardContent>
    </Card>
  );
}

function SystemTab({ alerts }: { alerts: typeof systemAlerts }) {
  return (
    <div className="space-y-6">
      <Card className="border-navy-200 dark:border-navy-800"><CardHeader><CardTitle>System Health</CardTitle></CardHeader><CardContent><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"><HealthMetric title="CPU Usage" value="34%" status="good" /><HealthMetric title="Memory" value="62%" status="good" /><HealthMetric title="Database" value="78%" status="warning" /><HealthMetric title="Disk Space" value="45%" status="good" /><HealthMetric title="API Latency" value="124ms" status="good" /><HealthMetric title="Error Rate" value="0.02%" status="good" /><HealthMetric title="Active Connections" value="1,234" status="good" /><HealthMetric title="Queue Depth" value="12" status="good" /></div></CardContent></Card>
      <Card className="border-navy-200 dark:border-navy-800"><CardHeader><CardTitle>Recent Alerts</CardTitle></CardHeader><CardContent><div className="space-y-3">{alerts.map((alert, index) => (<div key={index} className="p-3 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-start gap-3"><div className={cn('h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0', alert.type === 'error' && 'bg-red-100 dark:bg-red-900/30 text-red-600', alert.type === 'warning' && 'bg-amber-100 dark:bg-amber-900/30 text-amber-600', alert.type === 'success' && 'bg-green-100 dark:bg-green-900/30 text-green-600', alert.type === 'info' && 'bg-blue-100 dark:bg-blue-900/30 text-blue-600')}>{alert.type === 'error' && <XCircle className="h-4 w-4" />}{alert.type === 'warning' && <AlertCircle className="h-4 w-4" />}{alert.type === 'success' && <CheckCircle className="h-4 w-4" />}{alert.type === 'info' && <Info className="h-4 w-4" />}</div><div><p className="text-sm font-medium text-navy-900 dark:text-white">{alert.message}</p><p className="text-xs text-navy-500 dark:text-navy-400">{alert.time}</p></div></div>))}</div></CardContent></Card>
    </div>
  );
}

function QuickActionCard({ title, description, icon: Icon, href, color }: { title: string; description: string; icon: React.ComponentType<{ className?: string }>; href: string; color: string }) {
  return <Link href={href}><Card className="border-navy-200 dark:border-navy-800 h-full transition-all hover:shadow-lg group"><CardContent className="p-5 text-center"><div className={cn('h-12 w-12 rounded-xl mx-auto mb-3 flex items-center justify-center', `bg-${color}-100 dark:bg-${color}-900/30 group-hover:bg-${color}-200 dark:group-hover:bg-${color}-900/50 transition-colors`)}><Icon className={cn('h-6 w-6', `text-${color}-600 dark:text-${color}-400`)} /></div><h4 className="font-semibold text-navy-900 dark:text-white mb-1">{title}</h4><p className="text-sm text-navy-500 dark:text-navy-400">{description}</p></CardContent></Card></Link>;
}

function HealthMetric({ title, value, status }: { title: string; value: string; status: 'good' | 'warning' | 'critical' }) {
  return <Card className="border-navy-200 dark:border-navy-800 text-center"><CardContent className="p-5"><p className="text-sm text-navy-500 dark:text-navy-400 mb-1">{title}</p><p className={cn('text-2xl font-bold', status === 'good' && 'text-green-600', status === 'warning' && 'text-amber-600', status === 'critical' && 'text-red-600')}>{value}</p><Badge variant={status === 'good' ? 'success' : status === 'warning' ? 'warning' : 'destructive'} className="mt-2">{status.charAt(0).toUpperCase() + status.slice(1)}</Badge></CardContent></Card>;
}

import Link from 'next/link';