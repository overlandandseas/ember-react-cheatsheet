import { useState } from "react";

export default function MyComponent() {
  let [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <p>
        <button type="button" onClick={setCount(count + 1)}>
          Increment Count
        </button>
      </p>
    </>
  );
}
