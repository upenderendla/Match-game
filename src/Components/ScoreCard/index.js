import './index.css'

const ScoreCard = props => {
  const {score, restartGame} = props

  const onClickPlayAgainBtn = () => {
    restartGame()
  }

  return (
    <div className="score-card-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
        alt="trophy"
      />
      <p className="your-score-txt">YOUR SCORE</p>
      <p className="score-display">{score}</p>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickPlayAgainBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset-icon"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
