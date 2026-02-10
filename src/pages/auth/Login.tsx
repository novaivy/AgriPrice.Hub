// src/pages/auth/Login.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../pages.css';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'farmer',
    rememberMe: false
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log('Login form submitted:', formData);

    // Simulate async login (replace with real auth later)
    setTimeout(() => {
      setLoading(false);

      // ✅ Redirect based on EXISTING routes
      if (formData.role === 'dealer') {
        navigate('/agrodealer/dashboard');
      } else {
        // Temporary fallback until farmer/officer dashboards exist
        navigate('/');
      }
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="back-home">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <div className="logo">
            <i className="fas fa-tractor"></i>
            <span>Agri price</span>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-content">
            <div className="auth-card-header">
              <h1>Welcome back</h1>
              <p className="auth-subtitle">
                Log in to your Agri price account to access your dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className={`auth-form form-${formData.role}`}>
              <div className="form-group">
                <label htmlFor="role">Select Your Role *</label>
                <div className="select-wrapper">
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                  >
                    <option value="farmer">Farmer</option>
                    <option value="dealer">Agro-Dealer</option>
                    <option value="officer">Market Officer</option>
                  </select>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                  />
                  <i className="fas fa-envelope"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn-primary btn-auth ${formData.role}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Logging in...
                  </>
                ) : (
                  'Log In'
                )}
              </button>

              <div className="auth-divider">
                <span>New to Agri price?</span>
              </div>

              <Link
                to={`/signup?type=${formData.role}`}
                className={`btn btn-outline btn-auth btn-${formData.role}`}
              >
                <i className="fas fa-user-plus"></i> Create Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
