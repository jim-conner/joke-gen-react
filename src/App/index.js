import React from 'react';
import JokeCard from './components/JokeCard';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='Joke-container'></div>
      <JokeCard />
    </div>
  );
}

export default App;
