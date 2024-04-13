import React, { useState } from "react";
import "./fab.css";
import TextBoxField from "./TextBoxField.jsx";

function ContactUsForm({ currentSection, isLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Question:", question);
    // Simulate submission
    setSubmitted(true);
    // Reset form
    setName("");
    setEmail("");
    setMobile("");
    setQuestion("");
  };

  const isDisabled =
    !name ||
    !question ||
    (!isLoggedIn && (!email || !mobile));

  return (
    <div className="form-card">
      {submitted ? (
        <p>We will get back to you as soon as possible!</p>
      ) : (
        <>
          <h2 className="form-card-title">
            Get in Contact with us for your queries!
          </h2>
          <hr className="form-card-divider" />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Your Name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {!isLoggedIn && (
              <>
                <div className="form-group">
                  <label htmlFor="email">
                    Your Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">
                    Your Mobile Number <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="question">
                What would you like to ask? <span>*</span>
              </label>
              <TextBoxField
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
              />
            </div>
            <button
              type="submit"
              disabled={!isDisabled}
              className="submit-button"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ContactUsForm;

