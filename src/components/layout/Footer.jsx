import React from 'react';
import { Zap } from 'lucide-react';
import { FOOTER_SECTIONS } from '../../data/navigation';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div className="nav-brand">
              <div className="brand-icon">
                <Zap size={18} />
              </div>
              <span className="brand-name">HireAce</span>
            </div>
            <p>
              High-performance real-time AI interview intelligence for ambitious software engineers and tech leaders.
            </p>
          </div>

          {/* Links Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="footer-col">
              <h5>{section.title}</h5>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <p>&copy; {new Date().getFullYear()} HireAce AI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
