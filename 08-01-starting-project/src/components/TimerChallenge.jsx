import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

//let timer;

export default function TimerChallenge({title, targetTime}) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef();
    const dialog = useRef();

    function handleStart(){
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }
    
    return (
        <>
            {timerExpired ? <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>: null}
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerExpired ? 'active' : undefined}>
                    {timerStarted ? 'Time is running': 'Click to start'} 
                </p>
            </section>
        </>
    );
}