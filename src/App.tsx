import './App.css'
import { useState } from 'react'
import { Bar, Phrase, difficultyLevels } from './utils.ts'
import PhraseElement from './components/PhraseElement.tsx'
import BarElement from './components/BarElement.tsx'
import ButtonContainers from './components/ButtonContainers.tsx'

function App() {
  const initialBar = new Bar(4, 'mild');
  const initialPhrase = new Phrase(4, 'mild');

  const [bar, setBar] = useState(initialBar);
  const [phrase, setPhrase] = useState(initialPhrase);
  const [setting, setSetting] = useState('bar');
  const [difficulty, setDifficulty] = useState(difficultyLevels[0]);

  function changeDifficulty(e: Event) {
    if(!e.target) return
    const target = e.target as HTMLButtonElement;
    if (!target.textContent) return
    setDifficulty(target.textContent);
    setBar(new Bar(4, target.textContent));
    setPhrase(new Phrase(4, target.textContent));
    document.querySelector('.selected')?.classList.remove('selected');
    target.classList.add('selected');
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
        <ButtonContainers
          handleClick={handleClick}
          handleSetting={handleSetting}
          changeDifficulty={changeDifficulty}
          difficultyLevels={difficultyLevels}
          state='phrase'
        />
      </>
    )
  } else {
    return (
      <>
        <BarElement bar={bar} />  
        <ButtonContainers
          handleClick={handleClick}
          handleSetting={handleSetting}
          changeDifficulty={changeDifficulty}
          difficultyLevels={difficultyLevels}
          state='bar'
        />
      </>
    )
  }
}

export default App