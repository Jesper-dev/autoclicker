import { useState } from 'react';
import { Player } from '../types/classes/playerClass';

const HomePage = () => {
  const [state, setState] = useState<{ startGame: boolean; score: number }>({
    startGame: false,
    score: 0,
  });
  let player = new Player(state.score, 'Jesper');
  const sqaureClick = () => {
    player.addScore();
    setState((prevState) => ({ ...prevState, score: player.score }));
    console.log(player.score);
  };

  const startGame = () => {
    player.name = 'Jesper King';
    setState((prevState) => ({ ...prevState, startGame: true }));
    console.log(player);
  };
  return (
    <section className="pageContainer">
      <h1 className="score" unselectable="on">
        {state.score}
      </h1>
      {state.startGame ? (
        <div className="square" onClick={() => sqaureClick()}></div>
      ) : (
        <button onClick={() => startGame()}>Click Me</button>
      )}
    </section>
  );
};

export default HomePage;
