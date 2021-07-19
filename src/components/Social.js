import React from "react";

const socials = [
  {
    link: "https://github.com/emp-daisy",
    icon: "github-square",
  },
  {
    link: "https://www.linkedin.com/in/adachi-jessica-m-57a049a6",
    icon: "linkedin-square",
  },
  {
    link: "https://medium.com/@empressia",
    icon: "medium",
  },
  {
    link: "mailto:adajess01@gmail.com?Subject=Enquiry",
    icon: "envelope-square",
  },
];
const SocialIcons = ({ size = "2x" }) => (
  <div className="social-icons">
    {socials.map(({ link, icon }, idx) => (
      <a href={link} key={`social-${idx}`}>
        <i className={`fa fa-${size} fa-${icon}`} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
