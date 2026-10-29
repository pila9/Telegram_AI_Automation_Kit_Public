import React from 'react';
import { MessageSquare, Brain, LayoutDashboard, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700 rounded-full px-4 py-2 mb-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <p className="text-sm text-blue-300 font-medium">Custom Automation Starter Kit for Client Projects</p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-50 leading-tight">
          Telegram AI<br />
          <span className="text-blue-400">Business Bot Kit</span>
        </h1>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A ready-to-customize automation template that turns Telegram messages into structured business requests — powered by AI summary, classification, and admin notifications. Built for freelancers and agencies delivering client automation projects. This demo uses Telegram-style intake. The same workflow can be adapted to WhatsApp, website chat, Instagram DM, or Facebook Messenger for real client projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            View Demo Dashboard
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => onNavigate('bot-flow')}
            className="bg-slate-700 hover:bg-slate-600 text-slate-50 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            See Bot Flow
            <MessageSquare size={20} />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-colors">
          <div className="bg-blue-900/30 border border-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <MessageSquare size={24} className="text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-50 mb-2">Telegram Intake</h3>
          <p className="text-slate-400 leading-relaxed">
            Customers send natural-language messages. The bot collects details, asks clarifying questions, and confirms the request.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-colors">
          <div className="bg-purple-900/30 border border-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Brain size={24} className="text-purple-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-50 mb-2">AI Summary & Classification</h3>
          <p className="text-slate-400 leading-relaxed">
                A configured AI provider categorizes each request, generates a summary, assigns priority, and suggests a reply.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-colors">
          <div className="bg-green-900/30 border border-green-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <LayoutDashboard size={24} className="text-green-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-50 mb-2">Dashboard & Notifications</h3>
          <p className="text-slate-400 leading-relaxed">
            Every request appears in the admin dashboard. The business owner gets a Telegram alert and the team follows up from one place.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-slate-700 rounded-xl p-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-slate-50 text-center">How the Workflow Works</h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto">
            Every client project follows the same proven pipeline — from incoming Telegram message to human follow-up.
          </p>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-slate-50 mb-1">Customer writes to the Telegram bot</h3>
                <p className="text-slate-400">
                  "Hi, I need pricing for your service and want to book a consultation."
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-slate-50 mb-1">AI generates summary & classification</h3>
                <p className="text-slate-400">
                The AI provider determines the request type, assigns a priority, and drafts a suggested reply.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-slate-50 mb-1">Request is saved to the dashboard</h3>
                <p className="text-slate-400">
                  The structured request appears in the admin panel with status, priority, AI summary, and suggested reply.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-50 mb-1">Admin receives a Telegram notification</h3>
                <p className="text-slate-400">
                  The business owner or team lead gets an alert with the full request context — no dashboard login required.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-slate-50 mb-1">Team reviews and follows up</h3>
                <p className="text-slate-400">
                  The team reviews the AI-suggested reply, customizes it if needed, updates the status, and responds to the customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-900/20 border border-amber-700/60 rounded-xl p-6">
        <p className="text-amber-200 text-center leading-relaxed">
          <span className="font-semibold text-amber-100">Demo Mode — Mock Data.</span>{' '}
            This frontend demo uses mock data. Real projects can connect Telegram Bot API, an AI provider API, Google Sheets, a backend database, and VPS deployment.
        </p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-bold text-slate-50 mb-4">Demo limitations</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
          <p>All requests, logs, AI outputs, and package selections are mock data.</p>
          <p>No Telegram, AI, backend database, Google Sheets, payment, or auth connection is active.</p>
          <p>Settings are a configuration preview; values are not saved or sent anywhere.</p>
          <p>CTA buttons show demo feedback only; no form is connected.</p>
        </div>
      </div>

      <div className="text-center space-y-6 py-8">
        <h2 className="text-3xl font-bold text-slate-50">Ready to automate your client's workflow?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore the dashboard, check out service packages, and see how this kit accelerates your next Telegram automation project.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => onNavigate('packages')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            View Packages
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className="bg-slate-700 hover:bg-slate-600 text-slate-50 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Explore Use Cases
          </button>
        </div>
      </div>
    </div>
  );
};
