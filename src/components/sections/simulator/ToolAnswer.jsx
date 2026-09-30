import React from 'react';
import { Zap, Check } from 'lucide-react';
import { CodeBlock } from '../../ui/CodeBlock';

export function ToolAnswer({
  summary,
  bullets = [],
  code,
  latencyText,
  isStreaming,
  isSummaryStreaming,
  isCodeStreaming,
}) {
  const hasContent = summary || bullets.length > 0 || code;

  return (
    <div className="tool-card-answer">
      <div className="tool-answer-header">
        <div className="tool-label-tag answer-tag">
          <Zap size={14} className="tool-answer-icon" />
          <span>ANSWER:</span>
        </div>
        {hasContent && latencyText && (
          <span className="tool-latency-pill">{latencyText}</span>
        )}
      </div>

      <div className="tool-answer-text-area">
        {!hasContent ? (
          <p className="tool-waiting-text">
            Waiting for a question...
            <span className="sim-typing-cursor" />
          </p>
        ) : (
          <>
            {/* Main Summary */}
            {summary && (
              <p className="tool-main-summary">
                {summary}
                {isSummaryStreaming && <span className="sim-typing-cursor" />}
              </p>
            )}

            {/* Streamed Key Points Bullets */}
            {bullets.length > 0 && (
              <div className="tool-keypoints-box">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="tool-kp-item">
                    <Check size={13} className="kp-icon-check" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Code Implementation Block */}
            {code && <CodeBlock code={code} isStreaming={isCodeStreaming} />}
          </>
        )}
      </div>
    </div>
  );
}

