import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../../data/pricing';

export function Pricing({ onOpenDownload }) {
  const [billingCycle, setBillingCycle] = useState('lifetime'); // 'lifetime' | 'monthly'

  const currentPlans = PRICING_PLANS[billingCycle] || PRICING_PLANS.lifetime;

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Simple Pricing</div>
          <h2 className="section-title">Invest in Your Career Acceleration</h2>
          <p className="section-desc">One successful interview pays for HireAce thousands of times over.</p>

          {/* Interactive Billing Frequency Switcher */}
          <div className="pricing-billing-toggle-wrap">
            <button
              type="button"
              className={`pricing-toggle-pill ${billingCycle === 'lifetime' ? 'active' : ''}`}
              onClick={() => setBillingCycle('lifetime')}
            >
              <span>Lifetime / Annual</span>
              <span className="pricing-discount-badge">Save 75%</span>
            </button>
            <button
              type="button"
              className={`pricing-toggle-pill ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              <span>Monthly Sprint</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {currentPlans.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.featured ? 'featured' : ''}`}
            >
              {tier.badge && <span className="featured-pill">{tier.badge}</span>}
              <div>
                <div className="pricing-tier-name">{tier.name}</div>
                <div className="pricing-price">
                  {tier.price} <span>{tier.frequency}</span>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                  {tier.description}
                </p>
                <ul className="pricing-feature-list">
                  {tier.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={16} color="#22C55E" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className={`btn ${tier.ctaVariant} pricing-btn`}
                onClick={onOpenDownload}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
