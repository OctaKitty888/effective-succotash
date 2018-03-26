import React from "react";
import "./word.css"

class Word extends React.Component {
  constructor(props){
    super(props)

  }


  render() {
    return (
      <span onClick={this.props.handler} itemkey={this.props.itemKey} className="word">{this.props.word}</span>
  )}
}

export default Word