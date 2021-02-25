import { useState } from 'react';
import '../App.css';
import TranslationInput from './TranslationInput';
import Results from './Results';

function App() {
  const [textEntered, setTextEntered] = useState(false);
  const [text, SetText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>⠠⠃⠗⠁⠊⠇⠇⠑ ⠠⠞⠗⠁⠝⠎⠇⠁⠞⠕⠗⠖</h1>
        <h2 className="pb-5">Braille Translator!</h2>
      </header>
      {!textEntered ? <TranslationInput setText={SetText} setTextEntered= {setTextEntered} />
      : <Results text={text} setTextEntered={setTextEntered} />
      }
    </div>
  );
}

export default App;
