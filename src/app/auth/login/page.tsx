'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/utils';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
  Github,
  Chrome,
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('Welcome back! Redirecting to dashboard...');
      router.push('/student/dashboard');
      router.refresh();
    } catch (error) {
      toast.error('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    toast.loading(`Redirecting to ${provider}...`);
    // In real app: window.location.href = `/api/auth/${provider}`;
    setTimeout(() => {
      toast.dismiss();
      toast.success(`${provider} login would redirect here`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-navy-50 dark:bg-navy-950">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="h-12 w-12 rounded-xl bg-navy-900 dark:bg-navy-100 flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-white dark:text-navy-900" aria-hidden="true" />
            </div>
            <span className="font-bold text-2xl text-navy-900 dark:text-white">JOBPREP BD</span>
          </Link>
          <h1 className="text-2xl font-bold text-navy-900 dark:text-white">Welcome Back</h1>
          <p className="text-navy-500 dark:text-navy-400 mt-2">Sign in to continue your preparation journey</p>
        </div>

        {/* Login Card */}
        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Sign In to Your Account</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => handleOAuthLogin('google')}
                disabled={isLoading}
                className="gap-2"
              >
                <Chrome className="h-4 w-4" aria-hidden="true" />
                Google
              </Button>
              <Button
                variant="outline"
                onClick={() => handleOAuthLogin('github')}
                disabled={isLoading}
                className="gap-2"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-navy-200 dark:border-navy-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-navy-950 text-navy-500 dark:text-navy-400">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" aria-hidden="true" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    className="pl-10"
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/auth/forgot-password" className="text-sm text-green-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" aria-hidden="true" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                    className="pl-10 pr-10"
                    autoComplete="current-password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-navy-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-navy-600 dark:text-navy-400">Remember me</span>
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg" loading={isLoading}>
                Sign In
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-navy-200 dark:border-navy-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-navy-950 text-navy-500 dark:text-navy-400">
                  Don't have an account?
                </span>
              </div>
            </div>

            <Link href="/auth/register">
              <Button variant="outline" className="w-full" size="lg">
                Create Free Account
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-lg bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
              <Check className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <p className="text-xs text-navy-600 dark:text-navy-400">Free to start</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
              <Shield className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <p className="text-xs text-navy-600 dark:text-navy-400">Secure & private</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
              <Download className="h-5 w-5 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <p className="text-xs text-navy-600 dark:text-navy-400">Cancel anytime</p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-navy-400 dark:text-navy-500">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-navy-700 dark:hover:text-navy-300">Terms of Service</Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline hover:text-navy-700 dark:hover:text-navy-300">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}

import { Check, Shield, Download, ChevronDown } from 'lucide-react';