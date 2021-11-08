import { useEffect, useRef, useState } from "react";

export function useNearScreen(params) {
  const { distance = "100px", externalRef, once = true } = params;

  const [isNearScreen, setIsNearScreen] = useState(false);

  const fromRef = useRef();

  useEffect(() => {
    const elementObserver = externalRef ? externalRef.current : fromRef.current;

    const onChange = ([element], observer) => {
      if (element.isIntersecting) {
        setIsNearScreen(true);
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        setIsNearScreen(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    if (elementObserver) observer.observe(elementObserver);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
