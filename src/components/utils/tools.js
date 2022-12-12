import store from '../../store';

export const setLocalStorage = () => {
  const state = store.getState();
  localStorage.setItem('rewordle-state', JSON.stringify(state));
};
