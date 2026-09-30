import React, { useState } from 'react';
import { Copy, Maximize2, Trash2, Check } from 'lucide-react';

export function ToolFooter({ onCopy, onClear }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="real-tool-footer">
      <div className="tool-footer-left">
        {/* Clean minimal spacer or subtle status */}
      </div>

      <div className="tool-footer-actions">
        <button
          type="button"
          className="tool-action-btn"
          onClick={handleCopyClick}
          title="Copy Answer to Clipboard"
        >
          {copied ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>

        <button type="button" className="tool-action-btn" title="Expand Window">
          <Maximize2 size={13} />
          <span>Expand</span>
        </button>

        <button type="button" className="tool-action-btn" onClick={onClear} title="Clear Screen">
          <Trash2 size={13} />
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
}

