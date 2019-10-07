import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'v1k28emo',
  dataset: 'production'
});

const query = `*[_type == "siteSettings"][0] {
  gatsbyPreviewUrl
}`;

const Preview = () => {
  const [gatsbyPreviewUrl, setGatsbyPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(query)
      .then(res => {
        setGatsbyPreviewUrl(res.gatsbyPreviewUrl);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        padding: '1em',
        width: '50%'
      }}
    >
      <p>
        Gatsby Preview lar deg se hvordan siden ser ut samtidig som du redigerer
        i Sanity, uten at du trenger å publisere og vente på at prosjektet skal
        bygges.
      </p>
      <p>
        Gatsby Preview ser ut som netlife.com, men den kjører på et annet
        område. Endringene i Sanity vil ikke vises på netlife.com, med mindre
        man trykker på publiser-knappen i Sanity.
      </p>
      <p>
        {loading || gatsbyPreviewUrl ? (
          <a href={gatsbyPreviewUrl} target="_blank" rel="noopener noreferrer">
            Åpne Gatsby Preview
          </a>
        ) : (
          <strong>
            Det er ikke satt noen URL i Settings-dokumentet for Gatsby Preview.
          </strong>
        )}
      </p>
    </div>
  );
};

export default Preview;
