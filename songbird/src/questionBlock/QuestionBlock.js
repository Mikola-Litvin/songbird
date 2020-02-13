import React from 'react';
import './QuestionBlock.css';
import BirdsImage from '../birdsImage/BirdsImage';
import BirdName from '../birdName/BirdName';
import AudioPlayer from '../audioPlayer/AudioPlayer';

class QuestionBlock extends React.Component {
  render() {
    return (
      <div className="question-block">
        <div className="bifdsimage-wrapper">
          <BirdsImage
            src={this.props.birdsdata.image}
            answerstatus={this.props.answerstatus}
          />
        </div>
        <div className="player-section">
          <BirdName
            name={this.props.birdsdata.name}
            answerstatus={this.props.answerstatus}
          />
          <AudioPlayer src={this.props.birdsdata.audio} />
        </div>
      </div>
    );
  }
}

export default QuestionBlock;
