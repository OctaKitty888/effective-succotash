import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ReactDOM from "react-dom";
import Dashboard from "./dashboard"
import Learn from "./learn"
import Review from "./review"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>

        <Route exact path="/" render={() => (<Dashboard firstName="Blake" lastName="Contreras" wordsToReview={93} reviewsThisWeek={276}/>)} />
        <Route path="/learn" render={() => (<Learn question="私はブレイクです" answer="I am Blake"/>)} />
        <Route path="/review" component={Review}/>

      </div>
    </Router>
  )}
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);