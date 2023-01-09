import {useState} from 'react'

import GameView from './components/GameView'
import './App.css'

// eslint-disable-next-line
const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [message, setMessage] = useState('')

  const renderRock = opponent => {
    console.log(opponent)
    if (opponent === 'SCISSORS') {
      setMessage('You Won')
    }
    if (opponent === 'ROCK') {
      setMessage('Draw')
    } else {
      setMessage('You Lose')
    }

    console.log(message)
  }

  const renderScissors = opponent => {
    console.log(opponent)
    if (opponent === 'PAPER') {
      setMessage('You Won')
    } else if (opponent === 'SCISSORS') {
      setMessage('Draw')
    } else {
      setMessage('You Lose')
    }

    console.log(message)
  }

  const renderPaper = opponent => {
    console.log(opponent)
    if (opponent === 'ROCK') {
      setMessage('You Won')
    } else if (opponent === 'PAPER') {
      setMessage('Draw')
    } else {
      setMessage('You Lose')
    }

    console.log(message)
  }

  const gameResult = id => {
    const you = id
    const words = ['ROCK', 'SCISSORS', 'PAPER']
    const review = words[Math.floor(Math.random() * words.length)]
    const opponent = review
    console.log(you)
    console.log(opponent)
    switch (you) {
      case 'ROCK':
        return renderRock(opponent)
      case 'SCISSORS':
        return renderScissors(opponent)
      case 'PAPER':
        return renderPaper(opponent)
      default:
        return null
    }
  }
  return (
    <div className="container">
      <div className="bg-container">
        <div className="game-container">
          <div className="name">
            <h1 className="heading">ROCK</h1>
            <h1 className="heading">PAPERS</h1>
            <h1 className="heading">SCISSORS</h1>
          </div>
          <div className="score">
            <h1 className="score-heading">Score</h1>
            <p className="paragraph">0</p>
          </div>
        </div>
      </div>
      <ul className="game">
        {choicesList.map(eachItem => (
          <GameView
            itemDetails={eachItem}
            key={eachItem.id}
            gameResult={gameResult}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
