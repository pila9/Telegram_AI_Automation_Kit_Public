import React, { useState } from 'react';
import { Settings as SettingsIcon, AlertCircle } from 'lucide-react';

type AIProviderOption = 'External AI' | 'ChatGPT' | 'Mock';
type StorageModeOption = 'External Database' | 'Google Sheets' | 'Mock';

interface SettingsForm {
  businessName: string;
  botToken: string;
  adminChatId: string;
  aiProvider: AIProviderOption;
  storageMode: StorageModeOption;
  customPrompt: string;
  enableNotifications: boolean;
  enableAutoSummary: boolean;
  enablePriorityDetection: boolean;
}

type ToggleField = {
  [Key in keyof SettingsForm]: SettingsForm[Key] extends boolean ? Key : never;
}[keyof SettingsForm];

interface SettingsPageProps {
  onDemoAction?: (message: string) => void;
}

const defaultSettings: SettingsForm = {
  businessName: 'My AI Automation',
  botToken: '',
  adminChatId: '',
  aiProvider: 'External AI',
  storageMode: 'Mock',
  customPrompt:
    'You are a helpful business assistant. Classify incoming requests and provide concise summaries.',
  enableNotifications: true,
  enableAutoSummary: true,
  enablePriorityDetection: true,
};

export const SettingsPage: React.FC<SettingsPageProps> = ({ onDemoAction }) => {
  const [settings, setSettings] = useState<SettingsForm>(defaultSettings);

  const handleChange = <Key extends keyof SettingsForm>(field: Key, value: SettingsForm[Key]) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggle = (field: ToggleField) => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = () => {
    onDemoAction?.('Demo settings only - values are not saved, validated, or sent to APIs.');
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    onDemoAction?.('Demo settings reset locally.');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Settings</h1>
        <p className="text-slate-400 text-lg">Configure your Telegram AI Business Bot Kit</p>
      </div>

      <div className="bg-amber-900/30 border border-amber-700 rounded-xl p-4 flex gap-3">
        <AlertCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-amber-300 font-semibold">Mock Mode Active</p>
          <p className="text-sm text-amber-400/80 mt-1">
            This dashboard uses mock data. To deploy a real bot, configure your own API credentials below.
          </p>
          <p className="text-sm text-amber-300 mt-2">
            Demo settings only: values are editable for walkthroughs, but they are not saved, validated, or sent to APIs.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-50 flex items-center gap-2">
            <SettingsIcon size={20} />
            Basic Configuration
          </h2>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Business Name</label>
            <input
              type="text"
              value={settings.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-50 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Telegram Bot Token</label>
            <input
              type="password"
              value={settings.botToken}
              onChange={(e) => handleChange('botToken', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-50 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-blue-500"
              placeholder="Get this from BotFather on Telegram"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Admin Chat ID</label>
            <input
              type="text"
              value={settings.adminChatId}
              onChange={(e) => handleChange('adminChatId', e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-50 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-blue-500"
              placeholder="Your Telegram chat ID for notifications"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">AI Provider</label>
            <select
              value={settings.aiProvider}
              onChange={(e) => handleChange('aiProvider', e.target.value as AIProviderOption)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-blue-500"
            >
              <option>External AI</option>
              <option>ChatGPT</option>
              <option>Mock</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Storage Mode</label>
            <select
              value={settings.storageMode}
              onChange={(e) => handleChange('storageMode', e.target.value as StorageModeOption)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-50 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-blue-500"
            >
              <option>External Database</option>
              <option>Google Sheets</option>
              <option>Mock</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-50">Features</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-700 rounded-lg">
              <div>
                <p className="font-semibold text-slate-50">Notifications</p>
                <p className="text-sm text-slate-400">Send Telegram alerts to admin</p>
              </div>
              <button
                onClick={() => handleToggle('enableNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.enableNotifications ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                    settings.enableNotifications ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-700 rounded-lg">
              <div>
                <p className="font-semibold text-slate-50">Auto-Summary</p>
                <p className="text-sm text-slate-400">Automatically summarize all requests</p>
              </div>
              <button
                onClick={() => handleToggle('enableAutoSummary')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.enableAutoSummary ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                    settings.enableAutoSummary ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-700 rounded-lg">
              <div>
                <p className="font-semibold text-slate-50">Priority Detection</p>
                <p className="text-sm text-slate-400">Auto-detect and set request priority</p>
              </div>
              <button
                onClick={() => handleToggle('enablePriorityDetection')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.enablePriorityDetection ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                    settings.enablePriorityDetection ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <label className="block text-sm font-semibold text-slate-300 mb-4">Custom AI Prompt</label>
        <textarea
          value={settings.customPrompt}
          onChange={(e) => handleChange('customPrompt', e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-blue-500 resize-none"
          rows={6}
        />
        <p className="text-xs text-slate-400 mt-2">
          This system prompt is used to instruct the AI on how to classify and summarize requests.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-slate-700 hover:bg-slate-600 text-slate-50 font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};
