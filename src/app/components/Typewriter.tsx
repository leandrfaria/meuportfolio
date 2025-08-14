"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;      // ms por caractere
  startDelay?: number; // ms antes de começar
};

export default function Typewriter({ text, speed = 22, startDelay = 200 }: Props) {
  const [i, setI] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const t = setInterval(() => {
        setI((prev) => {
          if (prev >= text.length) {
            clearInterval(t);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);
    return () => clearTimeout(delayTimer);
  }, [text, speed, startDelay]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span aria-label="typewriter" className="whitespace-pre-wrap">
      {text.slice(0, i)}
      <span aria-hidden className="ml-[2px]">
        {showCursor ? "|" : "\u00A0"}
      </span>
    </span>
  );
}
