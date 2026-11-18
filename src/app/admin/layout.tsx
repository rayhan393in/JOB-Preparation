import * as React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar } from '@/components/layout/sidebar';
import { AdminLayoutClient } from './admin-layout-client';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const mockUser = {
  name: 'Admin User',
  email: 'admin@jobprepbd.com',
  avatar: undefined,
  role: 'admin',
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminLayoutClient user={mockUser}>
      <div className="min-h-screen flex flex-col bg-navy-50">
        <main className="flex-1 lg:pl-64">
          <div className="p-6">{children}</div>
        </main>
        <Footer />
      </div>
    </AdminLayoutClient>
  );
}
