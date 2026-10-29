import React from 'react';
import { TrendingUp, Package, Headphones, Calendar, Users, Zap } from 'lucide-react';
import { mockCaseStudies } from '../data/mockData';

const iconMap: { [key: string]: React.ReactNode } = {
  TrendingUp: <TrendingUp size={32} />,
  Package: <Package size={32} />,
  Headphones: <Headphones size={32} />,
  Calendar: <Calendar size={32} />,
  Users: <Users size={32} />,
  Zap: <Zap size={32} />,
};

interface PortfolioPageProps {
  onDemoAction?: (message: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onDemoAction }) => {
  const handleDemoCta = (label: string) => {
    onDemoAction?.(`${label}. Demo CTA only; no form is connected.`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Use Cases & Workflows</h1>
        <p className="text-slate-400 text-lg">
          See how Telegram AI Business Bot Kit can be adapted for your specific business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCaseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors group flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                {iconMap[study.icon]}
              </div>

              <h3 className="text-lg font-bold text-slate-50 mb-2">{study.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{study.description}</p>

              <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 space-y-3 mb-6">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Customer Message</p>
                  <p className="text-sm text-slate-200 italic">"{study.exampleMessage}"</p>
                </div>
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Bot Response</p>
                  <p className="text-sm text-slate-200 italic">{study.exampleResponse}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleDemoCta(`${study.title} use case selected`)}
              className="w-full bg-slate-700 hover:bg-slate-600 text-slate-50 font-medium py-2 px-4 rounded-lg transition-colors text-sm mt-auto"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-slate-50 mb-4">Customization & Integration</h2>
        <p className="text-slate-300 mb-6">
          Each use case can be customized with:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-slate-50 text-sm">Custom AI Prompts</p>
              <p className="text-xs text-slate-400">Train the AI for your specific business rules</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-slate-50 text-sm">API Integrations</p>
              <p className="text-xs text-slate-400">Connect to CRM, inventory, payment systems</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-slate-50 text-sm">Multi-language Support</p>
              <p className="text-xs text-slate-400">Serve customers in their native language</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-slate-50 text-sm">Workflow Automation</p>
              <p className="text-xs text-slate-400">Auto-assign, escalate, and route requests</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-slate-50 mb-6">Success Metrics</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">85%</p>
            <p className="text-sm text-slate-400">Faster Response Time</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">60%</p>
            <p className="text-sm text-slate-400">Reduction in Manual Work</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-400 mb-2">99.9%</p>
            <p className="text-sm text-slate-400">Uptime Guarantee</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-400 mb-2">24/7</p>
            <p className="text-sm text-slate-400">Automated Availability</p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-slate-300 max-w-2xl mx-auto">
          Don't see your use case? Our Custom Workflow package can handle virtually any business automation challenge.
        </p>
        <button
          type="button"
          onClick={() => handleDemoCta('Custom solution request selected')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Request Custom Solution
        </button>
        <p className="text-xs text-slate-500">
          Demo CTA only: no form is connected in this portfolio version.
        </p>
      </div>
    </div>
  );
};
