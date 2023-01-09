import './index.css'

const GameView = props => {
  const {itemDetails, gameResult} = props
  const {id, imageUrl} = itemDetails

  const onClickGame = () => {
    gameResult(id)
  }

  return (
    <li className="game-view">
      <img src={imageUrl} alt="item" className="item" onClick={onClickGame} />
    </li>
  )
}

export default GameView
