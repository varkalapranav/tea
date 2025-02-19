import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setIsRunning(false);
    setTime(0);
  };
  return (
    <div>
      <p>{time}</p>
      <button onClick={handleStart} disabled={isRunning}>
        start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        pause
      </button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default CountDown;
