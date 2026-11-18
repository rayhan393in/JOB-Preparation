'use client';

import * as React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import { Sidebar } from '@/components/layout/sidebar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} user={null} onLogout={() => {}} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        userRole="student"
        userName="Guest User"
        userEmail="guest@jobprepbd.com"
      />
      <main className="flex-1 lg:pl-64">
        <div className="pb-24 lg:pb-0">{children}</div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}