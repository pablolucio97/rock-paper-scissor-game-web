import React, {useState, useEffect} from 'react';
import './styles/app.css'

function App() {
  
  const [pcScore, setPcScore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  const [time, setTime] = useState(15)
  const [currentPlay, setCurrentPlay] = useState('')
  const [pcChoice, setPcChoice] = useState([1,2,3])
  const [pcChoiceString, setPcChoiceString] = useState('')
  const [playerChoiceString, setPlayerChoiceString] = useState('')
  const [disableButton, setDisableButton] = useState(false)
  const [finalResult, setFinalResult] = useState('')
  const [delayBoxWidth, setDelayBoxWidth] = useState(0)
  
  const playing = () => {
    const randomPcChoice = Math.floor(Math.random()*pcChoice.length * 1)
    const getSelected = document.getElementById('choice')
    const selectedIndex = getSelected.selectedIndex
    switch(randomPcChoice){
      case(0):
      if(selectedIndex === 1) {
        setCurrentPlay('Draw!')  
        setPlayerChoiceString('Rock.')
        setPcChoiceString('Rock.')
      }else if (selectedIndex === 2) {
        setCurrentPlay('Player wins this round.')
        setPlayerChoiceString('Paper.')
        setPcChoiceString('Rock.')
        setPlayerScore(playerScore + 1)
      } else if (selectedIndex === 3) {
        setCurrentPlay('The PC wins this round.')
        setPlayerChoiceString('Scissor.')
        setPcChoiceString('Rock')
        setPcScore(pcScore + 1)
      } else{
        setCurrentPlay('Select a weapon before to play.')
      }
      break;
      case(1):
      if(selectedIndex === 1) {
        setCurrentPlay('The PC wins this round.')
        setPlayerChoiceString('Rock')
        setPcChoiceString('Paper')
        setPcScore(pcScore + 1)
      }else if (selectedIndex === 2) {
        setCurrentPlay('Draw!')
        setPlayerChoiceString('Paper')
        setPcChoiceString('Paper')
      } else if (selectedIndex === 3) {
        setCurrentPlay('Player wins this round.')
        setPlayerChoiceString('Scissor')
        setPcChoiceString('Paper')
        setPlayerScore(playerScore + 1)

      } else{
        setCurrentPlay('Select a weapon before to play.')
      }
      break;
      case(2):
      if(selectedIndex === 1) {
        setCurrentPlay('Player wins this round.')  
        setPlayerChoiceString('Rock')
        setPcChoiceString('Scissor')
        setPlayerScore(playerScore + 1)

      }else if (selectedIndex === 2) {
        setCurrentPlay('The PC wins this round.')
        setPlayerChoiceString('Paper')
        setPcChoiceString('Scissor')
      setPcScore(pcScore + 1)
      } else if (selectedIndex === 3) {
        setCurrentPlay('Draw!')
        setPlayerChoiceString('Scissor')
        setPcChoiceString('Scissor')
      } else{
        setCurrentPlay('Select a weapon before to play.')
      }
      break;
      default:
      }
      console.log(randomPcChoice)
  }


useEffect(() => {
  window.alert("Welcome to Game Math! Clicking in 'OK' the games starts.")
}, [])
  
  
  useEffect(() => {
    //setDelayBoxWidth
    const getDelayBox = document.getElementById('delay')
    const timing = setInterval(()=> {setTime(time -1)}, 1000)
    if(time % 2 == 0){
      setDelayBoxWidth(10)
      getDelayBox.style.width = delayBoxWidth + '%'
    } else {
      setDelayBoxWidth(50)
      getDelayBox.style.width = delayBoxWidth + '%'
    }
    if(time <= 1){
      setDisableButton(true)
      setTime(0)
      if(pcScore > playerScore){
        setFinalResult('Time finished. PC wins!')
      } else if ( pcScore === playerScore){
        setFinalResult('Time finished. Draw!')
      } else {
        setFinalResult('Time finished. Player wins!')
      }
    }
    return () => {
      clearInterval(timing)
    }

  })

  return (
    <div>
      <div>
        <div className='header'>
          <h1>Rock Paper Scissor Game</h1>
        </div>
        <div className="content">
          <p>Select a weapon to attack</p>

          <div className="play">
          <select name="choice" id="choice">
            <option value="0">Select a weapon before to play</option>
            <option value="2">Rock</option>
            <option value="3">Paper</option>
            <option value="4">Scissor</option>
          </select>
          <button className={disableButton == false? 'buttonAttack' : 'buttonDisabled'}  onClick={playing} disabled={disableButton}>Attack</button>
        <p>Player choice: {playerChoiceString}</p>
        <p>Pc choice: {pcChoiceString}</p>
        <p style={{color: '#55ff'}}>{currentPlay}</p>
          <div className="delay" id='delay'></div>
          </div>
          <div className="info">
            <h4>Time: {time}</h4>
            <h4>Your Score: {playerScore}</h4>
            <h4>PC Score: {pcScore}</h4>
          </div>
        </div>
        <div className="result" id='result'>
        <h1>{finalResult}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
