import React, { useState, useEffect } from 'react';
import { colorEvaluator } from './utils/validator';

export const VirtualKeyboard = (props) => {
  const [pressed, setPressed] = useState(false);
  const keyEvaluations = props.keyEvaluations;

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!pressed) {
        const key = e.key || 0;

        props.handleInput(key);

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
  }, [pressed, props]);

  // Virtual Keyboard
  const onClick = (e) => {
    let key = e.target.textContent;
    if (key === '\u232B') {
      key = 'Backspace';
      // TODO: if user clicks VKeyboard backspace, delete last letter from attempt input.
    }

    props.handleInput(key);
  };

  const layout = [
    'Q W E R T Y U I O P',
    'A S D F G H J K L',
    'ENTER Z X C V B N M \u232B',
  ];

  return (
    <div className="flex-initial">
      <div className="grid gap-1 grid-rows-3 justify-center pb-2">
        {layout.map((row, rowIdx) => (
          <div
            className="grid grid-flow-col gap-1.5 justify-center"
            key={rowIdx}
          >
            {row.split(' ').map((l, idx) => {
              console.log(keyEvaluations[l.toLowerCase()]);
              const evalColor = colorEvaluator(
                keyEvaluations[l.toLowerCase()],
                'key'
              );
              console.log(evalColor);
              return (
                <div
                  className={`text-base font-semibold uppercase align-middle text-center py-5 px-4 rounded ${evalColor}`}
                  onClick={onClick}
                  key={idx}
                  val={l}
                >
                  {l}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualKeyboard;
