import React, { Component } from 'react';
import '../styles/App.scss';
import Profile from './Profile';
import Technology from './Technology';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Profile/>
        <Technology/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
