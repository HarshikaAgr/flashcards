import { useState, useMemo } from "react";
import Flashcard from "./components/Flashcard";
import GuessInput from "./components/GuessInput";
import StreakBar from "./components/StreakBar";
import "./App.css";

const ALL_CARDS = [
  { id: 1, question: "What does HTML stand for?", answer: "HyperText Markup Language", difficulty: "easy" },
  { id: 2, question: "What does CSS stand for?", answer: "Cascading Style Sheets", difficulty: "easy" },
  { id: 3, question: "What is a React component?", answer: "A reusable function that returns JSX", difficulty: "easy" },
  { id: 4, question: "What does useState() do in React?", answer: "Adds a state variable to a functional component", difficulty: "medium" },
  { id: 5, question: "What is the DOM?", answer: "Document Object Model", difficulty: "medium" },
  { id: 6, question: "What is a prop in React?", answer: "A read-only input passed from parent to child component", difficulty: "medium" },
  { id: 7, question: "What is the difference between == and === in JavaScript?", answer: "== compares values with type coercion, === compares value and type strictly", difficulty: "medium" },
  { id: 8, question: "What is a closure in JavaScript?", answer: "A function that retains access to variables from its enclosing scope", difficulty: "hard" },
  { id: 9, question: "What is the virtual DOM in React?", answer: "An in-memory representation of the real DOM that React uses to minimize updates", difficulty: "hard" },
  { id: 10, question: "What is Big O notation?", answer: "A notation describing the worst-case time or space complexity of an algorithm", difficulty: "hard" },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fuzzyMatch(guess, answer) {
  const normalize = s =>
    s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
  const g = normalize(guess);
  const a = normalize(answer);
  // exact or partial: guess appears inside answer, or answer contains guess
  return a === g || a.includes(g) || g.includes(a);
}

export default function App() {
  // Active card pool (not mastered)
  const [masteredIds, setMasteredIds] = useState(new Set());

  // The ordered sequence of card IDs shown to the user
  const [cardOrder, setCardOrder] = useState(ALL_CARDS.map(c => c.id));

  // Position in the sequence
  const [position, setPosition] = useState(0);

  // Guess state
  const [guess, setGuess] = useState("");
  const [guessResult, setGuessResult] = useState(null); // null | "correct" | "incorrect"
  const [flipped, setFlipped] = useState(false);

  // Streaks
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Active cards = all cards minus mastered, in current order
  const activeCards = useMemo(
    () => cardOrder.map(id => ALL_CARDS.find(c => c.id === id)).filter(c => !masteredIds.has(c.id)),
    [cardOrder, masteredIds]
  );

  // Clamp position if activeCards shrinks
  const safePosition = Math.min(position, Math.max(0, activeCards.length - 1));
  const currentCard = activeCards[safePosition] ?? null;

  // ── NAVIGATION ──
  const atStart = safePosition === 0;
  const atEnd   = safePosition === activeCards.length - 1;

  function goNext() {
    if (atEnd) return;
    setPosition(p => p + 1);
    resetCard();
  }

  function goPrev() {
    if (atStart) return;
    setPosition(p => p - 1);
    resetCard();
  }

  function resetCard() {
    setGuess("");
    setGuessResult(null);
    setFlipped(false);
  }

  // ── SHUFFLE ──
  function handleShuffle() {
    const activeIds = activeCards.map(c => c.id);
    setCardOrder(shuffle(activeIds));
    setPosition(0);
    resetCard();
  }

  // ── GUESS SUBMIT ──
  function handleSubmit() {
    if (!guess.trim() || !currentCard) return;
    const correct = fuzzyMatch(guess, currentCard.answer);
    setGuessResult(correct ? "correct" : "incorrect");
    setFlipped(true); // reveal the card answer

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setBestStreak(b => Math.max(b, newStreak));
    } else {
      setStreak(0);
    }
  }

  // ── MASTER ──
  function handleMaster() {
    if (!currentCard) return;
    setMasteredIds(prev => new Set([...prev, currentCard.id]));
    // move to next if possible, else prev
    setPosition(p => Math.max(0, p - (atEnd && !atStart ? 1 : 0)));
    resetCard();
  }

  const masteredCards = ALL_CARDS.filter(c => masteredIds.has(c.id));

  if (!currentCard) {
    return (
      <div className="app">
        <Header streak={streak} bestStreak={bestStreak} total={ALL_CARDS.length} remaining={activeCards.length} />
        <div className="empty-state">
          <p className="empty-icon">🎓</p>
          <h2>You've mastered all cards!</h2>
          <p>Amazing work. Reset to start again.</p>
          <button className="btn-secondary" onClick={() => { setMasteredIds(new Set()); setCardOrder(ALL_CARDS.map(c => c.id)); setPosition(0); resetCard(); }}>
            Reset deck
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header streak={streak} bestStreak={bestStreak} total={ALL_CARDS.length} remaining={activeCards.length} />

      <section className="hero">
        <p className="hero-eyebrow">Computer Science Fundamentals</p>
        <h1 className="hero-title">Study smarter,<br />one card at a time.</h1>
      </section>

      <section className="stage">
        {/* Top row: difficulty + counter + shuffle + master */}
        <div className="stage-top">
          <div className="stage-left">
            <span className={`difficulty-badge diff-${currentCard.difficulty}`}>
              {{ easy: "Easy", medium: "Medium", hard: "Hard" }[currentCard.difficulty]}
            </span>
            <span className="stage-counter">
              {safePosition + 1} / {activeCards.length}
            </span>
          </div>
          <div className="stage-right">
            <button className="btn-ghost" onClick={handleShuffle} title="Shuffle cards">
              ⇄ Shuffle
            </button>
            <button className="btn-ghost btn-master" onClick={handleMaster} title="Mark as mastered">
              ✓ Mastered
            </button>
          </div>
        </div>

        {/* Card */}
        <Flashcard
          card={currentCard}
          flipped={flipped}
          guessResult={guessResult}
          onFlip={() => {
            // Only allow manual flip if guess has been submitted or skipping
            if (guessResult !== null) setFlipped(f => !f);
          }}
        />

        {/* Guess input — shown only before answer revealed */}
        <GuessInput
          guess={guess}
          onChange={setGuess}
          onSubmit={handleSubmit}
          result={guessResult}
          disabled={guessResult !== null}
        />

        {/* Prev / Next navigation */}
        <div className="nav-row">
          <button
            className="btn-nav"
            onClick={goPrev}
            disabled={atStart}
            aria-label="Previous card"
          >
            ← Back
          </button>
          <button
            className="btn-nav"
            onClick={goNext}
            disabled={atEnd}
            aria-label="Next card"
          >
            Next →
          </button>
        </div>

        <StreakBar streak={streak} bestStreak={bestStreak} />
      </section>

      {/* Mastered cards list */}
      {masteredCards.length > 0 && (
        <section className="mastered-section">
          <h2 className="mastered-title">
            Mastered <span className="mastered-count">{masteredCards.length}</span>
          </h2>
          <ul className="mastered-list">
            {masteredCards.map(c => (
              <li key={c.id} className="mastered-item">
                <span className={`difficulty-badge diff-${c.difficulty}`}>
                  {{ easy: "Easy", medium: "Medium", hard: "Hard" }[c.difficulty]}
                </span>
                {c.question}
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="legend">
        {["easy", "medium", "hard"].map(d => (
          <span key={d} className="legend-item">
            <span className={`legend-dot diff-${d}`} />
            {{ easy: "Easy", medium: "Medium", hard: "Hard" }[d]}
          </span>
        ))}
      </footer>
    </div>
  );
}

function Header({ streak, bestStreak, total, remaining }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="wordmark">
          <span className="wordmark-icon">⌨</span>
          <span className="wordmark-text">CS Flashcards</span>
        </div>
        <nav className="header-meta">
          <span className="meta-chip">{remaining} / {total} cards</span>
          <span className="meta-chip accent">🔥 {streak} streak</span>
          <span className="meta-chip">Best: {bestStreak}</span>
        </nav>
      </div>
    </header>
  );
}