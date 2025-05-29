
import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  pauseDuration?: number;
}

const TypingAnimation = ({ texts, speed = 100, pauseDuration = 2000 }: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (isTyping) {
      if (charIndex < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        // Finished erasing, move to next text
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, currentTextIndex, texts, speed, pauseDuration]);

  return (
    <span className="text-blue-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
