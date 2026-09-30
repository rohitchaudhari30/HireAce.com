import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { TARGET_COMPANIES } from '../../data/companies';
import {
  GoogleLogo,
  MetaLogo,
  AppleLogo,
  AmazonLogo,
  MicrosoftLogo,
  NetflixLogo,
} from '../ui/icons/CompanyIcons';

const COMPANY_ICON_MAP = {
  GoogleLogo,
  MetaLogo,
  AppleLogo,
  AmazonLogo,
  MicrosoftLogo,
  NetflixLogo,
};

export function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted-header">
          <div className="trusted-pill">
            <ShieldCheck size={15} />
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h3 className="trusted-heading">Used by Candidates Interviewing at Top Tech Companies</h3>
          <p className="trusted-subheading">
            Master live coding challenges, system design rounds, and behavioral loops with confidence.
          </p>
        </div>

        {/* Curated Top 6 Companies Grid */}
        <div className="trusted-grid-limited">
          {TARGET_COMPANIES.map((company) => {
            const IconComponent = COMPANY_ICON_MAP[company.iconKey];
            return (
              <div key={company.name} className="company-card">
                {IconComponent && <IconComponent />}
                <span className="company-name">{company.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
