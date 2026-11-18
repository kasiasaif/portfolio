import { useEffect, useState } from "react";

export function useTypewriter(text: string, startDelay = 400, speed = 28) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOutput(text);
      setDone(true);
      return;
    }

    let index = 0;
    let intervalId = 0;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setOutput(text.slice(0, index));
        if (index >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [text, startDelay, speed]);

  return { output, done };
}
