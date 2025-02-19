import React, { useEffect, useState } from "react";

const Countdown1 = () => {
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (time >= 60) {
      setMin((prev) => prev + 1);
      setTime(0);
    }
  }, [time]);

  const handlestart = () => {
    setIsRunning(true);
  };

  const handlepause = () => {
    setIsRunning(false);
  };
  const handlereset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <p>
        {min} min : {time} sec
      </p>
      <button onClick={handlestart} disabled={isRunning}>
        start
      </button>
      <button onClick={handlepause} disabled={!isRunning}>
        pause
      </button>
      <button onClick={handlereset} disabled={!isRunning}>
        reset
      </button>
    </div>
  );
};

export default Countdown1;
