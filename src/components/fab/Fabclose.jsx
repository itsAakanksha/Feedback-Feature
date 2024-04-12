import React from "react";
import { useState } from "react";
import "./fab.css";
import svg from "../../../config";
import ReportIssueForm from "./ReportIssueForm";
import ShareFeedbackForm from "./ShareFeedbackForm";
import ContactUsForm from "./ContactUsForm";
import GiveSuggestionForm from "./GiveSuggestionForm";
function Fabclose() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  function handleFeatureClick(feature) {
    setSelectedFeature(feature);
    // setSelectedOption(!selectedOption)
    setSelectedOption(true);
  }
  console.log(selectedOption)

  function handleClick() {
    setIsOpen(!isOpen);
    setSelectedFeature(null);
    setSelectedOption(false);
   
  }
  return (
    <>
      <div className={`${selectedOption ? "main-fab" : "fab"}`}>
        {selectedFeature === "Report an Issue" && <ReportIssueForm />}
        {selectedFeature === "Share Feedback" && <ShareFeedbackForm />}
        {selectedFeature === "Give Suggestion" && <GiveSuggestionForm />}
        {selectedFeature === "Contact Us" && <ContactUsForm />}
      </div>
      <div className={`${selectedOption ? "fab-flex" : "fab"}`}>
        {isOpen && (
          <>
            <div className="btn-nav-list">
              {!selectedOption && <div className="comment">Report an issue</div>}
              <button
              className={`fab-button ${selectedFeature === "Report an Issue" ? "selected-btn" : ""}`}
                onClick={() => handleFeatureClick("Report an Issue")}
              >
                <img src={svg.flag} alt="" />
              </button>
            </div>

            <div className="btn-nav-list">
              {!selectedOption && <div className="comment">Share Feedback</div>}
              <button
              className={`fab-button ${selectedFeature === "Share Feedback" ? "selected-btn" : ""}`}

                onClick={() => handleFeatureClick("Share Feedback")}
              >
                <img src={svg.feedback} alt="" />
              </button>
            </div>

            <div className="btn-nav-list">
              {!selectedOption && <div className="comment">Give suggestion</div>}
              <button
              className={`fab-button ${selectedFeature === "Give Suggestion" ? "selected-btn" : ""}`}
                onClick={() => handleFeatureClick("Give Suggestion")}
              >
                <img src={svg.suggestion} alt="" />
              </button>
            </div>

            <div className="btn-nav-list">
              {!selectedOption && <div className="comment">Contact Us</div>}
              <button
              className={`fab-button ${selectedFeature === "Contact Us" ? "selected-btn" : ""}`}
                onClick={() => handleFeatureClick("Contact Us")}
              >
                <img src={svg.contact} alt="" />
              </button>
            </div>
          </>
        )}

        <div className="btn-nav-list">
          <div></div>
          <button className="fab-button" onClick={() => handleClick()}>
            {isOpen ? (
              <img src={svg.close} className="fab-icon" alt="" />
            ) : (
              <img src={svg.fab} className="fab-icon" alt="" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Fabclose;
