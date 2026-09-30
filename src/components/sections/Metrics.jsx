import React from 'react';
import { METRICS } from '../../data/metrics';

export function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="metric-tile">
              <div
                className={`metric-number ${metric.colorClass || ''}`}
                style={metric.color ? { color: metric.color } : {}}
              >
                {metric.value}
              </div>
              <div className="metric-title">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
