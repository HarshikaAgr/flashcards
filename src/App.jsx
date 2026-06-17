import { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

const cards = [
  { id: 1, question: "What does HTML stand for?", answer: "HyperText Markup Language — the standard language for structuring content on the web.", difficulty: "easy" },
  { id: 2, question: "What does CSS stand for?", answer: "Cascading Style Sheets — the language used to style and layout HTML elements.", difficulty: "easy" },
  { id: 3, question: "What is a React component?", answer: "A reusable, self-contained piece of UI written as a JavaScript function that returns JSX.", difficulty: "easy" },
  { id: 4, question: "What does useState() do in React?", answer: "A Hook that adds a state variable to a functional component. When state changes, React re-renders the component.", difficulty: "medium" },
  { id: 5, question: "What is the DOM?", answer: "Document Object Model — a tree-like interface that represents the HTML document, allowing JavaScript to read and modify page content.", difficulty: "medium" },
  { id: 6, question: "What is a prop in React?", answer: "Short for 'property'. Props are read-only inputs passed from a parent component down to a child component.", difficulty: "medium" },
  { id: 7, question: "What is the difference between == and === in JavaScript?", answer: "== compares values with type coercion ('5' == 5 is true). === checks both value and type strictly ('5' === 5 is false).", difficulty: "medium" },
  { id: 8, question: "What is a closure in JavaScript?", answer: "A function that retains access to variables from its enclosing scope even after the outer function has finished executing.", difficulty: "hard" },
  { id: 9, question: "What is the virtual DOM?", answer: "React's in-memory representation of the real DOM. React diffs the virtual DOM before and after a state change, then applies only the minimum necessary updates to the real DOM.", difficulty: "hard" },
  { id: 10, question: "What is Big O notation?", answer: "A mathematical notation describing the worst-case growth rate of an algorithm's time or space as input size increases (e.g. O(n), O(log n), O(n²)).", difficulty: "hard" },
];

const DIFFICULTY_META = {
  easy:   { label: "Easy",   color: "easy" },
  medium: { label: "Medium", color: "medium" },
  hard:   { label: "Hard",   color: "hard" },
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studied, setStudied] = useState(0);

  const currentCard = cards[currentIndex];

  function handleNext() {
    let next;
    do { next = Math.floor(Math.random() * cards.length); }
    while (next === currentIndex && cards.length > 1);
    setCurrentIndex(next);
    setStudied(s => s + 1);
  }

  return (
    <div className="app">

      {/* ── HEADER ── */}
      <header className="site-header">
        <div className="header-inner">
          <div className="wordmark">
            <span className="wordmark-icon">⌨</span>
            <span className="wordmark-text">CS Flashcards</span>
          </div>
          <nav className="header-meta">
            <span className="meta-chip">{cards.length} cards</span>
            <span className="meta-chip accent">{studied} studied</span>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <p className="hero-eyebrow">Computer Science Fundamentals</p>
        <h1 className="hero-title">Study smarter,<br />one card at a time.</h1>
        <p className="hero-sub">
          Click a card to reveal the answer. Hit <strong>Next card</strong> for a random pick.
        </p>
      </section>

      {/* ── CARD STAGE ── */}
      <section className="stage">
        <div className="stage-label">
          <span className={`difficulty-badge diff-${currentCard.difficulty}`}>
            {DIFFICULTY_META[currentCard.difficulty].label}
          </span>
          <span className="stage-counter">Card {currentIndex + 1} of {cards.length}</span>
        </div>

        <Flashcard card={currentCard} key={currentCard.id} />

        <button className="btn-next" onClick={handleNext}>
          Next card <span className="btn-arrow">→</span>
        </button>
      </section>

      {/* ── LEGEND ── */}
      <footer className="legend">
        {Object.entries(DIFFICULTY_META).map(([key, val]) => (
          <span key={key} className="legend-item">
            <span className={`legend-dot diff-${key}`} />
            {val.label}
          </span>
        ))}
      </footer>

    </div>
  );
}