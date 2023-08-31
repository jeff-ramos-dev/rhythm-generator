import { SubdivisionMap } from '../utils.ts'

type imgProps = {
    beatNumber: string;
    permutation: string;
}

export default function BeatImage(props: imgProps) {
    const {beatNumber, permutation} = props;
    let classes;
    if (permutation.length === 3 && !['000', '100'].includes(permutation)) {
        classes = `note triplet ${beatNumber}`
    } else {
        classes = `note ${beatNumber}`
    }
    return (
        <img 
          key={beatNumber} 
          className={classes}
          src={SubdivisionMap.FOUR[permutation]}
        />
    )
}