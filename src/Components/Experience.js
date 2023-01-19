import React from "react";
import { Description } from "./Description2";
import { Describe } from "./Describe";

export const WorkExperiences = ({ workExperience }) => {
  return (
    <section className="projects-experience section" id="experience">
      <h2 className="section-title">Work experience</h2>
      {workExperience.map((exp) => (
        <span key={exp.company}>
          <h4 className="section-company">{exp.company} {exp.period && `| ${exp.period}`}</h4>
          <span className="experience_period"></span>
          <div className="experience__container bd-grid">
            <CompanyExperience key={exp.company} projects={exp.projects} />
          </div>
        </span>
      ))}
    </section>
  );
};

const CompanyExperience = ({ projects }) => (
  projects.map(element => <div className="experience__content" key={element.project}>
    <div className="experience__time">
      <span className="experience__rounder"></span>
      <span className="experience__line"></span>
    </div>
    <div className="experience__data bd-grid">
      <h3 className="experience__title">
        {element.project}
      </h3>
      <span className="experience__proyect">{element.period}</span>
      <Describe
        props={`Position: ${element.position}`}
      />
      <Describe
        props={`Team size: ${element.teamSize}`}
      />
      {
        element?.summary && <Describe
          props={`Summary: ${element.summary}`}
        />
      }
      <Describe
        props={`Technology: ${element.technology}`}
      />
      <p className="experience__description">Description: </p>
      {
        element.description.map((desc, i) => <Description
          key={i}
          desc={desc}
        />)
      }
      <p className="experience__description">Responsibility: </p>
      {
        element.responsibility.map((resp, i) => <Description
          key={i}
          desc={resp}
        />)
      }
    </div>
  </div>)
);
