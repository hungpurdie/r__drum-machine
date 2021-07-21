import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

RangeSlider.propTypes = {
  sliderValue: PropTypes.number,
  adjustVolume: PropTypes.func,
};

function RangeSlider(props) {
  const { sliderValue, adjustVolume } = props;
  return (
    <div id="volume-module" className="flex-column-center ">
      <input
        className="slider"
        type="range"
        orient="vertical"
        step="0.01"
        value={sliderValue}
        min="0"
        max="1"
        onChange={adjustVolume}
      />
      <span className="control-text text-volume">VOLUME</span>
    </div>
  );
}

export default RangeSlider;
