import React from 'react';
import { AutomationFlowDiagram } from '../components/automation/AutomationFlowDiagram';

export const AutomationPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Automation Flow</h1>
        <p className="text-slate-400 text-lg">Understanding how requests move from Telegram to your team</p>
      </div>

      <AutomationFlowDiagram />

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-lg font-bold text-slate-50 mb-4">How It Works</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              1
            </div>
            <div>
              <h3 className="font-semibold text-slate-50 mb-1">Customer sends message</h3>
              <p className="text-slate-400">
                A customer writes to your Telegram bot with a question, request, or order.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              2
            </div>
            <div>
              <h3 className="font-semibold text-slate-50 mb-1">AI classifies and summarizes</h3>
              <p className="text-slate-400">
                The message is processed by the configured AI provider to determine type, priority, and generate a summary.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              3
            </div>
            <div>
              <h3 className="font-semibold text-slate-50 mb-1">Data is stored</h3>
              <p className="text-slate-400">
                Request is saved to your storage system (backend database, Google Sheets, or local mock).
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              4
            </div>
            <div>
              <h3 className="font-semibold text-slate-50 mb-1">Admin gets notified</h3>
              <p className="text-slate-400">
                Your team receives a Telegram notification with the full request details.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              5
            </div>
            <div>
              <h3 className="font-semibold text-slate-50 mb-1">Dashboard shows request</h3>
              <p className="text-slate-400">
                Request appears in the admin dashboard with status, priority, and suggested reply.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
              6
            </div>
            <div>
              <h3 className="font-semibold text-slate-50 mb-1">Team responds</h3>
              <p className="text-slate-400">
                Your team reviews, customizes the suggested reply, and sends it back to the customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
