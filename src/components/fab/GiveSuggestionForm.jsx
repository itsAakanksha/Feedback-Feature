import React, { useState } from "react";
import "./fab.css";
import TextBoxField from './TextBoxField.jsx';

function GiveSuggestionForm({ isLoggedIn }) {
  const [suggestion, setSuggestion] = useState("");
  const [section, setSection] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate that suggestion field is filled
    if (!suggestion) {
      alert("Please fill out the suggestion field.");
      return;
    }
    
    // Logic to store suggestion and email (replace with your actual backend logic)
    console.log("Suggestion:", suggestion);
    console.log("Section:", section);
    console.log("Email:", email);
    
    // Simulate submission
    setSubmitted(true);
    // Reset form
    setSuggestion("");
    setSection("");
    setEmail("");
  };

  return (
    <div className="form-card">
      {submitted ? (
        <p>Thanks for your valuable suggestion!</p>
      ) : (
        <>
          <h2 className="form-card-title">
            Share your Suggestions with us for a chance to earn rewards!
          </h2>
          <hr className="form-card-divider" />
    
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="suggestion">
                Describe the suggestion in detail
                <span> *</span>
              </label>
              <TextBoxField
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Write here..."
              />
            </div>
            {isLoggedIn ? null : (
              <div className="form-group">
                <label htmlFor="email">Email: <span> *</span></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default GiveSuggestionForm;
