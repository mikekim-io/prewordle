import React from 'react';
import { connect } from 'react-redux';
import Row from './Row';

// for testing
// const guesses = ['     ', '     ', '     ', '     ', '     ', '     '];

export const Board = (props) => {
  return (
    <div className="flex-initial">
      <div className="grid grid-rows-6 justify-center gap-1.5">
        {props.guesses.map((guess, i) => {
          return <Row key={i} guess={guess} />;
        })}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  guesses: state.guesses,
});

export default connect(mapState)(Board);
