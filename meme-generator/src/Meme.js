import React, {useState} from 'react';
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

    const initialCaption = [
        {placeholder: 'test'},
        {placeholder: 'test'},
    ]
    
    const [captionArray, setCaptionArray] = useState(initialCaption)

    const captionElements = captionArray.map((captionObj) => <Textbox key={captionArray.indexOf(captionObj)} captionArray={captionArray} />)

    function handleAddCaption() {
        setCaptionArray(() => [...captionArray, {placeholder: 'test'}]);
        console.log(captionArray)
    }

    function handleDeleteCaption() {
        const tempArray = captionArray
        setCaptionArray(tempArray.slice(0, -1))
    }

    return (
            <div>
                <div style={wrapperStyle}>
                    <img style={imageStyle} src={props.url} alt=""></img>
                    { captionElements }
                    <button onClick={handleAddCaption}>Add Caption</button>  
                    <button onClick={handleDeleteCaption}>Delete Caption</button>
                </div>
            </div>
    )
}

export default Meme;