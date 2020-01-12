import React, { Component } from 'react';
import Profile from './Profile';
import Technology from './Technology';
import Footer from './Footer';
import Experience from './Experience';
import Portfolio from './Portfolio';

class App extends Component {

  glitter = () => (
    <>
      <div className="glitter" />
      <div className="glitter__medium" />
      <div className="glitter__big" />
    </>
  )
  render() {
    return (
      <div className="app">
        {/* <this.glitter/> */}
        <Profile className='parallax'/>
        <Technology className='plain-section' />
        <Portfolio className='parallax'/>
        <Experience className='plain-section' />
        <Footer className='parallax'/>
      </div>
    );
  }
}

export default App;
