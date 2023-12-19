import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// MAUI非依存の状態でデザインなどを行う用途
if (import.meta.env.TARGET === "web") {
  render();
}

// Blazor MAUI から呼び出せるように
export const renderReactComponent = render;
