import "./Flashcard.css";

export default function Flashcard({ card, flipped, guessResult, onFlip }) {
  const resultClass = guessResult === "correct"
    ? "fc-correct"
    : guessResult === "incorrect"
    ? "fc-incorrect"
    : "";

  return (
    <div
      className={`fc-wrap ${flipped ? "is-flipped" : ""} ${resultClass}`}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      aria-label={flipped ? "Answer shown. Click to flip back." : "Question shown."}
      onKeyDown={e => e.key === "Enter" && onFlip()}
    >
      <div className="fc-inner">
        {/* FRONT */}
        <div className="fc-face fc-front">
          <span className="fc-face-label">Question</span>
          <p className="fc-text">{card.question}</p>
          {guessResult === null && (
            <span className="fc-hint">Submit your guess below to reveal ↓</span>
          )}
          {guessResult !== null && (
            <span className="fc-hint">Click card to flip ↻</span>
          )}
        </div>

        {/* BACK */}
        <div className="fc-face fc-back">
          <span className="fc-face-label">Answer</span>
          <p className="fc-text">{card.answer}</p>
          <span className="fc-hint">← Click to flip back</span>
        </div>
      </div>
    </div>
  );
}