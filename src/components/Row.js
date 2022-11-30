import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';

export const Row = (props) => {
  // add whitespace placeholders for guesses in progress
  const word =
    props.guess.slice(0, props.guess.length) +
    ' '.repeat(5 - props.guess.length);

  // for rows that have not been evaluated, default to null
  const rowEvaluation = props.rowEvaluation || new Array(5).fill(null);

  return (
    <div className="grid grid-cols-5 gap-1.5">
      {word.split('').map((letter, idx) => (
        <Tile key={idx} letter={letter} tileEvaluation={rowEvaluation[idx]} />
      ))}
    </div>
  );
};

const mapState = (state) => ({
  guesses: state.guesses,
});

export default connect(mapState)(Row);
