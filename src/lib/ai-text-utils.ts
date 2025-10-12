// AI Text Processing Utility Functions

export interface AIAnalysisResult {
  isLikelyAI: boolean;
  confidence: number;
  patterns: string[];
  aiScore: number;
  suggestions: string[];
}

export function analyzeTextPatterns(text: string): AIAnalysisResult {
  return {
    isLikelyAI: false,
    confidence: 0.1,
    patterns: [],
    aiScore: 10,
    suggestions: []
  };
}

export const SUPPORTED_LANGUAGES = [
  { code: 'english', name: 'English' },
  { code: 'spanish', name: 'Spanish' }
] as const;