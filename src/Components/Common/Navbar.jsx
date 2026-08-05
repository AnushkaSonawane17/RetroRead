import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Remove useNavigate

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Remove: const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <span>R</span>
          </div>
          <span className="logo-text">RetroRead</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/library" className="nav-link">Library</Link>
          <Link to="/marketplace" className="nav-link">Marketplace</Link>
          <Link to="/exchange" className="nav-link">Exchange</Link>
          <Link to="/community" className="nav-link">Community</Link>
        </div>

        {/* Right Side */}
        <div className="nav-actions">
          <div className="koin-display">
            <span className="koin-icon">⭐</span>
            <span className="koin-count">2,450</span>
          </div>
          
          <div className="nav-buttons">
            <Link to="/login">
              <button className="btn-login">Sign In</button>
            </Link>
            <Link to="/register">
              <button className="btn-signup">Get Started</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/library" className="mobile-link" onClick={() => setIsOpen(false)}>Library</Link>
          <Link to="/marketplace" className="mobile-link" onClick={() => setIsOpen(false)}>Marketplace</Link>
          <Link to="/exchange" className="mobile-link" onClick={() => setIsOpen(false)}>Exchange</Link>
          <Link to="/community" className="mobile-link" onClick={() => setIsOpen(false)}>Community</Link>
          <div className="mobile-buttons">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="btn-login-mobile">Sign In</button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <button className="btn-signup-mobile">Get Started</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;