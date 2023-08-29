import './App.css'
import { useState } from 'react'
import barline from './assets/Barline.png'
import staff from './assets/Stave-lines-1-system.png'
import timeSignature from './assets/4-4.png'
import { createBar, SubdivisionMap } from './beatLogic'

const quarterRest = SubdivisionMap.FOUR['0000'];
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
        className={`note ${beatNumber}`} 
        src={quarterRest} 
        alt="quarter-rest" 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '0', '0'][index])
  ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={one} 
        alt={beatNumber}
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '0', '0'][index])
    ) {
    beatImage.push(
        <img 
          key={beatNumber} 
          className={`note ${beatNumber}`} 
          src={e} 
          alt="e" 
        />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '0', '1', '0'][index])
    ) {
    beatImage.push(
        <img 
          key={beatNumber} 
          className={`note ${beatNumber}`} 
          src={and} 
          alt="and" 
        />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '0', '0', '1'][index])
    ) {
    beatImage.push(
        <img 
          key={beatNumber} 
          className={`note ${beatNumber}`} 
          src={a} 
          alt="a" 
        />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '0', '0'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={oneE} 
        alt={`${beatNumber}-e`} 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '1', '0'][index])
    ) {
    beatImage.push(
        <img 
          key={beatNumber} 
          className={`note ${beatNumber}`} 
          src={eAnd} 
          alt="e-and" 
        />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '0', '1', '1'][index])
    ) {
    beatImage.push(
        <img 
          key={beatNumber} 
          className={`note ${beatNumber}`} 
          src={andA} 
          alt="and-a" 
        />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '0', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={oneA} 
        alt={`${beatNumber}-a`} 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '1', '0'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={oneAnd} 
        alt={`${beatNumber}-and`} 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '0', '1'][index])
    ) {
    beatImage.push(
        <img 
          key={beatNumber + 5} 
          className={`note ${beatNumber}`} 
          src={eA} 
          alt="e-a" 
        />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '1', '0'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={oneEAnd} 
        alt={`${beatNumber}-e-and`} 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['0', '1', '1', '1'][index])
    ) {
    beatImage.push(
        <img 
          key={beatNumber} 
          className={`note ${beatNumber}`} 
          src={eAndA} 
          alt="e-and-a" 
        />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '0', '1', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={oneAndA} 
        alt={`${beatNumber}-and-a`} 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '0', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={oneEA} 
        alt={`${beatNumber}-e-a`} 
      />
    )
  } else if (beatArray.every(
    (val, index) => val === ['1', '1', '1', '1'][index])
    ) {
    beatImage.push(
      <img 
        key={beatNumber} 
        className={`note ${beatNumber}`} 
        src={oneEAndA} 
        alt={`${beatNumber}-e-and-a`}
      />
    )
  } 
        
  return beatImage;
}

export default App
