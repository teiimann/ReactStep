import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <p>Time: {seconds}s</p>
      <button onClick={() => setRunning(!running)}>{running ? "Стоп" : "Старт"}</button>
    </div>
  );
}

export default Timer;
