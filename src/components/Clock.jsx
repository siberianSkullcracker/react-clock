import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const handleClick = () => setTime(new Date());

  useEffect(() => {
    const intervalId = setInterval(handleClick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>Current Time</h1>
      <h2>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>
    </>
  )
};

export default Clock;