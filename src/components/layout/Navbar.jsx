import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollNavbar } from '../../hooks/useScrollNavbar';

export function Navbar({ isMobileMenuOpen, onToggleMobileMenu, onOpenDownload }) {
  const isScrolled = useScrollNavbar(30);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Accessible Skip-to-content Link */}
      <a href="#features" className="skip-to-content">
        Skip to main content
      </a>

      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="nav-brand" aria-label="HireAce Homepage">
          <div className="brand-icon">
            <Zap size={20} />
          </div>
          <span className="brand-name">HireAce</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <ThemeToggle id="theme-toggle-btn" />

          <a href="#pricing" className="btn btn-secondary nav-signin-btn">
            Sign In
          </a>

          <button
            type="button"
            className="btn btn-primary nav-download-btn"
            onClick={onOpenDownload}
          >
            <span>Download</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            id="mobile-menu-toggle"
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={onToggleMobileMenu}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>
    </header>
  );
}
