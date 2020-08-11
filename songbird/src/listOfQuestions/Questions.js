import React from 'react';
import './Questions.css';
import Question from '../question/Question';

class Questions extends React.Component {
  render() {
    let questions = [
      'Разминка',
      'Первый тур',
      'Второй тур',
      'Третий тур',
      'Четвертый тур',
      'Пятый тур'
    ];
    return (
      <ul className="questions">
        {questions.map((item, index) => {
          return <Question
            question={item}
            key={index}
            index={index}
            questionnumber={this.props.questionnumber}
          />
        })}
      </ul>
    );
  }
}

export default Questions;