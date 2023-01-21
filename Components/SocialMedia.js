import React from "react";
import { IconContext } from "react-icons";

export const SocialMedia = ({ label, social }) => {
  return (
    <section className="social section">
      <h2 className="section-title">{label}</h2>
      <div className="social__container bd-grid">
        {social.map((social) => <Social key={social.name} {...social} />)}
      </div>
    </section>
  );
};

const Social = ({ label, url, className, icon }) => (
  <a href={url} target="_blank" rel="noreferrer" className="social__link">
    <span className="social__icon">
      {icon}
    </span> {label}
    {/* <IconContext.Provider className='social__icon'>
      
      {label}
    </IconContext.Provider> */}
  </a>
);
