import clsx from 'clsx';
import React from 'react';
import './style.scss';

function LogoDrum({ powerOn }) {
  return (
    <div className={clsx('logo-bar', powerOn && 'active')}>
      <span className="bar-music one"></span>
      <span className="bar-music two"></span>
      <span className="bar-music three"></span>
      <span className="bar-music four"></span>
      <span className="bar-music five"></span>
    </div>
  );
}

export default LogoDrum;
