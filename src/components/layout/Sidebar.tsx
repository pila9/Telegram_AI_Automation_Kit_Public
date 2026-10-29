import React from 'react';
import { LayoutDashboard, MessageSquare, Settings, Package, FileText, BookOpen, Zap, Home } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'bot-flow', label: 'Bot Flow', icon: MessageSquare },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'portfolio', label: 'Use Cases', icon: BookOpen },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'logs', label: 'Logs', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-50 flex flex-col h-screen border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <h1 className="text-sm font-bold leading-tight">Telegram AI<br />Business Bot Kit</h1>
        </div>
        <p className="text-xs text-amber-400/80 mt-2">Demo Mode — Mock Data</p>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <p className="text-xs text-slate-400 text-center">
          Built for custom<br />
          business automation
        </p>
      </div>
    </div>
  );
};
