// Write your code here.
const WinOrLossCard = props => {
  const {selectedList, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div>
      <div>
        {selectedList.length === 12 ? <p>You Won</p> : <p>You Lose</p>}
        <h1>{selectedList.length}/12</h1>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      {selectedList.length === 12 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="loss"
        />
      )}
    </div>
  )
}
export default WinOrLossCard
