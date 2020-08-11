import React from 'react';
import './BlockOfAnswers.css';
import Answer from '../answer/Answer';

class BlockOfAnswers extends React.Component {
  render() {
    let answers = this.props.birdsdata[this.props.questionnumber];
    console.clear();
    console.log('Correct answer', this.props.currectAnswer + 1);
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
