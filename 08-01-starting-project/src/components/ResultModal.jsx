import { useImperativeHandle } from "react";

export default function ResultModal({ref, result, targetTime}){
    
    useImperativeHandle(ref, () => ({
        showModal: () => {
            ref.current.showModal();
        },
        open: () => {
            ref.current.showModal();
        },
        close: () => {
            ref.current.close();
        }
    }));
    
    return (<dialog className="result-modal" open ref={ref}>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stop the time with  <strong> X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>);
}