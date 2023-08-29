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

function App() {
  const [beats, setBeats] = useState(calcBeats());

  console.log(beats);
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
  const beatArr = [];
  for (let i = 0; i < 4; i++) {
    const currBeat: string[] = bar.beats[i].subdivisions;
    console.log(i+1, currBeat)
    let number: string = '';
    if (i === 0) number = 'one';
    else if (i === 1) number = 'two';
    else if (i === 2) number = 'three';
    else if (i === 3) number = 'four';
    beatArr.push(setImagesForBeat(currBeat, number));
  }
  return beatArr;
}
function setImagesForBeat(beatArray: string[], beatNumber: string) {
  console.log(beatArray);
  const beatImage: JSX.Element[] = [];
  if (beatArray.every((val, index) => val === ['0', '0', '0', '0'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`quarter-rest note ${beatNumber}`} src={quarterRest} alt="quarter-rest" />
    )
  } else if (beatArray.every((val, index) => val === ['1', '0', '0', '0'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`quarter-note note ${beatNumber}`} src={quarterNote} alt="quarter-note" />
    )
  } else if (beatArray.every((val, index) => val === ['0', '1', '0', '0'][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`dotted-eighth-note note e-of-${beatNumber}`} src={dottedEighthNote} alt="dotted-eighth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === ['0', '0', '1', '0'][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`eighth-rest note ${beatNumber}`} src={eighthRest} alt="eighth-rest" />
        <img key={beatNumber + 10} className={`eighth-note note and-of-${beatNumber}`} src={eighthNote} alt="eighth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === ['0', '0', '0', '1'][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`dotted-eighth-rest note ${beatNumber}`} src={dottedEighthRest} alt="dotted-eighth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-note note a-of-${beatNumber}`} src={sixteenthNote} alt="sixteenth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === ['1', '1', '0', '0'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthTwo16d8} alt="sixteenth-two-16-d8" />
    )
  } else if (beatArray.every((val, index) => val === ['0', '1', '1', '0'][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src={sixteenthTwo168} alt="sixteenth-two-16-8" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === ['0', '0', '1', '1'][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`eighth-rest note ${beatNumber}`} src={eighthRest} alt="eighth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-2 note and-of-${beatNumber}`} src={sixteenthTwo} alt="sixteenth-two" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === ['1', '0', '0', '1'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthTwod816} alt="sixteenth-two-d8-16" />
    )
  } else if (beatArray.every((val, index) => val === ['1', '0', '1', '0'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`eighth-two note ${beatNumber}`} src={eighthTwo} alt="eighth-two" />
    )
  } else if (beatArray.every((val, index) => val === ['0', '1', '0', '1'][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src={sixteenthTwo816} alt="sixteenth-two-8-16" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === ['1', '1', '1', '0'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-3 note ${beatNumber}`} src={sixteenthThree16168} alt="sixteenth-three-16-16-8" />
    )
  } else if (beatArray.every((val, index) => val === ['0', '1', '1', '1'][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src={sixteenthRest} alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src={sixteenthThree} alt="sixteenth-three" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === ['1', '0', '1', '1'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthThree81616} alt="sixteenth-three-8-16-16" />
    )
  } else if (beatArray.every((val, index) => val === ['1', '1', '0', '1'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthThree16816} alt="sixteenth-three-16-8-16" />
    )
  } else if (beatArray.every((val, index) => val === ['1', '1', '1', '1'][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src={sixteenthFour} alt="sixteenth-four" />
    )
  } 
  console.log(beatImage);
  return beatImage;
}

export default App
