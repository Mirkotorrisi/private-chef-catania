import { throttle } from "lodash";
import React from "react";

export const useWindowScrollPosition = () => {
  const throttleMs = 100;
  const [scroll, setScroll] = React.useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });
  const handle = throttle(() => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  }, throttleMs);
  React.useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, [handle]);

  return scroll;
};
