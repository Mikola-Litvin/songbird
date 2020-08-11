import React from 'react';
import './App.css';
import Header from '../header/Header';
import MainContent from '../mainContent/MainContent';
import Birds from './birds';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      points: 5,
      questionnumber: 0,
      correctanswer: Math.abs(Math.round(0 - 0.5 + Math.random() * (5 - 0 + 1))),
    };
    this.changeScore = this.changeScore.bind(this);
    this.changePoints = this.changePoints.bind(this);
    this.setPointsDefault = this.setPointsDefault.bind(this);
    this.setScoreDefault = this.setScoreDefault.bind(this);
    this.setCorrectAnswer = this.setCorrectAnswer.bind(this);
    this.changeQuestionNumber = this.changeQuestionNumber.bind(this);
  }

  changeQuestionNumber() {
    if (this.state.questionnumber < Birds.length) {
      this.setState({questionnumber: this.state.questionnumber + 1});
    } else {
      this.setState({questionnumber: 0});
    }
  }
  
  changeScore() {
    const newValue = this.state.score + this.state.points;
    this.setState({score: newValue});
  }

  changePoints() {
    let newValue = this.state.points - 1;
    if (newValue < 0) newValue = 0;
    this.setState({points: newValue});
  }

  setPointsDefault() {
    this.setState({points: 5});
  }

  setScoreDefault() {
    this.setState({score: 0});
  }

  setCorrectAnswer() {
    let randomNumber = Math.abs(Math.round(0 - 0.5 + Math.random() * (5 - 0 + 1)));
    this.setState({correctanswer: randomNumber});
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          questionnumber={this.state.questionnumber}
        />
        <MainContent
          birdsdata={Birds}
          questionnumber={this.state.questionnumber}
          randomId={this.state.correctanswer}
          changeScore={this.changeScore}
          changePoints={this.changePoints}
          setPointsDefault={this.setPointsDefault}
          setCorrectAnswer={this.setCorrectAnswer}
          changeQuestionNumber={this.changeQuestionNumber}
          score={this.state.score}
          setScoreDefault={this.setScoreDefault}
        />
      </div>
    );
  }
}

export default App;
