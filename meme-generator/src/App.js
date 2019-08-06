import React, {useState} from 'react';
import './App.css';
import Meme from './Meme';
import axios from 'axios';

function App() {

  const [url, setUrl] = useState('https://i.imgflip.com/1ur9b0.jpg')
  const [boxCount, setBoxCount] = useState(3)

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

  return (
    <React.Fragment>
        <Meme url={url}/>
        <button onClick={handleGetNewMeme}>Get Meme</button>
    </React.Fragment>
  );
}

export default App;
