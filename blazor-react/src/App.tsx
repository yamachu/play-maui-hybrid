import { useState, useRef } from "react";
import { BlazorCounter } from "./BlazorWrapper/BlazorCounter";
import {
  MyBlazorCounterHandler,
  MyBlazorCounter,
} from "./BlazorWrapper/BlazorMyCounter";
import { useMyBlazorCounter } from "./BlazorWrapper/HookBlazorMyCounter";

function App() {
  const [count, setCount] = useState(0);
  const counterRef = useRef<MyBlazorCounterHandler>(null);

  const [show, setShow] = useState(false);

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
        <button onClick={() => setShow((v) => !v)}>show?</button>
        {show && <Foo />}
      </div>
    </>
  );
}

const Foo = () => {
  const [aa, setAa] = useState(0);
  const { foobar, renderContent } = useMyBlazorCounter({
    title: `My Counter!! ${aa}`,
  });

  return (
    <>
      <button onClick={() => foobar()}>foobar?</button>
      <button onClick={() => setAa((v) => v + 1)}>Plus {aa}</button>
      {renderContent}
    </>
  );
};

export default App;
