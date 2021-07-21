import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

PadButton.propTypes = {
  padColor: PropTypes.string,
  url: PropTypes.string,
  audioID: PropTypes.number,
  name: PropTypes.string,
  powerOn: PropTypes.func,
  updateDisplay: PropTypes.func,
};

function PadButton(props) {
  const { padColor, url, audioID, name, powerOn, updateDisplay } = props;

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', removeActiveStyle);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', removeActiveStyle);
    };
  });

  const onKeyDown = (event) => {
    if (powerOn) {
      if (event.key.toUpperCase() === audioID) {
        playSound();
        addActiveStyle();
      }
    } else {
      if (event.key.toUpperCase() === audioID) {
        addActiveStyle();
      }
    }
  };

  const addActiveStyle = () => {
    const element = document.getElementById(name);
    element.classList.add('active-key');
  };

  const removeActiveStyle = () => {
    const element = document.getElementById(name);
    element.classList.remove('active-key');
  };

  const playSound = () => {
    const audioClip = document.getElementById(audioID);
    audioClip.play();
    updateDisplay(name.replace(/-/g, ' '), audioID);
  };

  const handleOnClickPad = () => {
    if (powerOn) {
      playSound();
    }
  };

  return (
    <div
      id={name}
      className="drum-pad"
      onClick={handleOnClickPad}
      style={{ backgroundColor: padColor }}
    >
      <audio id={audioID} className="clip" src={url}></audio>
      {audioID}
    </div>
  );
}

export default PadButton;
