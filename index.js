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

window.store = {
  currentIndex: 0,
  1: {answerWords: ["私","は","ブレイク","です"], correctAnswer: "私はブレイクです", englishAnswer: "I am Blake"},
  2: {answerWords: ["She", "is", "Mia"], correctAnswer: "She is Mia", englishAnswer: "She is Mia"}
}

class App extends React.Component {
  render() {
    const answerWordArray = ["私","は","ブレイク","です"]
    return (
      <Router>
        <div>

        <Route exact path="/" render={() => (<Dashboard firstName="Blake" lastName="Contreras" wordsToReview={93} reviewsThisWeek={276}/>)} />
        <Route path="/learn" render={({history}) => (<Learn {...window.store[(window.store.currentIndex + 1)]} history={history} />)} />
        <Route path="/review" component={Review}/>

      </div>
    </Router>
  )}
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);

