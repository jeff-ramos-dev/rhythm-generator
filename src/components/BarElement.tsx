import barline from '../assets/Barline.png'
import staff from '../assets/Stave-lines-1-system.png'
import timeSignature from '../assets/4-4.png'
import {Bar} from '../utils.ts'
import BeatImage from './BeatElement.tsx'

type barProps = {
    bar: Bar;
}

export default function BarElement(props: barProps) {
    const {bar} = props;
    const beatNumbers = ['one', 'two', 'three', 'four'];
    return (
        <div className="bar-container">
            <img className="staff" src={staff} alt="staff" />
            <img className="barline start" src={barline} alt="barline" />
            <img className="time-signature " src={timeSignature} alt="time-signature" />
            {
                bar.beats.map((beat, index) => {
                    return (
                        <BeatImage
                            key={beatNumbers[index]}
                            beatNumber={beatNumbers[index]}
                            permutation={beat.subdivisions.join('')}
                        />
                    )
                })
            }
            <img className="barline end" src={barline} alt="barline" />
        </div>   
    )
}