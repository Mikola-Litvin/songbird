import React from 'react';
import './Header.css';
import Logo from '../logo/Logo';
import Score from '../score/Score';
import Questions from '../listOfQuestions/Questions';

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-topsection">
          <Logo />
          <Score score={this.props.score} />
        </div>
        <Questions questionnumber={this.props.questionnumber}/>
      </header>
    );
  }
}

export default Header;
