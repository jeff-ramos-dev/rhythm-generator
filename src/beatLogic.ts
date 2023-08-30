// Need to decide on minimums and maximums subdivisionCount, beatCount, and barCount
import quarterRest from './assets/0000.png'
import one from './assets/1000.png'
import e from './assets/0100.png'
import and from './assets/0010.png'
import a from './assets/0001.png'
import oneE from './assets/1100.png'
import eAnd from './assets/0110.png'
import andA from './assets/0011.png'
import oneA from './assets/1001.png'
import oneAnd from './assets/1010.png'
import eA from './assets/0101.png'
import oneEAnd from './assets/1110.png'
import eAndA from './assets/0111.png'
import oneAndA from './assets/1011.png'
import oneEA from './assets/1101.png'
import oneEAndA from './assets/1111.png'
import tpl from './assets/111.png'
import p from './assets/010.png'
import l from './assets/001.png'
import tp from './assets/110.png'
import pl from './assets/011.png'
import tl from './assets/101.png'

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
        const possibleSubdivisionCounts: number[] = [3, 4];
        let subdivisionCount;
        for (let i = 0; i < beatCount; i++) {
            // subdivisionCount = Math.ceil(Math.random() * 4);
            subdivisionCount = possibleSubdivisionCounts[Math.floor(Math.random() * 2)];
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

type SubdivisionMetadata = Record<string, string>;

enum Subdivision {
    THREE = 'THREE',
    FOUR = 'FOUR',
}


const SubdivisionMap: Record<Subdivision, SubdivisionMetadata> = {
    [Subdivision.THREE]: {
        '000': quarterRest, 
        '100': one, 
        '010': p,
        '001': l,
        '110': tp,
        '011': pl,
        '101': tl,
        '111': tpl,
    },
    [Subdivision.FOUR]: {
        '0000': quarterRest, 
        '1000': one, 
        '0100': e,
        '0010': and,
        '0001': a,
        '1010': oneAnd,
        '0101': eA,
        '1100': oneE,
        '0110': eAnd,
        '0011': andA,
        '1001': oneA,
        '1110': oneEAnd,
        '0111': eAndA,
        '1011': oneAndA,
        '1101': oneEA,
        '1111': oneEAndA,
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
    createPhrase,
    Beat,
    Bar,
    Phrase,
    SubdivisionMap
}