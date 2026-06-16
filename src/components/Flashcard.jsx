import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      aria-label={isFlipped ? "Click to flip back" : "Click to see answer"}
    >
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className={`flip-card-front difficulty-bg-${card.difficulty}`}>
          <p className="card-label">Question</p>
          <p className="card-text">{card.question}</p>
          <p className="card-hint">👆 Click to reveal answer</p>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <p className="card-label">Answer</p>
          <p className="card-text">{card.answer}</p>
          <p className="card-hint">👆 Click to flip back</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;