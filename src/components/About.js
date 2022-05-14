import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'left', margin: '1rem' }}>
      <h3>Word Counter</h3>
      <p>
        With this simple word counter you can easily calculate the amount of words in your text.
      </p>
      <p>Simply enter your text into the text box and view the results in real-time below.</p>
      <hr />
      <h3>Word Density</h3>
      <p>
        The word density of your text is also displayed on this page and is very helpful when it
        comes to seeing which words that are being used in the text and if you are overusing certain
        words.
      </p>
      <p>
        If you are writing a text that is in another language then you can open the settings and
        change the word density language to yours. This way you will be able to filter out the stop
        words for your text.
      </p>
      <hr />
      <h3> Is there a maximum limit of words? </h3>
      <p>
        No, you are able to enter texts that are as long as you wish. The counter is developed to be
        as lightweight as possible to get the maximum performance out of your device and you will
        see that it updates rapidly upon entering a text.
      </p>
    </div>
  );
};

export default About;
