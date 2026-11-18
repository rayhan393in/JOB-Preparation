'use client';

import * as React from 'react';
import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Daily Exams', href: '/exams/daily' },
      { label: 'Custom Practice', href: '/practice/custom' },
      { label: 'Subject Practice', href: '/practice/subject' },
      { label: 'Topic Practice', href: '/practice/topic' },
      { label: 'Mock Tests', href: '/exams/mock' },
      { label: 'Written Exams', href: '/exams/written' },
      { label: 'Previous Questions', href: '/questions/previous' },
    ],
    preparation: [
      { label: 'BCS Preliminary', href: '/preparation/bcs-preliminary' },
      { label: 'BCS Written', href: '/preparation/bcs-written' },
      { label: 'General Jobs', href: '/preparation/general' },
      { label: 'Non-Cadre', href: '/preparation/non-cadre' },
      { label: 'EEE Technical', href: '/preparation/eee' },
      { label: 'Power Sector', href: '/preparation/power' },
      { label: 'Engineering Jobs', href: '/preparation/engineering' },
    ],
    resources: [
      { label: 'Results & Analytics', href: '/analytics' },
      { label: 'Revision Centre', href: '/revision' },
      { label: 'Weak Topics', href: '/weak-topics' },
      { label: 'Bookmarks', href: '/bookmarks' },
      { label: 'Upcoming Jobs', href: '/upcoming' },
      { label: 'Study Materials', href: '/materials' },
      { label: 'FAQ', href: '/faq' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/jobprepbd', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/jobprepbd', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/jobprepbd', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/jobprepbd', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/jobprepbd', label: 'Instagram' },
  ];

  return (
    <footer className="bg-navy-950 text-navy-100" role="contentinfo">
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="JOBPREP BD Home">
              <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-xl text-white">JOBPREP BD</span>
            </Link>
            <p className="text-navy-300 text-sm mb-6 leading-relaxed">
              Bangladesh's smartest job examination preparation platform. Prepare smart, practice daily, get exam ready.
            </p>
            <div className="space-y-3 text-sm text-navy-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:support@jobprepbd.com" className="hover:text-white transition-colors">support@jobprepbd.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+8801XXXXXXXXX" className="hover:text-white transition-colors">+880 1XXX XXXXXXX</a>
              </div>
            </div>
          </div>

          <nav aria-label="Product links">
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Preparation links">
            <h3 className="font-semibold text-white mb-4">Preparation</h3>
            <ul className="space-y-2">
              {footerLinks.preparation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources links">
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <p className="text-navy-400 text-sm">
                © {currentYear} JOBPREP BD. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-4">
                {footerLinks.legal.map((link) => (
                  <Link key={link.href} href={link.href} className="text-navy-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-navy-400 text-sm flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-500" aria-hidden="true" /> for Bangladesh
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-green-500 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden mt-6 pt-6 border-t border-navy-800">
            <nav aria-label="Legal links mobile">
              <ul className="flex flex-wrap justify-center gap-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-navy-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}