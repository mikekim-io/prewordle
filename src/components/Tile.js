import React from 'react';

export const Tile = (props) => {
  return (
    <div
      className="text-base font-semibold uppercase align-middle text-center h-16 w-16 p-5 min-h-full border-2 border-gray-300"
      key={props.idx}
    >
      {props.letter}
    </div>
  );
};

export default Tile;
