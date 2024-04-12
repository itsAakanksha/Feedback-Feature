import React, { useState } from 'react'
import './fab.css';

function GiveSuggestionForm({ currentSection }) {
//     const [selectedSection, setSelectedSection] = useState(currentSection);
//   const [issueDescription, setIssueDescription] = useState('');

//   const handleSectionChange = (e) => {
//     setSelectedSection(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setIssueDescription(e.target.value);
//   };

const [suggestion, setSuggestion] = useState('');
  const [section, setSection] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to store suggestion and email
    console.log('Suggestion:', suggestion);
    console.log('Section:', section);
    console.log('Email:', email);
    // Simulate submission
    setSubmitted(true);
    // Reset form
    setSuggestion('');
    setSection('');
    setEmail('');
  };

 
  return (
    <div className="form-card">
    <h2 className="form-card-title">Share your Suggestions with us for a chance to earn rewards!</h2>
    <hr className="form-card-divider" />
    <form onSubmit={handleSubmit}>
    {submitted ? (
      <p>Thank you for your suggestion!</p>
    ) : (
      <>
        <div className="form-group">
          <label htmlFor="section">Choose a section:</label>
          <select
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Section 1">Concept cards</option>
            <option value="Section 2">Interview Questions</option>
            <option value="Section 3">Practice Questions</option>
            <option value="Section 4">Quizzes</option>

          </select>
        </div>
        <div className="form-group">
          <label htmlFor="suggestion">Describe the suggestion in detail</label>
          <textarea
            id="suggestion"
            rows="4"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
            placeholder='Write here...'
          ></textarea>
        </div>
        <div className="form-group">
          {email ? (
            <p>Email: {email}</p>
          ) : (
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
        </div>
        <button type="submit" className='submit-button'>Submit</button>
      </>
    )}
  </form>
  </div>
  )
}

export default GiveSuggestionForm