import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route /*, Link*/
} from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return (
    <div className="body">
      <div className="header">
        <span>
          <img
            src="https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="header">
        <span>
          <img
            src="https://raw.githubusercontent.com/jordan-trempert/media/main/stardom-logo%20(1).png"
            alt="logo"
            id="logo"
            draggable="false"
          ></img>
        </span>
      </div>
      <div className="airframe">
        <h1>
          <center>Project Paradox Changelog</center>
        </h1>
        <span id="hover">
          <div className="ds10">
            <center>
              <img
                src="https://raw.githubusercontent.com/jordan-trempert/media/main/Project%20Paradox.png"
                alt="dslogo"
                id="dslogo"
              />
            </center>
            <br />
            <center> What's new in Beta 5: </center>
            <br />
            - Space
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- 6 Story Batteries
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- 6 Planets
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- 1 Boss fight
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <center>Various bug fixes </center>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Fixed an issue where you weren't able to move in the Bruce bossfight
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Not dying after losing all of your health in the Hospital
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Helicopter flys through bottom and top walls
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Health upon entering a world isn't full
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Undertale heart clipping
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Arcadia boss no movement animation for the final 2 attack sequences
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Many bugs making the game impossible to progress on Android

    
            
          </div>
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}
