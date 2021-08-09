import { useState } from 'react';
import { CreateSquare } from '../types/modules/square';
import { Player } from '../types/classes/playerClass';

const HomePage = () => {
  const [state, setState] = useState<{
    startGame: boolean;
    score: number;
    square: JSX.Element | null;
  }>({
    startGame: false,
    score: 0,
    square: null,
  });
  let player = new Player(state.score, 'Jesper');
  const sqaureClick = () => {
    player.addScore();
    setState((prevState) => ({ ...prevState, score: player.score }));
  };

  const startGame = () => {
    player.name = 'Jesper King';
    setState((prevState) => ({ ...prevState, startGame: true }));
    setState((prevState) => ({
      ...prevState,
      square: CreateSquare(
        <div className="square" onClick={() => sqaureClick()}></div>
      ),
    }));
    console.log(player);
  };
  return (
    <section className="pageContainer">
      <h1 className="score" unselectable="on">
        {state.score}
      </h1>
      <button onClick={() => startGame()}>Click Me</button>
      {/* The sqaure that spans after we click 'start game' button */}
      {state.square}
    </section>
  );
};

export default HomePage;
