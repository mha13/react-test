import { useRef } from "react";

const Hook3=()=> {
    const inputEl = useRef(null);
    const inputEl2 = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    const onButtonClick2 = () => {
        // `current` points to the mounted text input element
        inputEl2.current.focus();
    };
    return (
        <div>
            <input ref={inputEl} type="text" value='first text field'/>
            <input ref={inputEl2} type="text" value='second text field'/>
            <button onClick={onButtonClick}>Focus the first input</button>
            <button onClick={onButtonClick2}>Focus the second input</button>
        </div>
    );
}

export default Hook3;