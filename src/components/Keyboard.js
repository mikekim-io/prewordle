import React from 'react';

export const Keyboard = (props) => {
  const onClick = (event) => {
    const key = event.target.textContent;
    if (key === '\u232B') {
      console.log('Clicked backspace');
      // TODO: if user clicks VKeyboard backspace, delete last letter from attempt input.
    } else if (key === 'ENTER') {
      console.log('Clicked ENTER');
      // TODO: if user clicks VKeyboard ENTER, attempt submission.
    } else {
      console.log(`Clicked ${key}`);
      // TODO: if user clicks VKeyboard letter, add to attempt input.
    }
  };

  const layout = [
    'Q W E R T Y U I O P',
    'A S D F G H J K L',
    'ENTER Z X C V B N M \u232B',
  ];

  return (
    <div className="grid gap-1 grid-rows-3 justify-center">
      {layout.map((row, rowIdx) => (
        <div className="grid grid-flow-col gap-1 justify-center" key={rowIdx}>
          {row.split(' ').map((l, idx) => (
            <div
              className="text-base font-semibold uppercase align-middle text-center p-7 bg-gray-300 rounded"
              onClick={onClick}
              key={idx}
              val={l}
            >
              {l}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
