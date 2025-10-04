import React from "react";
import { Link, useLocation } from "react-router-dom";
import ApiService from "../service/ApiService";
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const { isDarkTheme } = useTheme();
  const isAuth = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();
  const location = useLocation();

  const logout = () => {
    ApiService.logout();
  };

  // Check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Menu items with icons
  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: "📊", show: isAuth },
    { path: "/transaction", label: "Transactions", icon: "💳", show: isAuth },
    { path: "/category", label: "Category", icon: "📁", show: isAdmin },
    { path: "/product", label: "Product", icon: "📦", show: isAdmin },
    { path: "/supplier", label: "Supplier", icon: "🏢", show: isAdmin },
    { path: "/purchase", label: "Purchase", icon: "🛒", show: isAuth },
    { path: "/sell", label: "Sell", icon: "💰", show: isAuth },
    { path: "/profile", label: "Profile", icon: "👤", show: isAuth },
  ];

  return (
    <div className={`sidebar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">🚀</div>
          <h1 className="ims">IMS</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <ul className="nav-links">
          {menuItems.map((item) => 
            item.show && (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActiveLink(item.path) ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                  <span className="active-indicator"></span>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="sidebar-footer">
        {isAuth && (
          <div className="logout-container">
            <Link 
              onClick={logout} 
              to="/login" 
              className="logout-link"
            >
              <span className="logout-icon">🚪</span>
              <span className="logout-text">Logout</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;