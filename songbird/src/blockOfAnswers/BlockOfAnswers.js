import React from 'react';
import './BlockOfAnswers.css';
import Answer from '../answer/Answer';

class BlockOfAnswers extends React.Component {
  render() {
    let answers = this.props.birdsdata[this.props.questionnumber];
    return (
      <ul className="block-of-answers">
        {answers.map((item) => {
          return <Answer
            answer={item}
            key={item.id}
            currectAnswer={this.props.currectAnswer}
            answerstatus={this.props.answerstatus}
            questionnumber={this.props.questionnumber}
            changeAnswerStatus={this.props.changeAnswerStatus}
            changeScore={this.props.changeScore}
            changePoints={this.props.changePoints}
            selectBird={this.props.selectBird}
          />
        })}
      </ul>
    );
  }
}

export default BlockOfAnswers;
