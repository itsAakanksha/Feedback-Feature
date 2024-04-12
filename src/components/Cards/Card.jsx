import React from "react";
import "./Cards.css";
import svg from "../../../config.js";

const Card = () => {
  return (
    <div className="task" draggable="true">
      <div className="tags">
        <div className="batch">
          <span className="tag">Design</span>
          <span className="tag">Technology</span>
        </div>

        <button className="options">
          <div className="aeorplane">
            <img src={svg.startup} alt="" />
          </div>
          <div className="startup-text">Startup</div>
        </button>
      </div>

      <div>
        <p className="first-para">
          A travel startup wants Amazon to pre-install their personal travel
          agent bot on existing Amazon Echos. What is the value of the
          partnership to the travel startup?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
          viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec
          sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna
          cursus se?
        </p>
      </div>

      <div className="stats">
        <div className="viewer">
        <img src={svg.view} alt="" />
          <span>100 views</span>
        </div>
        <div className="viewer">
          <img src={svg.info} alt="" />
          <span>How should you word your answer?</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
