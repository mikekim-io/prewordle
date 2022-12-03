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
    '. A S D F G H J K L .',
    'ENTER Z X C V B N M \u232B',
  ];

  return (
    <div className="flex-initial self-center flex flex-col flex-nowrap text-base w-full sm:w-1/2 font-semibold text-center">
      {layout.map((row, rowIdx) => (
        <div className=" flex my-1 justify-center items-center" key={rowIdx}>
          {row.split(' ').map((l, idx) => {
            const evalColor = colorEvaluator(
              keyEvaluations[l.toLowerCase()],
              'key'
            );
            return (
              <button
                disabled={l === '.'}
                className={`${l === '.' ? 'flex-0.5' : 'flex-1'}
                ${l === '.' ? 'text-white bg-white' : evalColor} 
                h-16 mx-0.5 rounded`}
                onClick={onClick}
                key={idx}
                val={l}
              >
                {l}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
