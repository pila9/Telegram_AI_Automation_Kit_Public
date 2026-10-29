export type RequestType = 'Lead intake' | 'Product inquiry' | 'Support question' | 'Booking request' | 'Internal task';
export type RequestStatus = 'New' | 'In progress' | 'Waiting for customer' | 'Resolved';
export type Priority = 'Low' | 'Medium' | 'High';
export type AIProvider = 'External AI' | 'ChatGPT' | 'Mock';
export type StorageMode = 'Google Sheets' | 'External Database' | 'Mock';

export interface Request {
  id: string;
  telegramUsername: string;
  telegramUserId: string;
  originalMessage: string;
  type: RequestType;
  priority: Priority;
  status: RequestStatus;
  createdAt: Date;
  updatedAt: Date;
  assignedTo: string;
  aiSummary: string;
  aiClassification: string;
  suggestedReply: string;
  internalNotes: string;
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  eventType: 'message_received' | 'ai_summary_generated' | 'request_saved' | 'notification_sent' | 'status_updated';
  requestId: string;
  message: string;
}

export interface BotMessage {
  id: string;
  role: 'customer' | 'bot';
  message: string;
  timestamp: Date;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface Settings {
  businessName: string;
  telegramBotToken: string;
  adminChatId: string;
  aiProvider: AIProvider;
  storageMode: StorageMode;
  customPrompt: string;
  enableNotifications: boolean;
  enableAutoSummary: boolean;
  enablePriorityDetection: boolean;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  icon: string;
  exampleMessage: string;
  exampleResponse: string;
}
