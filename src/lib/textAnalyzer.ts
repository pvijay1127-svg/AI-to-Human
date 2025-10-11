/**
 * Text Analysis Service
 *
 * Analyzes text to detect AI patterns and measure human-likeness
 */

export interface TextAnalysisResult {
  isLikelyAI: boolean;
  confidence: number;
  patterns: string[];
  humanScore: number;
  suggestions: string[];
}

export class TextAnalyzer {
  /**
   * Analyze text for AI generation patterns
   */
  analyzeText(text: string): TextAnalysisResult {
    const patterns: string[] = [];
    let score = 0;
    const suggestions: string[] = [];

    if (!text || text.trim().length === 0) {
      return {
        isLikelyAI: false,
        confidence: 0,
        patterns: [],
        humanScore: 100,
        suggestions: []
      };
    }

    // Pattern 1: Formal corporate language
    const formalWords = /\b(utilize|implement|facilitate|leverage|optimize|maximize)\b/gi;
    const formalMatches = text.match(formalWords);
    if (formalMatches) {
      patterns.push('Corporate/formal language patterns');
      score += 0.3;
      suggestions.push('Replace formal words with conversational alternatives');
    }

    // Pattern 2: Repetitive sentence structures
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
    if (sentences.length > 0) {
      const lengths = sentences.map(s => s.length);
      const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
      const variance = lengths.reduce((acc, len) => acc + Math.pow(len - avgLength, 2), 0) / lengths.length;

      if (variance < 50) { // Low variance indicates repetitive structure
        patterns.push('Repetitive sentence structures');
        score += 0.25;
        suggestions.push('Vary sentence length and structure');
      }
    }

    // Pattern 3: Lack of contractions
    const wordCount = text.split(/\s+/).length;
    const contractions = /\b(don't|can't|won't|it's|we're|they're|you're|I'm|I'll|we'll|they'll)\b/gi;
    const contractionMatches = text.match(contractions) || [];
    const contractionRatio = contractionMatches.length / wordCount;

    if (contractionRatio < 0.02 && wordCount > 30) {
      patterns.push('Lack of contractions (formal style)');
      score += 0.2;
      suggestions.push('Use contractions to sound more conversational');
    }

    // Pattern 4: Generic transitional phrases
    const genericTransitions = /\b(in order to|due to the fact|additionally|furthermore|moreover|consequently)\b/gi;
    if (genericTransitions.test(text)) {
      patterns.push('Generic transitional phrases');
      score += 0.15;
      suggestions.push('Use more natural transitions and connecting words');
    }

    // Pattern 5: Overly complex vocabulary
    const complexWords = /\b(ascertain|endeavor|facilitate|implement|utilize|paradigm|synergy)\b/gi;
    if (complexWords.test(text)) {
      patterns.push('Complex or uncommon vocabulary');
      score += 0.2;
      suggestions.push('Use simpler, more common words');
    }

    // Calculate human score (inverse of AI score)
    const humanScore = Math.max(0, 100 - (score * 100));

    return {
      isLikelyAI: score > 0.4,
      confidence: Math.min(score, 1.0),
      patterns,
      humanScore: Math.round(humanScore),
      suggestions
    };
  }

  /**
   * Calculate readability metrics
   */
  calculateReadability(text: string): {
    fleschScore: number;
    gradeLevel: number;
    wordCount: number;
    sentenceCount: number;
    avgWordsPerSentence: number;
  } {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const totalSyllables = this.estimateSyllables(text);

    const avgSentenceLength = words.length / sentences.length;
    const avgSyllablesPerWord = totalSyllables / words.length;

    // Flesch Reading Ease Score
    const fleschScore = 206.835 - (1.015 * avgSentenceLength) - (84.6 * avgSyllablesPerWord);

    // Flesch-Kincaid Grade Level
    const gradeLevel = (0.39 * avgSentenceLength) + (11.8 * avgSyllablesPerWord) - 15.59;

    return {
      fleschScore: Math.round(fleschScore),
      gradeLevel: Math.round(gradeLevel * 10) / 10,
      wordCount: words.length,
      sentenceCount: sentences.length,
      avgWordsPerSentence: Math.round(avgSentenceLength * 10) / 10
    };
  }

  /**
   * Estimate syllables in text
   */
  private estimateSyllables(text: string): number {
    const cleanText = text.toLowerCase().replace(/[^a-z]/g, '');

    // Simple syllable estimation
    const vowelGroups = cleanText.match(/[aeiouy]+/g) || [];
    let syllables = 0;

    vowelGroups.forEach(group => {
      syllables += group.length;

      // Subtract silent e's
      if (group.endsWith('e')) syllables--;

      // Handle special cases
      if (group.includes('ea') || group.includes('ou') || group.includes('oi')) {
        syllables++;
      }
    });

    return Math.max(syllables, cleanText.length / 3); // Fallback estimation
  }
}

export default TextAnalyzer;
