import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    import.meta.env.MODE === "development" ? (
      // React.StrictModeは開発モードでuseEffectを2回呼び出して、useEffectの副作用を検出するのに役に立つ
      // しかしuseEffectが2回呼び出されるとuseEffectのcleanupでBlazor ComponentのDisposeが走るため、外している
      <App />
    ) : (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  );
};

// MAUI非依存の状態でデザインなどを行う用途
if (import.meta.env.TARGET === "web") {
  render();
}

// Blazor MAUI から呼び出せるように
export const renderReactComponent = render;
