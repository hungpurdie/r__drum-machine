import React from 'react';
import PropTypes from 'prop-types';
import { padColor } from '../../constants/index.js';
import PadButton from '../PadButton/index.jsx';

PadButtonContainer.propTypes = {
  soundLibrary: PropTypes.array,
  onUpdateDisplay: PropTypes.func,
  powerOn: PropTypes.bool,
  display: PropTypes.string,
};

function PadButtonContainer(props) {
  const { soundLibrary, onUpdateDisplay, powerOn, display } = props;

  return (
    <>
      <div className="display">{display}</div>
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
    </>
  );
}

export default PadButtonContainer;
