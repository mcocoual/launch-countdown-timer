import "./App.scss";
import {
  facebookLogo,
  instagramLogo,
  pinterestLogo,
} from "./utils/images/social";
import BackgroundStars from "./images/bg-stars.svg";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";

function App() {
  return (
    <div className="app">
      <section className="container">
        <div className="background-stars">
          <img src={BackgroundStars} alt="Background stars" />
        </div>
        <h1>We're launching soon</h1>
        <CountdownTimer numberOfDays={14} />
      </section>

      <footer>
        <ul>
          <li>{facebookLogo}</li>
          <li>{pinterestLogo}</li>
          <li>{instagramLogo}</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
