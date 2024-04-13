import React, { useState } from "react";
import TextBoxField from "./TextBoxField";


function ReportIssueForm({ currentSection }) {
  const [selectedSection, setSelectedSection] = useState(currentSection);
  const [issueDescription, setIssueDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Selected Section:", selectedSection);
    console.log("Issue Description:", issueDescription);
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="form-card">
      {submitted ? (
        <p>Thanks for bringing the issue to our
        attention.We'll review it shortly and provide an update soon!</p>
      ) : (
        <>
          <h2 className="form-card-title">Let us know about the Issue you are facing right now!</h2>
          <hr className="form-card-divider" />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="section">Choose a section </label>
              <select
                id="section"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
              >
                <option value="Interview Question">Interview Question</option>
                <option value="Feedback">Practice Questions</option>
                <option value="Bug Report">Quizzes</option>
                <option value="Bug Report">Other</option>

               
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="issue-description">Describe the issue in detail <span> * </span> </label>
            <TextBoxField/>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default ReportIssueForm;

