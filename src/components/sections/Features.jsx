import React from 'react';
import { Cpu, Mic, Scan, Ghost, Database, Keyboard, Sparkles, Activity } from 'lucide-react';
import { FEATURES } from '../../data/features';

const ICON_MAP = {
  Cpu,
  Mic,
  Scan,
  Ghost,
  Database,
  Keyboard,
};

export function Features() {
  return (
    <section id="features" className="section-padding bento-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Core Capabilities</div>
          <h2 className="section-title">Engineered For Speed, Accuracy &amp; Total Discretion</h2>
          <p className="section-desc">
            Designed to provide instant, structured technical guidance while keeping your interview natural and uninterrupted.
          </p>
        </div>

        <div className="bento-grid-12">
          {FEATURES.map((feat) => {
            const IconComponent = ICON_MAP[feat.icon] || Cpu;
            return (
              <div key={feat.id} className="bento-card">
                <div className="bento-card-top">
                  <div className={`bento-icon-wrapper ${feat.iconClass}`}>
                    <IconComponent size={20} />
                  </div>
                  {feat.badge && (
                    <span className="bento-card-badge">
                      {feat.badge}
                    </span>
                  )}
                </div>

                <h3 className="bento-card-title">{feat.title}</h3>
                <p className="bento-card-desc">{feat.description}</p>

                {/* Card Footer Micro-element */}
                <div className="bento-card-footer">
                  {feat.hasWaveform ? (
                    <div className="waveform-bars">
                      <div className="wave-pill" />
                      <div className="wave-pill" />
                      <div className="wave-pill" />
                      <div className="wave-pill" />
                      <div className="wave-pill" />
                      <div className="wave-pill" />
                      <div className="wave-pill" />
                      <div className="wave-pill" />
                    </div>
                  ) : feat.hasPulse ? (
                    <div className="bento-pulse-tag">
                      <span className="pulse-dot" />
                      <span>{feat.footerNote}</span>
                    </div>
                  ) : (
                    <div className="bento-footer-pill">
                      <Activity size={13} />
                      <span>{feat.footerNote}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

