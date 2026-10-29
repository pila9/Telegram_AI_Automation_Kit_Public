import { useState, useCallback } from 'react';
import { Request, RequestStatus } from '../types/index';
import { mockRequests } from '../data/mockData';

export const useRequests = () => {
  const [requests, setRequests] = useState<Request[]>(mockRequests);

  const updateRequestStatus = useCallback((requestId: string, newStatus: RequestStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === requestId
          ? { ...req, status: newStatus, updatedAt: new Date() }
          : req
      )
    );
  }, []);

  const updateRequestAssignee = useCallback((requestId: string, assignee: string) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === requestId
          ? { ...req, assignedTo: assignee, updatedAt: new Date() }
          : req
      )
    );
  }, []);

  const updateRequestNotes = useCallback((requestId: string, notes: string) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === requestId
          ? { ...req, internalNotes: notes, updatedAt: new Date() }
          : req
      )
    );
  }, []);

  const getNewRequestsCount = useCallback(() => {
    return requests.filter((req) => req.status === 'New').length;
  }, [requests]);

  const getActiveConversationsCount = useCallback(() => {
    return requests.filter((req) => req.status === 'In progress' || req.status === 'Waiting for customer').length;
  }, [requests]);

  const getResolvedRequestsCount = useCallback(() => {
    return requests.filter((req) => req.status === 'Resolved').length;
  }, [requests]);

  const getAverageResponseTime = useCallback(() => {
    // Mock calculation: average hours to resolution
    const resolved = requests.filter((req) => req.status === 'Resolved');
    if (resolved.length === 0) return 0;

    const totalHours = resolved.reduce((sum, req) => {
      const hours = (req.updatedAt.getTime() - req.createdAt.getTime()) / (1000 * 60 * 60);
      return sum + hours;
    }, 0);

    return Math.round(totalHours / resolved.length);
  }, [requests]);

  const getPendingActionsCount = useCallback(() => {
    return requests.filter((req) => req.status === 'New' || req.status === 'Waiting for customer').length;
  }, [requests]);

  return {
    requests,
    updateRequestStatus,
    updateRequestAssignee,
    updateRequestNotes,
    getNewRequestsCount,
    getActiveConversationsCount,
    getResolvedRequestsCount,
    getAverageResponseTime,
    getPendingActionsCount,
  };
};
