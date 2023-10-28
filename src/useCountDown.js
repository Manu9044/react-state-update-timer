const { useState, useEffect } = require("react");

export default function useCountDown() {
  const [countDownLeft, setCountDownLeft] = useState(0);

  useEffect(() => {
    if (countDownLeft <= 0) return;
    const timer = setTimeout(() => {
      setCountDownLeft(countDownLeft - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [countDownLeft]);

  function setTime(count) {
    setCountDownLeft(count);
  }

  return { setTime, countDownLeft };
}
