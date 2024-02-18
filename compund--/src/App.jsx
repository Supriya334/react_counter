// Timer.jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const resetTimer = () => {
    setCount(10);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
  };

  const resumeTimer = () => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  return (
    <div>
      <h2>Timer: {count}</h2>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
    </div>
  );
};

export default Timer;
