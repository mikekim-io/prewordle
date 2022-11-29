import React from 'react';

export const Tile = (props) => {
  return (
    <div
      className="text-base font-semibold uppercase align-middle text-center p-7 s:p-5 h-1/5 w-1/5 border-2 border-gray-300"
      key={props.idx}
    >
      {props.letter}
    </div>
  );
};

export default Tile;
