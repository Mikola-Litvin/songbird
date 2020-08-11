import React from 'react';
import './BirdDescription.css';
import BirdsImage from '../birdsImage/BirdsImage';
import BirdName from '../birdName/BirdName';
import AudioPlayerWrapper from '../audioPlayer/AudioPlayer';

class BirdDescription extends React.Component {
  render() {
    if (this.props.selectedBird === null) {
      return (
        <div className="bird-description">
          <p>Послушайте плеер</p>
          <p>Выберите птицу из списка</p>
        </div>
      );
    } else {
      return (
        <div className="bird-description">
          <div className="bird-description-top-section">
            <BirdsImage src={this.props.birdsdata[this.props.selectedBird - 1].image} answerstatus='correct' />
            <div>
              <BirdName
                name={this.props.birdsdata[this.props.selectedBird - 1].name}
                answerstatus='correct'
              />
              <p>{this.props.birdsdata[this.props.selectedBird - 1].species}</p>
              <AudioPlayerWrapper src={this.props.birdsdata[this.props.selectedBird - 1].audio} />
            </div>
          </div>
          <p>{this.props.birdsdata[this.props.selectedBird - 1].description}</p>
        </div>
      );
    }
  }
}

export default BirdDescription;