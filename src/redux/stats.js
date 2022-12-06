import { INITIAL_STATE } from './initialState';
import { STATUS } from './status';

const UPDATE_STATS = 'UPDATE_STATS';

export const updateStats = (status, guess = null) => ({
  type: UPDATE_STATS,
  status,
  guess,
});

export const statsReducer = (stats = INITIAL_STATE.stats, action) => {
  switch (action.type) {
    case UPDATE_STATS:
      if (action.status === STATUS.WIN) {
        let {
          guesses,
          currentStreak,
          bestStreak,
          gamesWon,
          gamesPlayed,
          averageGuesses,
          isOnStreak,
          hasPlayed,
        } = stats;

        guesses[action.guess]++;
        currentStreak++;
        bestStreak = Math.max(currentStreak, stats.bestStreak);
        gamesWon++;
        gamesPlayed++;
        averageGuesses = (
          Object.entries(guesses).reduce((a, b) => {
            if (b[0] !== 'fail') {
              return parseInt(b[0]) * b[1] + a;
            } else return a;
          }, 0) /
          Object.entries(guesses).reduce((a, b) => {
            if (b[0] !== 'fail') {
              return b[1] + a;
            } else return a;
          }, 0)
        ).toFixed(2);
        isOnStreak = true;
        hasPlayed = true;

        return {
          ...stats,
          guesses,
          currentStreak,
          bestStreak,
          gamesWon,
          gamesPlayed,
          averageGuesses,
          isOnStreak,
          hasPlayed,
        };
      } else if (action.status === STATUS.FAIL) {
        let { guesses, currentStreak, gamesPlayed, isOnStreak, hasPlayed } =
          stats;
        guesses['fail']++;
        currentStreak = 0;
        gamesPlayed++;
        isOnStreak = false;
        hasPlayed = false;

        return {
          ...stats,
          guesses,
          currentStreak,
          gamesPlayed,
          isOnStreak,
          hasPlayed,
        };
      }
      return stats;
    default:
      return stats;
  }
};
