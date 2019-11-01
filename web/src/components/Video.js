import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ id, url, playing, loop, controls, light, placeholder }) => {
  return id || url ? (
    <div className="relative" style={{ paddingTop: '56.25%' }}>
      <ReactPlayer
        url={url || `https://stream.mux.com/${id}.m3u8`}
        playing={playing}
        loop={loop}
        controls={controls}
        light={light}
        className="absolute top-0 left-0"
        style={{zIndex: 1}}
        width="100%"
        height="100%"
      />
      {placeholder && id && (
        <picture style={{zIndex: 0}} className="absolute top-0 left-0">
            <source
              type="image/gif"
              srcSet={`https://image.mux.com/${id}/thumbnail.jpg`}
            />
            <img
              srcSet={`https://image.mux.com/${id}/thumbnail.jpg`}
              alt=""
            />
        </picture>
      )}
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
