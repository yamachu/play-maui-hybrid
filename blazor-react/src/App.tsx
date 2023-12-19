import { useState, useRef } from "react";
import { BlazorCounter } from "./BlazorWrapper/BlazorCounter";
import {
  MyBlazorCounterHandler,
  MyBlazorCounter,
} from "./BlazorWrapper/BlazorMyCounter";

function App() {
  const [count, setCount] = useState(0);
  const counterRef = useRef<MyBlazorCounterHandler>(null);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
        {/* div などのコンテナで囲わないと、その親の Element が mount の root になる */}
        <div>
          <BlazorCounter />
        </div>
        <div>
          <MyBlazorCounter title="My Counter" ref={counterRef} />
        </div>
        <button
          onClick={() => {
            if (counterRef.current === null) {
              return;
            }
            counterRef.current.FooBar();
          }}
        >
          Call FooBar
        </button>
      </div>
    </>
  );
}

export default App;
