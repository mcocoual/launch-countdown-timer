import { useEffect, useState } from "react";
import ICountDown from "./ICountDown";

export function useCountdown(numberOfDays: number): ICountDown {
  const [countDown, setCountDown] = useState<ICountDown>({
    days: numberOfDays,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  });

  function calculateTimeLeft(): ICountDown {
    const futureDate = new Date(currentDate);
    futureDate.setDate(futureDate.getDate() + +numberOfDays);

    let difference = +futureDate - +new Date();

    const timeLeft = {
      days: difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : 0,
      hours:
        difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
      minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
      seconds: difference > 0 ? Math.floor((difference / 1000) % 60) + 1 : 0,
    };

    return timeLeft;
  }

  return countDown;
}
