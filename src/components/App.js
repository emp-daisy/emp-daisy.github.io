import React, { Component } from 'react';
import Profile from './Profile';
import Technology from './Technology';
import Footer from './Footer';
import Experience from './Experience';
import Portfolio from './Portfolio';

class App extends Component {

  componentDidMount() {
      // var body = document.getElementById('starshine'),
      //     template = document.getElementsByClassName('parallax'),
      //     stars =  500,
      //     sparkle = 20;


      // var size = 'small';
      // var createStar = function() {
      //   template.clone().removeAttr('id').css({
      //     top: (Math.random() * 100) + '%',
      //     left: (Math.random() * 100) + '%',
      //     webkitAnimationDelay: (Math.random() * sparkle) + 's',
      //     mozAnimationDelay: (Math.random() * sparkle) + 's'
      //   }).addClass(size).appendTo(body);
      // };

      // for(var i = 0; i < stars; i++) {
      //   if(i % 2 === 0) {
      //     size = 'small';
      //   } else if(i % 3 === 0) {
      //     size = 'medium';
      //   } else {
      //     size = 'large';
      //   }
      //   createStar();
      // }
  }

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
