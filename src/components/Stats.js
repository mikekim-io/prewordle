import { connect } from 'react-redux';

const Stats = (props) => {
  const {
    showStats,
    setShowStats,
    guesses,
    currentStreak,
    bestStreak,
    gamesPlayed,
    rowIndex,
    // eslint-disable-next-line no-unused-vars
    averageGuesses,
    // eslint-disable-next-line no-unused-vars
    isOnStreak,
    // eslint-disable-next-line no-unused-vars
    hasPlayed,
  } = props;

  // eslint-disable-next-line no-unused-vars
  const maxGuess = Math.max(...Object.values(guesses));

  if (showStats) {
    return (
      <div className="fixed z-10">
        <div className="absolute inset-0 w-screen h-screen bg-gray-200 opacity-50"></div>
        <div className="fixed inset-0">
          <div className="flex min-h-full items-end justify-center sm:items-center">
            <div className="relative rounded-lg overflow-y-auto bg-white text-left shadow-2xl w-screen sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col min-h-full text-center">
                <div className="flex flex-col items-center p-5">
                  <h3 className="text-center text-sm font-bold">STATISTICS</h3>
                  <div className="flex flex-row">
                    <div className="mx-2">
                      <h1 className="text-4xl"> {gamesPlayed}</h1>
                      <h5 className="text-xs">Played</h5>
                    </div>
                    <div className="mx-2">
                      <h1 className="text-4xl">
                        {gamesPlayed
                          ? (
                              (Object.entries(guesses)
                                .map((guess) => guess[1])
                                .reduce((a, b) => a + b) /
                                gamesPlayed) *
                              100
                            ).toFixed(0)
                          : 0}
                      </h1>
                      <h5 className="text-xs">Win %</h5>
                    </div>
                    <div className="mx-2">
                      <h1 className="text-4xl">{currentStreak}</h1>
                      <h5 className="text-xs">
                        Current
                        <br />
                        Streak
                      </h5>
                    </div>
                    <div className="mx-2">
                      <h1 className="text-4xl">{bestStreak}</h1>
                      <h5 className="text-xs">
                        Max
                        <br />
                        Streak
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center ">
                  <h3 className="text-center text-sm font-bold">
                    GUESS DISTRIBUTION
                  </h3>
                  <div className="flex flex-col w-full max-w-500">
                    {Object.entries(guesses)
                      .filter((guess) => guess[0] !== 'fail')
                      .map((guess) => (
                        <div className="w-full flex flex-row text-xs font-bold p-1 items-center">
                          <div className="mx-1 flex-auto">{guess[0]}</div>
                          <div
                            className={`text-xs w-calc[(100%-50px)] ${
                              parseInt(guess[0]) === rowIndex + 1
                                ? 'bg-correct'
                                : 'bg-gray-500'
                            }`}
                          >
                            <div className="font-medium text-white p-0.5">
                              {guess[1]}
                            </div>
                          </div>
                        </div>
                      ))}
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
  rowIndex: state.game.rowIndex,
});

export default connect(mapState)(Stats);
