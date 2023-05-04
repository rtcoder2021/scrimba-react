import React from 'react'
import logo from '/Users/gabrielolat/ScrimbaReact/scrimba-react-app/src/images/logo.svg';


const Header = () => {
  return (
<nav>
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h3>ReactFacts</h3>
    <h4 className="App-header__title">React Course - Project 1</h4>
  </header>
</nav>
  )
}

export default Header;
