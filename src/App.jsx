import { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

// Array of card pairs — each card has question, answer, and difficulty category (stretch feature)
const cards = [
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language — the standard markup language for creating web pages.",
    difficulty: "easy",
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets — used to style and layout HTML elements on a page.",
    difficulty: "easy",
  },
  {
    question: "What is a React component?",
    answer: "A reusable, self-contained piece of UI that can accept props and return JSX.",
    difficulty: "easy",
  },
  {
    question: "What does useState() do in React?",
    answer: "It's a Hook that lets you add a state variable to a functional component, triggering a re-render when the value changes.",
    difficulty: "medium",
  },
  {
    question: "What is the DOM?",
    answer: "The Document Object Model — a programming interface that represents the HTML document as a tree of objects that JavaScript can manipulate.",
    difficulty: "medium",
  },
  {
    question: "What is a prop in React?",
    answer: "Short for 'property' — props are read-only inputs passed from a parent component to a child component.",
    difficulty: "medium",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer: "== checks for value equality with type coercion (e.g. '5' == 5 is true). === checks for strict equality — both value AND type must match.",
    difficulty: "medium",
  },
  {
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that retains access to variables from its outer scope even after that outer function has returned.",
    difficulty: "hard",
  },
  {
    question: "What is the virtual DOM in React?",
    answer: "A lightweight in-memory representation of the real DOM. React diffs the virtual DOM against the previous version and only applies minimal changes to the real DOM.",
    difficulty: "hard",
  },
  {
    question: "What is Big O notation?",
    answer: "A notation describing the worst-case time or space complexity of an algorithm as input size grows (e.g. O(n), O(log n), O(n²)).",
    difficulty: "hard",
  },
];

const difficultyLabel = { easy: "🟢 Easy", medium: "🟡 Medium", hard: "🔴 Hard" };

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak, setStreak] = useState(0);

  const handleNext = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentIndex && cards.length > 1);
    setCurrentIndex(randomIndex);
    setStreak((s) => s + 1);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-top">
          <span className="emoji">💻</span>
          <h1>CS Fundamentals Flashcards</h1>
          <span className="emoji">🧠</span>
        </div>
        <p className="description">
          Master computer science concepts — from HTML basics to JavaScript closures.
          Click any card to reveal the answer!
        </p>
        <div className="stats-row">
          <div className="stat-pill">📚 {cards.length} Cards Total</div>
          <div className="stat-pill">🔥 {streak} Cards Studied</div>
          <div className={`stat-pill difficulty-pill difficulty-${currentCard.difficulty}`}>
            {difficultyLabel[currentCard.difficulty]}
          </div>
        </div>
      </header>

      <main className="card-area">
        <Flashcard card={currentCard} key={currentIndex} />
      </main>

      <div className="controls">
        <button className="next-btn" onClick={handleNext}>
          Next Card →
        </button>
      </div>

      <div className="legend">
        <span className="legend-dot easy" /> Easy &nbsp;
        <span className="legend-dot medium" /> Medium &nbsp;
        <span className="legend-dot hard" /> Hard
      </div>
    </div>
  );
}

export default App;