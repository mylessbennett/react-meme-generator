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
        if (captionArray.length < 3) {
            setCaptionArray(() => [...captionArray, {placeholder: 'test'}]);
        }
    }

    function handleDeleteCaption() {
        const tempArray = captionArray
        setCaptionArray(tempArray.slice(0, -1))
    }

    function handleChangeColourBlack() {
        const text = document.getElementsByClassName("caption-text")
        console.log(text)
        for (let i = 0;i < text.length; i++) {
            if (!(text[i].classList.contains('caption-text-black'))) {
                text[i].classList.add('caption-text-black')
            }
        }
    }

    function handleChangeColourWhite() {
        const text = document.getElementsByClassName("caption-text")
        console.log(text)
        for (let i = 0;i < text.length; i++) {
            if ((text[i].classList.contains('caption-text-black'))) {
                text[i].classList.remove('caption-text-black')
            }
        }
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
                        <li><button className="change-clr-btn-blk" onClick={handleChangeColourBlack} title="Change Caption Colours Black"></button></li>
                        <li><button className="change-clr-btn-wht" onClick={handleChangeColourWhite} title="Change Caption Colours White"></button></li>
                        <li><button className="add-btn" onClick={handleAddCaption}>Add Caption</button></li>
                        <li><button className="del-btn" onClick={handleDeleteCaption}>Delete Caption</button></li>
                    </ul>
                </div>
            </React.Fragment>
    )
}

export default Meme;