import React, { useEffect, useState } from 'react';
import './TextForm.css';

const TextForm = ({ mode }) => {
  const [text, setText] = useState('');
  const [wordsCounts, setWordsCounts] = useState(0);
  const [charsCounts, setCharsCounts] = useState(0);

  const handleUppercase = () => {
    console.log('clicked');
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText('');
  };

  const handleTextArea = event => {
    setText(event.target.value);
  };

  const handleInverseCase = () => {
    let tempText = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i].toUpperCase() === text[i]) {
        tempText += text[i].toLowerCase();
      } else {
        tempText += text[i].toUpperCase();
      }
    }
    setText(tempText);
  };

  useEffect(() => {
    setCharsCounts(text.length);
    const wordsLen = (text.length > 1 && text.split(/\s+/).length) || 0;
    setWordsCounts(wordsLen);
  }, [text]);

  return (
    <>
      <div className="textForm">
        <textarea
          name="text"
          value={text}
          id="text"
          onChange={handleTextArea}
          placeholder="Start typing or paste to begin"
        ></textarea>
        <br />
        <button
          id="uppercase"
          onClick={handleUppercase}
          disabled={text.length === 0}
          style={{
            color: mode === 'dark' && '#2662a9',
            backgroundColor: mode === 'dark' && 'white',
            border: mode === 'dark' && '#2662a9'
          }}
        >
          Covert to uppercase
        </button>
        <button
          id="lowercase"
          onClick={handleLowercase}
          disabled={text.length === 0}
          style={{
            color: mode === 'dark' && '#2662a9',
            backgroundColor: mode === 'dark' && 'white',
            border: mode === 'dark' && '#2662a9'
          }}
        >
          Covert to lowercase
        </button>
        <button
          id="inverseCase"
          onClick={handleInverseCase}
          disabled={text.length === 0}
          mode={mode}
          style={{
            color: mode === 'dark' && '#2662a9',
            backgroundColor: mode === 'dark' && 'white',
            border: mode === 'dark' && '#2662a9'
          }}
        >
          Inverse case
        </button>
        <button
          id="clear"
          onClick={handleClear}
          disabled={text.length === 0}
          style={{
            color: mode === 'dark' && '#2662a9',
            backgroundColor: mode === 'dark' && 'white',
            border: mode === 'dark' && '#2662a9'
          }}
        >
          Clear
        </button>
      </div>
      <div style={{ textAlign: 'left', marginLeft: '2rem', width: '70%' }}>
        <h3>Text Summary</h3>
        <p>Number of Words : {wordsCounts}</p>
        <p>Number of Characters : {charsCounts}</p>
        <p>Number of minutes to read: {wordsCounts * 0.008}</p>
      </div>
      <hr />
      <div style={{ textAlign: 'left', marginLeft: '2rem', width: '70%' }}>
        <h3>Preview</h3>
        {text.length > 0 ? text : 'Nothing to preview'}
      </div>
    </>
  );
};

export default TextForm;
