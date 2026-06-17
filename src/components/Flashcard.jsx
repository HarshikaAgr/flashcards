import { useState } from "react";
import "./Flashcard.css";

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`fc-wrap ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped(f => !f)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? "Answer shown. Click to see question." : "Question shown. Click to reveal answer."}
      onKeyDown={e => e.key === "Enter" && setFlipped(f => !f)}
    >
      <div className="fc-inner">

        {/* FRONT */}
        <div className="fc-face fc-front">
          <span className="fc-face-label">Question</span>
          <p className="fc-text">{card.question}</p>
          <span className="fc-hint">Click to reveal →</span>
        </div>

        {/* BACK */}
        <div className="fc-face fc-back">
          <span className="fc-face-label">Answer</span>
          <p className="fc-text">{card.answer}</p>
          <span className="fc-hint">← Click to go back</span>
        </div>

      </div>
    </div>
  );
}