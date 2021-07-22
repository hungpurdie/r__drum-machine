import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RangeSlider from '../RangeSlider/index.jsx';
import './style.scss';

DrumPanel.propTypes = {
  powerOnClick: PropTypes.func,
  sliderValue: PropTypes.number,
  adjustVolumeChange: PropTypes.func,
  soundLibraryClick: PropTypes.func,
  powerOn: PropTypes.bool,
};

function DrumPanel(props) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    soundLibraryClick();
    setIsOn(!isOn);
  };

  const { powerOnClick, sliderValue, adjustVolumeChange, soundLibraryClick, powerOn } = props;
  return (
    <>
      <div id="power-module" className="power-module flex-column-center">
        <i className="signal-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={powerOn ? 'on' : 'off'}
            width={15}
            height={15}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx={12} cy={12} r={9} />
          </svg>
        </i>

        <i id="power-button" className="btn btn__power" onClick={powerOnClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx={12} cy={12} r={9} />
          </svg>
        </i>
        <span className="control-text">POWER</span>
      </div>
      <RangeSlider sliderValue={sliderValue} adjustVolume={adjustVolumeChange} />

      <div className="switch-module flex-column-center">
        <div className="btn" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div
            className="btn-switch"
            layout
            transition={{ type: 'string', stiffness: 700, damping: 30 }}
          />
        </div>
        <span className="control-text">CHANGE</span>
      </div>
    </>
  );
}

export default DrumPanel;
