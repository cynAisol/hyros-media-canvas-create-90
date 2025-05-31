
import React, { useEffect, useState } from "react";

const EMOJI_LIST = [
  "🚀", "🎉", "✨", "🔥", "💡", "🌟", "😎", "🦄", "💻", "🎨", "📈", "🧠", "🤖", "🌈", "🍀", "🍕", "🥇", "🏆", "🎯", "🛠️"
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FloatingEmoji: React.FC<{ count?: number }> = ({ count = 10 }) => {
  const [emojis, setEmojis] = useState<{
    emoji: string;
    top: number;
    left: number;
    size: number;
    duration: number;
  }[]>([]);

  useEffect(() => {
    const newEmojis = Array.from({ length: count }).map(() => ({
      emoji: EMOJI_LIST[getRandomInt(0, EMOJI_LIST.length - 1)],
      top: getRandomInt(5, 80),
      left: getRandomInt(5, 90),
      size: getRandomInt(24, 48),
      duration: getRandomInt(8, 18),
    }));
    setEmojis(newEmojis);
  }, [count]);

  return (
    <div className="pointer-events-none select-none fixed inset-0 z-[100]">
      {emojis.map((e, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: `${e.top}%`,
            left: `${e.left}%`,
            fontSize: e.size,
            animation: `float-emoji ${e.duration}s ease-in-out infinite alternate`,
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
          }}
        >
          {e.emoji}
        </span>
      ))}
      <style>{`
        @keyframes float-emoji {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default FloatingEmoji;
