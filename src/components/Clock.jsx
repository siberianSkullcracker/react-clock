import React, { useEffect } from 'react';
import { useTime } from '../utils/hooks';

const getTimeString = time => {
  return `${time.hours}:${time.minutes}:${time.seconds}`;
}

const Clock = () => {
  const time = useTime();

  useEffect(() => {
    document.title = `Clock - ${getTimeString(time)}`;
  }, [time]);

  return (
    <>
      <h1>Current Time</h1>
      <h2>{getTimeString(time)}</h2>
    </>
  )
};

export default Clock;