import { useEffect, useState } from "react";

function ExamTimer({ minutes, onTimeUp }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (onTimeUp) {
        onTimeUp();
      }
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, onTimeUp]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-2xl">
      ⏰ {String(mins).padStart(2, "0")}:
      {String(secs).padStart(2, "0")}
    </div>
  );
}

export default ExamTimer;