import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App container mx-auto grid grid-rows 2 justify-center">
      <h1 className="text-center text-2xl font-sans font-bold p-8">
        PREWORDLE
      </h1>
      <Board />
    </div>
  );
}

export default App;
