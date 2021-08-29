import throttle from "lodash.throttle";
import * as React from "react";

export const useScroll = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [scroll, setScroll] = React.useState({
    x: 0,
    y: 0,
  });

  const handle = throttle((e) => {
    setScroll({
      x: e.deltaX,
      y: e.deltaY,
    });
  }, throttleMs);

  React.useEffect(() => {
    window.addEventListener("wheel", handle);

    return () => {
      window.removeEventListener("wheel", handle);
    };
  }, [handle]);

  return scroll;
};
