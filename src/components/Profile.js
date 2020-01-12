import React from 'react';
import SocialIcons from './Social';
const Profile = ({className=''}) => {
  return (
    <div className={`profile ${className}`}>
      <div className="img-frame">
        <img src={require('./../assets/20181018_124810.jpg')} className="profile-pic" alt="profile" />
      </div>
        <span className="full-name">Hello. I'm Jessica M.</span>
        <span className="bio">Full stack web and mobile  developer</span>
        <SocialIcons />
    </div>
  );
};

export default Profile;