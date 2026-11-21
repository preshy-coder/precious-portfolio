import { useState, useEffect } from "react";

// Types out each string in `texts`, pauses, deletes it, then moves to the next.
export default function Typewriter({ texts, speed = 90, pause = 1800 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }, 0);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          ),
        isDeleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, pause]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-purple-400 align-middle">
        &nbsp;
      </span>
    </span>
  );
}
