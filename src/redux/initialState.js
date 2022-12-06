import { STATUS } from './status';

export const INITIAL_STATE = {
  game: {
    guesses: ['', '', '', '', '', ''],
    rowIndex: 0,
    solution: '',
    status: STATUS.IN_PROGRESS,
  },
  stats: {
    guesses: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, fail: 0 },
    currentStreak: 0,
    bestStreak: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    averageGuesses: 0,
    isOnStreak: false,
    hasPlayed: true,
  },
};
