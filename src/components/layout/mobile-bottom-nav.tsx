'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Target,
  BookOpen,
  History,
  BarChart2,
  Brain,
  RotateCcw,
  Bookmark,
  Briefcase,
  Bell,
  Settings,
  User,
  Menu,
  X,
} from 'lucide-react';

const mobileNavItems = [
  { title: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
  { title: 'Daily Exams', href: '/student/daily-exams', icon: Target },
  { title: 'Practice', href: '/student/practice', icon: BookOpen },
  { title: 'History', href: '/student/history', icon: History },
  { title: 'Analytics', href: '/student/analytics', icon: BarChart2 },
  { title: 'Revision', href: '/student/revision', icon: RotateCcw },
  { title: 'Bookmarks', href: '/student/bookmarks', icon: Bookmark },
  { title: 'Jobs', href: '/student/upcoming', icon: Briefcase },
  { title: 'Notifications', href: '/student/notifications', icon: Bell },
  { title: 'Profile', href: '/student/profile', icon: User },
  { title: 'Settings', href: '/student/settings', icon: Settings },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="mobile-bottom-nav lg:hidden" aria-label="Mobile bottom navigation">
      <div className="grid grid-cols-5 gap-1 px-2 py-2">
        {mobileNavItems.slice(0, 5).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'mobile-bottom-nav-item',
              pathname === item.href && 'active'
            )}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            <item.icon className="h-5 w-5" aria-hidden="true" />
            <span className="truncate">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="border-t border-navy-200 px-2 py-1">
        <div className="grid grid-cols-6 gap-1">
          {mobileNavItems.slice(5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'mobile-bottom-nav-item',
                pathname === item.href && 'active'
              )}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span className="truncate">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function MobileMenuButton({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden btn-ghost p-2 fixed bottom-24 right-4 z-50 rounded-full shadow-lg"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
}