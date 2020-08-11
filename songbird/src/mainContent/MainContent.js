import React from 'react';
import './MainContent.css';
import QuestionBlock from '../questionBlock/QuestionBlock';
import BlockOfAnswers from '../blockOfAnswers/BlockOfAnswers';
import BirdDescription from '../birdDescription/BirdDescription';
import NextLevelButton from '../nextLevelButton/NextLevelButton';
import FinishedGameScreen from '../finishedGameScreen/FinishedGameScreen';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerstatus: null,
      selectedbird: null,
    };
    this.changeAnswerStatus = this.changeAnswerStatus.bind(this);
    this.setAnswerStatusDefault = this.setAnswerStatusDefault.bind(this);
    this.selectBird = this.selectBird.bind(this);
  }

  changeAnswerStatus() {
    this.setState({answerstatus: 'correct'});
  }

  setAnswerStatusDefault() {
    this.setState({answerstatus: null});
  }

  selectBird(id) {
    this.setState({selectedbird: id});
  }
  
  render() {
    if (this.props.questionnumber < this.props.birdsdata.length) {
      return (
        <main className="main-content">
          <QuestionBlock 
            birdsdata={this.props.birdsdata[this.props.questionnumber][this.props.randomId]}
            answerstatus={this.state.answerstatus}
          />
          <BlockOfAnswers
            birdsdata={this.props.birdsdata}
            questionnumber={this.props.questionnumber}
            currectAnswer={this.props.randomId}
            answerstatus={this.state.answerstatus}
            changeAnswerStatus={this.changeAnswerStatus}
            changeScore={this.props.changeScore}
            changePoints={this.props.changePoints}
            selectBird={this.selectBird}
          />
          <BirdDescription
            selectedBird={this.state.selectedbird}
            birdsdata={this.props.birdsdata[this.props.questionnumber]}
          />
          <NextLevelButton
            answerstatus={this.state.answerstatus}
            setAnswerStatusDefault={this.setAnswerStatusDefault}
            setPointsDefault={this.props.setPointsDefault}
            changeQuestionNumber={this.props.changeQuestionNumber}
            setCorrectAnswer={this.props.setCorrectAnswer}
            selectBird={this.selectBird}
          />
        </main>
      );
    } else {
      return (
        <main className="main-content">
          <FinishedGameScreen
            score={this.props.score}
            birdsdata={this.props.birdsdata}
            setScoreDefault={this.props.setScoreDefault}
            setPointsDefault={this.props.setPointsDefault}
            setAnswerStatusDefault={this.setAnswerStatusDefault}
            changeQuestionNumber={this.props.changeQuestionNumber}
            setCorrectAnswer={this.props.setCorrectAnswer}
            selectBird={this.selectBird}
          />
        </main>
      );
    }
  }
}

export default MainContent;
