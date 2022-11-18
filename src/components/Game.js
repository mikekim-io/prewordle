import React, { useState } from 'react';
import Board from './Board';
import VirtualKeyboard from './VirtualKeyboard';
import { connect } from 'react-redux';

export const Game = (props) => {
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);

  const handleInput = (key) => {
    const re = /[a-z]/i;

    if ((key === 'Backspace' || key === 'Delete') && guess.length > 0) {
      setGuess((guess) => guess.slice(0, guess.length - 1));
    } else if (key.toLowerCase() === 'enter') {
      handleSubmit();
    } else if (re.test(key) && key.length === 1 && guess.length < 5) {
      setGuess((guess) => (guess += key.toLowerCase()));
    }
  };

  const handleSubmit = () => {
    alert(`Submitting word ${guess}`);
    // TODO: Submit new guesses to redux store
    // Update guesses array.
    setGuess('');
    setCount(count + 1);
  };

  return (
    <>
      <div className="font-sans font-extrabold">{guess}</div>
      <Board />
      <VirtualKeyboard handleInput={handleInput} />
    </>
  );
};

const mapState = (state) => ({
  guesses: state.guesses,
});
// const mapDispatch = () => ({});

export default connect(mapState)(Game);
