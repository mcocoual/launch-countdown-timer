import ICountdownTimerItem from "./ICountdownTimerItem";
import TimerImageMobile from "./countdown-timer-item-mobile.svg";
import TimerImage from "./countdown-timer-item.svg";
import "./CountdownTimerItem.scss";
import { useWindowWidth } from "../../hooks/useWindowWidth/useWindowWidth";

function CountdownTimerItem(props: ICountdownTimerItem) {
  const { value, type } = props;
  const windowWidth = useWindowWidth();

  function formatNumberToString(value: number): string {
    return String(value).padStart(2, "0");
  }

  return (
    <div className="countdown-timer-item">
      {windowWidth >= 1440 ? (
        <img src={TimerImage} alt="Timer" />
      ) : (
        <img src={TimerImageMobile} alt="Timer" />
      )}
      <p className="number">{formatNumberToString(value)}</p>
      <p className="type">{type}</p>
    </div>
  );
}

export default CountdownTimerItem;
