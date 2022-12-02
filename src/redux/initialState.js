import { STATUS } from './status';

export const INITIAL_STATE = {
  guesses: ['', '', '', '', '', ''],
  rowIndex: 0,
  solution: '',
  status: STATUS.IN_PROGRESS,
};
