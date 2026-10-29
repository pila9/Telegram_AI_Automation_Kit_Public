import React from 'react';
import { MessageSquare, Clock, CheckCircle, AlertCircle, Zap, Bell } from 'lucide-react';

interface StatCard {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}

interface DashboardStatsProps {
  newRequests: number;
  activeConversations: number;
  averageResponseTime: number;
  resolvedRequests: number;
  aiSummariesGenerated: number;
  pendingActions: number;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  newRequests,
  activeConversations,
  averageResponseTime,
  resolvedRequests,
  aiSummariesGenerated,
  pendingActions,
}) => {
  const stats: StatCard[] = [
    {
      icon: <MessageSquare size={24} />,
      label: 'New Requests Today',
      value: newRequests,
      color: 'text-blue-400',
    },
    {
      icon: <Clock size={24} />,
      label: 'Active Conversations',
      value: activeConversations,
      color: 'text-amber-400',
    },
    {
      icon: <AlertCircle size={24} />,
      label: 'Avg Response Time',
      value: `${averageResponseTime}h`,
      color: 'text-purple-400',
    },
    {
      icon: <CheckCircle size={24} />,
      label: 'Resolved Requests',
      value: resolvedRequests,
      color: 'text-green-400',
    },
    {
      icon: <Zap size={24} />,
      label: 'AI Summaries Generated',
      value: aiSummariesGenerated,
      color: 'text-cyan-400',
    },
    {
      icon: <Bell size={24} />,
      label: 'Pending Admin Actions',
      value: pendingActions,
      color: 'text-orange-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">{stat.label}</h3>
            <div className={stat.color}>{stat.icon}</div>
          </div>
          <p className="text-3xl font-bold text-slate-50">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};
