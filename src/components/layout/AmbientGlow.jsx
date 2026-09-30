import React from 'react';

export function AmbientGlow() {
  return (
    <div className="glow-mesh-wrapper" aria-hidden="true">
      <div className="glow-mesh glow-mesh-top" />
      <div className="glow-mesh glow-mesh-center" />
      <div className="glow-mesh glow-mesh-bottom" />
    </div>
  );
}
