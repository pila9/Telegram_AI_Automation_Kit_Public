import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Toast } from '../../types/index';

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none">
      {toasts.map((toast) => {
        let bgColor = 'bg-slate-800';
        let borderColor = 'border-slate-700';
        let icon = <Info size={20} className="text-blue-400" />;

        if (toast.type === 'success') {
          bgColor = 'bg-green-900';
          borderColor = 'border-green-700';
          icon = <CheckCircle size={20} className="text-green-400" />;
        } else if (toast.type === 'error') {
          bgColor = 'bg-red-900';
          borderColor = 'border-red-700';
          icon = <AlertCircle size={20} className="text-red-400" />;
        }

        return (
          <div
            key={toast.id}
            className={`flex items-center gap-3 p-4 rounded-lg border ${bgColor} ${borderColor} text-slate-50 shadow-xl animate-fade-in pointer-events-auto`}
          >
            {icon}
            <span className="flex-1 text-sm">{toast.message}</span>
            <button
              onClick={() => onRemove(toast.id)}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
