import React from "react";
import dynamic from 'next/dynamic'
import { BsMailbox2, BsTelephoneFill, BsGeoAltFill } from "react-icons/bs";

const DynamicOptions = dynamic(() => import('./Options'), {
  ssr: false,
})

export const Profile = ({
  name,
  occupation,
  location,
  email,
  telephone,
  image,
}) => {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={image} alt="profile_image" className="home__img" />
          <h1 className="home__title">
            <strong>{name}</strong>
          </h1>
          <h3 className="home__profession">{occupation}</h3>
        </div>

        <div className="home__address bd-grid">
          <span className="home__information">
            <BsGeoAltFill style={{
              marginRight: '0.4em',
              fontSize: "1.4em"
            }} /> {location}
          </span>
          <span className="home__information">
            <BsMailbox2 style={{
              marginRight: '0.4em',
              fontSize: "1.4em"
            }} /> {email}
          </span>
          <span className="home__information">
            <BsTelephoneFill  style={{
              marginRight: '0.4em',
              fontSize: "1.4em"
            }}
            />
            {telephone}
          </span>
        </div>
      </div>
      <DynamicOptions />
    </section>
  );
};
