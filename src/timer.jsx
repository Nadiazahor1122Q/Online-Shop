import moment from "moment";
import React, { useEffect, useState } from "react";

export default function Timer({ time,getDepoisits,init }) {
  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  const contStartTimerStart = (time) => {
    let countDownDate = moment.unix(time).format("x");
    console.log(time);
    let interval = setInterval(() => {
      var now = moment().format("x");
      console.log(+countDownDate - +now);

      const distance = +countDownDate - +now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        getDepoisits()
        init()
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    if (time) {
      contStartTimerStart(time);
    }
  }, [time]);
  return (
    <span>
      {countTime.time_days}:{countTime.time_Hours}:{countTime.time_Minusts}:
      {countTime.time_seconds}
    </span>
  );
}
