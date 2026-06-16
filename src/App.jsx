import { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

const cards = [
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
  { question: "What does API stand for?", answer: "Application Programming Interface" },
  { question: "What is a variable?", answer: "A named storage location in memory that holds a value" },
  { question: "What is a function?", answer: "A reusable block of code that performs a specific task" },
  { question: "What does DOM stand for?", answer: "Document Object Model" },
  { question: "What is React?", answer: "A JavaScript library for building user interfaces" },
  { question: "What is useState in React?", answer: "A Hook that lets you add state to a functional component" },
  { question: "What does JSON stand for?", answer: "JavaScript Object Notation" },
  { question: "What is a loop?", answer: "A control structure that repeats a block of code multiple times" },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentIndex && cards.length > 1);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>💻 CS Trivia Flashcards</h1>
        <p className="description">
          Test your computer science knowledge! Click a card to reveal the answer.
        </p>
        <p className="card-count">Total Cards: {cards.length}</p>
      </header>

      <main className="card-area">
        <Flashcard card={cards[currentIndex]} />
      </main>

      <button className="next-btn" onClick={handleNext}>
        Next Card →
      </button>
    </div>
  );
}

export default App;