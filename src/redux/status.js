import { INITIAL_STATE } from './initialState';

const UPDATE_STATUS = 'UPDATE_STATUS';

export const updateStatus = (status) => ({
  type: UPDATE_STATUS,
  status,
});

export const STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  FAIL: 'FAIL',
  WIN: 'WIN',
};

export const statusReducer = (status = INITIAL_STATE.game.status, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return action.status;
    default:
      return status;
  }
};
