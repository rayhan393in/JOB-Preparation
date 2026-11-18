// Core Types for JOBPREP BD

export type UserRole = 'student' | 'contributor' | 'moderator' | 'admin' | 'super-admin';

export type ExamCategory =
  | 'general'
  | 'bcs-preliminary'
  | 'bcs-written'
  | 'non-cadre'
  | 'eee-technical'
  | 'power-sector'
  | 'other-engineering';

export type ExamStatus =
  | 'draft'
  | 'review'
  | 'approved'
  | 'scheduled'
  | 'registration-open'
  | 'live'
  | 'submitted'
  | 'evaluated'
  | 'result-published'
  | 'archived'
  | 'cancelled'
  | 'suspended';

export type QuestionType =
  | 'single-correct'
  | 'multiple-correct'
  | 'numerical'
  | 'true-false'
  | 'short-answer'
  | 'descriptive'
  | 'diagram-based';

export type QuestionSource =
  | 'verified-previous'
  | 'admin-created'
  | 'ai-generated'
  | 'adapted-practice'
  | 'contributor-submitted';

export type QuestionStatus =
  | 'draft'
  | 'pending-review'
  | 'approved'
  | 'rejected'
  | 'archived';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type ExamMode = 'timed' | 'learning' | 'topic-practice' | 'weak-topic' | 'incorrect-revision' | 'bookmark';

export type PracticeSource = 'previous' | 'verified' | 'ai-generated' | 'mixed';

export type ResultReleasePolicy = 'instant' | 'scheduled' | 'admin-controlled';

export type NavigationMode = 'single' | 'full-paper';

export type RegistrationPolicy = 'open' | 'closed' | 'invite-only';

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  phone?: string;
  role: UserRole;
  is_active: boolean;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
  last_login_at?: string;
}

export interface Profile {
  id: string;
  user_id: string;
  target_exam_category: ExamCategory;
  target_exam_profile?: string;
  preferred_subjects: string[];
  weak_topics: string[];
  strong_topics: string[];
  study_goal?: string;
  daily_study_time?: number;
  preferred_language: 'en' | 'bn' | 'both';
  timezone: string;
  created_at: string;
  updated_at: string;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'bn';
  notifications: {
    email: boolean;
    push: boolean;
    exam_reminders: boolean;
    result_notifications: boolean;
    weekly_reports: boolean;
    new_content: boolean;
  };
  exam_settings: {
    auto_save: boolean;
    show_timer: boolean;
    confirm_submission: boolean;
    question_navigation: NavigationMode;
    font_size: 'small' | 'medium' | 'large';
    high_contrast: boolean;
  };
  created_at: string;
  updated_at: string;
}

