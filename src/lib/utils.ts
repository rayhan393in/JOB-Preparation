import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  });
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

export function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

export function calculateScore(
  correct: number,
  wrong: number,
  unanswered: number,
  correctMarks: number = 1,
  negativeMarks: number = 0.5,
  unansweredMarks: number = 0
): { score: number; totalMarks: number; percentage: number } {
  const correctScore = correct * correctMarks;
  const wrongPenalty = wrong * negativeMarks;
  const unansweredScore = unanswered * unansweredMarks;
  const score = correctScore - wrongPenalty + unansweredScore;
  const totalMarks = (correct + wrong + unanswered) * correctMarks;
  const percentage = totalMarks > 0 ? (score / totalMarks) * 100 : 0;
  return { score, totalMarks, percentage };
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function generateId(): string {
  return crypto.randomUUID();
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+880|880|0)?1[3-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function getColorForScore(percentage: number): string {
  if (percentage >= 80) return 'green';
  if (percentage >= 60) return 'blue';
  if (percentage >= 40) return 'amber';
  return 'red';
}

export function getPriorityLabel(score: number): { label: string; color: string } {
  if (score >= 80) return { label: 'Very High', color: 'red' };
  if (score >= 60) return { label: 'High', color: 'amber' };
  if (score >= 40) return { label: 'Medium', color: 'blue' };
  if (score >= 20) return { label: 'Low', color: 'green' };
  return { label: 'Very Low', color: 'gray' };
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  return fn().catch((err) => {
    if (retries <= 0) throw err;
    return sleep(delay).then(() => retry(fn, retries - 1, delay * 2));
  });
}

export function parseQueryString(queryString: string): Record<string, string> {
  const params = new URLSearchParams(queryString);
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

export function buildQueryString(params: Record<string, string | number | boolean | undefined>): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });
  return searchParams.toString();
}

export function getExamStatusColor(status: string): string {
  const colors: Record<string, string> = {
    draft: 'gray',
    review: 'amber',
    approved: 'blue',
    scheduled: 'blue',
    'registration-open': 'green',
    live: 'green',
    submitted: 'blue',
    evaluated: 'purple',
    'result-published': 'green',
    archived: 'gray',
    cancelled: 'red',
    suspended: 'red',
  };
  return colors[status] || 'gray';
}

export function getQuestionTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'single-correct': 'Single Correct MCQ',
    'multiple-correct': 'Multiple Correct MCQ',
    numerical: 'Numerical Answer',
    'true-false': 'True/False',
    'short-answer': 'Short Answer',
    descriptive: 'Descriptive Question',
    'diagram-based': 'Diagram Based',
  };
  return labels[type] || type;
}

export function getDifficultyLabel(difficulty: string): string {
  const labels: Record<string, string> = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  };
  return labels[difficulty] || difficulty;
}

export function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    easy: 'green',
    medium: 'amber',
    hard: 'red',
  };
  return colors[difficulty] || 'gray';
}

export function getSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    'verified-previous': 'Previous Examination',
    'admin-created': 'Admin Created',
    'ai-generated': 'AI Generated',
    'adapted-practice': 'Adapted Practice',
    'contributor-submitted': 'Contributor Submitted',
  };
  return labels[source] || source;
}

export function getVerificationStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    draft: 'Draft',
    'pending-review': 'Pending Review',
    approved: 'Approved',
    rejected: 'Rejected',
    archived: 'Archived',
  };
  return labels[status] || status;
}

export function getUserRoleLabel(role: string): string {
  const labels: Record<string, string> = {
    student: 'Student',
    contributor: 'Contributor',
    moderator: 'Moderator',
    admin: 'Admin',
    'super-admin': 'Super Admin',
  };
  return labels[role] || role;
}

export function getUserRoleColor(role: string): string {
  const colors: Record<string, string> = {
    student: 'blue',
    contributor: 'green',
    moderator: 'amber',
    admin: 'purple',
    'super-admin': 'red',
  };
  return colors[role] || 'gray';
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.some((type) => file.type.startsWith(type));
}

export function validateFileSize(file: File, maxSizeMB: number): boolean {
  return file.size <= maxSizeMB * 1024 * 1024;
}

export function createObjectUrl(file: File): string {
  return URL.createObjectURL(file);
}

export function revokeObjectUrl(url: string): void {
  URL.revokeObjectURL(url);
}