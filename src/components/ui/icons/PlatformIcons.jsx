import React from 'react';

export function ZoomLogo({ className = 'compat-icon-svg' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="zoom-grad-react" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2D8CFF" />
          <stop offset="100%" stopColor="#0B5CFF" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#zoom-grad-react)" />
      <text
        x="24"
        y="28.5"
        textAnchor="middle"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="12.5"
        fill="#FFFFFF"
        letterSpacing="-0.4px"
      >
        zoom
      </text>
    </svg>
  );
}

export function TeamsLogo({ className = 'compat-icon-svg' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24.5" cy="14" r="3.5" fill="#6264A7" />
      <circle cx="34" cy="16.5" r="3.2" fill="#8082D1" />
      <path d="M20 20.5h9c1.5 0 2.8 1.2 2.8 2.8v8.7c0 3.3-2.7 6-6 6s-6-2.7-6-6v-8.7c0-1.6 1.3-2.8 2.8-2.8z" fill="#6264A7" />
      <path d="M30.5 22.5h5.5c1.4 0 2.5 1.1 2.5 2.5v5.5c0 3.3-2.7 6-6 6v-14z" fill="#8082D1" />
      <rect x="7" y="16" width="19" height="19" rx="4.5" fill="#464EB8" />
      <path d="M11.5 20.5h10v2.6h-3.5v9h-3v-9h-3.5v-2.6z" fill="#FFFFFF" />
    </svg>
  );
}

export function MeetLogo({ className = 'compat-icon-svg' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="9" y="14" width="22" height="20" rx="6" fill="#FFC20E" />
      <path d="M21 14h4a6 6 0 016 6v4l-10-10z" fill="#FFA0C5" opacity="0.85" />
      <circle cx="14" cy="28" r="2.2" fill="#FFFFFF" />
      <path d="M31 20.5l8.5-5.2c1-.6 2.5.1 2.5 1.3v14.8c0 1.2-1.5 1.9-2.5 1.3L31 27.5v-7z" fill="#FF9E00" />
    </svg>
  );
}
