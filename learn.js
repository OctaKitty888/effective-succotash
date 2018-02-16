import React from "react";

class Learn extends React.Component {
  constructor(props){
    super(props)
    this.state = {showAnswer: false}
    this.showAnswer = this.showAnswer.bind(this)
  }

  showAnswer() {
    this.setState(prevState => ({
         showAnswer: !prevState.toggleAnswer
       }));
  }

  render() {
    return (
      <div>
        <div className="answer" onClick={this.showAnswer}>
          {this.props.answer}
        </div>
        <div className="question" style={{visibility: this.state.showAnswer ? "visible" : "hidden"}}>
          {this.props.question}
          </div>
        </div>

  )}
}

export default Learn