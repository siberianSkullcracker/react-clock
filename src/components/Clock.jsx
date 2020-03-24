import React, { useEffect } from 'react';
import { useTime } from '../utils/hooks';
import Hands from './Hands';
import './Clock.css';

const getTimeString = time => {
  return `${time.hours}:${time.minutes}:${time.seconds}`;
}

const Clock = () => {
  const time = useTime();

  useEffect(() => {
    document.title = `Clock - ${getTimeString(time)}`;
  }, [time]);

  return (
    <div class="clockface">
      <span class="clockface__digit clockface__digit--right">3</span>
      <span class="clockface__digit clockface__digit--bottom">6</span>
      <span class="clockface__digit clockface__digit--left">9</span>
      <span class="clockface__digit clockface__digit--top">12</span>
      
      <Hands time={time} />
      <span class="axis" />
    </div>
  )
};

export default Clock;