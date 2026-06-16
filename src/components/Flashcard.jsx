import { useState, useEffect } from "react";
import "./Flashcard.css";

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state whenever the card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="card-label">Question</p>
          <p className="card-text">{card.question}</p>
          <p className="card-hint">Click to flip</p>
        </div>
        <div className="flip-card-back">
          <p className="card-label">Answer</p>
          <p className="card-text">{card.answer}</p>
          <p className="card-hint">Click to flip back</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;