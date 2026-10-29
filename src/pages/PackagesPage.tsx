import React from 'react';
import { Check, AlertCircle, Clock } from 'lucide-react';
import { mockPackages } from '../data/mockData';

interface PackagesPageProps {
  onSelectPackage?: (packageId: string) => void;
}

const deliveryTimes: Record<string, string> = {
  'PKG-001': '2–3 business days',
  'PKG-002': '4–7 business days',
  'PKG-003': 'Scoped after review',
};

export const PackagesPage: React.FC<PackagesPageProps> = ({ onSelectPackage }) => {
  const handleSelect = (packageId: string) => {
    if (onSelectPackage) {
      onSelectPackage(packageId);
    }
  };

  const handleConsultationRequest = () => {
    handleSelect('consultation');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Service Packages</h1>
        <p className="text-slate-400 text-lg">Fixed-price automation projects delivered to your specifications</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {mockPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-xl border transition-all ${
              pkg.highlighted
                ? 'bg-blue-900/40 border-blue-600 ring-2 ring-blue-600/50'
                : 'bg-slate-800 border-slate-700 hover:border-slate-600'
            } overflow-hidden flex flex-col h-full`}
          >
            {pkg.highlighted && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1">
                <p className="text-xs font-bold text-white text-center uppercase">Most Popular</p>
              </div>
            )}

            <div className={`p-6 ${pkg.highlighted ? 'pt-12' : ''} flex flex-col h-full`}>
              <h3 className="text-2xl font-bold text-slate-50 mb-2">{pkg.name}</h3>
              <p className="text-slate-400 mb-6">{pkg.description}</p>

              <div className="mb-4">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-slate-50">${pkg.price}</span>
                  {pkg.price === 900 && <span className="text-slate-400 text-lg">+</span>}
                </div>
                <p className="text-sm text-slate-400">Fixed price — one-time project</p>
              </div>

              <div className="flex items-center gap-2 mb-6 text-sm text-slate-300">
                <Clock size={16} className="text-slate-400" />
                <span>{deliveryTimes[pkg.id]}</span>
              </div>

              <div className="space-y-3 flex-1">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleSelect(pkg.id)}
                className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors mt-6 ${
                  pkg.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-50'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-900/30 border border-blue-700 rounded-xl p-6">
        <div className="flex gap-3">
          <AlertCircle size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-blue-300 mb-2">Custom Workflow Pricing</p>
            <p className="text-blue-200">
              Final scope and pricing for Custom Workflow projects depends on your specific integrations, APIs, and business logic requirements. We'll review your workflow together before quoting.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="font-bold text-slate-50 mb-4 text-lg">What's Included in Every Project</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Telegram bot setup and configuration</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> AI-powered request classification</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Admin dashboard access</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Request tracking and management</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Admin notifications via Telegram</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Deployment assistance</li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="font-bold text-slate-50 mb-4 text-lg">Support & Delivery</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Direct communication throughout delivery</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Working demo before final handoff</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Documentation and walkthrough</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> 7-day post-delivery support for bug fixes</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Source code ownership transferred to you</li>
            <li className="flex items-start gap-2"><span className="text-green-400">&#10003;</span> Optional ongoing maintenance available</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-50 mb-2">Ready to get started?</h2>
        <p className="text-slate-400 text-lg mb-6">
          Start with a Starter Bot or scope a Custom Workflow for your business.
        </p>
        <button
          type="button"
          onClick={handleConsultationRequest}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Request a Free Consultation
        </button>
        <p className="text-xs text-slate-500 mt-3">
          Demo CTA only: no form is connected in this portfolio version.
        </p>
      </div>
    </div>
  );
};
