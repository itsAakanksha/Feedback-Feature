import { useState , useEffect } from "react";
// import { useState } from "react";
import "./App.css";
import svg from "../config.js";
import Card from "./components/Cards/Card.jsx";
import Fabclose from "./components/fab/Fabclose.jsx";
import FormCard from "./components/fab/ReportIssueForm.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import RateUs from "./components/Rateus/RateUs.jsx";
function App() {

  const [showRateUs, setShowRateUs] = useState(false);
  console.log(showRateUs);

  useEffect(() => {
     setTimeout(() => {
      setShowRateUs(true);
    }, 2000);
    // return () => clearTimeout(timer);
  } ,[]);
  return (
    <>
    <Navbar/>
    <RateUs showRateUs={showRateUs} setShowRateUs={setShowRateUs} />

  
{
      <main className="main-container">
        <div className="backward">
          <div className="backward-inner">
            <img src={svg.back} className="back-icon" alt="" />
            <span>Back to Questions</span>
          </div>
        </div>

        <div className="container">
          <div className="cards">
            <Card />
            <div className="drop-down">
              <div className="left-side">Answers (23) </div>
              <div className="right-side">
                <span>Sort By: </span>
                <div class="paste-button">
                  <button class="button">Popular &nbsp; ▼</button>
                  <div class="dropdown-content">
                    <a id="top" href="#">
                     Latest
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
            <Card />
          </div>
         
        </div>
      </main>
      }

        <div className="fab-buttons"> 
        <Fabclose/>
        </div>

  

    
    </>
  );
}

export default App;
