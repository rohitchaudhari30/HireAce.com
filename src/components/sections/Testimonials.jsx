import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Proven Results</div>
          <h2 className="section-title">Engineers Landing Tier-1 Offers</h2>
          <p className="section-desc">
            Read how senior engineers and tech leads used HireAce to negotiate top-of-market compensation packages.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-author-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    className="testimonial-avatar-circle"
                    style={{ background: item.avatarBg }}
                  >
                    <span>{item.initials}</span>
                    <CheckCircle2
                      size={13}
                      color="#10B981"
                      className="avatar-verified-check"
                    />
                  </div>
                  <div className="author-info">
                    <h4>{item.author}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
                <span className="offer-badge">{item.offerBadge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