export interface ExamCategoryData {
  id: string;
  code: ExamCategory;
  name: string;
  name_bn: string;
  description?: string;
  description_bn?: string;
  icon: string;
  color: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ExamProfile {
  id: string;
  category_id: string;
  name: string;
  name_bn: string;
  description?: string;
  description_bn?: string;
  target_post: string;
  eligibility?: string;
  syllabus_version?: string;
  is_active: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Subject {
  id: string;
  exam_profile_id: string;
  name: string;
  name_bn: string;
  code: string;
  description?: string;
  description_bn?: string;
  icon?: string;
  color?: string;
  order_index: number;
  is_active: boolean;
  is_core: boolean;
  created_at: string;
  updated_at: string;
}

export interface Topic {
  id: string;
  subject_id: string;
  name: string;
  name_bn: string;
  description?: string;
  description_bn?: string;
  order_index: number;
  priority_score?: number;
  historical_frequency?: number;
  recent_frequency?: number;
  exam_coverage?: number;
  syllabus_importance?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Subtopic {
  id: string;
  topic_id: string;
  name: string;
  name_bn: string;
  description?: string;
  description_bn?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SyllabusVersion {
  id: string;
  exam_profile_id: string;
  version: string;
  name: string;
  name_bn: string;
  effective_from: string;
  effective_to?: string;
  is_current: boolean;
  document_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Question {
  id: string;
  exam_category: ExamCategory;
  subject_id: string;
  topic_id: string;
  subtopic_id?: string;
  question_text: string;
  question_text_bn?: string;
  language: 'en' | 'bn' | 'both';
  question_type: QuestionType;
  options: QuestionOption[];
  correct_answer: string | string[];
  explanation?: string;
  explanation_bn?: string;
  difficulty: Difficulty;
  marks: number;
  negative_marks: number;
  source: QuestionSource;
  source_exam?: string;
  source_year?: number;
  source_reference?: string;
  tags: string[];
  status: QuestionStatus;
  verification_notes?: string;
  approved_by?: string;
  approved_at?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  version: number;
  is_deleted: boolean;
}

export interface QuestionOption {
  id: string;
  question_id: string;
  option_key: string;
  option_text: string;
  option_text_bn?: string;
  is_correct: boolean;
  order_index: number;
}

export interface QuestionExplanation {
  id: string;
  question_id: string;
  explanation_text: string;
  explanation_text_bn?: string;
  formula?: string;
  derivation_steps?: string[];
  diagram_url?: string;
  video_url?: string;
  reference_material?: string;
  created_at: string;
  updated_at: string;
}

export interface QuestionSourceRef {
  id: string;
  question_id: string;
  source_type: QuestionSource;
  exam_name?: string;
  exam_year?: number;
  organization?: string;
  circular_number?: string;
  page_number?: number;
  question_number?: number;
  document_url?: string;
  verified_by?: string;
  verified_at?: string;
  created_at: string;
}

export interface QuestionTag {
  id: string;
  question_id: string;
  tag: string;
}

export interface QuestionVerificationLog {
  id: string;
  question_id: string;
  reviewer_id: string;
  action: 'submitted' | 'approved' | 'rejected' | 'requested_changes';
  notes?: string;
  previous_status: QuestionStatus;
  new_status: QuestionStatus;
  created_at: string;
}

export interface HistoricalExamination {
  id: string;
  exam_category: ExamCategory;
  exam_profile_id?: string;
  name: string;
  name_bn: string;
  organization: string;
  year: number;
  month?: number;
  date?: string;
  total_questions: number;
  total_marks: number;
  duration_minutes: number;
  correct_marks: number;
  negative_marks: number;
  subjects_covered: string[];
  document_url?: string;
  is_verified: boolean;
  verified_by?: string;
  verified_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Exam {
  id: string;
  title: string;
  title_bn?: string;
  description?: string;
  description_bn?: string;
  exam_category: ExamCategory;
  exam_profile_id?: string;
  target_post?: string;
  status: ExamStatus;
  total_questions: number;
  total_marks: number;
  duration_minutes: number;
  correct_marks: number;
  negative_marks: number;
  unanswered_marks: number;
  difficulty_distribution: Record<Difficulty, number>;
  source_distribution: Record<QuestionSource, number>;
  subject_distribution: Record<string, number>;
  topic_distribution: Record<string, number>;
  start_time?: string;
  end_time?: string;
  registration_start?: string;
  registration_end?: string;
  result_release_policy: ResultReleasePolicy;
  result_release_time?: string;
  navigation_mode: NavigationMode;
  randomization_enabled: boolean;
  show_correct_answers: boolean;
  show_explanations: boolean;
  allow_review: boolean;
  max_attempts: number;
  passing_score?: number;
  instructions?: string;
  instructions_bn?: string;
  created_by: string;
  approved_by?: string;
  approved_at?: string;
  published_at?: string;
  archived_at?: string;
  created_at: string;
  updated_at: string;
  version: number;
  snapshot_id?: string;
}

export interface ExamConfiguration {
  id: string;
  exam_id: string;
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
}

export interface ExamSection {
  id: string;
  exam_id: string;
  name: string;
  name_bn?: string;
  description?: string;
  order_index: number;
  total_questions: number;
  total_marks: number;
  duration_minutes?: number;
  subject_id?: string;
  topic_ids: string[];
  created_at: string;
  updated_at: string;
}

export interface ExamQuestion {
  id: string;
  exam_id: string;
  section_id?: string;
  question_id: string;
  order_index: number;
  marks_override?: number;
  negative_marks_override?: number;
  created_at: string;
}

export interface ExamAttempt {
  id: string;
  exam_id: string;
  user_id: string;
  attempt_number: number;
  status: 'in-progress' | 'submitted' | 'auto-submitted' | 'abandoned';
  started_at: string;
  submitted_at?: string;
  ended_at?: string;
  time_spent_seconds: number;
  current_question_index: number;
  answers: StudentAnswer[];
  ip_address?: string;
  user_agent?: string;
  is_offline: boolean;
  sync_status: 'synced' | 'pending' | 'conflict';
  created_at: string;
  updated_at: string;
}

export interface StudentAnswer {
  question_id: string;
  answer: string | string[] | null;
  is_marked_for_review: boolean;
  time_spent_seconds: number;
  answered_at?: string;
  changed_count: number;
}

export interface ExamSubmission {
  id: string;
  attempt_id: string;
  exam_id: string;
  user_id: string;
  answers: StudentAnswer[];
  submitted_at: string;
  time_spent_seconds: number;
  score?: number;
  percentage?: number;
  is_passed?: boolean;
  evaluated_at?: string;
  evaluated_by?: string;
  created_at: string;
}

export interface ExamResult {
  id: string;
  submission_id: string;
  exam_id: string;
  user_id: string;
  total_questions: number;
  correct_count: number;
  wrong_count: number;
  unanswered_count: number;
  marked_for_review_count: number;
  score: number;
  total_marks: number;
  percentage: number;
  negative_marks: number;
  accuracy: number;
  attempt_rate: number;
  time_used_seconds: number;
  subject_breakdown: SubjectBreakdown[];
  topic_breakdown: TopicBreakdown[];
  rank?: number;
  percentile?: number;
  is_passed: boolean;
  released_at?: string;
  created_at: string;
  updated_at: string;
}

export interface SubjectBreakdown {
  subject_id: string;
  subject_name: string;
  total_questions: number;
  correct: number;
  wrong: number;
  unanswered: number;
  score: number;
  percentage: number;
}

export interface TopicBreakdown {
  topic_id: string;
  topic_name: string;
  subject_id: string;
  total_questions: number;
  correct: number;
  wrong: number;
  unanswered: number;
  score: number;
  percentage: number;
}

export interface ResultDetail {
  id: string;
  result_id: string;
  question_id: string;
  question_text: string;
  student_answer: string | string[] | null;
  correct_answer: string | string[];
  is_correct: boolean;
  is_marked_for_review: boolean;
  marks_obtained: number;
  explanation?: string;
  formula?: string;
  source?: string;
  topic_name?: string;
  subject_name?: string;
  difficulty?: Difficulty;
  time_spent_seconds: number;
  created_at: string;
}

export interface DailyRoutine {
  id: string;
  name: string;
  name_bn?: string;
description?: string;
exam_category: ExamCategory;
exam_profile_id?: string;
pattern: 'balanced' | 'weakness-based' | 'revision-based';
duration_days: number;
questions_per_day: number;
duration_minutes: number;
correct_marks: number;
negative_marks: number;
unanswered_marks: number;
min_subjects_per_day: number;
subject_distribution: Record<string, number>;
topic_priority_weights: Record<string, number>;
start_date: string;
end_date: string;
is_active: boolean;
is_published: boolean;
published_at?: string;
created_by: string;
approved_by?: string;
approved_at?: string;
created_at: string;
updated_at: string;
}

export interface DailyRoutineItem {
  id: string;
  routine_id: string;
  day_number: number;
  date: string;
  exam_id?: string;
  status: 'scheduled' | 'live' | 'completed' | 'missed' | 'cancelled';
  subject_distribution: Record<string, number>;
  topic_distribution: Record<string, number>;
  questions: RoutineQuestion[];
  created_at: string;
  updated_at: string;
}

export interface RoutineQuestion {
  question_id: string;
  subject_id: string;
  topic_id: string;
  subtopic_id?: string;
  order_index: number;
}

export interface RoutineSubject {
  id: string;
  routine_id: string;
  subject_id: string;
  total_questions: number;
  total_days: number;
  priority_weight: number;
  created_at: string;
}

export interface RoutineTopic {
  id: string;
  routine_id: string;
  topic_id: string;
  total_questions: number;
  frequency_per_week: number;
  priority_weight: number;
  created_at: string;
}

export interface PracticeConfiguration {
  id: string;
  user_id: string;
  name: string;
  exam_category: ExamCategory;
  subject_ids: string[];
  topic_ids: string[];
  subtopic_ids: string[];
  question_count: number;
  difficulty: Difficulty | 'mixed';
  source: PracticeSource;
  duration_minutes: number;
  correct_marks: number;
  negative_marks: number;
  mode: ExamMode;
  language: 'en' | 'bn' | 'both';
  navigation_mode: NavigationMode;
  smart_distribution: boolean;
  custom_distribution: Record<string, number>;
  is_saved: boolean;
  created_at: string;
  updated_at: string;
}

export interface PracticeSession {
  id: string;
  user_id: string;
  configuration_id?: string;
  exam_category: ExamCategory;
  subject_ids: string[];
  topic_ids: string[];
  question_count: number;
  difficulty: Difficulty | 'mixed';
  source: PracticeSource;
  duration_minutes: number;
  correct_marks: number;
  negative_marks: number;
  mode: ExamMode;
  status: 'in-progress' | 'completed' | 'abandoned';
  started_at: string;
  completed_at?: string;
  score?: number;
  percentage?: number;
  answers: StudentAnswer[];
  created_at: string;
  updated_at: string;
}

export interface Bookmark {
  id: string;
  user_id: string;
  question_id: string;
  note?: string;
  tags: string[];
  created_at: string;
}

export interface RevisionQuestion {
  id: string;
  user_id: string;
  question_id: string;
  topic_id: string;
  subject_id: string;
  last_attempted_at: string;
  next_revision_at: string;
  interval_days: number;
  ease_factor: number;
  repetitions: number;
  is_due: boolean;
  mastery_level: 'not-started' | 'learning' | 'needs-improvement' | 'good' | 'mastered';
  created_at: string;
  updated_at: string;
}

export interface WrittenQuestion {
  id: string;
  exam_id: string;
  section_id?: string;
  question_text: string;
  question_text_bn?: string;
  model_answer?: string;
  model_answer_bn?: string;
  marks: number;
  order_index: number;
  requires_diagram: boolean;
  requires_formula: boolean;
  word_limit?: number;
  time_limit_minutes?: number;
  rubric_id?: string;
  created_at: string;
  updated_at: string;
}

export interface WrittenSubmission {
  id: string;
  exam_id: string;
  user_id: string;
  attempt_id?: string;
  question_id: string;
  answer_text: string;
  answer_images: string[];
  answer_files: string[];
  is_draft: boolean;
  submitted_at?: string;
  word_count: number;
  time_spent_seconds: number;
  created_at: string;
  updated_at: string;
}

export interface WrittenEvaluation {
  id: string;
  submission_id: string;
  examiner_id: string;
  marks_awarded: number;
  max_marks: number;
  feedback?: string;
  feedback_bn?: string;
  rubric_scores: RubricScore[];
  evaluated_at: string;
  is_published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface RubricScore {
  criterion: string;
  score: number;
  max_score: number;
  comment?: string;
}

export interface MarkingRubric {
  id: string;
  exam_id: string;
  question_id?: string;
  name: string;
  criteria: RubricCriterion[];
  total_marks: number;
  created_at: string;
  updated_at: string;
}

export interface RubricCriterion {
  id: string;
  name: string;
  description?: string;
  max_score: number;
  weight: number;
}

export interface SubjectPerformance {
  id: string;
  user_id: string;
  subject_id: string;
  total_questions_attempted: number;
  total_correct: number;
  total_wrong: number;
  accuracy: number;
  average_time_seconds: number;
  mastery_level: 'not-started' | 'learning' | 'needs-improvement' | 'good' | 'mastered';
  last_practiced_at?: string;
  created_at: string;
  updated_at: string;
}

export interface TopicPerformance {
  id: string;
  user_id: string;
  topic_id: string;
  subject_id: string;
  total_questions_attempted: number;
  total_correct: number;
  total_wrong: number;
  accuracy: number;
  average_time_seconds: number;
  consecutive_correct: number;
  consecutive_wrong: number;
  mastery_level: 'not-started' | 'learning' | 'needs-improvement' | 'good' | 'mastered';
  last_practiced_at?: string;
  next_revision_at?: string;
  created_at: string;
  updated_at: string;
}

export interface StudentProgress {
  id: string;
  user_id: string;
  exam_category: ExamCategory;
  total_exams_taken: number;
  total_questions_attempted: number;
  overall_accuracy: number;
  average_score: number;
  study_streak_days: number;
  total_study_time_minutes: number;
  weak_topics_count: number;
  strong_topics_count: number;
  last_activity_at?: string;
  created_at: string;
  updated_at: string;
}

export interface TopicStatistics {
  id: string;
  topic_id: string;
  exam_category: ExamCategory;
  total_questions_in_bank: number;
  total_historical_questions: number;
  historical_frequency: number;
  recent_frequency: number;
  exam_coverage_percentage: number;
  average_difficulty: number;
  priority_score: number;
  trend: 'increasing' | 'stable' | 'decreasing';
  last_updated: string;
  created_at: string;
}

export interface UpcomingExam {
  id: string;
  organization: string;
  job_title: string;
  circular_number: string;
  publication_date: string;
  application_deadline: string;
  exam_date?: string;
  exam_date_status: 'confirmed' | 'tentative' | 'estimated';
  post: string;
  eligibility?: string;
  syllabus?: string;
  official_circular_url?: string;
  official_website_url?: string;
  exam_stage: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  exam_category: ExamCategory;
  is_verified: boolean;
  verified_by?: string;
  verified_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  type: 'exam-reminder' | 'result-published' | 'new-content' | 'system' | 'announcement' | 'deadline';
  title: string;
  title_bn?: string;
  message: string;
  message_bn?: string;
  action_url?: string;
  is_read: boolean;
  read_at?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  expires_at?: string;
  created_at: string;
}

export interface AIGenerationLog {
  id: string;
  requested_by: string;
  subject_id: string;
  topic_id: string;
  subtopic_id?: string;
  prompt: string;
  model: string;
  generated_questions: GeneratedQuestion[];
  status: 'pending' | 'completed' | 'failed';
  error_message?: string;
  tokens_used: number;
  cost_estimate: number;
  created_at: string;
  completed_at?: string;
}

export interface GeneratedQuestion {
  question_text: string;
  question_text_bn?: string;
  options: { key: string; text: string; text_bn?: string; is_correct: boolean }[];
  correct_answer: string | string[];
  explanation?: string;
  explanation_bn?: string;
  difficulty: Difficulty;
  marks: number;
  negative_marks: number;
  formula?: string;
  source_reference?: string;
}

export interface AdminAuditLog {
  id: string;
  admin_id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  old_values?: Record<string, unknown>;
  new_values?: Record<string, unknown>;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface FilterParams {
  page?: number;
  page_size?: number;
  search?: string;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  filters?: Record<string, unknown>;
}

export interface ExamTimerState {
  total_seconds: number;
  remaining_seconds: number;
  is_running: boolean;
  is_warning: boolean;
  is_danger: boolean;
  server_time_offset: number;
}

export interface QuestionNavigationState {
  current_index: number;
  total_questions: number;
  answered: Set<number>;
  marked_for_review: Set<number>;
  visited: Set<number>;
}

export interface ExamSettings {
  correct_marks: number;
  negative_marks: number;
  unanswered_marks: number;
  duration_minutes: number;
  navigation_mode: NavigationMode;
  show_timer: boolean;
  auto_submit: boolean;
  allow_review: boolean;
  randomization_enabled: boolean;
}

export interface Language {
  code: 'en' | 'bn';
  name: string;
  native_name: string;
  rtl: boolean;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', native_name: 'English', rtl: false },
  { code: 'bn', name: 'Bengali', native_name: 'বাংলা', rtl: false },
];

export const EXAM_CATEGORIES: { value: ExamCategory; label: string; label_bn: string }[] = [
  { value: 'general', label: 'General Job Preparation', label_bn: 'সাধারণ চাকরির প্রস্তুতি' },
  { value: 'bcs-preliminary', label: 'BCS Preliminary', label_bn: 'বিসিএস প্রাথমিক' },
  { value: 'bcs-written', label: 'BCS Written', label_bn: 'বিসিএস লিখিত' },
  { value: 'non-cadre', label: 'Non-Cadre', label_bn: 'নন-ক্যাডর' },
  { value: 'eee-technical', label: 'EEE Technical Jobs', label_bn: 'ইইই টেকনিক্যাল চাকরি' },
  { value: 'power-sector', label: 'Power Sector Jobs', label_bn: 'বিদ্যুৎ খাতের চাকরি' },
  { value: 'other-engineering', label: 'Other Engineering Jobs', label_bn: 'অন্যান্য ইঞ্জিনিয়ারিং চাকরি' },
];

export const DIFFICULTIES: { value: Difficulty; label: string; label_bn: string; color: string }[] = [
  { value: 'easy', label: 'Easy', label_bn: 'সহজ', color: 'green' },
  { value: 'medium', label: 'Medium', label_bn: 'মধ্যম', color: 'amber' },
  { value: 'hard', label: 'Hard', label_bn: 'কঠিন', color: 'red' },
];

export const QUESTION_TYPES: { value: QuestionType; label: string; label_bn: string }[] = [
  { value: 'single-correct', label: 'Single Correct MCQ', label_bn: 'একক সঠিক এমসিকিউ' },
  { value: 'multiple-correct', label: 'Multiple Correct MCQ', label_bn: 'বহু সঠিক এমসিকিউ' },
  { value: 'numerical', label: 'Numerical Answer', label_bn: 'সংখ্যাত্মক উত্তর' },
  { value: 'true-false', label: 'True/False', label_bn: 'সঠিক/ভুল' },
  { value: 'short-answer', label: 'Short Answer', label_bn: 'সংক্ষিপ্ত উত্তর' },
  { value: 'descriptive', label: 'Descriptive Question', label_bn: 'বিবরণামূলক প্রশ্ন' },
  { value: 'diagram-based', label: 'Diagram Based', label_bn: 'চিত্র-ভিত্তিক' },
];

export const QUESTION_SOURCES: { value: QuestionSource; label: string; label_bn: string }[] = [
  { value: 'verified-previous', label: 'Previous Examination', label_bn: 'পূর্বের পরীক্ষা' },
  { value: 'admin-created', label: 'Admin Created', label_bn: 'অ্যাডমিন সৃষ্ট' },
  { value: 'ai-generated', label: 'AI Generated', label_bn: 'এআই তৈরি' },
  { value: 'adapted-practice', label: 'Adapted Practice', label_bn: 'অনুকূলিত অনুশীলন' },
  { value: 'contributor-submitted', label: 'Contributor Submitted', label_bn: 'অবদানকারী জমা' },
];

export const EXAM_MODES: { value: ExamMode; label: string; label_bn: string; description: string }[] = [
  { value: 'timed', label: 'Timed Exam', label_bn: 'সময়-সীমাবদ্ধ পরীক্ষা', description: 'Full exam simulation with timer' },
  { value: 'learning', label: 'Learning Mode', label_bn: 'শেখার মোড', description: 'See explanations immediately after each answer' },
  { value: 'topic-practice', label: 'Topic Practice', label_bn: 'বিষয়-ভিত্তিক অনুশীলন', description: 'Focus on specific topics' },
  { value: 'weak-topic', label: 'Weak Topic Practice', label_bn: 'দুর্বল বিষয়ের অনুশীলন', description: 'AI-recommended weak areas' },
  { value: 'incorrect-revision', label: 'Incorrect Question Revision', label_bn: 'ভুল প্রশ্ন রিভিশন', description: 'Review previously wrong answers' },
  { value: 'bookmark', label: 'Bookmark Practice', label_bn: 'বুকমার্ক অনুশীলন', description: 'Practice saved questions' },
];

export const PRACTICE_SOURCES: { value: PracticeSource; label: string; label_bn: string }[] = [
  { value: 'previous', label: 'Previous Questions', label_bn: 'পূর্বের প্রশ্ন' },
  { value: 'verified', label: 'Verified Question Bank', label_bn: 'যাচাইকৃত প্রশ্ন ব্যাংক' },
  { value: 'ai-generated', label: 'AI-Generated Practice', label_bn: 'এআই-তैयার অনুশীলন' },
  { value: 'mixed', label: 'Mixed Sources', label_bn: 'মিশ্র উৎস' },
];

export const QUESTION_PRESETS = [10, 15, 20, 30, 40, 50, 75, 100];

export const ROUTINE_DURATIONS = [7, 15, 30, 60, 90, 180];

export const USER_ROLES: { value: UserRole; label: string; label_bn: string; color: string }[] = [
  { value: 'student', label: 'Student', label_bn: 'শিক্ষার্থী', color: 'blue' },
  { value: 'contributor', label: 'Contributor', label_bn: 'অবদানকারী', color: 'green' },
  { value: 'moderator', label: 'Moderator', label_bn: 'মডারেটর', color: 'amber' },
  { value: 'admin', label: 'Admin', label_bn: 'অ্যাডমিন', color: 'purple' },
  { value: 'super-admin', label: 'Super Admin', label_bn: 'সুপার অ্যাডমিন', color: 'red' },
];