import { useState, useRef } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [progressPercent, setProgressPercent] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [hasPaused, setHasPaused] = useState(false)
  const interval = useRef()

  const handleStart = ()=> {
    if(!hasStarted){
      interval.current = setInterval(()=>{
        setProgressPercent((prev)=>prev+1)
      },100)
      setHasStarted(true)
    }
  }

  const handleStop = () => {
    if(interval.current){
      clearInterval(interval.current)
      interval.current= null
      setProgressPercent(0)
      setHasStarted(false)
      setHasPaused(false)
    }
  }

  const handleContinue = () => {
    handleStart()
  }

  const handlePause = () => {
    clearInterval(interval.current)
    setHasStarted(false)
    setHasPaused(true)
  }

  return (
    <div className='container'>
      <div className="header">Progress Bar</div>
      <ProgressBar progressPercent={progressPercent}/>
      <div className='button-group'>
        <button onClick={handleStart} className={hasStarted || hasPaused ? "hideButton": ""}>Start</button>
        <button onClick={handlePause} className={!hasStarted ? "hideButton": ""}>Pause</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleContinue} className={!hasPaused ? "hideButton": ""}>Continue</button>
        
      </div>
    </div>
  )
}

export default App
