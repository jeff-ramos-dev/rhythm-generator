import {Phrase} from '../utils.ts'
import BarElement from './BarElement.tsx'

type phraseProps = {
    phrase: Phrase;
}

export default function PhraseElement(props: phraseProps) {
    const {phrase} = props;
    return (
        <>
            {phrase.bars.map((bar, index) => <BarElement key={index} bar={bar} />)}
        </>
    )
}