import { useState } from "react"
import RatingContent from "./RatingContent"

const FeedbackModal = ({onClose}) => {
  const [feedbackContent, setFeedbackContent] = useState('')
  const [activeRating, setActiveRating] = useState({})
  const [isSubmitTrue, setIsSubmitTrue] = useState(false)

  const handleSubmit = () => {
    setIsSubmitTrue(true)
  }

  const handleClick = (item) => {
    setActiveRating(item)
  }

  const handleFeedbackContent = (e) => {
    setFeedbackContent(e.target.value)
  }

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>x</button>
        <h1>User Feedback</h1>
        {
          !isSubmitTrue ? 
          <div className="feedback-content">
          <RatingContent handleClick={handleClick} activeRating={activeRating.rating}  />
          <textarea 
            placeholder="Please share additional feedback (optional)"
            rows="5"
            cols="30"
            style={{ width: '80%', margin: '10px', fontSize: '12px', padding: '2px'}}
            value={feedbackContent}
            onChange={handleFeedbackContent}
          >
          </textarea>
          <button className="feedback-btn" onClick={handleSubmit}>Submit</button>
        </div> :
        <div className="feedback-response">
          <p>Feedback: {activeRating.mood}</p>
          <p>Thank you for your feedback</p>
        </div>
        }
        
      </div>
    </div>
  )
}

export default FeedbackModal