import React from 'react';
import logo from './logo.svg';
import './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <img src={logo} className="app-logo" alt="logo" />
    );
  }
}

export default Logo;