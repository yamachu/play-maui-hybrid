import { useBlazor } from "../hooks/useBlazor";

export function BlazorCounter() {
  const fragment = useBlazor("BlazorCounter", {});

  return fragment;
}
