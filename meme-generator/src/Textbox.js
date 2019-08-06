import React, {useState} from 'react';
import Draggable from 'react-draggable';

const inputStyle = {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: 'red',
    border: 'none',
}

const captionStyle = {
    border: 'dotted black 1px',
    display: 'inline-block',
    color: '#ffffff',
}


function Textbox() {

    const [inputValue, setInputValue] = useState('')

    function handleOnChange(event) {
        console.log(event.target.value)
        setInputValue(event.target.value)
        console.log(inputValue)
    }

    
    return (
        <React.Fragment>
            <Draggable bounds="parent">
                <h3 style={captionStyle}>{inputValue}</h3>
            </Draggable>
            <input type='text' style={inputStyle} onChange={handleOnChange}></input>
        </React.Fragment>
    )
}

export default Textbox;
