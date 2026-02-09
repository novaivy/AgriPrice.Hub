import DashboardHeader from '../shared/DashboardHeader';

import DealerStats from './components/DealerStats';
import LowStockAlert from './components/LowStockAlert';
import RecentProducts from './components/RecentProducts';
import PurchaseRequestsPreview from './components/PurchaseRequestsPreview';




export default function AgroDealerDashboard() {
  return (
    <div className="dashboard-container">
      <DashboardHeader />

      <DealerStats />

      <div className="dashboard-grid">
        <LowStockAlert />
        <PurchaseRequestsPreview />
      </div>

      <RecentProducts />
    </div>
  );
}
