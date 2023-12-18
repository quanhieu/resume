import React from "react";
import Link from 'next/link'

export const Certifications = ({ certifications }) => {
  return (
    <section className="certification-experience section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="experience__container bd-grid">
        {
          certifications.map((cert) => (
            <Certification key={cert.title} {...cert} />
          ))
        }
      </div>
    </section>
  );
};

const Certification = ({ title, period, description, at, link }) => {
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
          {
            link && <a href={link} target="_blank" rel="noreferrer" className="social__link">
              Certificate
            </a>
          }
        </p>
      </div>
    </div>
  );
};
