import React, { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: number;
  role: 'customer' | 'bot';
  text: string;
}

const scriptedMessages: Message[] = [
  { id: 1, role: 'customer', text: 'Hi, I need pricing for your AI automation service and want to book a consultation.' },
  { id: 2, role: 'bot', text: 'Thanks for reaching out! What type of service are you interested in?' },
  { id: 3, role: 'customer', text: 'AI automation for incoming leads.' },
  { id: 4, role: 'bot', text: 'Perfect! I\'ve collected your request and sent it to the team.' },
];

export const BotFlowSimulator: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    setMessages([]);
    setShowOutput(false);

    const timeoutIds: number[] = [];

    scriptedMessages.forEach((msg, index) => {
      const messageTimeoutId = window.setTimeout(() => {
        setMessages((prev) => {
          if (prev.some((existingMsg) => existingMsg.id === msg.id)) {
            return prev;
          }

          return [...prev, msg];
        });

        if (index === scriptedMessages.length - 1) {
          const outputTimeoutId = window.setTimeout(() => setShowOutput(true), 500);
          timeoutIds.push(outputTimeoutId);
        }
      }, index * 800);

      timeoutIds.push(messageTimeoutId);
    });

    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col h-96">
        <div className="bg-slate-900 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
          <MessageCircle size={20} className="text-blue-400" />
          <h3 className="font-semibold text-slate-50">Telegram Conversation</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-xs lg:max-w-sm rounded-lg px-4 py-2 text-sm ${
                  msg.role === 'customer'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-50'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 p-4 bg-slate-900">
          <div className="flex gap-2 opacity-60">
            <input
              type="text"
              placeholder="Try typing something..."
              disabled
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-400 placeholder-slate-600"
            />
            <button disabled className="bg-blue-600/50 p-2 rounded-lg">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {showOutput && (
        <div className="animate-fade-in space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="font-bold text-slate-50 mb-4">Generated Output</h3>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Request Type</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2">
                  <span className="text-sm text-blue-300">Lead intake</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Priority</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2">
                  <span className="text-sm text-amber-300 font-medium">Medium</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase mb-2">AI Summary</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Customer inquires about AI automation pricing and wants to schedule a consultation for lead intake. Interested in service overview and booking availability.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Suggested Reply</p>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Thanks for the interest! Our lead intake automation starts at $300. Let's schedule a quick call to understand your workflow. Available next week?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-800 rounded-xl p-4">
            <p className="text-sm text-green-300">
              ✓ Request saved • Notification sent • Dashboard updated
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
