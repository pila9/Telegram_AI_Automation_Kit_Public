import React, { useState } from 'react';
import { Eye, Play, CheckCircle2 } from 'lucide-react';
import { Request, RequestStatus } from '../../types/index';

interface RequestsTableProps {
  requests: Request[];
  onViewRequest: (request: Request) => void;
  onUpdateStatus: (requestId: string, status: RequestStatus) => void;
}

export const RequestsTable: React.FC<RequestsTableProps> = ({ requests, onViewRequest, onUpdateStatus }) => {
  const [sortBy, setSortBy] = useState<'created' | 'priority'>('created');

  const sortedRequests = [...requests].sort((a, b) => {
    if (sortBy === 'created') {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
    const priorityOrder = { High: 0, Medium: 1, Low: 2 };
    return priorityOrder[a.priority as 'High' | 'Medium' | 'Low'] - priorityOrder[b.priority as 'High' | 'Medium' | 'Low'];
  });

  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case 'New':
        return 'bg-blue-900 text-blue-200 border-blue-700';
      case 'In progress':
        return 'bg-amber-900 text-amber-200 border-amber-700';
      case 'Waiting for customer':
        return 'bg-purple-900 text-purple-200 border-purple-700';
      case 'Resolved':
        return 'bg-green-900 text-green-200 border-green-700';
      default:
        return 'bg-slate-700 text-slate-200 border-slate-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-900 text-red-200 border-red-700';
      case 'Medium':
        return 'bg-amber-900 text-amber-200 border-amber-700';
      case 'Low':
        return 'bg-blue-900 text-blue-200 border-blue-700';
      default:
        return 'bg-slate-700 text-slate-200 border-slate-600';
    }
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Lead intake': 'text-blue-300',
      'Product inquiry': 'text-cyan-300',
      'Support question': 'text-orange-300',
      'Booking request': 'text-green-300',
      'Internal task': 'text-purple-300',
    };
    return colors[type] || 'text-slate-300';
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-50">Requests</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('created')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                sortBy === 'created'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Newest
            </button>
            <button
              onClick={() => setSortBy('priority')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                sortBy === 'priority'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Priority
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-700/50">
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">ID</th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">User</th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Type</th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">AI Summary</th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Priority</th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Created</th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {sortedRequests.map((request) => (
              <tr key={request.id} className="hover:bg-slate-700/50 transition-colors">
                <td className="px-5 py-4 font-mono text-slate-300">{request.id}</td>
                <td className="px-5 py-4 text-slate-300">@{request.telegramUsername}</td>
                <td className="px-5 py-4">
                  <span className={getTypeColor(request.type)}>{request.type}</span>
                </td>
                <td className="px-5 py-4 text-slate-400 max-w-xs truncate">{request.aiSummary}</td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded border text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                    {request.priority}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 rounded border text-xs font-semibold ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-400">{formatDate(request.createdAt)}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onViewRequest(request)}
                      className="p-1.5 hover:bg-slate-600 rounded transition-colors text-slate-400 hover:text-slate-200"
                      title="View details"
                    >
                      <Eye size={18} />
                    </button>
                    {request.status !== 'In progress' && request.status !== 'Resolved' && (
                      <button
                        onClick={() => onUpdateStatus(request.id, 'In progress')}
                        className="p-1.5 hover:bg-slate-600 rounded transition-colors text-slate-400 hover:text-amber-400"
                        title="Mark in progress"
                      >
                        <Play size={18} />
                      </button>
                    )}
                    {request.status !== 'Resolved' && (
                      <button
                        onClick={() => onUpdateStatus(request.id, 'Resolved')}
                        className="p-1.5 hover:bg-slate-600 rounded transition-colors text-slate-400 hover:text-green-400"
                        title="Mark resolved"
                      >
                        <CheckCircle2 size={18} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
