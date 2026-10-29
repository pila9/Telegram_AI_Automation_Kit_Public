import React, { useState } from 'react';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { RequestsTable } from '../components/dashboard/RequestsTable';
import { RequestDetailModal } from '../components/modals/RequestDetailModal';
import { Request, RequestStatus } from '../types/index';

interface DashboardPageProps {
  requests: Request[];
  onUpdateStatus: (requestId: string, status: RequestStatus) => void;
  onNotification: (message: string) => void;
  newRequests: number;
  activeConversations: number;
  averageResponseTime: number;
  resolvedRequests: number;
  pendingActions: number;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  requests,
  onUpdateStatus,
  onNotification,
  newRequests,
  activeConversations,
  averageResponseTime,
  resolvedRequests,
  pendingActions,
}) => {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const handleStatusChange = (requestId: string, status: RequestStatus) => {
    onUpdateStatus(requestId, status);
    setSelectedRequest(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-2">Dashboard</h1>
        <p className="text-slate-400 text-lg">Monitor incoming requests and manage your Telegram bot automation</p>
      </div>

      <DashboardStats
        newRequests={newRequests}
        activeConversations={activeConversations}
        averageResponseTime={averageResponseTime}
        resolvedRequests={resolvedRequests}
        aiSummariesGenerated={requests.length}
        pendingActions={pendingActions}
      />

      <RequestsTable
        requests={requests}
        onViewRequest={setSelectedRequest}
        onUpdateStatus={handleStatusChange}
      />

      <RequestDetailModal
        request={selectedRequest}
        onClose={() => setSelectedRequest(null)}
        onStatusChange={handleStatusChange}
        onNotification={onNotification}
      />
    </div>
  );
};
