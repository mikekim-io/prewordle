import React from 'react';

export const Toast = (props) => {
  const { toast, showToast } = props;
  if (showToast) {
    return (
      <div
        id="toast-group"
        className="fixed inset-x-0 top-20 z-10 grid justify-center justify-items-center gap-2 pointer-events-none"
      >
        <output className="py-3 px-2 text-sm font-semibold max-w-screen-sm max-h-min rounded bg-black text-white">
          {toast}
        </output>
      </div>
    );
  }
};

export default Toast;
