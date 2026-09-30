import React from 'react';
import { Sparkles, Download, Play, CheckCircle2, ShieldCheck } from 'lucide-react';

export function FinalCTA({ onOpenDownload }) {
  return (
    <section id="cta" className="final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-glow-mesh" />
          <div className="final-cta-badge">
            <Sparkles size={14} />
            <span>Ready in 30 Seconds • Instant Setup</span>
          </div>

          <h2 className="final-cta-title">Supercharge Your Next Technical Interview</h2>
          <p className="final-cta-desc">
            Download the desktop application now and get instant AI intelligence for your upcoming software engineering and system design rounds.
          </p>

          <div className="final-cta-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg final-download-btn"
              onClick={onOpenDownload}
            >
              <Download size={20} />
              <span>Download for Windows</span>
            </button>
            <a href="#simulator" className="btn btn-secondary btn-lg final-secondary-btn">
              <Play size={18} />
              <span>Try Live Simulator</span>
            </a>
          </div>

          <div className="final-cta-perks">
            <div className="cta-perk-item">
              <CheckCircle2 size={16} />
              <span>Free 7-Day Access</span>
            </div>
            <div className="cta-perk-item">
              <ShieldCheck size={16} />
              <span>100% Invisible on Screen Share</span>
            </div>
            <div className="cta-perk-item">
              <Sparkles size={16} />
              <span>Windows 10 / 11 Compatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
