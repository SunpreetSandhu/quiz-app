import { useEffect } from "react";

function Timer() {
  useEffect(function () {
    setInterval(function () {
      //   console.log("tick");
    }, 1000);
  }, []);
  return <div className="timer">5:00</div>;
}

export default Timer;
