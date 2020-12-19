import React, {useState, useEffect} from 'react'

import './styles/styles.css'

export default function RockPapperScissor() {

const [playerScore, setPlayerScore] = useState(0)
const [pcScore, setPCScore] = useState(0)
const [pcChoice, setPcChoice] = useState(['rock', 'paper', 'scissor'])
const [msgScore, setMsgScore] = useState('')
const [finalMsg, setFinalMsg] = useState('')
const [rock, setRock] = useState(false)
const [paper, setPaper] = useState(false)
const [scissor, setScissor] = useState(false)
const [time, setTime] = useState(60)
const [waitForPlay, setWaitForPlay] = useState(false)


useEffect(() => {
  const timer = setTimeout(() => {
    setTime(time -1)
    if(time < 1){
      setWaitForPlay(true)
      setTime(0)
      if(pcScore > playerScore){
        setFinalMsg('The PC Won this battle! Refresh the browser to play again.')
      }else if(pcScore < playerScore){
        setFinalMsg('You won this battle! Refresh the browser to play again.')
      }
      else setFinalMsg('Draw game! Refresh the browser to play again.')
    }
  }, 1000)
  return () => {
    clearTimeout(timer)
  }

})



const choiceRock = async () => {

  setTimeout(() => {
    setWaitForPlay(true)
  },1)

  setTimeout(() => {
    setWaitForPlay(false)
  },1500)

  setTimeout(() => {

    setRock(true)
    setPaper(false)
    setScissor(false)
    



    const randomPcChoice = Math.floor(Math.random() * pcChoice.length)

    console.log(randomPcChoice)
    console.log(rock)
    console.log(paper)
    console.log(scissor)

    switch(randomPcChoice){
      case(0):
      return setMsgScore('You has choiced rock and the PC rock. Game Draw!')
      break
      case(1):
      return [setMsgScore('You has choiced rock and the PC paper. The PC has win this match!'),
      setPCScore(pcScore + 1)
    ]
      break
      case(2):
      return setMsgScore[('You has choiced rock and the PC scissor. You win this match!'),
      setPlayerScore(playerScore + 1)
    ]
      break
      default:
      }
  }, 10)
}

const choicePaper = async () => {

  setTimeout(() => {
    setWaitForPlay(true)
  }, 1)

  setTimeout(() => {
    setWaitForPlay(false)
  },1500)

  setTimeout(() => {

    setRock(false)
    setPaper(true)
    setScissor(false)

    const randomPcChoice = Math.floor(Math.random() * pcChoice.length)
    console.log(randomPcChoice)
    console.log(rock)
    console.log(paper)
    console.log(scissor)

    switch(randomPcChoice){
      case(0):
      return [setMsgScore('You has choiced paper and the PC rock. You win this match!'),
      setPlayerScore(playerScore + 1)
    ]
      break
      case(1):
      return setMsgScore('You has choiced paper and the PC paper. Game draw!')
      break
      case(2):
      return [setMsgScore('You has choiced paper and the PC scissor. The PC win this match!'),
      setPCScore(pcScore + 1)
    ]
      break
      default:
      }
  }, 10)
}

const choiceScissor = async () => {

  setTimeout(() => {
    setWaitForPlay(true)
  },1)

  setTimeout(() => {
    setWaitForPlay(false)
  },1500)

  setTimeout(() => {

    setRock(false)
    setPaper(true)
    setScissor(false)

    const randomPcChoice = Math.floor(Math.random() * pcChoice.length)
    console.log(randomPcChoice)
    console.log(rock)
    console.log(paper)
    console.log(scissor)

    switch(randomPcChoice){
      case(0):
      return [setMsgScore('You has choiced scissor and the PC rock. The PC win this match!'),
      setPCScore(pcScore + 1)
    ]
      break
      case(1):
      return [setMsgScore('You has choiced scissor and the PC paper. You win this match!'),
      setPlayerScore(playerScore + 1)
    ]
      break
      case(2):
      return setMsgScore('You has choiced scissor and the PC scissor. Game draw!')
      break
      default:
      }
  }, 10)
}

  return (
    <div className="main-container">
      <div className="title">
        <h1>Rock Paper Scissor Web Game</h1>
        <h3>Choice your weapon to fight with the PC</h3>
      </div>
      <div className="weapons-container">
        <div 
         className="rock"
         onClick={choiceRock} 
         style={waitForPlay? {visibility: 'hidden'} :{visibility: 'visible'}}
        >
          <span>👊</span>
          <div className="indicator-time"></div>
        </div>
        <div 
         className="paper"
         onClick={choicePaper} 
         style={waitForPlay? {visibility: 'hidden'} :{visibility: 'visible'}}
        >
          <span>🖐</span>
          <div className="indicator-time"></div>
        </div>
        <div 
         className="scissor"
         onClick={choiceScissor} 
         style={waitForPlay? {visibility: 'hidden'} :{visibility: 'visible'}}
        >
          <span>✌</span>
          <div className="indicator-time"></div>
        </div>
      </div>
      <div className="scores">
        <h3>{msgScore}</h3>
        <div className="points-scores">
          <p>Your Score: {playerScore}</p>
          <p>PC Score: {pcScore}</p>
        </div>
      </div>
      <div className="result">
        <h3>Time: {time}</h3>
      </div>
        <p>{finalMsg}</p>
    </div>
  )
}