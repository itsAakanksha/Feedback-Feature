import React, { useState } from "react";
import "./fab.css";
import TextBoxField from "./TextBoxField";

function ShareFeedbackForm({ currentSection, isLoggedIn }) {
  console.log(isLoggedIn);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log("Feedback:", feedback);
    console.log("Email:", email);
    console.log("Anonymous:", anonymous);
    // Simulate submission
    setSubmitted(true);
    // Reset form
    setFeedback("");
    setEmail("");
    setAnonymous(false);
  };

  return (
    <div className="form-card">
      {submitted ? (
        <p>Thanks for your valuable feedback!</p>
      ) : (
        <>
          <h2 className="form-card-title">
            Let us know your <strong className="feeback-text">Feedback</strong>{" "}
            to us!
          </h2>
          <hr className="form-card-divider" />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <TextBoxField
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Type your feedback here..."
              />
            </div>
            <div className="form-group">
              {isLoggedIn ? (
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
                  <label htmlFor="email">Email<span>*</span></label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={!anonymous}
                  />
                </>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ShareFeedbackForm;
