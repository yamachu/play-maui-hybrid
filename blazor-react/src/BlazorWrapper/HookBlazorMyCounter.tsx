import React from "react";
import { createPortal } from "react-dom";
import { DotnetReference, useBlazor } from "../hooks/useBlazor";
import { usePortal } from "../hooks/usePortal";

export const useMyBlazorCounter = (blazorProps: { title: string }) => {
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

  const foobar = React.useCallback(async () => {
    if (dotnetRef === null) {
      return;
    }
    console.debug("FooBar: From React");
    const fooBarResult = await dotnetRef.invokeMethodAsync("FooBarManaged");
    console.debug(`FooBar: From React, result: ${fooBarResult}`);
  }, [dotnetRef]);

  const myEventCallback = React.useCallback((v: number) => {
    console.log(`myEventCallback: ${v}`);
  }, []);

  const fragment = useBlazor("BlazorMyCounter", {
    ...blazorProps,
    myEventCallback,
    onComponentInitializedCb,
    onComponentDestroyedCb,
  });

  const portal = usePortal();

  return {
    renderContent: portal !== null ? createPortal(fragment, portal) : null,
    foobar,
  };
};
