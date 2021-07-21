import React from 'react';
import PropTypes from 'prop-types';
import RangeSlider from '../RangeSlider/index.jsx';
import './style.scss';

DrumPanel.propTypes = {
  powerOnClick: PropTypes.func,
  sliderValue: PropTypes.number,
  adjustVolumeChange: PropTypes.func,
  soundLibraryClick: PropTypes.func,
};

function DrumPanel(props) {
  const { powerOnClick, sliderValue, adjustVolumeChange, soundLibraryClick } = props;
  return (
    <>
      <div id="power-module" className="power-module flex-column-center">
        <i id="power-light" className="power-on">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle"
            width={32}
            height={32}
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
            className="icon icon-tabler icon-tabler-circle"
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

      <div className="change-module flex-column-center">
        <button id="power-button" className="btn btn__change" onClick={soundLibraryClick}></button>
        <span className="control-text">CHANGE</span>
      </div>
    </>
  );
}

export default DrumPanel;
