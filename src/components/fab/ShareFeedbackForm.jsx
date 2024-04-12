import React, { useState } from 'react'
import './fab.css';


function ShareFeedbackForm({ currentSection }) {
//     const [selectedSection, setSelectedSection] = useState(currentSection);
//   const [issueDescription, setIssueDescription] = useState('');

//   const handleSectionChange = (e) => {
//     setSelectedSection(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setIssueDescription(e.target.value);
//   };

  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to store feedback and email
    console.log('Feedback:', feedback);
    console.log('Email:', email);
    console.log('Anonymous:', anonymous);
    // Simulate submission
    setSubmitted(true);
    // Reset form
    setFeedback('');
    setEmail('');
    setAnonymous(false);
  };
  return (
    <div className="form-card">
    <h2 className="form-card-title">Let us know your <strong className='feeback-text'>Feedback</strong> to us!</h2>
    <hr className="form-card-divider" />

    <form onSubmit={handleSubmit}>
        {submitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                placeholder='Write here...'
              ></textarea>
            </div>
            <div className="form-group">
              {anonymous ? (
                <label>
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={() => setAnonymous(!anonymous)}
                  />
                  Send anonymously
                </label>
              ) : (
                <>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </>
              )}
            </div>
            <button type="submit"  className="submit-button">Submit</button>
          </>
        )}
      </form>
  </div>
  )
}

export default ShareFeedbackForm