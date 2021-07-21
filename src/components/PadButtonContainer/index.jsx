import React from 'react';
import PropTypes from 'prop-types';
import { padColor } from '../../constants/index.js';
import PadButton from '../PadButton/index.jsx';
import './style.scss';

PadButtonContainer.propTypes = {
  soundLibrary: PropTypes.array,
  onUpdateDisplay: PropTypes.func,
  powerOn: PropTypes.bool,
};

function PadButtonContainer(props) {
  const { soundLibrary, onUpdateDisplay, powerOn } = props;

  return (
    <>
      <div className="pad-btn-container">
        {soundLibrary.map((btn, index) => (
          <PadButton
            key={btn.name}
            name={btn.name}
            audioID={btn.audioID}
            url={btn.url}
            padColor={padColor[index]}
            updateDisplay={onUpdateDisplay}
            powerOn={powerOn}
          />
        ))}
      </div>
    </>
  );
}

export default PadButtonContainer;
