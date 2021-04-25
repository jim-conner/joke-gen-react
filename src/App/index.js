import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
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
    }
  };

  const newJokeHandleClick = (e) => {
    e.preventDefault();
    setShowJoke(false);
    setShowPunchline(false);
    getJoke().then((joke) => {
      setGetOneJoke(joke);
    });
  };

  useEffect(() => {
    getJoke().then((joke) => {
      setGetOneJoke(joke);
    });
  }, []);

  return (
    <div className='App'>
      <div>
        <Card
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}
        >
          <CardBody>
            <CardImg src={logo} alt='Joke Header' />
            <CardText>
              <h2>{showJoke && getOneJoke.setup}</h2>
              <h2>{showPunchline && getOneJoke.punchline}</h2>
            </CardText>
            <Button color='primary' onClick={handleClick}>
              {showJoke ? 'GET PUNCHLINE' : 'GET JOKE'}
            </Button>
            <br />
            <Button color='success' onClick={newJokeHandleClick}>
              {'GET A NEW JOKE'}
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
