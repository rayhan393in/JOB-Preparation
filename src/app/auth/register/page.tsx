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
  User,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
  Github,
  Chrome,
  CheckCircle,
  Shield,
  Check,
} from 'lucide-react';

const passwordRequirements = [
  { label: 'At least 8 characters', test: (p: string) => p.length >= 8 },
  { label: 'One uppercase letter', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'One lowercase letter', test: (p: string) => /[a-z]/.test(p) },
  { label: 'One number', test: (p: string) => /[0-9]/.test(p) },
  { label: 'One special character', test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    targetExam: 'general',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const examCategories = [
    { value: 'general', label: 'General Government Jobs' },
    { value: 'bcs-preliminary', label: 'BCS Preliminary' },
    { value: 'bcs-written', label: 'BCS Written' },
    { value: 'non-cadre', label: 'Non-Cadre (PSC)' },
    { value: 'eee-technical', label: 'EEE Technical Jobs' },
    { value: 'power-sector', label: 'Power Sector Jobs' },
    { value: 'other-engineering', label: 'Other Engineering Jobs' },
  ];

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        if (value && !/^(\+880|880|0)?1[3-9]\d{8}$/.test(value.replace(/\s+/g, ''))) {
          return 'Please enter a valid Bangladeshi phone number';
        }
        break;
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        break;
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
        break;
    }
    return null;
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    passwordRequirements.forEach((req) => {
      if (req.test(password)) strength++;
    });
    return strength;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the Terms of Service and Privacy Policy';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast.success('Account created successfully! Please check your email to verify.');
      router.push('/auth/login');
      router.refresh();
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthRegister = async (provider: 'google' | 'github') => {
    toast.loading(`Redirecting to ${provider}...`);
    setTimeout(() => {
      toast.dismiss();
      toast.success(`${provider} registration would redirect here`);
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
          <h1 className="text-2xl font-bold text-navy-900 dark:text-white">Create Your Account</h1>
          <p className="text-navy-500 dark:text-navy-400 mt-2">Start your smart preparation journey today</p>
        </div>

        {/* Register Card */}
        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Join 75,000+ Aspirants</CardTitle>
            <CardDescription>Free to start. No credit card required.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => handleOAuthRegister('google')}
                disabled={isLoading}
                className="gap-2"
              >
                <Chrome className="h-4 w-4" aria-hidden="true" />
                Google
              </Button>
              <Button
                variant="outline"
                onClick={() => handleOAuthRegister('github')}
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
                  Or register with email
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative mt-1.5">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" aria-hidden="true" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.fullName}
                    className="pl-10"
                    autoComplete="name"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" aria-hidden="true" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    className="pl-10"
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <div className="relative mt-1.5">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    autoComplete="tel"
                    disabled={isLoading}
                  />
                </div>
                <p className="text-xs text-navy-400 dark:text-navy-500 mt-1">Used for SMS notifications (Bangladeshi numbers only)</p>
              </div>

              <div>
                <Label htmlFor="targetExam">Target Examination</Label>
                <select
                  id="targetExam"
                  name="targetExam"
                  value={formData.targetExam}
                  onChange={handleChange}
                  className="input-field"
                  disabled={isLoading}
                >
                  {examCategories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
                <p className="text-xs text-navy-400 dark:text-navy-500 mt-1">Helps us personalize your daily exams</p>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" aria-hidden="true" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password}
                    className="pl-10 pr-10"
                    autoComplete="new-password"
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
                
                {/* Password Strength */}
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {passwordRequirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex-1 h-1.5 rounded"
                        style={{
                          backgroundColor: i < passwordStrength ? '#22c55e' : '#e2e8f0',
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-navy-500 dark:text-navy-400">
                    {passwordStrength === 0 ? 'Enter password' : `Strength: ${['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength - 1]}`}
                  </p>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" aria-hidden="true" />
                  <Input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.confirmPassword}
                    className="pl-10"
                    autoComplete="new-password"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="h-4 w-4 mt-0.5 rounded border-navy-300 text-green-600 focus:ring-green-500"
                  />
                  <div className="text-sm text-navy-600 dark:text-navy-400">
                    I agree to the{' '}
                    <Link href="/terms" className="underline hover:text-green-600">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="underline hover:text-green-600">Privacy Policy</Link>
                    . I understand my data will be used to personalize my exam preparation experience.
                  </div>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-600" role="alert">{errors.terms}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg" loading={isLoading}>
                Create Account
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-navy-200 dark:border-navy-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-navy-950 text-navy-500 dark:text-navy-400">
                  Already have an account?
                </span>
              </div>
            </div>

            <Link href="/auth/login">
              <Button variant="outline" className="w-full" size="lg">
                Sign In
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-navy-600 dark:text-navy-400">Free daily exams forever</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-navy-600 dark:text-navy-400">Full access to question bank</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-navy-600 dark:text-navy-400">Personalized analytics</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <Shield className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-navy-600 dark:text-navy-400">Bank-grade security</span>
          </div>
        </div>
      </div>
    </div>
  );
}