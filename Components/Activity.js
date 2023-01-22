import React from "react";
import Link from 'next/link'

export const Activities = ({ activities }) => {
  return (
    <section className="Activity-experience section" id="activities">
      <h2 className="section-title">Activities</h2>
      <div className="experience__container bd-grid">
        {
          activities.map((activity) => (
            <Activity key={activity.title} {...activity} />
          ))
        }
      </div>
    </section>
  );
};

const Activity = ({ title, period, description, at, link }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__company">
          {period}
        </span>
        <p className="experience__description">
          {at}
          {
            link && <a href={link} target="_blank" rel="noreferrer" className="social__link">
              {link}
            </a>
          }
        </p>
        <p className="experience__description">{description}</p>
      </div>
    </div>
  );
};
