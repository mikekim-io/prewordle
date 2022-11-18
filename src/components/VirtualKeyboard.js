import React, { useState, useEffect } from 'react';

export const VirtualKeyboard = (props) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!pressed) {
        const key = e.key || 0;
        const re = /[a-z]/i;

        if (key === 'Backspace' || key === 'Delete') {
          // TODO: if user presses DELETE/Backspace, delete last letter from attempt input.
          console.log(`Pressed ${e.key}`);
        } else if (key === 'Enter') {
          // TODO: if user presses ENTER, attempt submission.
          console.log(`Pressed ${e.key}`);
        } else if (re.test(key) && key.length === 1) {
          // TODO: if user presses any letter a-z, add to attempt input.
          console.log(`Pressed ${e.key.toUpperCase()}`);
        }

        setPressed(true);
      }
    };

    const onKeyUp = () => {
      setPressed(false);
    };

    //subscribe once
    document.body.addEventListener('keydown', onKeyDown);
    document.body.addEventListener('keyup', onKeyUp);

    // unsubscribe on unmount
    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
      document.body.removeEventListener('keyup', onKeyUp);
    };
  }, [pressed]);

  // Virtual Keyboard
  const onClick = (e) => {
    const key = e.target.textContent;
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

export default VirtualKeyboard;
