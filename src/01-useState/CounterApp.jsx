import { useState } from "react";

export const CounterApp = () => {
  const [state, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const increment = () => {
    setCount({
      counter1: counter1 + 1,
      counter2,
      counter3,
    });
  };

  return (
    <>
      <h1>Counter:</h1>
      <hr />
      <h2>Counter 1 {counter1}</h2>
      <h2>Counter 2 {counter2}</h2>
      <h2>Counter 3 {counter3}</h2>

      <button className="btn" onClick={increment}>
        +1
      </button>
    </>
  );
};
