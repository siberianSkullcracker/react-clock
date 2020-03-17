import React, { useState, useEffect } from 'react';

const getTimeString = dateObj => {
  return `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
}

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
  }, []);

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