import CountdownTimerItem from "../CountdownTimerItem/CountdownTimerItem";
import { useCountdown } from "../../hooks/useCountDown/useCountdown";
import ICountDownTimer from "./ICountdownTimer";
import "./CountdownTimer.scss";

export default function CountdownTimer(props: ICountDownTimer) {
  const { days, hours, minutes, seconds } = useCountdown(props.numberOfDays);

  return (
    <div className="countdown-timer">
      <CountdownTimerItem type="days" value={days} />
      <CountdownTimerItem type="hours" value={hours} />
      <CountdownTimerItem type="minutes" value={minutes} />
      <CountdownTimerItem type="seconds" value={seconds} />
    </div>
  );
}
