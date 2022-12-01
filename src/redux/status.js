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

const INITIAL_STATE = 'IN_PROGRESS';

export const statusReducer = (status = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return action.status;
    default:
      return status;
  }
};
