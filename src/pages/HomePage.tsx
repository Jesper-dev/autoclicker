import { useState } from 'react'
import { addScore } from '../types/modules/square'

const HomePage = () => {
  const [state, setState] = useState<{ startGame: boolean; score: number }>({
    startGame: false,
    score: 0,
  })
  // I can have the "addScore" functionality right here, but I wanna learn more about
  // modules and import/export functions between components.
  const sqaureClick = () => {
    let newScore = addScore(state.score)
    setState((prevState) => ({ ...prevState, score: newScore }))
  }
  return (
    <section className="pageContainer">
      <h1 className="score">{state.score}</h1>
      {state.startGame ? (
        <div className="square" onClick={() => sqaureClick()}></div>
      ) : (
        <button
          onClick={() =>
            setState((prevState) => ({ ...prevState, startGame: true }))
          }
        >
          Click Me
        </button>
      )}
    </section>
  )
}

export default HomePage
