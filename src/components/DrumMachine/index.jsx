import React, { useState } from 'react';
import { soundLib1, soundLib2 } from '../../constants/index.js';
import DrumPanel from '../DrumPanel/index.jsx';
import LogoDrum from '../LogoDrumMachine/index.jsx';
import PadButtonContainer from '../PadButtonContainer/index.jsx';
import './style.scss';

function DrumMachine() {
  const [display, setDisplay] = useState('');
  const [powerOn, setPowerOn] = useState(true);
  const [soundLibrary, setSoundLibrary] = useState(soundLib1);
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleOnUpdateDisplay = (name) => {
    setDisplay(name);
    setTimeout(() => clearDisplay(), 1500);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const handlePowerOnClick = () => {
    if (powerOn) {
      setPowerOn(!powerOn);
      setDisplay('power off');
      setTimeout(clearDisplay, 1000);
    } else {
      setPowerOn(!powerOn);
      setDisplay('power on');
      setTimeout(clearDisplay, 1000);
    }
  };

  const handleOnAdjustVolumeChange = (event) => {
    if (powerOn) {
      setSliderValue(event.target.value);
      setDisplay('volume: ' + Math.round(event.target.value * 100));
      setTimeout(() => clearDisplay(), 1000);
    }
  };

  const handleSoundLibraryClick = () => {
    if (powerOn) {
      if (soundLibrary === soundLib1) {
        setSoundLibrary(soundLib2);
        setDisplay('funky kit');
        setTimeout(() => clearDisplay(), 1000);
      } else {
        setSoundLibrary(soundLib1);
        setDisplay('drum kit');
        setTimeout(() => clearDisplay(), 1000);
      }
    } else {
      if (soundLibrary === soundLib1) {
        setSoundLibrary(soundLib2);
      } else {
        setSoundLibrary(soundLib1);
      }
    }
  };

  //VOLUME CONTROL
  const element = document.getElementsByClassName('clip');
  let clipVol = [].slice.call(element);
  clipVol.forEach((sound) => {
    sound.volume = sliderValue;
  });


  return (
    <div className="drum-machine">
      <LogoDrum />
      <div className="modules-container">
        <div className="left-module">
          <div className="display">{display}</div>
          <PadButtonContainer
            onUpdateDisplay={handleOnUpdateDisplay}
            soundLibrary={soundLibrary}
            powerOn={powerOn}
            display={display}
          />
        </div>

        <div className="right-module">
          <DrumPanel
            powerOnClick={handlePowerOnClick}
            sliderValue={sliderValue}
            powerOn={powerOn}
            adjustVolumeChange={handleOnAdjustVolumeChange}
            soundLibraryClick={handleSoundLibraryClick}
          />
        </div>
      </div>
    </div>
  );
}
export default DrumMachine;
