import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ id, url, playing, loop, controls, light, placeholder }) => {
  return id || url ? (
    <div className="relative" style={{ paddingTop: '56.25%' }}>
      <ReactPlayer
        url={url || `https://stream.mux.com/${id}.m3u8`}
        className="absolute top-0 left-0"
        playing={playing}
        loop={loop}
        controls={controls}
        light={light}
        width="100%"
        height="100%"
      />
    </div>
  ) : null;
}

Video.defaultProps = {
  id: null,
  url: null,
  playing: true,
  loop: true,
  controls: false,
  light: false,
  placeholder: false,
};

export default Video;
