import { connect } from 'react-redux';
import { STATUS } from '../redux/status';

export const NavBar = (props) => {
  const { setShowStats } = props;
  const showNewGame = props.status !== STATUS.IN_PROGRESS;

  return (
    <div className="p-2 sm:p-3 border-b-2">
      <div
        id="nav-left"
        className="flex-none grid grid-cols-3 justify-between items-center"
      >
        <div className="flex items-center">
          <button
            disabled={!showNewGame}
            className={`flex-none text-center py-2 px-1.5 sm:py-2.5 sm:px-2 text-sm sm:text-base font-semibold rounded transition duration-500 ${
              showNewGame
                ? 'bg-absent text-white hover:bg-dark-green'
                : ' text-gray-400 bg-gray-300'
            }`}
            onClick={props.handleNewGame}
          >
            New Game
          </button>
          {showNewGame && (
            <span className="relative flex self-start top-0 right-2 -mt-1 -mr-1">
              <span className="animate-ping absolute h-full w-full rounded-full bg-correct opacity-75"></span>
              <span className="relative rounded-full h-3 w-3 bg-correct"></span>
            </span>
          )}
        </div>
        <div id="nav-center" className="">
          <h1 className="text-center font-display text-2xl sm:text-3xl font-sans font-semibold tracking-tighter">
            REWORDLE
          </h1>
        </div>
        <div id="nav-right" className="grid grid-flow-col justify-end">
          <button
            type="button"
            id="statistics-button"
            aria-label="statistics"
            onClick={() => setShowStats(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="game-icon w-6 h-6 sm:w-8 sm:h-8 mr-2"
              viewBox="4 4 24 24"
            >
              <path
                fill="black"
                d="M20.6666 14.8333V5.5H11.3333V12.5H4.33325V26.5H27.6666V14.8333H20.6666ZM13.6666 7.83333H18.3333V24.1667H13.6666V7.83333ZM6.66659 14.8333H11.3333V24.1667H6.66659V14.8333ZM25.3333 24.1667H20.6666V17.1667H25.3333V24.1667Z"
              ></path>
            </svg>
          </button>
          <a
            href="https://github.com/mikekim-io/rewordle"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/GitHub-Mark-32px.png"
              alt="github-icon"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  status: state.game.status,
});

export default connect(mapState)(NavBar);
