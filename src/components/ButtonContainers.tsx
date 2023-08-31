type buttonProps = {
    handleClick: Function;
    handleSetting: Function;
    changeDifficulty: Function;
    difficultyLevels: string[];
    state: string;
}

export default function ButtonContainers(props: buttonProps) {
    const {handleClick, handleSetting, changeDifficulty, difficultyLevels, state} = props
    return (
        <>
            <div className="buttonContainer">
                <button 
                    className="new" 
                    onClick={(event) => handleClick(event)}
                >
                    New {state} 
                </button>
                <button 
                    className="setting" 
                    onClick={(event) => handleSetting(event)}
                >
                    Switch to {state === 'phrase' ? 'Bar' : 'Phrase'} 
                </button>
            </div>
            <div className="buttonContainer">
                <button 
                    className={`difficulty ${difficultyLevels[0]}`} 
                    onClick={(event) => changeDifficulty(event)}
                >
                    mild
                </button>
                <button 
                    className={`difficulty ${difficultyLevels[1]}`} 
                    onClick={(event) => changeDifficulty(event)}
                >
                    medium
                </button>
                <button 
                    className={`difficulty ${difficultyLevels[2]}`} 
                    onClick={(event) => changeDifficulty(event)}
                >
                    hot
                </button>
                <button 
                    className={`difficulty ${difficultyLevels[3]}`} 
                    onClick={(event) => changeDifficulty(event)}
                >
                    fire
                </button>
            </div>
        </>
    )
}