"use client";

import { useState, useEffect } from "react";

const Timer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetTime = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const timeDiff = targetTime - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="mt-10 flex justify-center items-center space-x-4 space-y-0 flex-wrap">
      <div className=" border-4 border-gray-800 bg-gray-800 rounded-full p-4 flex flex-col justify-center items-center w-24 h-24 md:w-36 md:h-36  relative">
        <div className="text-2xl md:text-5xl font-bold text-slate-50">
          {timeLeft.days}
        </div>
        <div className=" text-xs md:text-sm text-slate-50 absolute bottom-2 md:bottom-5">
          Days
        </div>
      </div>
      <div className=" bg-gray-800 border-4 border-gray-800 rounded-full p-4 flex flex-col justify-center items-center w-24 h-24 md:w-36 md:h-36  relative">
        <div className="text-2xl md:text-5xl font-bold text-slate-50">
          {timeLeft.hours}
        </div>
        <div className=" text-xs md:text-sm text-slate-50 absolute bottom-2 md:bottom-5">
          Hours
        </div>
      </div>
      <div className=" bg-gray-800 border-4 border-gray-800 rounded-full p-4 flex flex-col justify-center items-center w-24 h-24 md:w-36 md:h-36  relative">
        <div className="text-2xl md:text-5xl font-bold text-slate-50">
          {timeLeft.minutes}
        </div>
        <div className=" text-xs md:text-sm text-slate-50 absolute bottom-2 md:bottom-5">
          Minutes
        </div>
      </div>
      <div className=" bg-gray-800 border-4 border-gray-800 rounded-full p-4 flex flex-col justify-center items-center w-24 h-24 md:w-36 md:h-36  relative">
        <div className="text-2xl md:text-5xl font-bold text-slate-50">
          {timeLeft.seconds}
        </div>
        <div className=" text-xs md:text-sm text-slate-50 absolute bottom-2 md:bottom-5">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default Timer;
