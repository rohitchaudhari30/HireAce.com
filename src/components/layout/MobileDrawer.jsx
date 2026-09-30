import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { ThemeToggle } from '../ui/ThemeToggle';

export function MobileDrawer({ isOpen, onClose, onOpenDownload }) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownloadClick = () => {
    onClose();
    onOpenDownload();
  };

  return (
    <div
      id="mobile-nav-drawer"
      className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
      aria-hidden={!isOpen}
    >
      <div className="mobile-drawer-content">
        <ul className="mobile-drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="mobile-drawer-link" onClick={onClose}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Theme Toggle Control */}
        <div className="mobile-theme-row">
          <span className="mobile-theme-label">Appearance</span>
          <ThemeToggle
            id="mobile-theme-toggle-btn"
            className="theme-toggle-btn mobile-theme-btn"
            showLabel={true}
          />
        </div>

        <div className="mobile-drawer-actions">
          <button
            type="button"
            className="btn btn-primary btn-lg mobile-drawer-btn"
            onClick={handleDownloadClick}
          >
            <Download size={18} />
            <span>Download for Windows</span>
          </button>
        </div>
      </div>
    </div>
  );
}
