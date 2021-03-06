import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// import Sound from 'react-sound';

import './SliderAssets.scss';
import { SliderContext } from '../../contexts/SliderContext';
import songs from '../../assets/audio/sliderAudio';
import musicFunc from '../../utilits/musicFunc';

const SliderAssets = ({ isPlaying, toggle }) => {
  const {
    paginate,
    index,
    direction,
    titleVariants,
    slide,
    songInfo,
  } = useContext(SliderContext);

  return (
    <div className="SliderAssets">
      <motion.svg
        className="SliderAssets__controls"
        onClick={() => paginate(-1)}
        width="23"
        height="33"
        viewBox="0 0 23 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.2, x: 3 }}
      >
        <path
          d="M21.5 1.5L1.5 16.5L21.5 31.5"
          stroke="#F0F0F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      <motion.div
        className="SliderAssets-slider"
        variants={titleVariants}
        key={slide}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: 'spring',
          mass: 2,
          stiffness: 200,
          damping: 200,
        }}
      >
        <div className="slider__trackname">{songInfo[index].trackName}</div>
        {musicFunc(songs[index], toggle, isPlaying)}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.2, x: 5 }}
          variants={titleVariants}
          key={slide}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: 'spring',
            mass: 2,
            stiffness: 200,
            damping: 200,
          }}
          type="button"
          className="slider__button button"
        >
          {isPlaying ? <span>Stop</span> : <span>Play</span>}
        </motion.button>
      </motion.div>

      <motion.svg
        className="SliderAssets__controls"
        onClick={() => paginate(1)}
        width="22"
        height="32"
        viewBox="0 0 22 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.2, x: -3 }}
      >
        <path
          d="M1 31L21 16L1 1"
          stroke="#F0F0F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
};

export default SliderAssets;
