import './App.css'
import { useState } from 'react'
import barline from './assets/sib-imgs/Barline.png'
import staff from './assets/sib-imgs/Stave-lines-1-system.png'
import timeSignature from './assets/sib-imgs/4-4.png'
import { createBar, SubdivisionMap } from './beatLogic'

const quarterRestMap = SubdivisionMap.FOUR['0000'];
const one = SubdivisionMap.FOUR['1000'];
const e = SubdivisionMap.FOUR['0100'];
const and = SubdivisionMap.FOUR['0010'];
const a = SubdivisionMap.FOUR['0001'];
const oneE = SubdivisionMap.FOUR['1100'];
const eAnd = SubdivisionMap.FOUR['0110'];
const andA = SubdivisionMap.FOUR['0011'];
const oneA = SubdivisionMap.FOUR['1001'];
const oneAnd = SubdivisionMap.FOUR['1010'];
const eA = SubdivisionMap.FOUR['0101'];
const oneEAnd = SubdivisionMap.FOUR['1110'];
const eAndA = SubdivisionMap.FOUR['0111'];
const oneAndA = SubdivisionMap.FOUR['1011'];
const oneEA = SubdivisionMap.FOUR['1101'];
const oneEAndA = SubdivisionMap.FOUR['1111'];

function App() {
  const [beats, setBeats] = useState(calcBeats());

  function handleClick() {
    setBeats(calcBeats());
  }

  return (
    <div className="bar-container">
      <img className="staff" src={staff} alt="staff" />
      <img className="barline start" src={barline} alt="barline" />
      <img className="time-signature " src={timeSignature} alt="time-signature" />
      {beats[0]}
      {beats[1]}
      {beats[2]}
      {beats[3]}
      <img className="barline end" src={barline} alt="barline" />
      <button className="new-bar" onClick={handleClick}>New Bar</button>
    </div>
  )
}

function calcBeats() {
  const bar = createBar(4);
  const beatArray = [];
  for (let i = 0; i < 4; i++) {
    const currBeat: string[] = bar.beats[i].subdivisions;
    let beatNumber: string = '';
    if (i === 0) beatNumber = 'one';
    else if (i === 1) beatNumber = 'two';
    else if (i === 2) beatNumber = 'three';
    else if (i === 3) beatNumber = 'four';
    beatArray.push(setImagesForBeat(currBeat, beatNumber));
  }
  return beatArray;
}

function setImagesForBeat(beatArray: string[], beatNumber: string) {
  const beatImage: JSX.Element[] = [];

  if (beatArray.every(
    (val, index) => val === ['0', '0', '0', '0'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`quarter-rest note ${beatNumber}`} 
        src={quarterRestMap[0]} 
        alt="quarter-rest" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '0', '0'][index])
  ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`quarter-note note ${beatNumber}`} 
        src={one[0]} alt="quarter-note" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '0', '0'][index])
    ) {
    beatImage.push(
      <div key={beatNumber}>
        <img 
          key={beatNumber + 5} 
          className={`sixteenth-rest note ${beatNumber}`} 
          src={e[0]} 
          alt="sixteenth-rest" 
        />
        <img 
          key={beatNumber + 10} 
          className={`dotted-eighth-note note e-of-${beatNumber}`} 
          src={e[1]} 
          alt="dotted-eighth-note" 
        />
      </div>
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '0', '1', '0'][index])
    ) {
    beatImage.push(
      <div key={beatNumber}>
        <img 
          key={beatNumber + 5} 
          className={`eighth-rest note ${beatNumber}`} 
          src={and[0]} 
          alt="eighth-rest" 
        />
        <img 
          key={beatNumber + 10} 
          className={`eighth-note note and-of-${beatNumber}`} 
          src={and[1]} 
          alt="eighth-note" 
        />
      </div>
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '0', '0', '1'][index])
    ) {
    beatImage.push(
      <div key={beatNumber}>
        <img 
          key={beatNumber + 5} 
          className={`dotted-eighth-rest note ${beatNumber}`} 
          src={a[0]} 
          alt="dotted-eighth-rest" 
        />
        <img 
          key={beatNumber + 10} 
          className={`sixteenth-note note a-of-${beatNumber}`} 
          src={a[1]} 
          alt="sixteenth-note" 
        />
      </div>
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '0', '0'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`sixteenth-4 note ${beatNumber}`} 
        src={oneE[0]} 
        alt="sixteenth-two-16-d8" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '1', '0'][index])
    ) {
    beatImage.push(
      <div key={beatNumber}>
        <img 
          key={beatNumber + 5} 
          className={`sixteenth-rest note ${beatNumber}`} 
          src={eAnd[0]} 
          alt="sixteenth-rest" 
        />
        <img 
          key={beatNumber + 10} 
          className={`sixteenth-3 note e-of-${beatNumber}`} 
          src={eAnd[1]} 
          alt="sixteenth-two-16-8" 
        />
      </div>
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '0', '1', '1'][index])
    ) {
    beatImage.push(
      <div key={beatNumber}>
        <img 
          key={beatNumber + 5} 
          className={`eighth-rest note ${beatNumber}`} 
          src={andA[0]} 
          alt="eighth-rest" 
        />
        <img 
          key={beatNumber + 10} 
          className={`sixteenth-2 note and-of-${beatNumber}`} 
          src={andA[1]} 
          alt="sixteenth-two" 
        />
      </div>
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '0', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`sixteenth-4 note ${beatNumber}`} 
        src={oneA[0]} 
        alt="sixteenth-two-d8-16" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '1', '0'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`eighth-two note ${beatNumber}`} 
        src={oneAnd[0]} 
        alt="eighth-two" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '0', '1'][index])
    ) {
    beatImage.push(
      <div key={beatNumber}>
        <img 
          key={beatNumber + 5} 
          className={`sixteenth-rest note ${beatNumber}`} 
          src={eA[0]} 
          alt="sixteenth-rest" 
        />
        <img 
          key={beatNumber + 10} 
          className={`sixteenth-3 note e-of-${beatNumber}`} 
          src={eA[1]} 
          alt="sixteenth-two-8-16" 
        />
      </div>
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '1', '0'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`sixteenth-3 note ${beatNumber}`} 
        src={oneEAnd[0]} 
        alt="sixteenth-three-16-16-8" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '1', '1'][index])
    ) {
    beatImage.push(
      <div key={beatNumber}>
        <img 
          key={beatNumber + 5} 
          className={`sixteenth-rest note ${beatNumber}`} 
          src={eAndA[0]} 
          alt="sixteenth-rest" 
        />
        <img 
          key={beatNumber + 10} 
          className={`sixteenth-3 note e-of-${beatNumber}`} 
          src={eAndA[1]} 
          alt="sixteenth-three" 
        />
      </div>
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '1', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`sixteenth-4 note ${beatNumber}`} 
        src={oneAndA[0]} 
        alt="sixteenth-three-8-16-16" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '0', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`sixteenth-4 note ${beatNumber}`} 
        src={oneEA[0]} 
        alt="sixteenth-three-16-8-16" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '1', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`sixteenth-4 note ${beatNumber}`} 
        src={oneEAndA[0]} 
        alt="sixteenth-four" 
      />
    )
  } 

  return beatImage;
}

export default App
