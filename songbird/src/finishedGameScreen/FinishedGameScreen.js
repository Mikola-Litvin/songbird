import React from 'react';
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
        <p></p>
        <p>Вы набрали {this.props.score} баллов из {this.props.birdsdata.length * 5} возможных.</p>
        <div className="play-again-button" onClick={this.startNewGame}>Попробовать ещё раз!</div>
      </div>
      );
    } else {
      return (
        <div className="finished-game">
          <p>Вы набрали {this.props.score} баллов из {this.props.birdsdata.length * 5} возможных.</p>
          <h2>Поздравляем!</h2>
          <p>Игра окончина.</p>
        </div>
      );
    }
  }
}

export default FinishedGameScreen;