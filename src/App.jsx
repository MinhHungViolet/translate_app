import { useState } from 'react';
import './App.css';
import TranslationControls from './components/TranslationControls';
import Editor from './components/Editor';
import { translateText } from './services/translationService';

function App() {
  const [context, setContext] = useState('');
  const [request, setRequest] = useState('');
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsTranslating(true);
    try {
      const result = await translateText(sourceText, context, request);
      setTranslatedText(result);
    } catch (error) {
      alert(error.message); // Simple error handling for now
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Novel Translator</h1>
      </header>
      <main className="app-main">
        <TranslationControls
          context={context}
          setContext={setContext}
          request={request}
          setRequest={setRequest}
          onTranslate={handleTranslate}
          isTranslating={isTranslating}
        />
        <Editor
          sourceText={sourceText}
          setSourceText={setSourceText}
          translatedText={translatedText}
          isTranslating={isTranslating}
        />
      </main>
    </div>
  );
}

export default App;
