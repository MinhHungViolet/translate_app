import React, { useRef, useEffect } from 'react';
import './Editor.css';

const Editor = ({ sourceText, setSourceText, translatedText, isTranslating }) => {
    const sourceRef = useRef(null);

    // Auto-resize textarea logic could go here if needed, 
    // but CSS resize: vertical is often enough.

    return (
        <div className="editor-container">
            <div className="editor-pane glass-card">
                <div className="pane-header">
                    <span>Source Text</span>
                    <span className="word-count">{sourceText.length} chars</span>
                </div>
                <textarea
                    ref={sourceRef}
                    className="premium-textarea source-area"
                    placeholder="Paste your novel text here..."
                    value={sourceText}
                    onChange={(e) => setSourceText(e.target.value)}
                    spellCheck="false"
                />
            </div>

            <div className={`editor-pane glass-card ${isTranslating ? 'pulse-border' : ''}`}>
                <div className="pane-header">
                    <span>Translation</span>
                    {translatedText && <span className="word-count fade-in">Done</span>}
                </div>
                <textarea
                    className="premium-textarea target-area"
                    placeholder="Translation will appear here..."
                    value={translatedText}
                    readOnly
                    spellCheck="false"
                />
            </div>
        </div>
    );
};

export default Editor;
