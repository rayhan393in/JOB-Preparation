"use client";

import * as React from 'react';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

interface AdminLayoutClientProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
  children: React.ReactNode;
}

export function AdminLayoutClient({ user, children }: AdminLayoutClientProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-navy-50">
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        user={user}
        onLogout={() => {}}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        userRole={user.role as 'student' | 'contributor' | 'moderator' | 'admin' | 'super-admin'}
        userName={user.name}
        userEmail={user.email}
        userAvatar={user.avatar}
      />
      {children}
    </div>
  );
}
