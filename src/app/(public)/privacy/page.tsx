'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  GraduationCap,
  Shield,
  User,
  Lock,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Database,
  Globe,
  Trash2,
  Download,
  Eye,
  EyeOff,
} from 'lucide-react';

const lastUpdated = 'November 18, 2026';
const effectiveDate = 'November 18, 2026';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4 text-base px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" aria-hidden="true" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your <span className="text-green-400">Privacy</span> Matters
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              How we collect, use, and protect your data on JOBPREP BD.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-navy-300 text-sm">
              <span>Last updated: {lastUpdated}</span>
              <span>Effective: {effectiveDate}</span>
              <span>Version: 2.0</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="container-main max-w-4xl">
          <div className="prose prose-navy dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">1. Data Controller</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
                JOBPREP BD ("we", "us", "our") is the data controller for personal data processed through our platform. 
                Contact: privacy@jobprepbd.com | Dhaka, Bangladesh
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">2. Data We Collect</h2>
              
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">2.1 Account Information</h3>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4 mb-4">
                <li>Name, email address, phone number (optional)</li>
                <li>Password (hashed with bcrypt, never stored in plaintext)</li>
                <li>Profile photo (optional, uploaded by you)</li>
                <li>Target examination category and preparation preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">2.2 Examination Data</h3>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4 mb-4">
                <li>Exam attempts, answers, and timestamps</li>
                <li>Scores, accuracy, time spent per question</li>
                <li>Marked-for-review questions</li>
                <li>Custom exam configurations</li>
                <li>Written exam submissions and drafts</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">2.3 Analytics & Performance Data</h3>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4 mb-4">
                <li>Subject-wise and topic-wise performance metrics</li>
                <li>Weak/strong topic identification</li>
                <li>Revision schedules and mastery levels</li>
                <li>Study streaks and time tracking</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">2.4 Technical Data</h3>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4 mb-4">
                <li>IP address, browser type, device information</li>
                <li>Access times, session duration</li>
                <li>Error logs and performance metrics</li>
                <li>Cookie data (see Cookie Policy)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">3. How We Use Your Data</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <PurposeCard 
                  title="Service Delivery" 
                  description="Provide exam platform, evaluate answers, generate results, maintain exam integrity"
                  icon={CheckCircle}
                />
                <PurposeCard 
                  title="Personalization" 
                  description="Adaptive revision schedules, weak topic identification, custom exam recommendations"
                  icon={CheckCircle}
                />
                <PurposeCard 
                  title="Communication" 
                  description="Exam reminders, result notifications, platform updates, security alerts (opt-out available)"
                  icon={CheckCircle}
                />
                <PurposeCard 
                  title="Improvement" 
                  description="Analyze usage patterns, improve question quality, develop new features"
                  icon={CheckCircle}
                />
                <PurposeCard 
                  title="Security" 
                  description="Fraud prevention, unauthorized access detection, audit logging"
                  icon={CheckCircle}
                />
                <PurposeCard 
                  title="Legal Compliance" 
                  description="Fulfill legal obligations, respond to lawful requests, enforce terms"
                  icon={CheckCircle}
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">4. Data Sharing</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                We do not sell your personal data. We share data only in these circumstances:
              </p>
              <ul className="list-disc list-inside space-y-3 text-navy-600 dark:text-navy-300 ml-4">
                <li><strong>Service Providers:</strong> Supabase (database/auth), SSLCommerz (payments), email providers - under strict data processing agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In case of merger/acquisition, with user notification</li>
                <li><strong>Aggregated Analytics:</strong> Anonymous, aggregated data for platform improvement (cannot identify individuals)</li>
                <li><strong>With Your Consent:</strong> Any other sharing requires explicit opt-in</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">5. Data Security</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <SecurityCard title="Encryption in Transit" description="All data transmitted via TLS 1.3. HTTPS enforced site-wide." />
                <SecurityCard title="Encryption at Rest" description="Database encrypted with AES-256. Backups encrypted." />
                <SecurityCard title="Authentication" description="bcrypt password hashing. JWT tokens with short expiry. Refresh token rotation." />
                <SecurityCard title="Access Control" description="Row-Level Security (RLS) on database. Role-based permissions. Principle of least privilege." />
                <SecurityCard title="Monitoring" description="Audit logs for all admin actions. Failed login detection. Anomaly alerts." />
                <SecurityCard title="Incident Response" description="Defined breach notification procedure. 72-hour regulatory notification per GDPR." />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">6. Your Rights</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                Under GDPR and Bangladesh Data Protection Act, you have the right to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <RightCard title="Access" description="Request a copy of all personal data we hold about you" />
                <RightCard title="Rectification" description="Correct inaccurate or incomplete data" />
                <RightCard title="Erasure" description="Request deletion of your data (with exceptions for legal obligations)" />
                <RightCard title="Portability" description="Receive your data in structured, machine-readable format (JSON/CSV)" />
                <RightCard title="Restriction" description="Limit processing of your data in certain circumstances" />
                <RightCard title="Objection" description="Object to processing for direct marketing or legitimate interests" />
                <RightCard title="Automated Decisions" description="Request human review of automated decisions affecting you" />
                <RightCard title="Withdraw Consent" description="Withdraw consent for optional processing at any time" />
              </div>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mt-4">
                Exercise these rights via Settings &gt; Privacy or email privacy@jobprepbd.com. We respond within 30 days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">7. Data Retention</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-navy-200 dark:border-navy-700">
                    <th className="text-left p-3 font-semibold text-navy-900 dark:text-white">Data Category</th>
                    <th className="text-left p-3 font-semibold text-navy-900 dark:text-white">Retention Period</th>
                    <th className="text-left p-3 font-semibold text-navy-900 dark:text-white">Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-navy-100 dark:border-navy-800">
                    <td className="p-3 text-navy-600 dark:text-navy-300">Account & profile</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Until account deletion + 30 days</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Contract performance</td>
                  </tr>
                  <tr className="border-b border-navy-100 dark:border-navy-800">
                    <td className="p-3 text-navy-600 dark:text-navy-300">Exam attempts & results</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Permanent (unless account deleted)</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Legitimate interest / contract</td>
                  </tr>
                  <tr className="border-b border-navy-100 dark:border-navy-800">
                    <td className="p-3 text-navy-600 dark:text-navy-300">Written submissions</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Permanent (unless account deleted)</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Contract performance</td>
                  </tr>
                  <tr className="border-b border-navy-100 dark:border-navy-800">
                    <td className="p-3 text-navy-600 dark:text-navy-300">Analytics & performance</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Until account deletion</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Legitimate interest</td>
                  </tr>
                  <tr className="border-b border-navy-100 dark:border-navy-800">
                    <td className="p-3 text-navy-600 dark:text-navy-300">Audit logs</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">7 years</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Legal obligation</td>
                  </tr>
                  <tr className="border-b border-navy-100 dark:border-navy-800">
                    <td className="p-3 text-navy-600 dark:text-navy-300">Marketing preferences</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Until withdrawn</td>
                    <td className="p-3 text-navy-600 dark:text-navy-300">Consent</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">8. Cookies & Tracking</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                We use essential cookies for authentication, session management, and security. Optional analytics cookies 
                (with consent) help us improve the platform. See our <a href="/cookies" className="text-green-600 hover:underline">Cookie Policy</a> for details.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">9. International Transfers</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                Our infrastructure is hosted on Supabase (US/EU regions). Data may be processed outside Bangladesh. 
                We ensure adequate protection through Standard Contractual Clauses and provider certifications.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">10. Children's Privacy</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                The Platform is not directed to children under 13. We do not knowingly collect data from children under 13. 
                If you believe we have such data, contact us immediately for deletion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                We may update this Policy. Material changes will be notified via email and in-app notification 30 days in advance. 
                Continued use constitutes acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">12. Contact</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                Data Protection Officer: privacy@jobprepbd.com
              </p>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
                You can also lodge a complaint with the Bangladesh Data Protection Authority or your local supervisory authority.
              </p>
            </section>
          </div>

          {/* Quick Summary */}
          <div className="mt-12 p-6 rounded-xl bg-navy-50 dark:bg-navy-900/50 border border-navy-200 dark:border-navy-800">
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" aria-hidden="true" />
              Privacy at a Glance
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-navy-900 dark:text-white mb-2">We Do</h4>
                <ul className="space-y-1 text-navy-600 dark:text-navy-300">
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />Encrypt all data</li>
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />Let you export/delete data</li>
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />Honor opt-out requests</li>
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />Minimize data collection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 dark:text-white mb-2">We Don't</h4>
                <ul className="space-y-1 text-navy-600 dark:text-navy-300">
                  <li className="flex items-center gap-1"><XCircle className="h-3 w-3 text-red-500" aria-hidden="true" />Sell your data</li>
                  <li className="flex items-center gap-1"><XCircle className="h-3 w-3 text-red-500" aria-hidden="true" />Share with advertisers</li>
                  <li className="flex items-center gap-1"><XCircle className="h-3 w-3 text-red-500" aria-hidden="true" />Track across websites</li>
                  <li className="flex items-center gap-1"><XCircle className="h-3 w-3 text-red-500" aria-hidden="true" />Use data beyond purpose</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 dark:text-white mb-2">Your Control</h4>
                <ul className="space-y-1 text-navy-600 dark:text-navy-300">
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />Settings &gt; Privacy panel</li>
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />One-click data export</li>
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />Account deletion</li>
                  <li className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-green-500" aria-hidden="true" />Email preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PurposeCard({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
            <Icon className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
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

function SecurityCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardContent className="p-5">
        <h4 className="font-semibold text-navy-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-navy-500 dark:text-navy-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function RightCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="border-navy-200 dark:border-navy-800">
      <CardContent className="p-4">
        <h4 className="font-semibold text-navy-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-navy-500 dark:text-navy-400">{description}</p>
      </CardContent>
    </Card>
  );
}