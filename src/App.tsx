import './App.css'
import { useState } from 'react'
import { createBar, createPhrase } from './beatLogic'
import PhraseElement from './components/PhraseElement.tsx'
import BarElement from './components/BarElement.tsx'



function App() {
  const initialBar = createBar(4);
  const initialPhrase = createPhrase(4);

  const [bar, setBar] = useState(initialBar);
  const [phrase, setPhrase] = useState(initialPhrase);
  const [setting, setSetting] = useState('phrase');

  function handleClick() {
    setBar((createBar(4)));
    setPhrase((createPhrase(4)));
  }
  
  function handleSetting() {
    if (setting === 'phrase') {
      setSetting('bar');
    } else {
      setSetting('phrase');
    }
  }

  if (setting === 'phrase') {
    return (
      <>
        <PhraseElement phrase={phrase} />
        <div className="buttonContainer">
          <button className="new" onClick={handleClick}>New Phrase</button>
          <button className="setting" onClick={handleSetting}>Switch to Bar</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <BarElement bar={bar} />  
        <div className="buttonContainer">
          <button className="new" onClick={handleClick}>New Bar</button>
          <button className="setting" onClick={handleSetting}>Switch to Phrase</button>
        </div>
      </>
    )
  }
}

export default App