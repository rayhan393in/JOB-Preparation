'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectField } from '@/components/ui/select';
import { CheckboxField } from '@/components/ui/checkbox';
import { RadioField } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  Target,
  BookOpen,
  Brain,
  RotateCcw,
  Bookmark,
  PlayCircle,
  Plus,
  Minus,
  Settings,
  Save,
  Download,
  Upload,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Zap,
  Clock,
  Layers,
  SlidersHorizontal,
} from 'lucide-react';

const examCategories = [
  { value: 'bcs-preliminary', label: 'BCS Preliminary' },
  { value: 'bcs-written', label: 'BCS Written' },
  { value: 'general', label: 'General Government Jobs' },
  { value: 'non-cadre', label: 'Non-Cadre (PSC)' },
  { value: 'eee-technical', label: 'EEE Technical Jobs' },
  { value: 'power-sector', label: 'Power Sector Jobs' },
  { value: 'other-engineering', label: 'Other Engineering Jobs' },
];

const subjects = [
  { id: 'bangla', name: 'Bangla', category: 'general', topics: ['বাংলা বানান', 'সন্ধি', 'সমাস', 'কারক ও বিভক্তি', 'উপসর্গ', 'প্রত্যয়', 'বাক্য শুদ্ধি', 'বাগধারা', 'এক কথায় প্রকাশ', 'বাংলা সাহিত্য'] },
  { id: 'english', name: 'English', category: 'general', topics: ['Parts of Speech', 'Tense', 'Voice', 'Narration', 'Preposition', 'Articles', 'Right Forms of Verbs', 'Subject-Verb Agreement', 'Transformation', 'Synonyms', 'Antonyms', 'Idioms', 'Vocabulary'] },
  { id: 'math', name: 'Mathematics', category: 'general', topics: ['Number System', 'Percentage', 'Ratio', 'Average', 'Profit and Loss', 'Interest', 'Time and Work', 'Speed and Distance', 'Algebra', 'Geometry', 'Probability', 'Permutation and Combination', 'Logarithms'] },
  { id: 'mental', name: 'Mental Ability', category: 'general', topics: ['Logical Reasoning', 'Number Series', 'Letter Series', 'Coding-Decoding', 'Blood Relations', 'Direction Sense', 'Syllogism', 'Analogy', 'Classification', 'Ranking'] },
  { id: 'bd-affairs', name: 'Bangladesh Affairs', category: 'general', topics: ['History', 'Geography', 'Polity', 'Economy', 'Culture', 'Current Affairs', 'Liberation War', 'Constitution'] },
  { id: 'int-affairs', name: 'International Affairs', category: 'general', topics: ['World History', 'Geography', 'Organizations', 'Treaties', 'Current Affairs', 'Bilateral Relations'] },
  { id: 'gen-science', name: 'General Science', category: 'general', topics: ['Physics', 'Chemistry', 'Biology', 'Environment', 'Technology', 'Space'] },
  { id: 'ict', name: 'ICT', category: 'general', topics: ['Computer Basics', 'Internet', 'MS Office', 'Programming Basics', 'Security', 'Emerging Tech'] },
  { id: 'geo-env', name: 'Geography & Environment', category: 'general', topics: ['Physical Geography', 'Bangladesh Geography', 'Environment', 'Climate', 'Disasters'] },
  { id: 'ethics', name: 'Ethics & Governance', category: 'general', topics: ['Ethics', 'Good Governance', 'Transparency', 'Accountability', 'Citizen Charter'] },
  // EEE Subjects
  { id: 'circuit', name: 'Electrical Circuit Analysis', category: 'eee-technical', topics: ['DC Circuits', 'AC Circuits', 'Network Theorems', 'Resonance', 'Filters', 'Two-Port Networks', 'Transient Analysis', 'Laplace Transform'] },
  { id: 'machines', name: 'Electrical Machines', category: 'eee-technical', topics: ['Transformers', 'DC Machines', 'Induction Motors', 'Synchronous Machines', 'Special Motors', 'Testing'] },
  { id: 'power-systems', name: 'Power System Engineering', category: 'eee-technical', topics: ['Generation', 'Transmission', 'Distribution', 'Load Flow', 'Fault Analysis', 'Protection', 'Stability', 'HVDC'] },
  { id: 'power-electronics', name: 'Power Electronics', category: 'eee-technical', topics: ['Rectifiers', 'Inverters', 'DC-DC Converters', 'AC Controllers', 'Drives', 'PWM Techniques', 'Applications'] },
  { id: 'control', name: 'Control Systems', category: 'eee-technical', topics: ['Modeling', 'Time Response', 'Frequency Response', 'Stability', 'Root Locus', 'Bode Plot', 'State Space', 'Digital Control'] },
  { id: 'measurements', name: 'Electrical Measurements', category: 'eee-technical', topics: ['Instruments', 'Bridges', 'Transducers', 'Signal Conditioning', 'Data Acquisition', 'Virtual Instrumentation'] },
  { id: 'analog', name: 'Analog Electronics', category: 'eee-technical', topics: ['Diodes', 'BJT', 'FET', 'Amplifiers', 'Oscillators', 'Op-Amps', 'Power Amplifiers', 'Feedback'] },
  { id: 'digital', name: 'Digital Electronics', category: 'eee-technical', topics: ['Number Systems', 'Logic Gates', 'Combinational', 'Sequential', 'Memory', 'Microprocessors', 'FPGA', 'VHDL'] },
  { id: 'eng-math', name: 'Engineering Mathematics', category: 'eee-technical', topics: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Complex Analysis', 'Probability', 'Numerical Methods', 'Transforms'] },
  { id: 'renewable', name: 'Renewable Energy', category: 'eee-technical', topics: ['Solar', 'Wind', 'Hydro', 'Biomass', 'Grid Integration', 'Storage', 'Economics', 'Policy'] },
  { id: 'installation', name: 'Installation & Safety', category: 'eee-technical', topics: ['Wiring', 'Earthing', 'Protection', 'Codes', 'Safety', 'Testing', 'Maintenance', 'Energy Audit'] },
  { id: 'communication', name: 'Communication Engineering', category: 'eee-technical', topics: ['Signals', 'Modulation', 'Transmission', 'Antennas', 'Satellite', 'Optical', 'Mobile', 'Networks'] },
  { id: 'micro', name: 'Microprocessors & Controllers', category: 'eee-technical', topics: ['8085/8086', 'ARM', 'PIC', 'AVR', 'Interfacing', 'Programming', 'RTOS', 'Applications'] },
  { id: 'signals', name: 'Signals & Systems', category: 'eee-technical', topics: ['CT/DT Signals', 'Fourier', 'Laplace', 'Z-Transform', 'Sampling', 'Filters', 'State Space', 'DSP Basics'] },
  { id: 'embedded', name: 'Embedded Systems', category: 'eee-technical', topics: ['Architecture', 'Programming', 'RTOS', 'Interfacing', 'IoT', 'Low Power', 'Debugging', 'Case Studies'] },
  { id: 'vlsi', name: 'VLSI Fundamentals', category: 'eee-technical', topics: ['MOSFET', 'Fabrication', 'Design Flow', 'Layout', 'Timing', 'Power', 'Testing', 'CAD Tools'] },
];

const questionPresets = [10, 15, 20, 30, 40, 50, 75, 100];
const difficulties = ['easy', 'medium', 'hard', 'mixed'];
const sources = [
  { value: 'previous', label: 'Previous Questions' },
  { value: 'verified', label: 'Verified Question Bank' },
  { value: 'ai-generated', label: 'AI-Generated Practice' },
  { value: 'mixed', label: 'Mixed Sources' },
];
const modes = [
  { value: 'timed', label: 'Timed Exam', description: 'Full exam simulation with timer' },
  { value: 'learning', label: 'Learning Mode', description: 'See explanations immediately' },
  { value: 'topic-practice', label: 'Topic Practice', description: 'Focus on specific topics' },
  { value: 'weak-topic', label: 'Weak Topic Practice', description: 'AI-recommended weak areas' },
  { value: 'incorrect-revision', label: 'Incorrect Revision', description: 'Review previously wrong answers' },
  { value: 'bookmark', label: 'Bookmark Practice', description: 'Practice saved questions' },
];

const savedConfigs = [
  { name: 'BCS Daily Practice', category: 'bcs-preliminary', subjects: ['bangla', 'english', 'math'], questions: 30, difficulty: 'mixed', source: 'mixed', duration: 30 },
  { name: 'EEE Power Systems Focus', category: 'eee-technical', subjects: ['power-systems', 'machines'], questions: 40, difficulty: 'hard', source: 'verified', duration: 45 },
  { name: 'Math Weak Topics', category: 'general', subjects: ['math'], questions: 20, difficulty: 'mixed', source: 'previous', duration: 20, mode: 'weak-topic' },
];

export default function PracticePage() {
  const [activeTab, setActiveTab] = React.useState<string>('builder');
  const [formData, setFormData] = React.useState({
    category: 'bcs-preliminary',
    subjects: ['bangla', 'english', 'math'] as string[],
    topics: {} as Record<string, string[]>,
    questionCount: 30,
    difficulty: 'mixed',
    source: 'mixed',
    duration: 30,
    correctMarks: 1,
    negativeMarks: 0.5,
    mode: 'timed',
    language: 'en',
    navigationMode: 'single',
    smartDistribution: true,
    customDistribution: {} as Record<string, number>,
  });
  const [showTopicSelector, setShowTopicSelector] = React.useState<string | null>(null);
  const [configName, setConfigName] = React.useState('');

  const selectedSubjectsData = subjects.filter((s) => formData.subjects.includes(s.id));

  const handleSubjectToggle = (subjectId: string) => {
    setFormData((prev) => {
      const newSubjects = prev.subjects.includes(subjectId)
        ? prev.subjects.filter((s) => s !== subjectId)
        : [...prev.subjects, subjectId];
      const newTopics = { ...prev.topics };
      if (!newSubjects.includes(subjectId)) {
        delete newTopics[subjectId];
      }
      return { ...prev, subjects: newSubjects, topics: newTopics };
    });
  };

  const handleTopicToggle = (subjectId: string, topic: string) => {
    setFormData((prev) => {
      const currentTopics = prev.topics[subjectId] || [];
      const newTopics = currentTopics.includes(topic)
        ? currentTopics.filter((t) => t !== topic)
        : [...currentTopics, topic];
      return { ...prev, topics: { ...prev.topics, [subjectId]: newTopics } };
    });
  };

  const handleTopicSelectAll = (subjectId: string) => {
    const subject = subjects.find((s) => s.id === subjectId);
    if (!subject) return;
    setFormData((prev) => ({
      ...prev,
      topics: { ...prev.topics, [subjectId]: [...subject.topics] },
    }));
  };

  const handleTopicClear = (subjectId: string) => {
    setFormData((prev) => ({
      ...prev,
      topics: { ...prev.topics, [subjectId]: [] },
    }));
  };

  const getSelectedTopicCount = () => {
    return Object.values(formData.topics).reduce((sum, topics) => sum + topics.length, 0);
  };

  const handleStartExam = () => {
    if (formData.subjects.length === 0) {
      alert('Please select at least one subject');
      return;
    }
    alert('Starting custom exam... (would navigate to exam interface)');
  };

  const handleSaveConfig = () => {
    if (!configName.trim()) {
      alert('Please enter a configuration name');
      return;
    }
    alert(`Configuration "${configName}" saved!`);
    setConfigName('');
  };

  return (
    <div className="min-h-screen bg-navy-50 dark:bg-navy-950">
      {/* Header */}
      <div className="bg-white dark:bg-navy-900 border-b border-navy-200 dark:border-navy-800">
        <div className="container-main py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-navy-900 dark:text-white">Create Your Own Exam</h1>
              <p className="text-navy-500 dark:text-navy-400 mt-1">
                Build custom practice exams with flexible configuration
              </p>
            </div>
            <Link href="/student/dashboard">
              <Button variant="outline" className="gap-2">
                <Target className="h-4 w-4" aria-hidden="true" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-main py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="builder">
              <Settings className="h-4 w-4 mr-2" aria-hidden="true" />
              Exam Builder
            </TabsTrigger>
            <TabsTrigger value="saved">
              <Bookmark className="h-4 w-4 mr-2" aria-hidden="true" />
              Saved Configs
            </TabsTrigger>
            <TabsTrigger value="history">
              <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
              Practice History
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {activeTab === 'builder' && (
          <ExamBuilder
            formData={formData}
            setFormData={setFormData}
            subjects={subjects}
            selectedSubjectsData={selectedSubjectsData}
            handleSubjectToggle={handleSubjectToggle}
            handleTopicToggle={handleTopicToggle}
            handleTopicSelectAll={handleTopicSelectAll}
            handleTopicClear={handleTopicClear}
            getSelectedTopicCount={getSelectedTopicCount}
            showTopicSelector={showTopicSelector}
            setShowTopicSelector={setShowTopicSelector}
            handleStartExam={handleStartExam}
            configName={configName}
            setConfigName={setConfigName}
            handleSaveConfig={handleSaveConfig}
          />
        )}

        {activeTab === 'saved' && (
          <SavedConfigs configs={savedConfigs} />
        )}

        {activeTab === 'history' && (
          <PracticeHistory />
        )}
      </div>
    </div>
  );
}

interface ExamBuilderProps {
  formData: {
    category: string;
    subjects: string[];
    topics: Record<string, string[]>;
    questionCount: number;
    difficulty: string;
    source: string;
    duration: number;
    correctMarks: number;
    negativeMarks: number;
    mode: string;
    language: string;
    navigationMode: string;
    smartDistribution: boolean;
    customDistribution: Record<string, number>;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  subjects: Array<{ id: string; name: string; category: string; topics: string[] }>;
  selectedSubjectsData: Array<{ id: string; name: string; category: string; topics: string[] }>;
  handleSubjectToggle: (subjectId: string) => void;
  handleTopicToggle: (subjectId: string, topic: string) => void;
  handleTopicSelectAll: (subjectId: string) => void;
  handleTopicClear: (subjectId: string) => void;
  getSelectedTopicCount: () => number;
  showTopicSelector: string | null;
  setShowTopicSelector: React.Dispatch<React.SetStateAction<string | null>>;
  handleStartExam: () => void;
  configName: string;
  setConfigName: React.Dispatch<React.SetStateAction<string>>;
  handleSaveConfig: () => void;
}

function ExamBuilder({
  formData,
  setFormData,
  subjects,
  selectedSubjectsData,
  handleSubjectToggle,
  handleTopicToggle,
  handleTopicSelectAll,
  handleTopicClear,
  getSelectedTopicCount,
  showTopicSelector,
  setShowTopicSelector,
  handleStartExam,
  configName,
  setConfigName,
  handleSaveConfig,
}: ExamBuilderProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Left Panel - Configuration */}
      <div className="lg:col-span-2 space-y-6">
        {/* Category & Subjects */}
        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-navy-700" aria-hidden="true" />
              Examination Category & Subjects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <SelectField
              label="Examination Category"
              options={examCategories}
              value={formData.category}
              onChange={(value) => setFormData((prev: any) => ({ ...prev, category: value, subjects: [], topics: {} }))}
              required
            />

            <div>
              <Label className="mb-3 block">Select Subjects (Multiple allowed)</Label>
              <div className="flex flex-wrap gap-2">
                {subjects
                  .filter((s) => s.category === formData.category || formData.category === 'general')
                  .map((subject) => (
                    <button
                      key={subject.id}
                      type="button"
                      onClick={() => handleSubjectToggle(subject.id)}
                      className={cn(
                        'px-3 py-2 rounded-lg text-sm font-medium border transition-all',
                        formData.subjects.includes(subject.id)
                          ? 'bg-navy-900 text-white border-navy-900'
                          : 'bg-white dark:bg-navy-800 text-navy-700 dark:text-navy-300 border-navy-200 dark:border-navy-700 hover:border-navy-300'
                      )}
                    >
                      {subject.name}
                    </button>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Topic Selection */}
        {selectedSubjectsData.length > 0 && (
          <Card className="border-navy-200 dark:border-navy-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-navy-700" aria-hidden="true" />
                Topic Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {selectedSubjectsData.map((subject) => (
                <TopicSelector
                  key={subject.id}
                  subject={subject}
                  selectedTopics={formData.topics[subject.id] || []}
                  onTopicToggle={handleTopicToggle}
                  onSelectAll={() => handleTopicSelectAll(subject.id)}
                  onClear={() => handleTopicClear(subject.id)}
                  isOpen={showTopicSelector === subject.id}
                  onToggle={() => setShowTopicSelector(showTopicSelector === subject.id ? null : subject.id)}
                />
              ))}
            </CardContent>
          </Card>
        )}

        {/* Question Configuration */}
        <Card className="border-navy-200 dark:border-navy-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-navy-700" aria-hidden="true" />
              Question Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label>Number of Questions</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {questionPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setFormData((prev: any) => ({ ...prev, questionCount: preset }))}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium border transition-all',
                        formData.questionCount === preset
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white dark:bg-navy-800 text-navy-700 dark:text-navy-300 border-navy-200 dark:border-navy-700 hover:border-navy-300'
                      )}
                    >
                      {preset}
                    </button>
                  ))}
                  <Input
                    type="number"
                    placeholder="Custom"
                    value={formData.questionCount}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, questionCount: parseInt(e.target.value) || 0 }))}
                    className="w-24"
                    min={1}
                    max={200}
                  />
                </div>
              </div>

              <SelectField
                label="Difficulty"
                options={difficulties.map((d) => ({ value: d, label: d.charAt(0).toUpperCase() + d.slice(1) }))}
                value={formData.difficulty}
                onChange={(value) => setFormData((prev: any) => ({ ...prev, difficulty: value }))}
              />

              <SelectField
                label="Question Source"
                options={sources}
                value={formData.source}
                onChange={(value) => setFormData((prev: any) => ({ ...prev, source: value }))}
              />

              <SelectField
                label="Exam Mode"
                options={modes}
                value={formData.mode}
                onChange={(value) => setFormData((prev: any) => ({ ...prev, mode: value }))}
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-5 pt-4 border-t border-navy-100 dark:border-navy-800">
              <div>
                <Label>Duration (minutes)</Label>
                <Input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, duration: parseInt(e.target.value) || 0 }))}
                  min={5}
                  max={180}
                />
              </div>
              <div>
                <Label>Correct Marks</Label>
                <Input
                  type="number"
                  step="0.25"
                  value={formData.correctMarks}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, correctMarks: parseFloat(e.target.value) || 0 }))}
                  min={0.25}
                  max={10}
                />
              </div>
              <div>
                <Label>Negative Marks</Label>
                <Input
                  type="number"
                  step="0.25"
                  value={formData.negativeMarks}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, negativeMarks: parseFloat(e.target.value) || 0 }))}
                  min={0}
                  max={5}
                />
              </div>
            </div>

            <CheckboxField
              label="Smart Balanced Distribution"
              description="Automatically distribute questions based on topic priority and syllabus weightage"
              checked={formData.smartDistribution}
              onChange={(checked) => setFormData((prev: any) => ({ ...prev, smartDistribution: checked }))}
            />
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button onClick={handleStartExam} className="gap-2 bg-green-600 hover:bg-green-700" size="lg">
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
            Start Exam Now
          </Button>
          <Button variant="outline" onClick={handleSaveConfig} className="gap-2" size="lg">
            <Save className="h-5 w-5" aria-hidden="true" />
            Save Configuration
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-5 w-5" aria-hidden="true" />
            Export Config
          </Button>
        </div>
      </div>

      {/* Right Panel - Summary */}
      <div className="space-y-6">
        <Card className="border-navy-200 dark:border-navy-800 sticky top-24">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-navy-700" aria-hidden="true" />
              Exam Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <SummaryRow label="Category" value={examCategories.find((c) => c.value === formData.category)?.label || '—'} />
            <SummaryRow label="Subjects" value={selectedSubjectsData.map((s) => s.name).join(', ') || 'None selected'} />
            <SummaryRow label="Topics Selected" value={`${getSelectedTopicCount()} topics`} />
            <SummaryRow label="Questions" value={formData.questionCount.toString()} />
            <SummaryRow label="Difficulty" value={formData.difficulty.charAt(0).toUpperCase() + formData.difficulty.slice(1)} />
            <SummaryRow label="Source" value={sources.find((s) => s.value === formData.source)?.label || '—'} />
            <SummaryRow label="Mode" value={modes.find((m) => m.value === formData.mode)?.label || '—'} />
            <SummaryRow label="Duration" value={`${formData.duration} minutes`} />
            <SummaryRow label="Marking" value={`${formData.correctMarks} / -${formData.negativeMarks}`} />

            <div className="pt-4 border-t border-navy-100 dark:border-navy-800">
              <Label htmlFor="configName">Save as</Label>
              <Input
                id="configName"
                placeholder="My Custom Exam"
                value={configName}
                onChange={(e) => setConfigName(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Topic Distribution Preview */}
        {formData.smartDistribution && selectedSubjectsData.length > 0 && (
          <Card className="border-navy-200 dark:border-navy-800 sticky top-24" style={{ top: '320px' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-navy-700" aria-hidden="true" />
                Smart Distribution Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                {selectedSubjectsData.map((subject) => {
                  const topicCount = formData.topics[subject.id]?.length || subject.topics.length;
                  const allocated = Math.round((topicCount / getSelectedTopicCount()) * formData.questionCount) || 0;
                  return (
                    <div key={subject.id} className="flex items-center justify-between p-2 rounded bg-navy-50 dark:bg-navy-800/50">
                      <span className="font-medium text-navy-900 dark:text-white">{subject.name}</span>
                      <Badge variant="secondary">{allocated} questions</Badge>
                    </div>
                  );
                })}
                <div className="pt-2 border-t border-navy-100 dark:border-navy-800 flex items-center justify-between font-medium">
                  <span>Total</span>
                  <Badge variant="primary">{formData.questionCount} questions</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function TopicSelector({
  subject,
  selectedTopics,
  onTopicToggle,
  onSelectAll,
  onClear,
  isOpen,
  onToggle,
}: {
  subject: typeof subjects[0];
  selectedTopics: string[];
  onTopicToggle: (subjectId: string, topic: string) => void;
  onSelectAll: () => void;
  onClear: () => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const allSelected = selectedTopics.length === subject.topics.length && subject.topics.length > 0;
  const someSelected = selectedTopics.length > 0 && !allSelected;

  return (
    <div className="border border-navy-200 dark:border-navy-700 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 bg-navy-50 dark:bg-navy-800/50 hover:bg-navy-100 dark:hover:bg-navy-800"
      >
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-sm">
            {selectedTopics.length} / {subject.topics.length}
          </Badge>
          <span className="font-medium text-navy-900 dark:text-white">{subject.name}</span>
        </div>
        <ChevronDown className={cn('h-5 w-5 text-navy-500 transition-transform', isOpen && 'rotate-180')} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="p-4 space-y-3 bg-white dark:bg-navy-900 border-t border-navy-200 dark:border-navy-700">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onSelectAll} disabled={allSelected}>
              <CheckCircle className="h-3 w-3 mr-1" aria-hidden="true" />
              Select All
            </Button>
            <Button variant="outline" size="sm" onClick={onClear} disabled={selectedTopics.length === 0}>
              <XCircle className="h-3 w-3 mr-1" aria-hidden="true" />
              Clear
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto">
            {subject.topics.map((topic) => (
              <label
                key={topic}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm border transition-all cursor-pointer',
                  selectedTopics.includes(topic)
                    ? 'bg-navy-900 text-white border-navy-900'
                    : 'bg-white dark:bg-navy-800 text-navy-700 dark:text-navy-300 border-navy-200 dark:border-navy-700 hover:border-navy-300'
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic)}
                  onChange={() => onTopicToggle(subject.id, topic)}
                  className="sr-only"
                />
                {topic}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-navy-500 dark:text-navy-400">{label}</span>
      <span className="font-medium text-navy-900 dark:text-white truncate max-w-[140px] text-right">{value}</span>
    </div>
  );
}

function SavedConfigs({ configs }: { configs: typeof savedConfigs }) {
  return (
    <div className="space-y-4">
      {configs.map((config, index) => (
        <Card key={index} className="border-navy-200 dark:border-navy-800">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-navy-600 dark:text-navy-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white">{config.name}</h3>
                  <p className="text-sm text-navy-500 dark:text-navy-400">
                    {examCategories.find((c) => c.value === config.category)?.label} • {config.subjects.length} subjects
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{config.questions} Q</Badge>
                <Badge variant="secondary">{config.difficulty}</Badge>
                <Badge variant="secondary">{config.source}</Badge>
                <Badge variant="secondary">{config.duration} min</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <PlayCircle className="h-3 w-3" aria-hidden="true" />
                  Start
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Settings className="h-3 w-3" aria-hidden="true" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-3 w-3" aria-hidden="true" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function PracticeHistory() {
  const history = [
    { date: '2026-11-17', config: 'BCS Daily Practice', score: 78, questions: 30, time: '28 min', mode: 'timed' },
    { date: '2026-11-16', config: 'Math Weak Topics', score: 85, questions: 20, time: '18 min', mode: 'weak-topic' },
    { date: '2026-11-15', config: 'EEE Power Systems', score: 72, questions: 40, time: '42 min', mode: 'timed' },
    { date: '2026-11-14', config: 'Custom English', score: 90, questions: 15, time: '12 min', mode: 'learning' },
    { date: '2026-11-13', config: 'BCS Daily Practice', score: 68, questions: 30, time: '25 min', mode: 'timed' },
  ];

  return (
    <div className="space-y-4">
      {history.map((item, index) => (
        <Card key={index} className="border-navy-200 dark:border-navy-800">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                  <PlayCircle className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white">{item.config}</h3>
                  <p className="text-sm text-navy-500 dark:text-navy-400">{item.date} • {item.mode}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 md:ml-auto">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{item.score}%</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Score</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-navy-900 dark:text-white">{item.questions}</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Questions</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-navy-900 dark:text-white">{item.time}</p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">Time</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

import Link from 'next/link';