import React from 'react';
import Salut from './orig.gif';
import './FinishedGameScreen.css';

class FinishedGameScreen extends React.Component {
  startNewGame = () => {
    this.props.changeQuestionNumber();
    this.props.setPointsDefault();
    this.props.setScoreDefault();
    this.props.setAnswerStatusDefault();
    this.props.setCorrectAnswer();
    this.props.selectBird(null);
  }
  render() {
    if (this.props.score < (this.props.birdsdata.length * 5)) {
      return (
      <div className="finished-game">
        <h2>Не плохо!</h2>
        <p>Вы набрали {this.props.score} баллов из {this.props.birdsdata.length * 5} возможных.</p>
        <div className="play-again-button" onClick={this.startNewGame}>Попробовать ещё раз!</div>
      </div>
      );
    } else {
      return (
        <div className="finished-game">
          <h2>Поздравляем!</h2>
          <p>Вы набрали {this.props.score} баллов из {this.props.birdsdata.length * 5} возможных.</p>
          <img src={Salut} alt="" />
          <p>Игра окончина.</p>
        </div>
      );
    }
  }
}

export default FinishedGameScreen;