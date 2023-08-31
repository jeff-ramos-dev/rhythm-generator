import './App.css'
import { useState } from 'react'
import { Bar, Phrase, difficultyLevels } from './utils.ts'
import PhraseElement from './components/PhraseElement.tsx'
import BarElement from './components/BarElement.tsx'

function App() {
  const initialBar = new Bar(4, 'mild');
  const initialPhrase = new Phrase(4, 'mild');

  const [bar, setBar] = useState(initialBar);
  const [phrase, setPhrase] = useState(initialPhrase);
  const [setting, setSetting] = useState('bar');
  const [difficulty, setDifficulty] = useState(difficultyLevels[0]);

  function changeDifficulty(event) {
    if(!event.target) return
    setDifficulty(event.target.textContent);
    setBar(new Bar(4, event.target.textContent));
    setPhrase(new Phrase(4, event.target.textContent));
    document.querySelector('.selected')?.classList.remove('selected');
    event.target.classList.add('selected');
  }

  function handleClick() {
    setBar(new Bar(4, difficulty));
    setPhrase(new Phrase(4, difficulty));
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
        <div className="buttonContainer">
          <button className={`difficulty ${difficultyLevels[0]}`} onClick={(event) => changeDifficulty(event)}>mild</button>
          <button className={`difficulty ${difficultyLevels[1]}`} onClick={changeDifficulty}>medium</button>
          <button className={`difficulty ${difficultyLevels[2]}`} onClick={changeDifficulty}>hot</button>
          <button className={`difficulty ${difficultyLevels[3]}`} onClick={changeDifficulty}>fire</button>
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
        <div className="buttonContainer">
          <button className={`difficulty ${difficultyLevels[0]}`} onClick={changeDifficulty}>mild</button>
          <button className={`difficulty ${difficultyLevels[1]}`} onClick={changeDifficulty}>medium</button>
          <button className={`difficulty ${difficultyLevels[2]}`} onClick={changeDifficulty}>hot</button>
          <button className={`difficulty ${difficultyLevels[3]}`} onClick={changeDifficulty}>fire</button>
        </div>
      </>
    )
  }
}

export default App