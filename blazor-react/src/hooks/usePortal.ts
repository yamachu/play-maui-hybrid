import React from "react";

export const usePortal = () => {
  const [element, setElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    setElement(el);
    return () => {
      console.log("element");
      document.body.removeChild(el);
      el.remove();
    };
  }, []);

  return element;
};
