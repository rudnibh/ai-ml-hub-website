interface ChatResponse {
  response: string;
  success: boolean;
  error?: string;
}

class ChatbotService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_CHATBOT_API_URL || 'http://localhost:8000'; // Fallback for dev
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${this.baseUrl}chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        response: data.response || data.message || 'Sorry, I could not process your request.',
        success: true
      };
    } catch (error) {
      console.error('Chatbot API error:', error);
      return {
        response: "I'm currently experiencing technical difficulties. Please try again later.",
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}health`);
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
}


export const chatbotService = new ChatbotService();
