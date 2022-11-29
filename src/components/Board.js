import React from 'react';
import { connect } from 'react-redux';
import Row from './Row';

// for testing
// const guesses = ['     ', '     ', '     ', '     ', '     ', '     '];

export const Board = (props) => {
  return (
    <div className="container mx-auto w-80 grid grid-cols-5 gap-1">
      {props.guesses.map((guess, i) => {
        return <Row key={i} guess={guess} />;
      })}
    </div>
  );
};

const mapState = (state) => ({
  guesses: state.guesses,
});

export default connect(mapState)(Board);
