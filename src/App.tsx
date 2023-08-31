import './App.css'
import { useState } from 'react'
import { Bar, Phrase, difficultyLevels } from './utils.ts'
import PhraseElement from './components/PhraseElement.tsx'
import BarElement from './components/BarElement.tsx'

function App() {
  const initialBar = new Bar(4, 'easy');
  const initialPhrase = new Phrase(4, 'easy');

  const [bar, setBar] = useState(initialBar);
  const [phrase, setPhrase] = useState(initialPhrase);
  const [setting, setSetting] = useState('bar');
  const [difficulty, setDifficulty] = useState(difficultyLevels[0]);

  function changeDifficulty() {
// set difficulty to whatever button was clicked
// remove selected class from other buttons and add to this one
  }

  function handleClick() {
    setBar(new Bar(4, difficultyLevels[0]));
    setPhrase(new Phrase(4, difficultyLevels[0]));
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
          <button className={`difficulty ${difficultyLevels[0]}`} onClick={changeDifficulty}>Easy</button>
          <button className={`difficulty ${difficultyLevels[1]}`} onClick={changeDifficulty}>mediumEasy</button>
          <button className={`difficulty ${difficultyLevels[2]}`} onClick={changeDifficulty}>mediumHard</button>
          <button className={`difficulty ${difficultyLevels[3]}`} onClick={changeDifficulty}>Hard</button>
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
          <button className={`difficulty ${difficultyLevels[0]}`} onClick={changeDifficulty}>Easy</button>
          <button className={`difficulty ${difficultyLevels[1]}`} onClick={changeDifficulty}>mediumEasy</button>
          <button className={`difficulty ${difficultyLevels[2]}`} onClick={changeDifficulty}>mediumHard</button>
          <button className={`difficulty ${difficultyLevels[3]}`} onClick={changeDifficulty}>Hard</button>
        </div>
      </>
    )
  }
}

export default App