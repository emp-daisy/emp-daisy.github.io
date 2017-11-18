import React from 'react';
const Profile = () => {
  return (
    <div className="profile parallax">
      <div className="img-frame">
        <img src={require('./../assets/20181018_124810.jpg')} className="profile-pic" alt="profile" />
      </div>
        <span className="full-name">Jessica M.</span>
        <span className="bio">Full stack web and mobile  developer</span>
        <div className="social-icons">
          <a href="https://github.com/emp-daisy">
            <i className="fa fa-2x fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/adachi-jessica-madufor-57a049a6">
            <i className="fa fa-2x fa-linkedin-square"></i>
          </a>
          <a href="mailto:adajess01@gmail.com?Subject=Enquiry">
            <i className="fa fa-2x fa-envelope-square"></i>
          </a>
        </div>
    </div>
  );
};

export default Profile;