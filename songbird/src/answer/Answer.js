import React from 'react';
import './Answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'answer',
      questionnumber: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.questionnumber !== state.questionnumber) {
      return {
        questionnumber: props.questionnumber,
        status: 'answer',
      }
    }
    return null;
  }

  toAnswer = () => {
    this.props.selectBird(this.props.answer.id);
    if (this.props.answerstatus !== 'correct') {
      if ((this.props.currectAnswer + 1) === this.props.answer.id) {
        this.setState({status: 'correct answer'});
        this.props.changeAnswerStatus();
        this.props.changeScore();
      } else {
        this.setState({status: 'incorrect answer'});
        this.props.changePoints();
      }
    }
    return;
  }

  render() {
    return (
      <li className={this.state.status} onClick={this.toAnswer}>{this.props.answer.name}</li>
    )
  }
}

export default Answer;
