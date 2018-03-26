import React from "react";
import Word from "./word"
import "./learn.css"

class Learn extends React.Component {
  randomizeWords(arr) {
    var temp, j, i = arr.length+1;
    while (--i) {
      j = ~~(Math.random() * i);
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  }

  handlerThingy(event) {
    let availableWordsCopy = [].concat(this.state.availableWords)
    let finalAnswerCopy = [].concat(this.state.finalAnswer)
    let clickedItemIndex = parseInt(event.target.getAttribute("itemkey"))
    let clickedWord = availableWordsCopy.splice(clickedItemIndex, 1)
    finalAnswerCopy.push(clickedWord)
    this.setState({availableWords: availableWordsCopy, finalAnswer: finalAnswerCopy})
  }

  constructor(props, context){
    super(props, context)
    this.state = {finalAnswer: [], availableWords: props.answerWords}
    this.handlerThingy = this.handlerThingy.bind(this)
    this.nextButton = this.nextButton.bind(this)

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.availableWords.length === 0 && !this.state.done){
      if (this.state.finalAnswer.join("") === this.props.correctAnswer){
      this.setState({correct:true, done:true})
    }else{
      this.setState({correct:false, done:true})
    }

    }

  }
  nextButton() {
    window.store.currentIndex++
    this.props.history.push('/learn')

  }

  render() {
    const words = []

    this.state.availableWords.forEach((currentWord, i) => {
      words.push(<Word handler={this.handlerThingy} word={currentWord} key={currentWord} itemKey = {i}/>)
    })

    let doneComponent;
    if(this.state.correct) {
      doneComponent = (<div className="correct"> Correct!</div>)
    } else {
      doneComponent = (
      <div>
        <div className="incorrect"> Oh no, you got it wrong.</div>
        <div> The correct answer is {this.props.correctAnswer} </div>
      </div>
      )
    }

    let renderWords = this.randomizeWords(words)
    if (this.state.done) {
      return (
      <div>
        {doneComponent}
        <button onClick={this.nextButton}>Next</button>
      </div>
      )
    } else {
      return (
        <div>
          <div className="answer">
            {this.props.englishAnswer}
          </div>
          <div className="finalAnswer">
            {this.state.finalAnswer}
          </div>
          <div className="question">
            {renderWords}
            </div>
          </div>)
      }

    }
}

export default Learn