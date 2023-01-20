import React, { useState, useEffect } from "react";

import { Profile } from "../Components/Profile";
import { Academic } from "../Components/Academic";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";
import { Works } from "../Components/Works";
import { WorkExperiences } from "../Components/Experience";
import { SocialMedia } from "../Components/SocialMedia";
import { AboutMe } from "../Components/AboutMe";
import { Menu } from "../Components/Menu";
import { SEO } from "../Components/SEO";
import ErrorBoundary from '../Components/error-boundary'

import { Data as dataSchema } from "../Schemas/Data";
import { Menu as menuSchema } from "../Schemas/Menu";

export default function Home() {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMatches(window.matchMedia(query).matches)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [matches]);

  const { profile, aboutMe, skills, socialMedia, experience, workExperience } = dataSchema;

  return (
    <>
      <SEO  {...profile} {...aboutMe}/>
      <ErrorBoundary>
        {!matches && <Menu {...menuSchema} />}
      </ErrorBoundary>
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...profile} />
            <AboutMe {...aboutMe} />
            <Skills {...skills} />
            <SocialMedia {...socialMedia} />
          </div>
          <div className="resume__right">
            <WorkExperiences workExperience={workExperience} />
            {/* <Works {...experience} />
            <Projects {...experience} /> */}
            <Academic {...experience} />
          </div>
        </div>
      </main>
    </>
  )
}
