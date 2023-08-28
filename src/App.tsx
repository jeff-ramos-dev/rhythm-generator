import './App.css'
import { useState } from 'react'
import barline from './assets/sib-imgs/Barline.png'
import staff from './assets/sib-imgs/Stave-lines-1-system.png'
import timeSignature from './assets/sib-imgs/4-4.png'
import quarterNote from './assets/sib-imgs/quarter-note.png'
import quarterRest from './assets/sib-imgs/quarter-rest.png'
import eighthNote from './assets/sib-imgs/eighth-note.png'
import eighthTwo from './assets/sib-imgs/eighth-two.png'
import eighthRest from './assets/sib-imgs/eighth-rest.png'
import dottedEighthNote from './assets/sib-imgs/dotted-eighth-note.png'
import dottedEighthRest from './assets/sib-imgs/dotted-eighth-rest.png'
import sixteenthNote from './assets/sib-imgs/sixteenth-note.png'
import sixteenthRest from './assets/sib-imgs/sixteenth-rest.png'
import sixteenthFour from './assets/sib-imgs/sixteenth-four.png'
import sixteenthThree16816 from './assets/sib-imgs/sixteenth-three-16-8-16.png'
import sixteenthThree16168 from './assets/sib-imgs/sixteenth-three-16-16-8.png'
import sixteenthThree81616 from './assets/sib-imgs/sixteenth-three-8-16-16.png'
import sixteenthThree from './assets/sib-imgs/sixteenth-three.png'
import sixteenthTwo816 from './assets/sib-imgs/sixteenth-two-8-16.png'
import sixteenthTwo168 from './assets/sib-imgs/sixteenth-two-16-8.png'
import sixteenthTwod816 from './assets/sib-imgs/sixteenth-two-d8-16.png'
import sixteenthTwo16d8 from './assets/sib-imgs/sixteenth-two-16-d8.png'
import sixteenthTwo from './assets/sib-imgs/sixteenth-two-16-16.png'
import { Beat, Bar, Phrase, createBeat, createBar, createPhrase } from './beatLogic'

console.log(new Phrase(8))

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
  const rhythm = generateRandomRhythm();
  const beats = [];
  for (let i = 0; i < 16; i += 4) {
    const currBeat = rhythm.slice(i, i + 4);
    let number: string = '';
    switch (Math.floor(i / 4)) {
      case (0): 
        number = 'one';
        break;
      case (1):
        number = 'two';
        break;
      case (2):
        number = 'three';
        break;
      case (3):
        number = 'four';
        break;
    }
    beats.push(setImagesForBeat(currBeat, number));
  }
  return beats
}

function generateRandomRhythm() {
    const tfTable  = [];
    const tf = [true, false];
    let play;
    for (let i = 0; i < 16; i++) {
        play = tf[Math.floor(Math.random() * 2)]
        tfTable.push(play);
    }
    return tfTable
}

function setImagesForBeat(beatArray: boolean[], beatNumber: string) {
  const beatImage = [];
  if (beatArray.every((val, index) => val === [false, false, false, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`quarter-rest note ${beatNumber}`} src={quarterRest} alt="quarter-rest" />
    )
  } else if (beatArray.every((val, index) => val === [true, false, false, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`quarter-note note ${beatNumber}`} src={quarterNote} alt="quarter-note" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, false, false][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`dotted-eighth-note note e-of-${beatNumber}`} src={dottedEighthNote} alt="dotted-eighth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [false, false, true, false][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`eighth-rest note ${beatNumber}`} src={eighthRest} alt="eighth-rest" />
        <img key={beatNumber + 10} className={`eighth-note note and-of-${beatNumber}`} src={eighthNote} alt="eighth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [false, false, false, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`dotted-eighth-rest note ${beatNumber}`} src={dottedEighthRest} alt="dotted-eighth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-note note a-of-${beatNumber}`} src={sixteenthNote} alt="sixteenth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, true, false, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthTwo16d8} alt="sixteenth-two-16-d8" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, true, false][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src={sixteenthTwo168} alt="sixteenth-two-16-8" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [false, false, true, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`eighth-rest note ${beatNumber}`} src={eighthRest} alt="eighth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-2 note and-of-${beatNumber}`} src={sixteenthTwo} alt="sixteenth-two" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, false, false, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthTwod816} alt="sixteenth-two-d8-16" />
    )
  } else if (beatArray.every((val, index) => val === [true, false, true, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`eighth-two note ${beatNumber}`} src={eighthTwo} alt="eighth-two" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, false, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src={sixteenthTwo816} alt="sixteenth-two-8-16" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, true, true, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-3 note ${beatNumber}`} src={sixteenthThree16168} alt="sixteenth-three-16-16-8" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, true, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src={sixteenthThree} alt="sixteenth-three" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, false, true, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthThree81616} alt="sixteenth-three-8-16-16" />
    )
  } else if (beatArray.every((val, index) => val === [true, true, false, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthThree16816} alt="sixteenth-three-16-8-16" />
    )
  } else if (beatArray.every((val, index) => val === [true, true, true, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthFour} alt="sixteenth-four" />
    )
  } 

  return beatImage;
}

export default App
