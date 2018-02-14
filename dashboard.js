import React from "react";
import {Link} from "react-router-dom"
import "./dashboard.css"

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="header">Hello <span className="emphasis">{this.props.firstName} {this.props.lastName}</span></div>
        <div> You have <span className="emphasis">{this.props.wordsToReview}</span> words to study today.</div>
        <div> You have learned <span className="emphasis">{this.props.reviewsThisWeek}</span> words this week </div>
        <Link to="/learn"><button className="primary-button">Learn </button></Link>
        <Link to="/review"><button className="primary-button">Review </button></Link>

      </div>
  )}
}

export default Dashboard