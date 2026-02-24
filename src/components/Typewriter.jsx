
import { useState, useEffect } from "react";

export default function Typewriter({ texts, speed = 150, pause = 1500 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const currentText = texts[index % texts.length];
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
      } else {
        setText(currentText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentText) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } 
     
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      } else {
        timeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
      }
    };

    timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, pause]);

  return <span>{text}</span>;
}