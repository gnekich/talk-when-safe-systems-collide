import { useEffect, useRef, useState } from "react";

export function PasswordGlitchTypeEffectText({
  children,
}: {
  children: string;
}) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const element = elementRef.current;
      if (element) {
        element.innerText = children
          .split("")
          .map((char, index) => {
            if (index < i) {
              return char;
            }
            return String.fromCharCode(
              Math.floor(Math.random() * (126 - 33)) + 33,
            );
          })
          .join("");
        if (i >= children.length) {
          clearInterval(interval);
        }
        i += 1 / 3;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return <span ref={elementRef}>{children}</span>;
}

export default PasswordGlitchTypeEffectText;
