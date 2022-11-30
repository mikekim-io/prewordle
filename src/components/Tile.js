import React from 'react';
import { colorEvaluation } from './utils/validator';

export const Tile = (props) => {
  const tileEvaluation = props.tileEvaluation;
  const evalColor = colorEvaluation(tileEvaluation);

  return (
    <div
      className={`
        text-3xl font-display font-bold uppercase align-middle text-center h-16 w-16 p-4 min-h-full 
      ${evalColor}`}
      key={props.idx}
    >
      {props.letter}
    </div>
  );
};

export default Tile;
