import React, { useState, useEffect } from 'react';
import getJoke from '../helpers/data/jokeData';
import './App.scss';
import logo from '../jokegenjs 2.png';

function App() {
  const [showJoke, setShowJoke] = useState({});

  const handleClick = () => {
    console.warn(showJoke);
  };

  useEffect(() => {
    getJoke()
      .then((joke) => {
        setShowJoke(joke);
      });
  }, []);

  return (
    <div className='App'>
        <img src={logo} alt="Joke Header" />
        <br/>
        <h3>{showJoke.setup}</h3>
        <button onClick={handleClick}>
          CLICK HERE
        </button>

    </div>
  );
}

export default App;
