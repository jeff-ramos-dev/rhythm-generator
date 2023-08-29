// Need to decide on minimums and maximums subdivisionCount, beatCount, and barCount
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

class Beat {
    subdivisions: string[] // number of subdivisions is implied in the length of this array

    constructor(subdivisionCount: number) {
        this.subdivisions = [];
        // randomly generate a string of length n and push to subdivisions array
        for (let i = 0; i < subdivisionCount; i++) {
            this.subdivisions.push(Math.floor(Math.random() * 2).toString());
        }
    }
}

class Bar {
    beats: Beat[]; // number of beats is implied in the length of this array

    constructor(beatCount: number) {
        this.beats = [];
        for (let i = 0; i < beatCount; i++) {
            // let subdivisionCount = Math.ceil(Math.random() * 4);
            let subdivisionCount = 4; // hardcoded value for testing
            this.beats.push(new Beat(subdivisionCount));
        }
    }
}

class Phrase {
    bars: Bar[];

    constructor(barCount: number) {
        this.bars = [];
        for (let i = 0; i < barCount; i++) {
            // let beatCount = Math.ceil(Math.random() * 6);
            let beatCount = 4; // hardcoded value for testing
            this.bars.push(new Bar(beatCount));
        }
    }
}

type SubdivisionMetadata = Record<string, string[]>;

enum Subdivision {
    THREE = 'THREE',
    FOUR = 'FOUR',
}


const SubdivisionMap: Record<Subdivision, SubdivisionMetadata> = {
    [Subdivision.THREE]: {
        // '000': imageURL, 
        // '100': imageURL, 
        // '010': imageURL,
        // '001': imageURL,
        // '110': imageURL,
        // '011': imageURL,
        // '101': imageURL,
        // '111': imageURL,
    },
    [Subdivision.FOUR]: {
        '0000': [quarterRest], 
        '1000': [quarterNote], 
        '0100': [sixteenthRest, dottedEighthNote],
        '0010': [eighthRest, eighthNote],
        '0001': [dottedEighthRest, sixteenthNote],
        '1010': [eighthTwo],
        '0101': [sixteenthRest, sixteenthTwo816],
        '1100': [sixteenthTwo16d8],
        '0110': [sixteenthRest, sixteenthTwo168],
        '0011': [eighthRest, sixteenthTwo],
        '1001': [sixteenthTwod816],
        '1110': [sixteenthThree16168],
        '0111': [sixteenthRest, sixteenthThree],
        '1011': [sixteenthThree81616],
        '1101': [sixteenthThree16816],
        '1111': [sixteenthFour],
    }
}

function createBeat(subdivisionCount: number): Beat {
    // return Beat with correct subdivision count
    return new Beat(subdivisionCount);
}

function createBar(beatCount: number): Bar {
    // return Bar with correct beat count
    return new Bar(beatCount);
}

function createPhrase(barCount: number): Phrase {
    // return Phrase with correct bar count
    return new Phrase(barCount);
}

export {
    createBar,
    SubdivisionMap
}