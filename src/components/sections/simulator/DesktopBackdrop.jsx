import React from 'react';
import {
  Zap,
  PhoneCall,
  FileText,
  FolderClosed,
  HelpCircle,
  MessageSquare,
  Plus,
  Briefcase,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export function WorkspaceBackdrop({ children }) {
  const SESSIONS = [
    {
      id: 1,
      company: 'Meta',
      role: 'Staff Distributed Systems Engineer',
      type: 'System Design Interview',
      date: 'Live Now',
      status: 'active',
      duration: '45 mins',
    },
    {
      id: 2,
      company: 'Google',
      role: 'Senior L5 Software Engineer',
      type: 'Algorithms & Concurrency',
      date: 'Today, 2:30 PM',
      status: 'ready',
      duration: '60 mins',
    },
    {
      id: 3,
      company: 'Apple',
      role: 'Principal Backend Architect',
      type: 'Technical Deep-Dive',
      date: 'Yesterday',
      status: 'completed',
      duration: '45 mins',
    },
    {
      id: 4,
      company: 'Amazon',
      role: 'Principal Systems Architect',
      type: 'Bar Raiser Round',
      date: '3 days ago',
      status: 'completed',
      duration: '50 mins',
    },
    {
      id: 5,
      company: 'Stripe',
      role: 'Infrastructure Lead',
      type: 'Payments Core Architecture',
      date: '5 days ago',
      status: 'completed',
      duration: '60 mins',
    },
    {
      id: 6,
      company: 'Netflix',
      role: 'Senior Cloud Platform Engineer',
      type: 'Distributed Cache Architecture',
      date: '1 week ago',
      status: 'completed',
      duration: '45 mins',
    },
    {
      id: 7,
      company: 'Uber',
      role: 'Staff Real-Time Routing Engineer',
      type: 'Geospatial H3 Algorithms',
      date: '2 weeks ago',
      status: 'completed',
      duration: '55 mins',
    },
    {
      id: 8,
      company: 'Airbnb',
      role: 'Staff Infrastructure Architect',
      type: 'Service Mesh & Resiliency',
      date: '3 weeks ago',
      status: 'completed',
      duration: '50 mins',
    },
  ];

  return (
    <div className="workspace-backdrop-container">
      {/* Main Full-Size Dashboard Frame */}
      <div className="workspace-dashboard-frame">
        {/* Left Sidebar */}
        <aside className="workspace-sidebar">
          <div className="ws-brand-row">
            <div className="ws-logo-wrap">
              <Zap size={16} />
            </div>
            <span className="ws-brand-title">HireAce</span>
          </div>

          <div className="ws-nav-group">
            <span className="ws-group-label">WORKSPACE</span>
            <div className="ws-nav-item active">
              <PhoneCall size={15} />
              <span>Call Sessions</span>
              <span className="ws-live-tag">● LIVE</span>
            </div>
            <div className="ws-nav-item">
              <FileText size={15} />
              <span>CVs &amp; Resumes</span>
            </div>
            <div className="ws-nav-item">
              <FolderClosed size={15} />
              <span>Documents</span>
            </div>
          </div>

          <div className="ws-nav-group">
            <span className="ws-group-label">SUPPORT</span>
            <div className="ws-nav-item">
              <HelpCircle size={15} />
              <span>Tutorials</span>
            </div>
            <div className="ws-nav-item">
              <MessageSquare size={15} />
              <span>Support Chat</span>
            </div>
          </div>

          {/* Pro Tier Upgrade Card */}
          <div className="ws-pro-tier-card">
            <div className="ws-pro-header">
              <Sparkles size={13} className="ws-pro-icon" />
              <span className="ws-pro-title">PRO TIER ACTIVE</span>
            </div>
            <p className="ws-pro-desc">
              Stealth mode, custom models &amp; real-time audio unlocked.
            </p>
          </div>
        </aside>

        {/* Center / Right Content Panel */}
        <main className="workspace-main-panel">
          {/* Header Bar */}
          <div className="ws-panel-header">
            <div className="ws-header-info">
              <h3 className="ws-panel-title">Call Sessions</h3>
              <p className="ws-panel-sub">Prepare for calls and review past sessions.</p>
            </div>
            <button type="button" className="ws-create-session-btn" title="Create New Interview Session">
              <Plus size={14} />
              <span>Create Session</span>
            </button>
          </div>

          {/* Filter Tabs Row */}
          <div className="ws-filter-tabs-row">
            <div className="ws-tabs-left">
              <button type="button" className="ws-filter-tab active">All</button>
              <button type="button" className="ws-filter-tab">Active</button>
              <button type="button" className="ws-filter-tab">Ended</button>
            </div>
            <span className="ws-sessions-count">9 Sessions</span>
          </div>

          {/* Sessions List Table */}
          <div className="ws-sessions-list">
            {SESSIONS.map((session) => (
              <div key={session.id} className={`ws-session-row ${session.status}`}>
                <div className="ws-session-company-col">
                  <div className={`ws-company-badge ${session.company.toLowerCase()}`}>
                    <Briefcase size={14} />
                  </div>
                  <div className="ws-company-meta">
                    <h4 className="ws-session-company">{session.company}</h4>
                    <p className="ws-session-role">{session.role}</p>
                  </div>
                </div>

                <div className="ws-session-type-col">
                  <span className="ws-type-text">{session.type}</span>
                  <span className="ws-duration-tag">{session.duration}</span>
                </div>

                <div className="ws-session-action-col">
                  {session.status === 'active' ? (
                    <button type="button" className="ws-action-btn join">
                      <span>Join Session</span>
                    </button>
                  ) : session.status === 'ready' ? (
                    <button type="button" className="ws-action-btn start">
                      <span>Start Session</span>
                    </button>
                  ) : (
                    <button type="button" className="ws-action-btn view">
                      <span>View Transcript</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Floating Exact Tool Overlay Hovering in Center */}
      <div className="workspace-overlay-center">
        {children}
      </div>
    </div>
  );
}

