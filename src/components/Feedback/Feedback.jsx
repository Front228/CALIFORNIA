import './Feedback.scss'

const Feedback = () => {
    return (
        <div className='block-fdfsr'>
            <div className="feedback">
                <div className="feedback-text">
                    <h2>Never miss a thing</h2>
                    <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                </div>
                <div className="feedback-image"></div>
                <div className="feedback-input">
                    <input type="email" placeholder="Your email" className='feedbackInput'/>
                    <button type="button" className='btn-feedback'>Sign up</button>
                </div>
            </div>
        </div>
     )
}

export default Feedback;