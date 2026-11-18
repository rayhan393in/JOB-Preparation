'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/utils';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  GraduationCap,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Github,
  CheckCircle,
} from 'lucide-react';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Click "Forgot password?" on the login page. Enter your registered email, and we\'ll send you a secure reset link. The link expires in 1 hour for security.',
  },
  {
    question: 'Can I change my target exam category later?',
    answer: 'Yes! Go to Settings > Preparation Profile. You can update your target exam, preferred subjects, and study goals anytime. Your progress data is preserved.',
  },
  {
    question: 'Are the previous questions verified?',
    answer: 'Absolutely. Every "Previous Examination Question" in our database is verified by our academic team. We record the exact exam name, year, and source. Unverified questions are clearly labeled.',
  },
  {
    question: 'How does the daily exam scheduling work?',
    answer: 'Our smart scheduler creates routines based on your target exam, historical topic frequency, and your weak areas. You can choose Balanced, Weakness-Based, or Revision patterns. Minimum 2 subjects per exam.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes! Our Progressive Web App (PWA) works offline and can be installed from your browser. Native iOS and Android apps are in development. All features work on mobile web.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept bKash, Nagad, Rocket, Visa/Mastercard, and bank transfers via SSLCommerz. Institutional plans can be paid via invoice. All transactions are encrypted and secure.',
  },
  {
    question: 'How do I report an incorrect question?',
    answer: 'While reviewing any question, click the flag icon. Select "Report Error" and describe the issue. Our moderation team reviews all reports within 48 hours. Contributors earn reputation for valid reports.',
  },
  {
    question: 'Can I export my exam results?',
    answer: 'Pro users can export results as PDF or Excel. Free users can view detailed results online. All historical results are permanently stored in your account.',
  },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = React.useState<string>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'content', label: 'Content & Questions' },
    { value: 'partnership', label: 'Partnership & Business' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Message sent successfully! We\'ll reply within 24 hours.');
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-700/50 via-transparent to-transparent" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4 text-base px-4 py-2">
              <GraduationCap className="h-4 w-4 mr-2" aria-hidden="true" />
              We're Here to Help
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Get in <span className="text-green-400">Touch</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Have questions? Need support? Want to partner with us? 
              Our team typically responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="container-main">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8 max-w-2xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contact">
                <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                Contact Us
              </TabsTrigger>
              <TabsTrigger value="faq">
                <CheckCircle className="h-4 w-4 mr-2" aria-hidden="true" />
                FAQ
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {activeTab === 'contact' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-navy-200 dark:border-navy-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-6">Contact Information</h3>
                    <div className="space-y-5">
                      <ContactItem icon={Mail} title="Email Support" value="support@jobprepbd.com" description="Response within 24 hours" />
                      <ContactItem icon={Phone} title="Phone Support" value="+880 1XXX XXXXXXX" description="Sun-Thu, 9 AM - 6 PM (BST)" />
                      <ContactItem icon={MapPin} title="Office Address" value="Dhaka, Bangladesh" description="Visit by appointment only" />
                      <ContactItem icon={Clock} title="Business Hours" value="Sunday - Thursday" description="9:00 AM - 6:00 PM (GMT+6)" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-navy-200 dark:border-navy-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-6">Follow Us</h3>
                    <div className="flex gap-3">
                      {[
                        { icon: Facebook, href: 'https://facebook.com/jobprepbd', label: 'Facebook' },
                        { icon: Twitter, href: 'https://twitter.com/jobprepbd', label: 'Twitter' },
                        { icon: Linkedin, href: 'https://linkedin.com/company/jobprepbd', label: 'LinkedIn' },
                        { icon: Youtube, href: 'https://youtube.com/jobprepbd', label: 'YouTube' },
                        { icon: Instagram, href: 'https://instagram.com/jobprepbd', label: 'Instagram' },
                        { icon: Github, href: 'https://github.com/jobprepbd', label: 'GitHub' },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center text-navy-600 dark:text-navy-400 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-navy-200 dark:border-navy-800">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-field"
                          required
                        >
                          {subjects.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your question or issue in detail..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full sm:w-auto gap-2" size="lg" loading={isLoading}>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group card-base border-navy-200 dark:border-navy-800">
                  <summary className="p-5 flex items-center justify-between cursor-pointer list-none">
                    <span className="font-medium text-navy-900 dark:text-white pr-8">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-navy-400 transition-transform group-open:rotate-180 flex-shrink-0" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-5 text-navy-600 dark:text-navy-300 border-t border-navy-100 dark:border-navy-800">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="container-main relative text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Preparing?</h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Join thousands of aspirants. Free to start, no credit card required.
          </p>
          <Link href="/auth/register">
            <Button size="xl" className="gap-2 bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Create Free Account
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon: Icon, title, value, description }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-navy-700 dark:text-navy-300" aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-medium text-navy-900 dark:text-white">{title}</h4>
        <p className="text-navy-600 dark:text-navy-300">{value}</p>
        <p className="text-xs text-navy-400 dark:text-navy-500">{description}</p>
      </div>
    </div>
  );
}

import { ChevronDown, ArrowRight } from 'lucide-react';