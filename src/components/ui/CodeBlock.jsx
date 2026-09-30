import React from 'react';

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Lightweight, safe code syntax highlighter component.
 * Single-pass tokenizer to prevent nested regex replacement bugs.
 */
export function CodeBlock({ code, isStreaming = false }) {
  if (!code) return null;

  function highlightSyntax(rawCode) {
    if (!rawCode) return '';
    
    // Combined regex in order of precedence
    // 1: Comments (# or //)
    // 2: Strings ("..." or '...')
    // 3: Keywords
    // 4: Built-in types / self
    // 5: Function calls (name followed by '(')
    // 6: Numbers
    const tokenRegex = /(#.*$|\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(def|return|if|else|elif|while|for|in|const|function|let|var|class|import|from|None|True|False|async|await|try|except|finally)\b|\b(self|Node|LRUCache|capacity|int|str|bool)\b|\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()|\b(\d+)\b/gm;

    let lastIndex = 0;
    let result = '';
    let match;

    while ((match = tokenRegex.exec(rawCode)) !== null) {
      // Append unstyled text before this token
      if (match.index > lastIndex) {
        result += escapeHtml(rawCode.substring(lastIndex, match.index));
      }

      const [fullMatch, comment, str, kwd, builtin, fn, num] = match;

      if (comment) {
        result += `<span class="b-cmt">${escapeHtml(comment)}</span>`;
      } else if (str) {
        result += `<span class="b-str">${escapeHtml(str)}</span>`;
      } else if (kwd) {
        result += `<span class="b-kwd">${escapeHtml(kwd)}</span>`;
      } else if (builtin) {
        result += `<span class="b-fn">${escapeHtml(builtin)}</span>`;
      } else if (fn) {
        result += `<span class="b-fn">${escapeHtml(fn)}</span>`;
      } else if (num) {
        result += `<span class="b-var">${escapeHtml(num)}</span>`;
      } else {
        result += escapeHtml(fullMatch);
      }

      lastIndex = tokenRegex.lastIndex;
    }

    // Append remaining unstyled text
    if (lastIndex < rawCode.length) {
      result += escapeHtml(rawCode.substring(lastIndex));
    }

    return result;
  }

  return (
    <div className="tool-code-container">
      <div className="tool-code-header-label">
        Implementation:
      </div>
      <div className="code-scroll-wrapper">
        <pre className="code-snippet-box">
          <code>
            <span dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }} />
            {isStreaming && <span className="sim-typing-cursor" />}
          </code>
        </pre>
      </div>
    </div>
  );
}
