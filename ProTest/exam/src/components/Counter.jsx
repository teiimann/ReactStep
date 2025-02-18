import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={plusCount}>+</button>
    </div>
  );
}

export default Counter;
