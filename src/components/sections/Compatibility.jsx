import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { COMPATIBILITY_PLATFORMS } from '../../data/compatibility';
import { ZoomLogo, TeamsLogo, MeetLogo } from '../ui/icons/PlatformIcons';

const PLATFORM_ICON_MAP = {
  ZoomLogo,
  TeamsLogo,
  MeetLogo,
};

export function Compatibility() {
  return (
    <section id="compatibility" className="compat-section">
      <div className="container">
        <div className="compat-header">
          <ShieldCheck className="compat-shield-icon" size={24} />
          <div className="compat-header-title">
            We check it stays invisible on every one of these
          </div>
        </div>

        <div className="compat-grid">
          {COMPATIBILITY_PLATFORMS.map((platform) => {
            const IconComponent = PLATFORM_ICON_MAP[platform.iconKey];
            return (
              <div key={platform.name} className="compat-card">
                <div className="compat-icon-container">
                  {IconComponent && <IconComponent />}
                </div>
                <div className="compat-card-name">{platform.name}</div>
                <div className="compat-status-row">
                  <span className="compat-status-dot" />
                  <span>{platform.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="compat-footer-note">
          100% undetected across window capture, entire desktop screen share, and browser tab casting.
        </div>
      </div>
    </section>
  );
}
