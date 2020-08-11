import React from 'react';
import './BirdName.css';

class BirdName extends React.Component {
  render() {
    const name = (this.props.answerstatus === 'correct') ? this.props.name : '*******';
    return (
      <h2 className="bird-name">{name}</h2> 
    );
  }
}

export default BirdName;
