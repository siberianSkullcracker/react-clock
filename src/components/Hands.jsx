import React from 'react';

const Hands = ({ time }) => {
  const secondAngle = 360 / 60 * time.seconds;
  const minuteAngle = 360 / 60 * time.minutes;
  const hourAngle = 360 / 12 * time.hours + minuteAngle / 12;

  return (
    <>
      <span
        style={{
          transform: `translateX(-50%) rotate(${hourAngle}deg)`
        }}
        className="hand hand--hour"
      />
      <span
        style={{
          transform: `translateX(-50%) rotate(${minuteAngle}deg)`
        }}
        className="hand hand--minute"
      />
      <span
        style={{
          transform: `translateX(-50%) rotate(${secondAngle}deg)`
        }}
        className="hand hand--second"
      />
    </>
  );
};

export default Hands;