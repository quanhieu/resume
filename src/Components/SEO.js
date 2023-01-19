import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export const SEO = ({ name, occupation, description }) => {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{name} - {occupation}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};
