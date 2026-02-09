// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; 
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AgroDealerDashboard from './pages/agrodealer/AgroDealerDashboard';
import AddProduct from './pages/agrodealer/AddProduct';
import ProductCatalog from './pages/agrodealer/ProductCatalog';
import StockManagement from './pages/agrodealer/StockManagement';
import PurchaseRequests from './pages/agrodealer/PurchaseRequests';
import ShopProfile from './pages/agrodealer/ShopProfile';
import DealerInsights from './pages/agrodealer/DealerInsights';
import Notifications from './pages/agrodealer/Notifications';


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/agrodealer/dashboard" element={<AgroDealerDashboard />} />
                <Route path="/agrodealer/add-product" element={<AddProduct />} />
                <Route path="/agrodealer/products" element={<ProductCatalog />} />
                <Route path="/agrodealer/stock" element={<StockManagement />} />
                <Route path="/agrodealer/requests" element={<PurchaseRequests />} />
                <Route path="/agrodealer/profile" element={<ShopProfile />} />
                <Route path="/agrodealer/insights" element={<DealerInsights />} />
                <Route path="/agrodealer/notifications" element={<Notifications />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;