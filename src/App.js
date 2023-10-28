import "./styles.css";
import { useEffect } from "react";
import useCountDown from "./useCountDown";

export default function App() {
  const { setTime, countDownLeft } = useCountDown();

  return (
    <div className="App">
      <h1>{countDownLeft}</h1>
      <button onClick={() => setTime(60)}>start</button>
    </div>
  );
}
