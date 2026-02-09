// src/pages/Signup.tsx - Simplified signup form with role highlighting
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './pages.css';

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'officer' | 'dealer' | 'farmer'>('farmer');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordStrength, setPasswordStrength] = useState('weak');
  const [loading, setLoading] = useState(false);

  // Get user type from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    
    if (type === 'dealer' || type === 'farmer' || type === 'officer') {
      setUserType(type);
    } else {
      setUserType('farmer');
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Password strength calculation
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    if (strength <= 2) setPasswordStrength('weak');
    else if (strength <= 4) setPasswordStrength('good');
    else setPasswordStrength('strong');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Registration data:', formData);
      
      // Redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
              <div className="user-type-indicator">
                <span className={`type-badge ${userType}`}>
                  <i className={`fas ${
                    userType === 'officer' ? 'fa-user-tie' :
                    userType === 'dealer' ? 'fa-store' : 'fa-seedling'
                  }`}></i>
                  {userType === 'officer' ? 'Market Officer' :
                   userType === 'dealer' ? 'Agro-Dealer' : 'Farmer'}
                </span>
              </div>
              <h1>Create your account</h1>
              <p className="auth-subtitle">
                {userType === 'officer' 
                  ? 'Join as a certified market officer to help farmers and dealers thrive.'
                  : userType === 'dealer'
                  ? 'Join as an agro-dealer to connect with farmers and expand your business.'
                  : 'Join as a farmer to sell your produce directly to verified markets.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className={`auth-form form-${userType}`}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. Johnathan Smith"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-envelope"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Create Password *</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-lock"></i>
                </div>
                
                <div className="password-strength">
                  <div className="strength-indicator">
                    <div className={`strength-bar ${passwordStrength}`}></div>
                  </div>
                  <div className="strength-text-wrapper">
                    <span className="strength-text">Strength: </span>
                    <span className={`strength-value ${passwordStrength}`}>
                      {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="password-requirements">
                  <p><i className="fas fa-check"></i> At least 8 characters</p>
                  <p><i className="fas fa-check"></i> Include uppercase & lowercase letters</p>
                  <p><i className="fas fa-check"></i> Include at least one number</p>
                  <p><i className="fas fa-check"></i> Include a symbol (e.g., ! @ # $ %)</p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <div className="password-input-wrapper">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary btn-auth ${userType}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Creating Account...
                  </>
                ) : (
                  `Create ${userType === 'officer' ? 'Officer' : 
                            userType === 'dealer' ? 'Dealer' : 'Farmer'} Account`
                )}
              </button>

              <div className="auth-footer">
                <p>
                  Already have an account? <Link to="/login">Log In</Link>
                </p>
                <div className="switch-role">
                  <p>Want to join as a different role?</p>
                  <div className="role-links">
                    <Link to="/signup?type=officer">Market Officer</Link>
                    <Link to="/signup?type=dealer">Agro-Dealer</Link>
                    <Link to="/signup?type=farmer">Farmer</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}