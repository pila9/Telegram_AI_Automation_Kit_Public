import React, { useState } from 'react';
import { mockLogs } from '../data/mockData';

export const LogsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredLogs = filter === 'all' ? mockLogs : mockLogs.filter((log) => log.eventType === filter);

  const getEventColor = (eventType: string) => {
    switch (eventType) {
      case 'message_received':
        return 'bg-blue-900/30 text-blue-300 border-blue-700';
      case 'ai_summary_generated':
        return 'bg-purple-900/30 text-purple-300 border-purple-700';
      case 'request_saved':
        return 'bg-green-900/30 text-green-300 border-green-700';
      case 'notification_sent':
        return 'bg-cyan-900/30 text-cyan-300 border-cyan-700';
      case 'status_updated':
        return 'bg-amber-900/30 text-amber-300 border-amber-700';
      default:
        return 'bg-slate-900/30 text-slate-300 border-slate-700';
    }
  };

  const getEventLabel = (eventType: string) => {
    switch (eventType) {
      case 'message_received':
        return 'Message Received';
      case 'ai_summary_generated':
        return 'AI Summary Generated';
      case 'request_saved':
        return 'Request Saved';
      case 'notification_sent':
        return 'Notification Sent';
      case 'status_updated':
        return 'Status Updated';
      default:
        return eventType;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-2">System Logs</h1>
        <p className="text-slate-400 text-lg">Monitor all Telegram bot and automation events</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => setFilter('message_received')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'message_received'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Messages
        </button>
        <button
          onClick={() => setFilter('ai_summary_generated')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'ai_summary_generated'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          AI Summaries
        </button>
        <button
          onClick={() => setFilter('notification_sent')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'notification_sent'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setFilter('status_updated')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'status_updated'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Status Updates
        </button>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <div className="divide-y divide-slate-700">
          {filteredLogs.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-400">No events found for this filter</p>
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div key={log.id} className="p-4 hover:bg-slate-700/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getEventColor(log.eventType)}`}>
                      {getEventLabel(log.eventType)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-200 mb-1">{log.message}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>Request: {log.requestId}</span>
                      <span>{formatDate(log.timestamp)}</span>
                      <span>{formatTime(log.timestamp)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="font-bold text-slate-50 mb-4">Log Statistics</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-400 mb-1">Total Events</p>
            <p className="text-3xl font-bold text-slate-50">{filteredLogs.length}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Messages Today</p>
            <p className="text-3xl font-bold text-slate-50">{filteredLogs.filter((l) => l.eventType === 'message_received').length}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400 mb-1">Notifications Sent</p>
            <p className="text-3xl font-bold text-slate-50">{filteredLogs.filter((l) => l.eventType === 'notification_sent').length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
