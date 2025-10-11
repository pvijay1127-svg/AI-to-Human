/**
 * API Client for AI-to-Human Service
 *
 * Handles communication with external AI services
 */

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  processingTime?: number;
}

export class APIClient {
  private baseURL: string;
  private apiKey?: string;

  constructor(baseURL?: string, apiKey?: string) {
    this.baseURL = baseURL || process.env.OPENAI_API_BASE || 'https://api.openai.com/v1';
    this.apiKey = apiKey || process.env.OPENAI_API_KEY;
  }

  /**
   * Make a request to the AI service
   */
  async makeRequest(endpoint: string, data: any): Promise<APIResponse> {
    const startTime = Date.now();

    try {
      if (!this.apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      return {
        success: true,
        data: result,
        processingTime: Date.now() - startTime
      };

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        processingTime: Date.now() - startTime
      };
    }
  }

  /**
   * Health check for the API
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.makeRequest('/models', {
        limit: 1
      });

      return response.success;
    } catch {
      return false;
    }
  }
}

export default APIClient;
