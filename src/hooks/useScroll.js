import throttle from "lodash.throttle";
import * as React from "react";

export const useScroll = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [scroll, setScroll] = React.useState(0);

  const handle = throttle(() => {
    setScroll(window.pageYOffset);
  }, throttleMs);

  React.useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, [handle]);

  return scroll;
};
