import { useState } from 'react'
import './App.css'
import FeedbackModal from './components/FeedbackModal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <button className='feedback-btn' onClick={openModal}>Feedback</button>
      {
        isModalOpen && 
          <FeedbackModal onClose={closeModal} />
      }
    </div>
  )
}

export default App
