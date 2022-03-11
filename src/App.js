import React, {  } from "react";
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
            <center> What's new in Beta 3: </center>
            <br />
            - Aquean
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- An underwater themed world
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- 2 Story Batteries
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- 2 Boss fights
            <br />
            <br />
            - Arcadia
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Arcade-themed world
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- 5 Arcade machines
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Machines take you
            to a level in other games
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- A boss with many different stages
            <br />
            - New main menu
            <br />
            - New Warp Hub backgrounds
            <br />- Various bug fixes
          </div>
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}
