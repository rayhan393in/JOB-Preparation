'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BookOpen,
  Target,
  BookMarked,
  Clock,
  History,
  BarChart2,
  Brain,
  RotateCcw,
  Bookmark,
  Bell,
  Settings,
  Briefcase,
  GraduationCap,
  FileText,
  HelpCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  User,
  Shield,
  Database,
  Zap,
  Calendar,
  Users,
  Settings as SettingsIcon,
  Activity,
  ClipboardList,
  PenTool,
  Search,
  PlusCircle,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Archive,
  Flag,
  Star,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Rocket,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'student' | 'contributor' | 'moderator' | 'admin' | 'super-admin';
  userName: string;
  userEmail: string;
  userAvatar?: string;
}

const navigation = {
  student: [
    { title: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
    { title: 'My Profile', href: '/student/profile', icon: User },
    { title: 'Daily Exams', href: '/student/daily-exams', icon: Calendar },
    { title: 'Custom Practice', href: '/student/practice', icon: Target },
    { title: 'Subject Practice', href: '/student/subject-practice', icon: BookOpen },
    { title: 'Topic Practice', href: '/student/topic-practice', icon: Target },
    { title: 'Previous Questions', href: '/student/previous-questions', icon: History },
    { title: 'Full Mock Tests', href: '/student/mock-tests', icon: FileText },
    { title: 'Written Exams', href: '/student/written', icon: PenTool },
    { title: 'Exam History', href: '/student/history', icon: Clock },
    { title: 'Results & Analytics', href: '/student/analytics', icon: BarChart2 },
    { title: 'Weak Topics', href: '/student/weak-topics', icon: Brain },
    { title: 'Revision Centre', href: '/student/revision', icon: RotateCcw },
    { title: 'Bookmarks', href: '/student/bookmarks', icon: Bookmark },
    { title: 'Upcoming Jobs', href: '/student/upcoming', icon: Briefcase },
    { title: 'Notifications', href: '/student/notifications', icon: Bell },
    { title: 'Account Settings', href: '/student/settings', icon: Settings },
  ],
  admin: [
    { title: 'Admin Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { title: 'User Management', href: '/admin/users', icon: Users },
    { title: 'Subject Management', href: '/admin/subjects', icon: BookOpen },
    { title: 'Topic Management', href: '/admin/topics', icon: Target },
    { title: 'Question Bank', href: '/admin/questions', icon: Database },
    { title: 'Previous Questions Import', href: '/admin/import', icon: Upload },
    { title: 'AI Question Generation', href: '/admin/ai-generation', icon: Zap },
    { title: 'Question Approval', href: '/admin/approval', icon: CheckCircle },
    { title: 'Exam Creation', href: '/admin/exams/create', icon: PlusCircle },
    { title: 'Daily Routine Scheduler', href: '/admin/routine', icon: Calendar },
    { title: 'Exam Monitoring', href: '/admin/monitoring', icon: Activity },
    { title: 'Results Management', href: '/admin/results', icon: ClipboardList },
    { title: 'Written Evaluation', href: '/admin/written-eval', icon: PenTool },
    { title: 'Recruitment Circulars', href: '/admin/recruitment', icon: Briefcase },
    { title: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
    { title: 'System Settings', href: '/admin/settings', icon: SettingsIcon },
    { title: 'Audit Logs', href: '/admin/audit-logs', icon: History },
  ],
  moderator: [
    { title: 'Moderator Dashboard', href: '/moderator/dashboard', icon: LayoutDashboard },
    { title: 'Question Review', href: '/moderator/review', icon: Search },
    { title: 'Question Approval', href: '/moderator/approval', icon: CheckCircle },
    { title: 'Analytics', href: '/moderator/analytics', icon: BarChart2 },
  ],
  contributor: [
    { title: 'Contributor Dashboard', href: '/contributor/dashboard', icon: LayoutDashboard },
    { title: 'Submit Questions', href: '/contributor/submit', icon: PlusCircle },
    { title: 'My Submissions', href: '/contributor/submissions', icon: FileText },
    { title: 'Analytics', href: '/contributor/analytics', icon: BarChart2 },
  ],
  'super-admin': [
    { title: 'Admin Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { title: 'User Management', href: '/admin/users', icon: Users },
    { title: 'Subject Management', href: '/admin/subjects', icon: BookOpen },
    { title: 'Topic Management', href: '/admin/topics', icon: Target },
    { title: 'Question Bank', href: '/admin/questions', icon: Database },
    { title: 'Previous Questions Import', href: '/admin/import', icon: Upload },
    { title: 'AI Question Generation', href: '/admin/ai-generation', icon: Zap },
    { title: 'Question Approval', href: '/admin/approval', icon: CheckCircle },
    { title: 'Exam Creation', href: '/admin/exams/create', icon: PlusCircle },
    { title: 'Daily Routine Scheduler', href: '/admin/routine', icon: Calendar },
    { title: 'Exam Monitoring', href: '/admin/monitoring', icon: Activity },
    { title: 'Results Management', href: '/admin/results', icon: ClipboardList },
    { title: 'Written Evaluation', href: '/admin/written-eval', icon: PenTool },
    { title: 'Recruitment Circulars', href: '/admin/recruitment', icon: Briefcase },
    { title: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
    { title: 'System Settings', href: '/admin/settings', icon: SettingsIcon },
    { title: 'Audit Logs', href: '/admin/audit-logs', icon: History },
  ],
};

function NavItem({ title, href, icon: Icon, isActive }: { title: string; href: string; icon: React.ComponentType<{ className?: string }>; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        'sidebar-link',
        isActive && 'sidebar-link-active'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
      <span>{title}</span>
    </Link>
  );
}

function NavSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <h3 className="px-3 py-2 text-xs font-semibold text-navy-500 uppercase tracking-wider">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function Sidebar({ isOpen, onClose, userRole, userName, userEmail, userAvatar }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const userNav = navigation[userRole] || navigation.student;

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 lg:hidden btn-ghost p-2"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 bg-white border-r border-navy-200 transition-all duration-300 ease-in-out lg:relative lg:translate-x-0',
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0 lg:w-64',
          isCollapsed && 'w-16 lg:w-16'
        )}
        aria-label="Main navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-navy-200">
            <Link href="/" className="flex items-center gap-2" aria-label="JOBPREP BD Home">
              <div className="h-8 w-8 rounded-lg bg-navy-900 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              {!isCollapsed && (
                <span className="font-bold text-navy-900 text-lg">JOBPREP BD</span>
              )}
            </Link>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="lg:hidden p-1 rounded hover:bg-navy-100"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-expanded={!isCollapsed}
            >
              {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-6" aria-label="Navigation">
            {!isCollapsed && (
              <div className="px-3 py-2 rounded-lg bg-navy-50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-900 font-medium">
                    {userAvatar ? (
                      <img src={userAvatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                    ) : (
                      userName.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy-900 truncate">{userName}</p>
                    <p className="text-xs text-navy-500 truncate">{userEmail}</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-navy-200">
                  <span className="badge-primary text-xs">{userRole}</span>
                </div>
              </div>
            )}

            {userRole === 'student' && (
              <>
                <NavSection title="Preparation">
                  {userNav.slice(0, 6).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="Practice & Exams">
                  {userNav.slice(6, 10).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="Progress & Analysis">
                  {userNav.slice(10, 14).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="Information">
                  {userNav.slice(14).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>
              </>
            )}

            {userRole === 'admin' && (
              <>
                <NavSection title="Dashboard">
                  {userNav.slice(0, 1).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="Management">
                  {userNav.slice(1, 9).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="Examinations">
                  {userNav.slice(9, 13).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="System">
                  {userNav.slice(13).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>
              </>
            )}

            {(userRole === 'moderator' || userRole === 'contributor') && (
              <>
                <NavSection title="Dashboard">
                  {userNav.slice(0, 1).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="Questions">
                  {userNav.slice(1, 3).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>

                <NavSection title="Analytics">
                  {userNav.slice(3).map((item) => (
                    <NavItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                      isActive={pathname === item.href}
                    />
                  ))}
                </NavSection>
              </>
            )}
          </nav>

          <div className="p-4 border-t border-navy-200">
            {!isCollapsed ? (
              <Link
                href="/student/settings"
                className="sidebar-link w-full justify-center"
              >
                <Settings className="h-5 w-5" aria-hidden="true" />
                <span>Settings</span>
              </Link>
            ) : (
              <Link
                href="/student/settings"
                className="sidebar-link w-full justify-center"
                title="Settings"
              >
                <Settings className="h-5 w-5" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </aside>

      <div
        className={cn(
          'fixed inset-0 z-30 bg-black/50 lg:hidden transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />
    </>
  );
}

import { CheckCircle } from 'lucide-react';