import React, {useState} from 'react';
import Draggable from 'react-draggable';

const captionStyle = {
    display: 'inline-block',
    color: '#ffffff',
    fontFamily: 'impact',
}

const inputStyle = {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: 'red',
    border: 'none',
}

function Textbox(props) {

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
