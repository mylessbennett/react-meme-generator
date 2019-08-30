import React, {useState} from 'react';
import { Rnd } from 'react-rnd';

const inputStyle = {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: 'red',
    border: 'none',
}

function Textbox() {

    const [inputValue, setInputValue] = useState('')

    function handleOnChange(event) {
        setInputValue(event.target.value)
    }

    return (
        <React.Fragment>
            <Rnd
            bounds=".meme-wrapper"
            default={{
                x: -400,
                y:250,
            }}
            >
                <h3 className="caption-text">{inputValue}</h3>
            </Rnd>
            <input className="caption-input" type='text' style={inputStyle} onChange={handleOnChange}></input>
        </React.Fragment>
    )
}

export default Textbox;
