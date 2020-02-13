import React from 'react';
import './Questions.css';
import Question from '../question/Question';

class Questions extends React.Component {
  render() {
    let questions = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
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