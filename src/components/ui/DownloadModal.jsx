import React, { useState, useEffect } from 'react';
import { X, Download, Monitor, Apple, Terminal, CheckCircle2, Sparkles } from 'lucide-react';

export function DownloadModal({ isOpen, onClose }) {
  const [selectedOS, setSelectedOS] = useState('windows');
  const [downloadStarted, setDownloadStarted] = useState(false);

  // Close on Escape key & manage scroll lock
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => {
      setDownloadStarted(false);
      onClose();
    }, 2500);
  };

  const platforms = [
    {
      id: 'windows',
      name: 'Windows 10 / 11',
      icon: Monitor,
      filename: 'HireAce-Setup-2.4.0.exe',
      requirements: 'Windows 10 / 11 (64-bit Intel & AMD)',
      size: '84.2 MB',
      isPrimary: true,
    },
  ];

  const activePlatform = platforms.find((p) => p.id === selectedOS) || platforms[0];

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div className="modal-dialog">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              <Download size={20} color="#818CF8" />
            </div>
            <div>
              <h3 id="download-modal-title" className="modal-title">
                Download HireAce Desktop
              </h3>
              <p className="modal-subtitle">Real-time invisible AI interview copilot</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close download modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Platform Selector Tabs */}
        <div className="modal-platform-tabs">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = p.id === selectedOS;
            return (
              <button
                key={p.id}
                type="button"
                className={`modal-platform-tab ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedOS(p.id)}
              >
                <Icon size={18} />
                <span>{p.name}</span>
                {p.isPrimary && <span className="modal-rec-badge">Recommended</span>}
              </button>
            );
          })}
        </div>

        {/* Selected Platform Details */}
        <div className="modal-download-card">
          <div className="modal-file-info">
            <div className="modal-file-name">
              <Sparkles size={16} color="#818CF8" />
              <span>{activePlatform.filename}</span>
            </div>
            <div className="modal-file-meta">
              <span>{activePlatform.requirements}</span>
              <span>•</span>
              <span>{activePlatform.size}</span>
              <span>•</span>
              <span className="modal-verified-pill">v2.4.0 Verified</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-lg modal-start-dl-btn"
            onClick={handleDownload}
            disabled={downloadStarted}
          >
            {downloadStarted ? (
              <>
                <CheckCircle2 size={18} color="#22C55E" />
                <span>Download Starting...</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Download for {activePlatform.name}</span>
              </>
            )}
          </button>
        </div>

        {/* Privacy Note */}
        <div className="modal-footer-note">
          <CheckCircle2 size={14} color="#10B981" />
          <span>100% on-device private processing. No meeting software telemetry tracking.</span>
        </div>
      </div>
    </div>
  );
}
