import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const Video = ({ url }) => (
  <div className="relative" style={{ paddingTop: '56.25%' }}>
    <ReactPlayer
      url={url}
      className="absolute top-0 left-0"
      playing={false}
      loop={false}
      controls={true}
      light={true}
      width="100%"
      height="100%"
    />
  </div>
);

Video.propTypes = {
  url: PropTypes.string.isRequired
};

export default Video;
