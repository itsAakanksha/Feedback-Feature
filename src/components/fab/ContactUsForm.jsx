import React, { useState } from 'react'
import './fab.css';

function ContactUsForm({ currentSection }) {
//     const [selectedSection, setSelectedSection] = useState(currentSection);
//   const [issueDescription, setIssueDescription] = useState('');

//   const handleSectionChange = (e) => {
//     setSelectedSection(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setIssueDescription(e.target.value);
//   };

const [name, setName] = useState('');
const [email, setEmail] = useState('ak@gmail.com');
const [mobile, setMobile] = useState('2333');
const [question, setQuestion] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  // Logic to store contact details and question
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Mobile:', mobile);
  console.log('Question:', question);
  // Simulate submission
  setSubmitted(true);
  // Reset form
  setName('');
  setEmail('');
  setMobile('');
  setQuestion('');
};

   const isDisabled = !name || !question || (!email && !mobile);
  return (
    <div className="form-card">
    {
        submitted ? " " :
    ( <>
    <h2 className="form-card-title">Get in Contact with us for your queries!</h2>
    <hr className="form-card-divider" />
    </>
)
}
    <form onSubmit={handleSubmit}>
    {submitted ? (
      <p>Thank you for contacting us!</p>
    ) : (
      <>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {!email && (
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={!mobile}
            />
          </div>
        )}
        {!mobile && (
          <div className="form-group">
            <label htmlFor="mobile">Your Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required={!email}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="question">What would you like to ask?</label>
          <textarea
            id="question"
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isDisabled} className='submit-button'>
          Submit
        </button>
      </>
    )}
  </form>
  </div>
  )
}

export default ContactUsForm