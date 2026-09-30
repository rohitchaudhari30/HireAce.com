import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles } from 'lucide-react';
import { SIMULATOR_SCENARIOS } from '../../../data/simulatorScenarios';
import { SimulatorWindow } from './SimulatorWindow';
import { WorkspaceBackdrop } from './DesktopBackdrop';

export function SimulatorSection() {
  const [selectedScenarioKey, setSelectedScenarioKey] = useState('dsa');
  const activeScenario = SIMULATOR_SCENARIOS[selectedScenarioKey] || SIMULATOR_SCENARIOS.dsa;

  // Stream state
  const [streamState, setStreamState] = useState({
    displayedQuestion: activeScenario.question,
    displayedSummary: activeScenario.summary,
    displayedBullets: activeScenario.bullets,
    displayedCode: activeScenario.code,
    latencyText: `⚡ ${activeScenario.latency}`,
    isQuestionStreaming: false,
    isQuestionComplete: true,
    isAnswerStreaming: false,
    isSummaryStreaming: false,
    isCodeStreaming: false,
  });

  const timeoutsRef = useRef([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  // Streaming Engine
  const startStream = useCallback(
    (scenarioKey, isInstant = false) => {
      clearAllTimeouts();
      const targetScenario = SIMULATOR_SCENARIOS[scenarioKey] || SIMULATOR_SCENARIOS.dsa;

      if (isInstant) {
        setStreamState({
          displayedQuestion: targetScenario.question,
          displayedSummary: targetScenario.summary,
          displayedBullets: targetScenario.bullets,
          displayedCode: targetScenario.code,
          latencyText: `⚡ ${targetScenario.latency}`,
          isQuestionStreaming: false,
          isQuestionComplete: true,
          isAnswerStreaming: false,
          isSummaryStreaming: false,
          isCodeStreaming: false,
        });
        return;
      }

      // 1. Initial State: Transcribing Audio Question
      setStreamState({
        displayedQuestion: '',
        displayedSummary: '',
        displayedBullets: [],
        displayedCode: null,
        latencyText: '⚡ Transcribing voice...',
        isQuestionStreaming: true,
        isQuestionComplete: false,
        isAnswerStreaming: false,
        isSummaryStreaming: false,
        isCodeStreaming: false,
      });

      const words = targetScenario.question.split(' ');
      let currentWordIndex = 0;
      let typedQuestion = '';

      function typeQuestion() {
        if (currentWordIndex < words.length) {
          typedQuestion += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex];
          setStreamState((prev) => ({
            ...prev,
            displayedQuestion: typedQuestion,
          }));
          currentWordIndex++;
          const delay = Math.floor(Math.random() * 18) + 20;
          const t = setTimeout(typeQuestion, delay);
          timeoutsRef.current.push(t);
        } else {
          // Question done, start answer streaming
          setStreamState((prev) => ({
            ...prev,
            displayedQuestion: targetScenario.question,
            isQuestionStreaming: false,
            isQuestionComplete: true,
            latencyText: '⚡ Streaming Real-Time Tokens...',
            isAnswerStreaming: true,
            isSummaryStreaming: true,
          }));

          const t = setTimeout(streamSummary, 120);
          timeoutsRef.current.push(t);
        }
      }

      const tStart = setTimeout(typeQuestion, 100);
      timeoutsRef.current.push(tStart);

      // 2. Summary Streaming
      function streamSummary() {
        const summaryWords = targetScenario.summary.split(' ');
        let sIdx = 0;
        let typedSummary = '';

        function typeSummaryWord() {
          if (sIdx < summaryWords.length) {
            typedSummary += (sIdx === 0 ? '' : ' ') + summaryWords[sIdx];
            setStreamState((prev) => ({
              ...prev,
              displayedSummary: typedSummary,
            }));
            sIdx++;
            const delay = Math.floor(Math.random() * 14) + 16;
            const t = setTimeout(typeSummaryWord, delay);
            timeoutsRef.current.push(t);
          } else {
            setStreamState((prev) => ({
              ...prev,
              displayedSummary: targetScenario.summary,
              isSummaryStreaming: false,
            }));
            const t = setTimeout(streamBullets, 80);
            timeoutsRef.current.push(t);
          }
        }

        typeSummaryWord();
      }

      // 3. Bullets Line-by-Line Streaming
      function streamBullets() {
        let bIdx = 0;
        const accumulatedBullets = [];

        function addNextBullet() {
          if (bIdx < targetScenario.bullets.length) {
            accumulatedBullets.push(targetScenario.bullets[bIdx]);
            setStreamState((prev) => ({
              ...prev,
              displayedBullets: [...accumulatedBullets],
            }));
            bIdx++;
            const t = setTimeout(addNextBullet, 110);
            timeoutsRef.current.push(t);
          } else {
            if (targetScenario.code) {
              const t = setTimeout(streamCode, 100);
              timeoutsRef.current.push(t);
            } else {
              finishStreaming();
            }
          }
        }

        addNextBullet();
      }

      // 4. Code Block Line-by-Line Streaming
      function streamCode() {
        if (!targetScenario.code) return finishStreaming();

        setStreamState((prev) => ({
          ...prev,
          isCodeStreaming: true,
        }));

        const lines = targetScenario.code.split('\n');
        let lineIdx = 0;
        let accumulatedCode = '';

        function addNextCodeLine() {
          if (lineIdx < lines.length) {
            accumulatedCode += (lineIdx === 0 ? '' : '\n') + lines[lineIdx];
            setStreamState((prev) => ({
              ...prev,
              displayedCode: accumulatedCode,
            }));
            lineIdx++;
            const delay = Math.floor(Math.random() * 20) + 30;
            const t = setTimeout(addNextCodeLine, delay);
            timeoutsRef.current.push(t);
          } else {
            finishStreaming();
          }
        }

        addNextCodeLine();
      }

      // 5. Completion
      function finishStreaming() {
        setStreamState((prev) => ({
          ...prev,
          displayedCode: targetScenario.code,
          latencyText: `⚡ ${targetScenario.latency} (112ms)`,
          isAnswerStreaming: false,
          isSummaryStreaming: false,
          isCodeStreaming: false,
        }));
      }
    },
    [clearAllTimeouts]
  );

  // Cycle to next scenario on regenerate button click inside toolbar
  const scenarioKeys = Object.keys(SIMULATOR_SCENARIOS);
  const handleReplayOrNext = () => {
    const currentIndex = scenarioKeys.indexOf(selectedScenarioKey);
    const nextKey = scenarioKeys[(currentIndex + 1) % scenarioKeys.length];
    setSelectedScenarioKey(nextKey);
    startStream(nextKey, false);
  };

  const handleClear = () => {
    clearAllTimeouts();
    setStreamState({
      displayedQuestion: 'Waiting for the next question...',
      displayedSummary: '',
      displayedBullets: [],
      displayedCode: null,
      latencyText: '',
      isQuestionStreaming: false,
      isQuestionComplete: false,
      isAnswerStreaming: false,
      isSummaryStreaming: false,
      isCodeStreaming: false,
    });
  };

  // Run initial stream or attach intersection observer
  useEffect(() => {
    let hasAutoStreamed = false;
    const section = document.getElementById('simulator');

    if (section && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAutoStreamed) {
              hasAutoStreamed = true;
              startStream('dsa', false);
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(section);

      return () => {
        observer.disconnect();
        clearAllTimeouts();
      };
    } else {
      startStream('dsa', false);
      return () => clearAllTimeouts();
    }
  }, [startStream, clearAllTimeouts]);

  return (
    <section id="simulator" className="section-padding section-alt-bg">
      <div className="container container-wide">
        <div className="section-header sim-section-header">
          <div className="section-tag sim-section-tag">
            <span className="sim-live-pulse-dot" />
            <Sparkles size={12} color="#818CF8" />
            <span>Interactive Live Copilot</span>
          </div>
          <h2 className="section-title sim-section-title">
            Test The Real-Time Copilot <span className="gradient-text">In Live Action</span>
          </h2>
          <p className="section-desc sim-section-desc">
            Experience the real-time AI copilot floating seamlessly over your active call session during live interviews.
          </p>
        </div>

        <div className="hero-preview-wrapper" style={{ marginTop: '20px' }}>
          {/* Workspace Dashboard with Floating Overlay in Center */}
          <WorkspaceBackdrop>
            <SimulatorWindow
              activeScenario={activeScenario}
              streamState={streamState}
              onRegenerate={handleReplayOrNext}
              onClear={handleClear}
              onBackToLauncher={handleReplayOrNext}
            />
          </WorkspaceBackdrop>
        </div>
      </div>
    </section>
  );
}

