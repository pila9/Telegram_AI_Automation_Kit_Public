import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { ToastContainer } from './components/layout/ToastContainer';
import { useRequests } from './hooks/useRequests';
import { useToast } from './hooks/useToast';
import { mockPackages } from './data/mockData';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { BotFlowPage } from './pages/BotFlowPage';
import { AutomationPage } from './pages/AutomationPage';
import { SettingsPage } from './pages/SettingsPage';
import { PackagesPage } from './pages/PackagesPage';
import { LogsPage } from './pages/LogsPage';
import { PortfolioPage } from './pages/PortfolioPage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('landing');
  const {
    requests,
    updateRequestStatus,
    getNewRequestsCount,
    getActiveConversationsCount,
    getResolvedRequestsCount,
    getAverageResponseTime,
    getPendingActionsCount,
  } = useRequests();
  const { toasts, removeToast, success, info } = useToast();

  const handleNotification = (message: string) => {
    success(message);
  };

  const handleSelectPackage = (packageId: string) => {
    const selectedPackage = mockPackages.find((pkg) => pkg.id === packageId);
    const label = selectedPackage ? `${selectedPackage.name} selected` : 'Demo lead action selected';

    info(`${label}. Demo CTA only; no form is connected.`);
  };

  const handleDemoAction = (message: string) => {
    info(message);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return (
          <DashboardPage
            requests={requests}
            onUpdateStatus={updateRequestStatus}
            onNotification={handleNotification}
            newRequests={getNewRequestsCount()}
            activeConversations={getActiveConversationsCount()}
            averageResponseTime={getAverageResponseTime()}
            resolvedRequests={getResolvedRequestsCount()}
            pendingActions={getPendingActionsCount()}
          />
        );
      case 'bot-flow':
        return <BotFlowPage />;
      case 'automation':
        return <AutomationPage />;
      case 'settings':
        return <SettingsPage onDemoAction={handleDemoAction} />;
      case 'packages':
        return <PackagesPage onSelectPackage={handleSelectPackage} />;
      case 'logs':
        return <LogsPage />;
      case 'portfolio':
        return <PortfolioPage onDemoAction={handleDemoAction} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}

export default App;
