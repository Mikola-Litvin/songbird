import React from 'react';
import './Question.css';

class Question extends React.Component {
  render() {
    if (this.props.questionnumber === this.props.index) {
      return (
        <li className="question active-question">{this.props.question}</li>
      );
    } else {
      return (
        <li className="question">{this.props.question}</li>
      );
    }
  }
}

export default Question;