import { connect } from 'react-redux';

const Stats = (props) => {
  const {
    showStats,
    setShowStats,
    guesses,
    currentStreak,
    bestStreak,
    gamesPlayed,
    averageGuesses,
    isOnStreak,
    hasPlayed,
  } = props;

  if (showStats) {
    return (
      <div className="fixed z-10">
        <div className="absolute inset-0 w-screen h-screen bg-gray-200 opacity-50"></div>
        <div className="fixed inset-0">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative rounded-lg overflow-y-auto bg-white text-left shadow-2xl w-screen sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Game Play Statistics
                    </h3>
                    <div className="mt-2">
                      <ol>
                        <li>
                          Guesses:{' '}
                          {Object.entries(guesses).map((guess, idx) => (
                            <div key={idx}>
                              {guess[0]}:{guess[1]}
                            </div>
                          ))}
                        </li>
                        <li>Current Streak: {currentStreak}</li>
                        <li>Best Streak: {bestStreak}</li>
                        <li>Games Played: {gamesPlayed}</li>
                        <li>Average # of Guesses: {averageGuesses}</li>
                        <li>Current Streak Status: {isOnStreak.toString()}</li>
                        <li>Has Played a Game: {hasPlayed.toString()}</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowStats(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapState = (state) => ({
  guesses: state.stats.guesses,
  currentStreak: state.stats.currentStreak,
  bestStreak: state.stats.bestStreak,
  gamesPlayed: state.stats.gamesPlayed,
  averageGuesses: state.stats.averageGuesses,
  isOnStreak: state.stats.isOnStreak,
  hasPlayed: state.stats.hasPlayed,
});

export default connect(mapState)(Stats);
