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

const difficultyLevels = ['mild', 'medium', 'hot', 'fire'];

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


class Beat {
    subdivisions: string[] 
    mildSubdivisions = ['0000', '1000', '1010', '0010'];
    mediumSubdivisions = [
        ...this.mildSubdivisions, 
            '1111', 
            '1110', 
            '1011'
        ];
    hotSubdivisions = [
        ...this.mediumSubdivisions, 
            '1001', 
            '0011', 
            '1100', 
            '1101'
        ];
    fireSubdivisions = [
        ...this.hotSubdivisions, 
            '0101', 
            '0110', 
            '0111', 
            '0100', 
            '0001'
        ];
    tripletSubdivisions = ['000', '100', '110', '111', '010', '011', '001', '101'];

    constructor(difficulty: string) {
        this.subdivisions = [];
        switch (difficulty) {
            case difficultyLevels[0]:
                this.subdivisions.push(
                    this.mildSubdivisions[
                        Math.floor(Math.random() * this.mildSubdivisions.length)
                    ]
                )
                break;
            case difficultyLevels[1]:
                this.subdivisions.push(
                    this.mediumSubdivisions[
                        Math.floor(Math.random() * this.mediumSubdivisions.length)
                    ]
                )
                break;
            case difficultyLevels[2]:
                this.subdivisions.push(
                    this.hotSubdivisions[
                        Math.floor(Math.random() * this.hotSubdivisions.length)
                    ]
                )
                break;
            case difficultyLevels[3]:
                this.subdivisions.push(
                    this.fireSubdivisions[
                        Math.floor(Math.random() * this.fireSubdivisions.length)
                    ]
                )
                break;
        }

    }
}

class Bar {
    beats: Beat[]; 

    constructor(beatCount: number, difficulty: string) {
        this.beats = [];
        for (let i = 0; i < beatCount; i++) {
            this.beats.push(new Beat(difficulty));
        }
    }
}

class Phrase {
    bars: Bar[];


    constructor(barCount: number, difficulty: string) {
        this.bars = [];
        for (let i = 0; i < barCount; i++) {
            let beatCount = 4; // hardcoded value for testing
            this.bars.push(new Bar(beatCount, difficulty));
        }
    }
}

export {
    Beat,
    Bar,
    Phrase,
    difficultyLevels,
    SubdivisionMap
}