import React from 'react';

const Preview = () => (
  <div
    style={{
      padding: '1em',
      width: '50%'
    }}
  >
    <p>
      Gatsby Preview lar deg se hvordan siden ser ut samtidig som du redigerer i
      Sanity, uten at du trenger å publisere og vente på at prosjektet skal
      bygges.
    </p>
    <p>
      Gatsby Preview ser ut som netlife.com, men den kjører på et annet område.
      Endringene i Sanity vil ikke vises på netlife.com, med mindre man trykker
      på publiser-knappen i Sanity.
    </p>
    <p>
      <a
        href="https://netlife2019-6434573541.gtsb.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Åpne Gatsby Preview
      </a>
    </p>
  </div>
);

export default Preview;
