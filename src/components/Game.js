import React from 'react';
import Board from './Board';
import VirtualKeyboard from './VirtualKeyboard';

export const Game = (props) => {
  return (
    <>
      <Board />
      <VirtualKeyboard />
    </>
  );
};

export default Game;
