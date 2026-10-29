import React from 'react';
import { BotFlowSimulator } from '../components/simulator/BotFlowSimulator';

export const BotFlowPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Bot Flow Simulator</h1>
        <p className="text-slate-400 text-lg">See how a customer message flows through the system to become a structured request. This demo uses Telegram-style intake. The same workflow can be adapted to WhatsApp, website chat, Instagram DM, or Facebook Messenger for real client projects.</p>
      </div>

      <BotFlowSimulator />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="font-bold text-slate-50 mb-2">1. Customer Interaction</h3>
          <p className="text-slate-400">
            Users send natural language messages to your Telegram bot. No special formatting required.
          </p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="font-bold text-slate-50 mb-2">2. AI Processing</h3>
          <p className="text-slate-400">
          A configured AI provider classifies, summarizes, and generates a suggested response.
          </p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="font-bold text-slate-50 mb-2">3. Team Notification</h3>
          <p className="text-slate-400">
            Your team sees the request in the dashboard and via Telegram with all context included.
          </p>
        </div>
      </div>
    </div>
  );
};
