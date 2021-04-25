import React, { useState, useEffect } from 'react';
import getJoke from '../helpers/data/jokeData';
import './App.scss';
import logo from '../jokegenjs 2.png';

function App() {
  const [getOneJoke, setGetOneJoke] = useState({});
  const [showJoke, setShowJoke] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);

  const handleClick = () => {
    setShowJoke(true);
    if (showJoke) {
      setShowPunchline(true);
      // setGetOneJoke(getOneJoke);
      // setGetAnotherJoke(getAnotherJoke);
    // } else if (showPunchline) {
    //   setShowPunchline(true);
    //   console.warn(setShowPunchline);
    } else {
      // setShowJoke(false);
      getJoke()
        .then((joke) => {
          setGetOneJoke(joke);
          console.warn(joke);
        });
    }
  };

  useEffect(() => {
    getJoke()
      .then((joke) => {
        setGetOneJoke(joke);
      });
  }, []);

  return (
    <div className='App'>
        <img src={logo} alt="Joke Header" />
        <br/>
        <h2>{showJoke && getOneJoke.setup}</h2>
        <h2>{showPunchline && getOneJoke.punchline}</h2>

        <button onClick={handleClick}>
        {showJoke ? showPunchline && 'Get the Punchline' : 'Get a Joke'}
        </button>
        <br />

        <button onClick={handleClick}>
          {showJoke ? 'Get a New Joke' : 'dasdfsadfasdf'}
        </button>

    </div>
  );
}

export default App;
