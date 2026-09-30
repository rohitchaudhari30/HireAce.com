import React from 'react';
import { WORKFLOW_STEPS } from '../../data/workflow';

export function Workflow() {
  return (
    <section id="workflow" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Frictionless Flow</div>
          <h2 className="section-title">Ready in Under 60 Seconds</h2>
          <p className="section-desc">
            Designed for effortless onboarding, verification, and live interview execution.
          </p>
        </div>

        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.step} className="workflow-card">
              <div className="workflow-step-num">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
