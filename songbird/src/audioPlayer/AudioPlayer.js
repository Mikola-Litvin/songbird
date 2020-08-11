import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './AudioPlayer.css';

class AudioPlayerWrapper extends React.Component {
  render() {
    return (
      <AudioPlayer
        src={this.props.src}
        onAbort={e => e.target.play().then(() => {e.target.pause()})}
        showJumpControls={false}
        showDownloadProgress={false}
        customProgressBarSection={
          [
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
            RHAP_UI.VOLUME,
          ]
        }
        customControlsSection={[]}
      />
    );
  }
}

export default AudioPlayerWrapper;
