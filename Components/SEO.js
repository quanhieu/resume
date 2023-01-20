import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export const SEO = ({ name, occupation, description }) => {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{name} - {occupation}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href='/favicon.png'
        />
      </Helmet>
    </HelmetProvider>
  );
};
