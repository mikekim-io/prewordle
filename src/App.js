import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl font-sans font-extrabold p-8">
        PREWORDLE
      </h1>
      <Game />
    </div>
  );
}

export default App;
