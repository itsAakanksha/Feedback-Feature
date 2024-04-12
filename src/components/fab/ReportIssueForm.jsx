import React, { useState } from 'react';
import './fab.css';

const ReportIssueForm = ({ currentSection }) => {
  const [selectedSection, setSelectedSection] = useState(currentSection);
  const [issueDescription, setIssueDescription] = useState('');

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setIssueDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitting form...');
  };

  return (
    <div className="form-card">
      <h2 className="form-card-title">Let us know about the Issue you are facing right now!</h2>
      <hr className="form-card-divider" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="section">Choose a section:</label>
          <select id="section" value={selectedSection} onChange={handleSectionChange}>
            <option value="Interview Question">Interview Question</option>
            <option value="Feedback">Feedback</option>
            <option value="Bug Report">Bug Report</option>
           
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="issue-description">Describe the issue in detail:</label>
          <textarea
            id="issue-description"
            rows="6"
            value={issueDescription}
            onChange={handleDescriptionChange}
            placeholder="Enter your description here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ReportIssueForm;
