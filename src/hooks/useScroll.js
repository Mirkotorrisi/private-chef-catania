import throttle from "lodash.throttle";
import * as React from "react";

export const useScroll = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [touchPos, setTouchPos] = React.useState();
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
  const handleTouchStart = throttle((e) => {
    setTouchPos(e.touches[0].clientY);
  });
  const handleTouch = throttle((e) => {
    if (e.touches[0].clientY > touchPos)
      setScroll({ ...scroll, y: e.touches[0].clientY });
    setTouchPos(e.touches[0].clientY);
  });
  React.useEffect(() => {
    window.addEventListener("wheel", handle);
    window.addEventListener("touchmove", handleTouch);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("wheel", handle);
    };
  }, [handle, handleTouch, handleTouchStart]);

  return scroll;
};
