

const ProgressBar = (props) => {
  // const [progressPercent] = {props}

  const value = Math.min(100, Math.max(props.progressPercent,0))
  return (
    <div className="progress"> 
      <span>
        {value}%
      </span>
      <div style={{width: `${value}%`}} />
    </div>
  )
}

export default ProgressBar