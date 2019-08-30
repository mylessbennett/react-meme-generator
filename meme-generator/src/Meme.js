import React, {useState} from 'react';
import Textbox from './Textbox'
import axios from 'axios';

function Meme () {

    const initialCaption = [
        {placeholder: 'test'},
    ]

    const [url, setUrl] = useState('https://i.imgflip.com/1ur9b0.jpg')

    function handleGetNewMeme() {
        axios.get('https://api.imgflip.com/get_memes')
        .then(function (response) {
            return getNewMeme(response)
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    function getNewMeme(response) {
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        setUrl(response.data.data.memes[randomNumber].url)
    }

    const [captionArray, setCaptionArray] = useState(initialCaption)

    const captionElements = captionArray.map((captionObj) => <Textbox className="caption-input" key={captionArray.indexOf(captionObj)} captionArray={captionArray} />)

    function handleAddCaption() {
        setCaptionArray(() => [...captionArray, {placeholder: 'test'}]);
        console.log(captionArray)
    }

    function handleDeleteCaption() {
        const tempArray = captionArray
        setCaptionArray(tempArray.slice(0, -1))
    }

    return (
            <React.Fragment>
                <div className="meme-wrapper">
                    <img className="meme-image" src={url} alt=""></img>
                    <button className="get-meme-btn" onClick={handleGetNewMeme}>Get Meme</button>
                </div>
                <div>
                    <ul className="caption-list">
                        <li>{ captionElements }</li>
                        <li><button className="add-btn" onClick={handleAddCaption}>Add Caption</button></li>
                        <li><button className="del-btn" onClick={handleDeleteCaption}>Delete Caption</button></li>
                    </ul>
                </div>
            </React.Fragment>
    )
}

export default Meme;