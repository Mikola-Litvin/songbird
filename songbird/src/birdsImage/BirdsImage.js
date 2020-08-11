import React from 'react';
import './BirdsImage.css';
import Image from './bird.jpg';

class BirdsImage extends React.Component {
  render() {
    const imageSrc = (this.props.answerstatus === 'correct') ? this.props.src : Image;
    return (
      <img className="birds-image" src={imageSrc} alt="" /> 
    );
  }
}

export default BirdsImage;
