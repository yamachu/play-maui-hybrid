import React from "react";
import { DotnetReference, useBlazor } from "../hooks/useBlazor";

export interface MyBlazorCounterHandler {
  FooBar: () => void;
}

export const MyBlazorCounter = React.forwardRef<
  MyBlazorCounterHandler,
  { title: string }
>(({ title }, ref) => {
  const [dotnetRef, setDotnetRef] = React.useState<DotnetReference | null>(
    null
  );

  const onComponentInitializedCb = React.useCallback(
    (dRef: DotnetReference) => setDotnetRef(dRef),
    []
  );
  const onComponentDestroyedCb = React.useCallback(
    () => setDotnetRef(null),
    []
  );

  React.useImperativeHandle(
    ref,
    () => {
      return {
        FooBar: async () => {
          if (dotnetRef === null) {
            return;
          }
          console.debug("FooBar: From React");
          const fooBarResult = await dotnetRef.invokeMethodAsync(
            "FooBarManaged"
          );
          console.debug(`FooBar: From React, result: ${fooBarResult}`);
        },
      };
    },
    [dotnetRef]
  );

  const myEventCallback = React.useCallback((v: number) => {
    console.log(`myEventCallback: ${v}`);
  }, []);

  const fragment = useBlazor("BlazorMyCounter", {
    title,
    myEventCallback,
    onComponentInitializedCb,
    onComponentDestroyedCb,
  });

  return fragment;
});
