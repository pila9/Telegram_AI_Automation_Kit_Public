import React from 'react';
import { MessageSquare, Brain, Database, Bell, LayoutDashboard, Users, ArrowRight } from 'lucide-react';

interface FlowStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AutomationFlowDiagram: React.FC = () => {
  const steps: FlowStep[] = [
    {
      icon: <MessageSquare size={32} />,
      title: 'Telegram Message',
      description: 'Customer sends message to bot',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Classification',
    description: 'AI provider analyzes and categorizes',
    },
    {
      icon: <Database size={32} />,
      title: 'Data Storage',
      description: 'Saved to backend, sheet, or mock storage',
    },
    {
      icon: <Bell size={32} />,
      title: 'Admin Notification',
      description: 'Team notified via Telegram',
    },
    {
      icon: <LayoutDashboard size={32} />,
      title: 'Dashboard Update',
      description: 'Request visible in admin panel',
    },
    {
      icon: <Users size={32} />,
      title: 'Human Follow-up',
      description: 'Team manages and responds',
    },
  ];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-slate-50 mb-10">Automation Flow</h2>

      <div className="hidden lg:grid lg:grid-cols-6 gap-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 h-full flex flex-col items-center justify-center text-center">
              <div className="text-blue-400 mb-3">{step.icon}</div>
              <h3 className="font-semibold text-slate-50 text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-slate-600">
                <ArrowRight size={24} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="lg:hidden space-y-4">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 flex-shrink-0">{step.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-50 text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-400">{step.description}</p>
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center py-2 text-slate-600">
                <ArrowRight size={20} className="rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-slate-700">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
            <p className="text-sm text-blue-300">
              <span className="font-semibold">Easy integration:</span> Connect to any Telegram bot and AI provider
            </p>
          </div>
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
            <p className="text-sm text-green-300">
              <span className="font-semibold">Real-time updates:</span> Instant notifications and dashboard sync
            </p>
          </div>
          <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
            <p className="text-sm text-purple-300">
              <span className="font-semibold">Fully customizable:</span> Adapt workflow to your business needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
