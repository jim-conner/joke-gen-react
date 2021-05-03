import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardBody, Button
} from 'reactstrap';
import getJoke from '../../helpers/data/jokeData';
import logo from '../../assets/jokegenjs 2.png';

export default function JokeCard() {
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
      <Card
        body
        inverse
        style={{
          backgroundColor: '#333',
          borderColor: '#333'
        }}
      >
        <CardBody>
          <CardImg src={logo} alt='Joke Header' />
            <h2>{showJoke && getOneJoke.setup}</h2>
            <h2>{showPunchline && getOneJoke.punchline}</h2>
          <Button
            color='success'
            onClick={handleClick}
            style={{ margin: '10px' }}
            disabled={showJoke && showPunchline}
            >
            {showJoke ? 'GET PUNCHLINE' : 'GET JOKE'}

          </Button>
          <br />
          <Button color='info' onClick={newJokeHandleClick}>
            {'GET A NEW JOKE'}
          </Button>
        </CardBody>
      </Card>
  );
}
