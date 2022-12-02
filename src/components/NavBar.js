import { connect } from 'react-redux';
import { STATUS } from '../redux/status';

export const NavBar = (props) => {
  const showNewGame = props.status !== STATUS.IN_PROGRESS;

  return (
    <div
      id="nav-left"
      className="flex-none grid grid-cols-3 justify-between items-center border-b-2 p-3"
    >
      <div className="flex items-center">
        <button
          disabled={!showNewGame}
          class={`flex-none text-center py-3 px-3 text-md font-semibold rounded transition duration-500 ${
            showNewGame
              ? 'bg-absent text-white hover:bg-dark-green'
              : ' text-gray-400 bg-gray-300'
          }`}
          onClick={props.handleNewGame}
        >
          New Game
        </button>
        {showNewGame && (
          <span class="relative flex self-start top-0 right-2 -mt-1 -mr-1">
            <span class="animate-ping absolute h-full w-full rounded-full bg-correct opacity-75"></span>
            <span class="relative rounded-full h-3 w-3 bg-correct"></span>
          </span>
        )}
      </div>
      <div id="nav-center" className="">
        <h1 className="text-center font-display text-3xl font-sans font-semibold tracking-tighter">
          PREWORDLE
        </h1>
      </div>
      <div id="nav-right" className="grid justify-items-end">
        <a
          href="https://github.com/mikekim-io/prewordle"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/GitHub-Mark-32px.png" alt="github-icon" className="" />
        </a>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  status: state.status,
});

export default connect(mapState)(NavBar);
