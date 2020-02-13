import React from 'react';
import './AudioPlayer.css';

class AudioPlayer extends React.Component {
  render() {
    return (
      <audio src={this.props.src} controls></audio>
    );
  }
}

export default AudioPlayer;
