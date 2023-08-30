import {Phrase} from '../beatLogic.ts'
import BarElement from './BarElement.tsx'

type phraseProps = {
    phrase: Phrase;
}

export default function PhraseElement(props: phraseProps) {
    const {phrase} = props;
    return (
        <>
            {phrase.bars.map(bar => <BarElement bar={bar} />)}
        </>
    )
}