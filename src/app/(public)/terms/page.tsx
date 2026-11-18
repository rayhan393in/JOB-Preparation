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
} from 'lucide-react';

const lastUpdated = 'November 18, 2026';
const effectiveDate = 'November 18, 2026';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4 text-base px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" aria-hidden="true" />
              Legal Terms
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Terms of <span className="text-green-400">Service</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Please read these terms carefully before using JOBPREP BD.
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
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                By accessing and using JOBPREP BD ("the Platform", "we", "us", "our"), you ("the User", "you", "your") 
                agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Platform.
              </p>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                the updated Terms on this page. Your continued use of the Platform after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                JOBPREP BD is an online examination preparation platform for Bangladesh job recruitment examinations including 
                BCS Preliminary, BCS Written, General Government Jobs, Non-Cadre, EEE Technical, Power Sector, and other engineering recruitment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4">
                <li>Daily scheduled multi-subject examinations</li>
                <li>Custom exam builder with flexible configuration</li>
                <li>Topic-wise and subject-wise practice</li>
                <li>Verified previous examination question database</li>
                <li>Topic frequency analysis and priority scoring</li>
                <li>AI-generated practice questions (admin-reviewed)</li>
                <li>Automatic evaluation with detailed explanations</li>
                <li>Written examination support with rubric-based evaluation</li>
                <li>Performance analytics and adaptive revision</li>
                <li>Upcoming recruitment examination information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">3.1 Registration</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                You must provide accurate, current, and complete information during registration. You may register using 
                email/password or OAuth providers (Google, GitHub). You are responsible for maintaining the confidentiality 
                of your account credentials.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">3.2 Account Security</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                You must notify us immediately of any unauthorized use of your account. We are not liable for any loss 
                or damage arising from your failure to protect your credentials.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">3.3 Account Types</h3>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4">
                <li><strong>Student:</strong> Access to preparation features, exams, practice, analytics</li>
                <li><strong>Contributor:</strong> Can submit questions and corrections for review</li>
                <li><strong>Moderator:</strong> Can review and recommend question approval</li>
                <li><strong>Admin:</strong> Full platform management capabilities</li>
                <li><strong>Super Admin:</strong> System-wide administration and user management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">4. Subscription & Billing</h2>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">4.1 Free Plan</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                The Free plan provides access to core features with limitations. No payment information required.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">4.2 Paid Plans</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                Pro and Institutional plans require payment. Prices are in Bangladeshi Taka (BDT) and include applicable taxes. 
                Billing cycles are monthly or yearly as selected. Yearly plans receive a 20% discount.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">4.3 Refunds</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                We offer a 14-day money-back guarantee for new Pro subscriptions. Refunds are processed within 7-10 business days. 
                Institutional plans are subject to contract terms.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">4.4 Cancellation</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                You may cancel anytime from Account Settings. Access continues until the end of the paid period. 
                No partial refunds for unused time unless covered by the money-back guarantee.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">5. Content & Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">5.1 Our Content</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                All Platform content (questions, explanations, analytics, software, design) is owned by JOBPREP BD or licensed to us. 
                You may not copy, distribute, or create derivative works without written permission.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">5.2 User-Generated Content</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                Contributors retain ownership of submitted content but grant us a perpetual, royalty-free license to use, modify, 
                and distribute it on the Platform. All submissions are subject to review and approval.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">5.3 Historical Questions</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                Previous examination questions are included under fair use for educational purposes. We verify sources and 
                clearly label unverified content. We do not claim ownership of official examination questions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">6. Acceptable Use</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                You agree not to use the Platform for any unlawful or prohibited purpose, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4">
                <li>Attempting to gain unauthorized access to systems or data</li>
                <li>Scraping, crawling, or automated data extraction</li>
                <li>Sharing account credentials or exam content</li>
                <li>Attempting to manipulate exam results or analytics</li>
                <li>Posting harmful, offensive, or misleading content</li>
                <li>Using the Platform for commercial purposes without authorization</li>
                <li>Interfering with other users' experience</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">7. Examination Integrity</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                We take examination integrity seriously. During live examinations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4">
                <li>Answers are auto-saved and synchronized with our servers</li>
                <li>Timer is server-authoritative; device time is not trusted</li>
                <li>Auto-submission occurs at the deadline</li>
                <li>Multiple attempts are restricted per configuration</li>
                <li>We do not claim that browser restrictions prevent cheating</li>
              </ul>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mt-4">
                Violations may result in score invalidation, account suspension, or permanent ban.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">8. Privacy & Data Protection</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                Your privacy is important to us. Our <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a> 
                explains how we collect, use, and protect your data. Key points:
              </p>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4">
                <li>We never sell your personal data</li>
                <li>Exam answers and results are private to you</li>
                <li>Data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>You can export or delete your data anytime</li>
                <li>GDPR and Bangladesh Data Protection Act compliant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">9. Disclaimers & Limitations</h2>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">9.1 Educational Purpose</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                The Platform is for educational preparation only. We do not guarantee success in any examination. 
                Official results are determined solely by the respective recruiting authorities.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">9.2 Content Accuracy</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                While we verify all "Previous Examination Questions," we cannot guarantee 100% accuracy. 
                AI-generated questions are clearly labeled and admin-reviewed. Always cross-reference with official sources.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">9.3 Service Availability</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                We strive for 99.9% uptime but do not guarantee uninterrupted service. Maintenance windows will be announced in advance.
              </p>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">9.4 Limitation of Liability</h3>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                To the maximum extent permitted by law, JOBPREP BD shall not be liable for any indirect, incidental, 
                special, or consequential damages, including loss of data, profits, or examination opportunities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">10. Termination</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                We may suspend or terminate your account for violation of these Terms. You may delete your account anytime 
                from Settings. Upon termination, your data will be handled per our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">11. Governing Law</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                These Terms are governed by the laws of the People's Republic of Bangladesh. Disputes will be resolved 
                in the courts of Dhaka, Bangladesh.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">12. Contact</h2>
              <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
                For questions about these Terms, contact us at:
              </p>
              <ul className="list-disc list-inside space-y-2 text-navy-600 dark:text-navy-300 ml-4">
                <li>Email: legal@jobprepbd.com</li>
                <li>Address: Dhaka, Bangladesh</li>
              </ul>
            </section>
          </div>

          {/* Summary Cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                  Key Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Free tier forever</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Cancel anytime</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Data export anytime</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />14-day refund guarantee</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />Privacy protected</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <XCircle className="h-5 w-5" aria-hidden="true" />
                  Key Restrictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
                  <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" aria-hidden="true" />No content scraping</li>
                  <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" aria-hidden="true" />No account sharing</li>
                  <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" aria-hidden="true" />No exam manipulation</li>
                  <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" aria-hidden="true" />No commercial misuse</li>
                  <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" aria-hidden="true" />No reverse engineering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}