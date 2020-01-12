import React from 'react';
const SocialIcons = ({size='2x'}) => (
    <div className="social-icons">
        <a href="https://github.com/emp-daisy">
        <i className={`fa fa-${size} fa-github-square`}></i>
        </a>
        <a href="https://www.linkedin.com/in/adachi-jessica-madufor-57a049a6">
        <i className={`fa fa-${size} fa-linkedin-square`}></i>
        </a>
        <a href="https://medium.com/@empressia">
        <i className={`fa fa-${size} fa-medium`}></i>
        </a>
        <a href="mailto:adajess01@gmail.com?Subject=Enquiry">
        <i className={`fa fa-${size} fa-envelope-square`}></i>
        </a>
    </div>
)

export default SocialIcons