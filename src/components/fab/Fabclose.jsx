import React from "react";
import { useState } from "react";
import "./fab.css";
import svg from "../../../config";
import FormCard from "./FormCard";

function Fabclose() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [closeBtns, setCloseBtns] = useState(false);
  function callReportform() {
    setIsReportOpen(!isReportOpen);
    setCloseBtns(!closeBtns);
  }
  console.log(closeBtns);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className={`${closeBtns ? "main-fab" : "fab"}`}>
    {isReportOpen && <FormCard />}
    </div>
      <div className={`${closeBtns ? "fab-flex" : "fab"}`}>
        {isOpen && (
          <>
            <div className="btn-nav-list">
              {!closeBtns && <div className="comment">Report an issue</div>}
              <button
                className="fab-button"
                onClick={() => {
                  callReportform();
                }}
              >
                <img src={svg.flag} alt="" />
              </button>
            </div>

            <div className="btn-nav-list">
            {!closeBtns && <div className="comment">Share Feedback</div>}
              <button className="fab-button">
                <img src={svg.feedback} alt="" />
              </button>
            </div>

            <div className="btn-nav-list">
            {!closeBtns && <div className="comment">Give suggestion</div>}
              <button className="fab-button">
                <img src={svg.suggestion} alt="" />
              </button>
            </div>

            <div className="btn-nav-list">
            {!closeBtns && <div className="comment">Contact Us</div>}
              <button className="fab-button">
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
