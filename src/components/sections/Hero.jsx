import React from 'react';
import { Sparkles, Download, PlayCircle, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export function Hero({ onOpenDownload }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-announcement">
          <Sparkles size={14} color="#818CF8" />
          <span>Real-Time AI Interview Co-Pilot</span>
        </div>

        <h1 className="hero-heading">
          Ace High-Stakes Technical Interviews <br className="hero-br-desktop" />
          <span className="gradient-text">In Invisible Real-Time.</span>
        </h1>

        <p className="hero-subhead">
          HireAce listens to live interview questions, analyzes on-screen coding challenges, and delivers structured explanations and optimal solutions in real time.
        </p>

        <div className="hero-cta-wrap">
          <button
            type="button"
            className="btn btn-primary btn-lg hero-main-cta"
            onClick={onOpenDownload}
          >
            <Download size={20} />
            <span>Download for Windows</span>
          </button>
          <a href="#simulator" className="btn btn-secondary btn-lg hero-sec-cta">
            <PlayCircle size={20} />
            <span>Try Live Simulator</span>
          </a>
        </div>

        <div className="hero-trust-row">
          <div className="hero-trust-item">
            <ShieldCheck size={16} color="#10B981" />
            <span>100% Invisible on Screen Share</span>
          </div>
          <div className="hero-trust-item">
            <Zap size={16} color="#818CF8" />
            <span>Instant Real-Time Stream</span>
          </div>
          <div className="hero-trust-item">
            <CheckCircle2 size={16} color="#10B981" />
            <span>Compatible with Zoom, Teams, Meet &amp; More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
