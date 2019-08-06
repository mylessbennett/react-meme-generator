import React from 'react';
import Textbox from './Textbox'

const wrapperStyle = {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    height: '500px',
    width: '500px',
}

const imageStyle = {
    height: '500px',
    width: '500px',
}


function Meme (props) {

    return (
            <div>
                <div style={wrapperStyle}>
                    <img style={imageStyle} src={props.url} alt=""></img>
                    <Textbox />
                </div>
            </div>
    )
}

export default Meme;
