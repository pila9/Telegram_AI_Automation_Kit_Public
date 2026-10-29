import React, { useState, useEffect } from 'react';
import { X, Copy, CheckCircle2, Bell } from 'lucide-react';
import { Request, RequestStatus } from '../../types/index';

interface RequestDetailModalProps {
  request: Request | null;
  onClose: () => void;
  onStatusChange: (requestId: string, status: RequestStatus) => void;
  onNotification: (message: string) => void;
}

export const RequestDetailModal: React.FC<RequestDetailModalProps> = ({
  request,
  onClose,
  onStatusChange,
  onNotification,
}) => {
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (request) {
      setNotes(request.internalNotes);
    }
  }, [request]);

  if (!request) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(request.suggestedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStatusChange = (status: RequestStatus) => {
    onStatusChange(request.id, status);
    onNotification(`Status updated to "${status}"`);
  };

  const handleNotification = () => {
    onNotification('Admin notification sent to Telegram chat');
  };

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
        return 'text-red-400 bg-red-900/30';
      case 'Medium':
        return 'text-amber-400 bg-amber-900/30';
      case 'Low':
        return 'text-blue-400 bg-blue-900/30';
      default:
        return 'text-slate-400 bg-slate-900/30';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-40">
      <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-50">Request Details</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Request ID</p>
              <p className="text-sm font-mono text-slate-50">{request.id}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Telegram User</p>
              <p className="text-sm text-slate-50">@{request.telegramUsername}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Request Type</p>
              <p className="text-sm text-slate-50">{request.type}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Priority</p>
              <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${getPriorityColor(request.priority)}`}>
                {request.priority}
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Original Message</p>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <p className="text-sm text-slate-200 leading-relaxed">{request.originalMessage}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">AI Classification</p>
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
                <p className="text-sm text-slate-200">{request.aiClassification}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Assigned To</p>
              <p className="text-sm text-slate-50">{request.assignedTo}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase mb-2">AI Summary</p>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <p className="text-sm text-slate-200 leading-relaxed">{request.aiSummary}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Suggested Reply</p>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 relative">
              <p className="text-sm text-slate-200 leading-relaxed pr-12">{request.suggestedReply}</p>
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-slate-200"
                title="Copy suggested reply"
              >
                {copied ? <CheckCircle2 size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Internal Notes</p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal notes about this request..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-blue-500 resize-none"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Status</p>
              <select
                value={request.status}
                onChange={(e) => handleStatusChange(e.target.value as RequestStatus)}
                className={`w-full px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${getStatusColor(request.status)} bg-slate-700 focus:outline-none`}
              >
                <option value="New">New</option>
                <option value="In progress">In progress</option>
                <option value="Waiting for customer">Waiting for customer</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Created</p>
              <p className="text-sm text-slate-50 py-2">{request.createdAt.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleNotification}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Bell size={18} />
              Send Admin Notification
            </button>
            <button
              onClick={() => handleStatusChange('Resolved')}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={18} />
              Mark as Resolved
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-slate-700 hover:bg-slate-600 text-slate-50 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
