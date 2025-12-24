import React from 'react';
import './TranslationControls.css';

const TranslationControls = ({ context, setContext, request, setRequest, onTranslate, isTranslating }) => {
    return (
        <div className="glass-card controls-container">
            <div className="input-group">
                <label htmlFor="context">Context</label>
                <input
                    id="context"
                    type="text"
                    placeholder="e.g. High fantasy, formal tone, character 'Aria' is a queen..."
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    className="premium-input"
                />
            </div>

            <div className="input-group">
                <label htmlFor="request">Translation Request</label>
                <input
                    id="request"
                    type="text"
                    placeholder="e.g. Translate to poetic English..."
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    className="premium-input"
                />
            </div>

            <button
                className={`translate-button ${isTranslating ? 'loading' : ''}`}
                onClick={onTranslate}
                disabled={isTranslating}
            >
                {isTranslating ? (
                    <span className="spinner"></span>
                ) : (
                    <>
                        <span>Translate</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </>
                )}
            </button>
        </div>
    );
};

export default TranslationControls;
