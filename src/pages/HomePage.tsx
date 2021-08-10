import { useState, useRef, useEffect } from 'react';
import { CreateSquare } from '../types/modules/square';
import { Player } from '../types/classes/playerClass';

const HomePage = () => {
  const [state, setState] = useState<{
    startGame: boolean;
    score: number;
    square: JSX.Element | null;
    btnClass: string;
  }>({
    startGame: false,
    score: 0,
    square: null,
    btnClass: '',
  });
  let player = new Player(state.score, 'Jesper');
  const buttonElement = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    buttonElement.current?.focus();
  }, []);
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
      btnClass: 'afterStartBtn',
    }));

    console.log(player);
  };
  return (
    <section className="pageContainer">
      <h1 className="score" unselectable="on">
        {state.score}
      </h1>
      <button
        ref={buttonElement}
        onClick={() => startGame()}
        className={state.btnClass}
      >
        Click Me
      </button>
      {/* The sqaure that spans after we click 'start game' button */}
      {state.square}
    </section>
  );
};

export default HomePage;
