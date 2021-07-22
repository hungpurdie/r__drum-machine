import clsx from 'clsx';
import React from 'react';
import './style.scss';

function LogoDrum({ powerOn }) {
  return (
    <div className={clsx('logo-bar', powerOn && 'active')}>
      <span class="bar-music one"></span>
      <span class="bar-music two"></span>
      <span class="bar-music three"></span>
      <span class="bar-music four"></span>
      <span class="bar-music five"></span>
    </div>
  );
}

export default LogoDrum;
