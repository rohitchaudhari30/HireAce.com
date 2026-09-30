import React from 'react';
import { MessageSquare } from 'lucide-react';

export function ToolQuestion({ questionText, isQuestionComplete, isListeningAudio }) {
  return (
    <div className="tool-card-question">
      <div className="tool-question-header">
        <div className="tool-label-tag">
          <MessageSquare size={14} className="tool-label-icon" />
          <span>QUESTION:</span>
        </div>
      </div>

      <div className="tool-question-content">
        {questionText || 'Waiting for the next question...'}
        {!isQuestionComplete && isListeningAudio && <span className="sim-typing-cursor" />}
      </div>
    </div>
  );
}

