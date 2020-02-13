import React from 'react';
import './NextLevelButton.css';

class NextLevelButton extends React.Component {
  changeQuestion = () => {
    this.props.changeQuestionNumber();
    this.props.setPointsDefault();
    this.props.setAnswerStatusDefault();
    this.props.setCorrectAnswer();
    this.props.selectBird(null);
  }
  render() {
    if (this.props.answerstatus === 'correct') {
      return (
        <div className="next-level-button button-active" onClick={this.changeQuestion}>Next Level</div>
      );
    } else {
      return (
        <div className="next-level-button">Next Level</div>
      );
    }
  }
}

export default NextLevelButton;