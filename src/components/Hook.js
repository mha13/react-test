import { useState } from "react";

const Hook1 = (props) => {
    const [inputText, setText] = useState(props.title);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    

    return (
        <div>
            <input type="text" value={inputText} onChange={handleChange}/>
            <p>{inputText}</p>
            <button onClick={()=>{setText('start again')}}>RESET</button>
            <button onClick={()=>{alert(inputText)}}>alert</button>
        </div>
    )

}

export default Hook1;