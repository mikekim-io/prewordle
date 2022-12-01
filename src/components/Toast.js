import React from 'react';

export const Toast = (props) => {
  const { toastList } = props;

  return (
    <div
      id="toast-group"
      className="fixed inset-x-0 top-20 z-10 grid justify-center justify-items-center gap-2 pointer-events-none"
    >
      {toastList.map((toast, i) => (
        <output className="animate-fade-in animate-slide-in animate-fade-out duration py-3 px-2 text-sm font-semibold max-w-screen-sm max-h-min rounded bg-black text-white">
          {toast}
        </output>
      ))}
    </div>
  );
};

export default Toast;
