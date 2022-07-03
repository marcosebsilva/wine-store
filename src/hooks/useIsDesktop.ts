// custom hook from https://usehooks.com/useWindowSize/
import { useState, useEffect } from "react";
import sizes from "../styles/sizes";

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<Boolean>(true);
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > sizes.desktopSmall);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
}