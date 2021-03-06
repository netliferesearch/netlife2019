import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SpriteAnimator from 'react-sprite-animator';

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const Animation = ({ sprite, width, height }) => {
  const [scale, setScale] = useState(1);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 1920) {
      setScale(0.4);
    } else if (size.width > 1280) {
      setScale(0.5);
    } else if (size.width > 640) {
      setScale(0.8);
    }
  }, [size]);

  return (
    <SpriteAnimator
      sprite={sprite}
      width={width}
      height={height}
      scale={scale}
      fps={10}
    />
  );
};

Animation.propTypes = {
  sprite: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
};

export default Animation;
