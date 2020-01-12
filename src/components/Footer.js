import React from 'react';
import SocialIcons from './Social';
const Footer = ({className=''}) => {
  return (
    <div className={`contact ${className}`}>
      <h3>Thank!</h3>
      <h5>Get in touch. Let's talk business. <i className="fa fa-smile-wink face"></i></h5>

      <SocialIcons size='4x' />

      <small>Sure I would get back to you ASAP!!!</small>


      <small className="copyright">
        &copy;  {new Date().getFullYear()} Empress <i className="fa fa-heart fa-beat"></i>
      </small>
    </div>
  );
};

export default Footer;