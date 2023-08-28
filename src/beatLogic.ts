class Beat {
    subdivisions: string[] // number of subdivisions is implied in the length of this array

    constructor(subdivisionCount: number) {
        this.subdivisions = [];
        // randomly generate a string of length n and push to subdivisions array
        for (let i = 0; i < subdivisionCount; i++) {
            this.subdivisions.push(Math.floor(Math.random() * 2).toString());
        }
        // e.g. subdivisionCount = 4: '0101'
        // subdivisionCount = 6: '001100'
    }
}

class Bar {
    beats: Beat[]; // number of beats is implied in the length of this array

    constructor(beatCount: number) {
        this.beats = [];
        // create n beats and push to beat array
    }
}

class Phrase {
    bars: Bar[];

    constructor(barCount: number) {
        this.bars = [];
        // create n bars and push to bar array
    }
}

type SubdivisionMetadata = Record<string, string>;

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
        // '0000': imageURL, 
        // '1000': imageURL, 
        // '0100': imageURL,
        // '0010': imageURL,
        // '0001': imageURL,
        // '1010': imageURL,
        // '0101': imageURL,
        // '1100': imageURL,
        // '0110': imageURL,
        // '0011': imageURL,
        // '1001': imageURL,
        // '1110': imageURL,
        // '0111': imageURL,
        // '1011': imageURL,
        // '1101': imageURL,
        // '1111': imageURL,
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