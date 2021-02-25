import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs'


export default function Results({ text, setTextEntered }) {
  const [results, setResults] = useState();

  function handleClick(e){
    e.preventDefault();

    console.log(results)
    setTextEntered(false);
  }

  useEffect(() => {
    const data = qs.stringify({text: text});
    const headers = {
      'Content-Type': 'application/x-www-form-url-encoded;charset=UTF-8'
    };

      axios.post('https://api.funtranslations.com/translate/braille/unicode',
      data,
      headers
     )
      .then(
        response => setResults(response.data.contents.translated)
      )
      .catch(e => { setResults("Sorry, please try a little later...") })

  }, [text])

    return (
        <div>
          <p><span style={{color: 'white'}}>{results}</span></p>
            <Button onClick={handleClick}>Go Back</Button>
          </div>
    )
}
