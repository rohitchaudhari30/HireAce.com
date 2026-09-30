import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  MessageSquare,
  FileCode,
  Camera,
  HelpCircle,
  Clock,
  Contrast,
  Mic,
  RotateCw,
  Square,
  Eye,
  X,
} from 'lucide-react';

export function ToolToolbar({
  modelName = 'Groq | Primary',
  opacity,
  onOpacityChange,
  isMicActive,
  onToggleMic,
  onRegenerate,
  onToggleContrast,
  onBackToLauncher,
}) {
  const [sessionSeconds, setSessionSeconds] = useState(0);

  // Session timer increment
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (totalSecs) => {
    const m = String(Math.floor(totalSecs / 60)).padStart(2, '0');
    const s = String(totalSecs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="real-tool-header-wrapper">
      <div className="tool-top-toolbar">
        {/* Left Nav: Back + Green Dot + Groq Dropdown */}
        <div className="tool-nav-left">
          <button
            type="button"
            className="tool-icon-btn back-btn"
            title="Back to Launcher"
            aria-label="Back"
            onClick={onBackToLauncher}
          >
            <ArrowLeft size={15} />
          </button>
          <span className="tool-live-dot" title="Live Connection Active" />
          <div className="tool-engine-dropdown" title="Active Intelligence Model">
            <span>{modelName}</span>
            <ChevronDown size={12} color="var(--text-muted)" />
          </div>
        </div>

        {/* Center Feature Icons Group (Exact match to real app) */}
        <div className="tool-nav-center">
          <div className="tool-pill-tab-group">
            <button type="button" className="tool-icon-btn active" title="Live Q&A Assistant" aria-label="Q&A">
              <MessageSquare size={13} />
            </button>
            <button type="button" className="tool-icon-btn" title="Code & Scratchpad" aria-label="Scratchpad">
              <FileCode size={13} />
            </button>
            <button type="button" className="tool-icon-btn" title="Screen OCR Capture" aria-label="Screen OCR">
              <Camera size={13} />
            </button>
            <button type="button" className="tool-icon-btn" title="Clarifying Questions" aria-label="Help">
              <HelpCircle size={13} />
            </button>
            <button type="button" className="tool-icon-btn" title="Timer" aria-label="Timer">
              <Clock size={13} />
            </button>
            <button
              type="button"
              className="tool-icon-btn"
              title="Toggle High Contrast"
              aria-label="Contrast"
              onClick={onToggleContrast}
            >
              <Contrast size={13} />
            </button>
            <button
              type="button"
              className={`tool-icon-btn tool-mic-btn-real ${isMicActive ? 'active' : 'muted'}`}
              title={isMicActive ? 'Microphone Active (Click to Mute)' : 'Microphone Muted (Click to Unmute)'}
              aria-label="Microphone"
              onClick={onToggleMic}
            >
              <Mic size={13} color="#FFFFFF" />
            </button>
            <button
              type="button"
              className="tool-icon-btn"
              title="Regenerate Stream"
              aria-label="Regenerate"
              onClick={onRegenerate}
            >
              <RotateCw size={13} />
            </button>
            <button type="button" className="tool-icon-btn" title="Stop Audio Stream" aria-label="Stop">
              <Square size={12} />
            </button>
          </div>
        </div>

        {/* Right Controls: Stealth Opacity + Close */}
        <div className="tool-nav-right">
          <div className="tool-stealth-control" title="Stealth Opacity Slider (0% - 100%)">
            <Eye size={13} color="var(--text-muted)" />
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={opacity}
              onChange={(e) => onOpacityChange(Number(e.target.value))}
              className="stealth-slider-bar"
              aria-label="Stealth Opacity Slider"
            />
            <span className="stealth-percent-pill">{opacity}%</span>
          </div>
          <button type="button" className="tool-icon-btn close-btn" title="Minimize Window" aria-label="Close">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Sub-header Live Status & Timer Bar */}
      <div className="tool-sub-status-bar">
        <div className="tool-sub-status-left">
          {/* Subtle contextual hint */}
        </div>
        <div className="tool-sub-status-right">
          <span className={`tool-live-status-dot ${isMicActive ? 'active' : 'muted'}`} />
          <span className="tool-live-status-text">{isMicActive ? 'Live Listening' : 'Muted'}</span>
          <span className="tool-live-timer-val">{formatTimer(sessionSeconds)}</span>
        </div>
      </div>
    </div>
  );
}

