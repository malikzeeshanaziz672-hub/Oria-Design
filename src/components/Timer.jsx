
import React, { useEffect, useState } from 'react'
import "../GlobalCss/Timer.css"

const Timer = () => {
  const [leftTime, setLeftTime] = useState(3 * 24 * 60 * 60);

  const [timeParts, setTimeParts] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTime(prev => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const days = Math.floor(leftTime / (24 * 60 * 60));
    const hours = Math.floor((leftTime % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((leftTime % 3600) / 60);
    const seconds = leftTime % 60;

    setTimeParts({
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    });
  }, [leftTime]);

  return (
    <div className="timerContainer">
      <h2>Coming Soon</h2>
      <div className="timerBoxes">
        <div className="timeBox">
          <span className="timeValue">{timeParts.days}</span>
          <span className="timeLabel">Days</span>
        </div>
        <div className="timeBox">
          <span className="timeValue">{timeParts.hours}</span>
          <span className="timeLabel">Hours</span>
        </div>
        <div className="timeBox">
          <span className="timeValue">{timeParts.minutes}</span>
          <span className="timeLabel">Min</span>
        </div>
        <div className="timeBox">
          <span className="timeValue">{timeParts.seconds}</span>
          <span className="timeLabel">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
