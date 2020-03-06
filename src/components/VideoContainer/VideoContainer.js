import './VideoContainer.scss';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import vids from '../../assets/videos';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  center: {
    zIndex: 1,
    opacity: 1,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

const VideoContainer = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const vidsIndex = wrap(0, vids.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="VideoContainer slider">
      <AnimatePresence initial={false} custom={direction}>
        <motion.video
          autoPlay
          muted
          loop
          className="slider__video"
          key={page}
          src={vids[vidsIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', ease: 'easeIn', duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        ‣
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        ‣
      </div>
    </div>
  );
};

export default VideoContainer;
