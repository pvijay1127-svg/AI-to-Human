/**
 * AI-to-Human Text Converter Service
 *
 * Converts AI-generated text to sound more natural and human-like.
 * Complete implementation with OpenAI integration.
 */

import OpenAI from 'openai';

export interface HumanizationResult {
  success: boolean;
  humanizedText?: string;
  error?: string;
  processingTime?: number;
  mode?: string;
}

export class AItoHuman {
  private config: any;
  private openai: OpenAI;

  constructor(config?: any) {
    this.config = config || {};
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      organization: process.env.OPENAI_ORG_ID
    });
    console.log('AItoHuman service initialized');
  }

  /**
   * Main method to humanize AI-generated text
   */
  async process(data: {
    text: string;
    mode?: 'natural' | 'engaging' | 'professional';
    options?: {
      preserveFormatting?: boolean;
      enhanceReadability?: boolean;
      targetAudience?: 'general' | 'professional' | 'casual';
    }
  }): Promise<HumanizationResult> {
    const startTime = Date.now();

    try {
      const { text, mode = 'natural', options = {} } = data;

      if (!text || !text.trim()) {
        throw new Error('No input text provided');
      }

      // Check if text might be AI-generated
      const detectionResult = this.detectAIPatterns(text);

      if (detectionResult.confidence < 0.3) {
        return {
          success: true,
          humanizedText: text,
          processingTime: Date.now() - startTime,
          mode
        };
      }

      // Generate humanized version using OpenAI
      const prompt = this.buildHumanizationPrompt(text, mode, options);

      if (!this.openai) {
        throw new Error('OpenAI not configured');
      }

      if (!this.openai) {
        throw new Error('OpenAI not configured');
      }

      if (!this.openai) {
        throw new Error('OpenAI not configured');
      }

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert writer who rewrites AI-generated text to sound 100% human-written. Focus on natural flow, varied sentence structure, and authentic tone.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: Math.min(text.length * 1.5, 4000), // Adaptive length
      });

      const humanizedText = response.choices[0]?.message?.content;

      if (!humanizedText) {
        throw new Error('No response from OpenAI');
      }

      return {
        success: true,
        humanizedText: humanizedText.trim(),
        processingTime: Date.now() - startTime,
        mode
      };

    } catch (error) {
      console.error('Error in AItoHuman.process:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        processingTime: Date.now() - startTime
      };
    }
  }

  /**
   * Build the humanization prompt based on mode and options
   */
  private buildHumanizationPrompt(
    text: string,
    mode: string,
    options: any
  ): string {
    const modeInstructions = {
      natural: 'Make it sound like casual, everyday conversation. Use contractions, varied sentence lengths, and a friendly tone.',
      engaging: 'Make it captivating and interesting. Add rhetorical questions, exclamations, and emotional language where appropriate.',
      professional: 'Make it polished and business-appropriate. Use proper grammar, avoid slang, maintain formal tone while keeping it readable.'
    };

    const basePrompt = `
${modeInstructions[mode as keyof typeof modeInstructions]}

Additional requirements:
- Maintain the original meaning and key points
- Improve flow and readability
- Vary sentence structure and length
- Use natural transitions
- Remove repetitive or robotic phrasing
- Add human-like imperfections and personality

Original text:
---
${text}
---

Return only the rewritten text, maintaining the same approximate length.
    `;

    return basePrompt;
  }

  /**
   * Detect if text shows AI generation patterns
   */
  private detectAIPatterns(text: string): {
    isLikelyAI: boolean;
    confidence: number;
    patterns: string[];
  } {
    const patterns: string[] = [];
    let score = 0;

    // Check for formal/corporate language patterns
    if (/\butilize\b|\bimplement\b|\bfacilitate\b/gi.test(text)) {
      patterns.push('Corporate/formal language');
      score += 0.3;
    }

    // Check for repetitive sentence structures
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length > 0) {
      const avgLength = sentences.reduce((sum, s) => sum + s.length, 0) / sentences.length;
      if (avgLength > 120) {
        patterns.push('Long, complex sentences');
        score += 0.2;
      }
    }

    // Check for generic transitional phrases
    if (/\bin order to\b|\bdue to the fact\b|\badditionally\b/gi.test(text)) {
      patterns.push('Generic transitional phrases');
      score += 0.2;
    }

    // Check for lack of contractions (formal AI style)
    const wordCount = text.split(/\s+/).length;
    const contractionCount = (text.match(/\b(don't|can't|won't|it's|we're|they're|you're)\b/gi) || []).length;
    const contractionRatio = contractionCount / wordCount;

    if (contractionRatio < 0.02 && wordCount > 50) {
      patterns.push('Lack of contractions (formal style)');
      score += 0.2;
    }

    return {
      isLikelyAI: score > 0.4,
      confidence: Math.min(score, 1.0),
      patterns
    };
  }

  /**
   * Get humanization statistics
   */
  async getStats(originalText: string, humanizedText: string): Promise<{
    originalLength: number;
    humanizedLength: number;
    improvement: number;
    readabilityScore: number;
  }> {
    const originalLength = originalText.length;
    const humanizedLength = humanizedText.length;
    const improvement = ((humanizedLength - originalLength) / originalLength) * 100;

    // Simple readability calculation (Flesch-like)
    const sentences = humanizedText.split(/[.!?]+/).length;
    const words = humanizedText.split(/\s+/).length;
    const syllables = this.estimateSyllables(humanizedText);
    const readabilityScore = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));

    return {
      originalLength,
      humanizedLength,
      improvement: Math.round(improvement * 100) / 100,
      readabilityScore: Math.round(readabilityScore)
    };
  }

  /**
   * Estimate syllables in text (simple implementation)
   */
  private estimateSyllables(text: string): number {
    return text.toLowerCase()
      .replace(/[^a-z]/g, '')
      .replace(/[aeiouy]+/g, 'a')
      .length;
  }
}

export default AItoHuman;
