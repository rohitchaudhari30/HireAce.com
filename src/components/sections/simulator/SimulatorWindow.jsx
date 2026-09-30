import React, { useState } from 'react';
import { ToolToolbar } from './ToolToolbar';
import { ToolQuestion } from './ToolQuestion';
import { ToolAnswer } from './ToolAnswer';
import { ToolFooter } from './ToolFooter';

export function SimulatorWindow({
  activeScenario,
  streamState,
  onRegenerate,
  onClear,
  onBackToLauncher,
}) {
  const [opacity, setOpacity] = useState(60);
  const [isMicActive, setIsMicActive] = useState(true);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const handleCopy = () => {
    const fullText = `${activeScenario.question}\n\n${activeScenario.summary}\n\nKey Points:\n${activeScenario.bullets.join(
      '\n'
    )}${activeScenario.code ? '\n\n' + activeScenario.code : ''}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullText).catch(() => {});
    }
  };

  const alpha = (opacity / 100).toFixed(2);
  const visualOpacity = Math.max(0.12, opacity / 100);

  return (
    <div
      className="hero-window-card real-tool-overlay"
      id="sim-tool-window"
      style={{
        opacity: visualOpacity,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        '--tool-overlay-alpha': alpha,
        transition: 'opacity 0.1s ease',
        boxShadow: isHighContrast
          ? '0 0 0 2px #818CF8, 0 20px 60px rgba(0,0,0,0.8)'
          : undefined,
      }}
    >
      <ToolToolbar
        modelName={activeScenario.model}
        opacity={opacity}
        onOpacityChange={setOpacity}
        isMicActive={isMicActive}
        onToggleMic={() => setIsMicActive((prev) => !prev)}
        onRegenerate={onRegenerate}
        onToggleContrast={() => setIsHighContrast((prev) => !prev)}
        onBackToLauncher={onBackToLauncher}
      />

      <div className="real-tool-body">
        <ToolQuestion
          questionText={streamState.displayedQuestion}
          isQuestionComplete={streamState.isQuestionComplete}
          isListeningAudio={streamState.isQuestionStreaming}
        />

        <ToolAnswer
          summary={streamState.displayedSummary}
          bullets={streamState.displayedBullets}
          code={streamState.displayedCode}
          latencyText={streamState.latencyText}
          isStreaming={streamState.isAnswerStreaming}
          isSummaryStreaming={streamState.isSummaryStreaming}
          isCodeStreaming={streamState.isCodeStreaming}
        />

        <ToolFooter onCopy={handleCopy} onClear={onClear} />
      </div>
    </div>
  );
}

