import './App.css'
import './assets/Barline.png'
import './assets/Stave-lines-1-system.png'
import './assets/4-4.png'
import './assets/sib-imgs/whole-note.png'
import './assets/sib-imgs/whole-rest.png'
import './assets/sib-imgs/half-note.png'
import './assets/sib-imgs/half-rest.png'
import './assets/sib-imgs/dotted-half-note.png'
import './assets/sib-imgs/dotted-half-rest.png'
import './assets/sib-imgs/quarter-note.png'
import './assets/sib-imgs/quarter-rest.png'
import './assets/sib-imgs/dotted-quarter-note.png'
import './assets/sib-imgs/dotted-quarter-rest.png'
import './assets/sib-imgs/eighth-note.png'
import './assets/sib-imgs/eighth-two.png'
import './assets/sib-imgs/eighth-rest.png'
import './assets/sib-imgs/dotted-eighth-note.png'
import './assets/sib-imgs/dotted-eighth-rest.png'
import './assets/sib-imgs/sixteenth-note.png'
import './assets/sib-imgs/sixteenth-rest.png'
import './assets/sib-imgs/sixteenth-three-16-8-16.png'
import './assets/sib-imgs/sixteenth-three-16-16-8.png'
import './assets/sib-imgs/sixteenth-three-8-16-16.png'
import './assets/sib-imgs/sixteenth-three.png'
import './assets/sib-imgs/sixteenth-two-8-16.png'
import './assets/sib-imgs/sixteenth-two-16-8.png'
import './assets/sib-imgs/sixteenth-two-16-16.png'
import './assets/sib-imgs/sixteenth-two-d8-16.png'

function App() {
  const rhythm = generateRandomRhythm();
  const beats = []
  for (let i = 0; i < 16; i += 4) {
    const currBeat = rhythm.slice(i, i + 4);
    let number;
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

    beats.push(setImagesForBeat(currBeat, number))
  }

  return (
    <div className="bar-container">
      <img className="staff" src="src/assets/Stave-lines-1-system.png" alt="staff" />
      <img className="barline start" src="src/assets/Barline.png" alt="barline" />
      <img className="time-signature " src="src/assets/4-4.png" alt="time-signature" />
      {beats[0]}
      {beats[1]}
      {beats[2]}
      {beats[3]}
      <img className="barline end" src="src/assets/Barline.png" alt="barline" />
    </div>
  )
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

function setImagesForBeat(beatArray, beatNumber) {
  const beatImage = [];
  if (beatArray.every((val, index) => val === [false, false, false, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`quarter-rest note ${beatNumber}`} src="src/assets/sib-imgs/quarter-rest.png" alt="quarter-rest" />
    )
  } else if (beatArray.every((val, index) => val === [true, false, false, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`quarter-note note ${beatNumber}`} src="src/assets/sib-imgs/quarter-note.png" alt="quarter-note" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, false, false][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`}src="src/assets/sib-imgs/sixteenth-rest.png" alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`dotted-eighth-note note e-of-${beatNumber}`} src="src/assets/sib-imgs/dotted-eighth-note.png" alt="dotted-eighth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [false, false, true, false][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`eighth-rest note ${beatNumber}`} src="src/assets/sib-imgs/eighth-rest.png" alt="eighth-rest" />
        <img key={beatNumber + 10} className={`eighth-note note and-of-${beatNumber}`} src="src/assets/sib-imgs/eighth-note.png" alt="eighth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [false, false, false, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`dotted-eighth-rest note ${beatNumber}`} src="src/assets/sib-imgs/dotted-eighth-rest.png" alt="dotted-eighth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-note note a-of-${beatNumber}`} src="src/assets/sib-imgs/sixteenth-note.png" alt="sixteenth-note" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, true, false, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-two-16-d8.png" alt="sixteenth-two-16-d8" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, true, false][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-rest.png" alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src="src/assets/sib-imgs/sixteenth-two-16-8.png" alt="sixteenth-two-16-8" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [false, false, true, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`eighth-rest note ${beatNumber}`} src="src/assets/sib-imgs/eighth-rest.png" alt="eighth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-2 note and-of-${beatNumber}`} src="src/assets/sib-imgs/sixteenth-two-16-16.png" alt="sixteenth-two" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, false, false, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-two-d8-16.png" alt="sixteenth-two-d8-16" />
    )
  } else if (beatArray.every((val, index) => val === [true, false, true, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`eighth-two note ${beatNumber}`} src="src/assets/sib-imgs/eighth-two.png" alt="eighth-two" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, false, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-rest.png" alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src="src/assets/sib-imgs/sixteenth-two-8-16.png" alt="sixteenth-two-8-16" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, true, true, false][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-3 note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-three-16-16-8.png" alt="sixteenth-three-16-16-8" />
    )
  } else if (beatArray.every((val, index) => val === [false, true, true, true][index])) {
    beatImage.push(
      <div key={beatNumber}>
        <img key={beatNumber + 5} className={`sixteenth-rest note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-rest.png" alt="sixteenth-rest" />
        <img key={beatNumber + 10} className={`sixteenth-3 note e-of-${beatNumber}`} src="src/assets/sib-imgs/sixteenth-three.png" alt="sixteenth-three" />
      </div>
    )
  } else if (beatArray.every((val, index) => val === [true, false, true, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-three-8-16-16.png" alt="sixteenth-three-8-16-16" />
    )
  } else if (beatArray.every((val, index) => val === [true, true, false, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-three-16-8-16.png" alt="sixteenth-three-16-8-16" />
    )
  } else if (beatArray.every((val, index) => val === [true, true, true, true][index])) {
    beatImage.push(
      <img key={beatNumber} className={`sixteenth-4 note ${beatNumber}`} src="src/assets/sib-imgs/sixteenth-four.png" alt="sixteenth-four" />
    )
  } 

  return beatImage;
}

export default App
