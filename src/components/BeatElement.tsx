import { SubdivisionMap } from '../utils.ts'

type imgProps = {
    beatNumber: string;
    permutation: string;
}

export default function BeatImage(props: imgProps) {
    const {beatNumber, permutation} = props;
    let classes = `note ${beatNumber}`
    let subdivisions;
    if (permutation.length === 3) {
        ['000','100'].includes(permutation) ? classes = classes : classes += " triplet";
        subdivisions = SubdivisionMap.THREE[permutation];
    } else {
        subdivisions = SubdivisionMap.FOUR[permutation];
    }
    return (
        <img 
            key={beatNumber} 
            className={classes}
            src={subdivisions}
        />
    )
}