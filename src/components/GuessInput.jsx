import "./GuessInput.css";

export default function GuessInput({ guess, onChange, onSubmit, result, disabled }) {
  function handleKey(e) {
    if (e.key === "Enter") onSubmit();
  }

  const statusText = result === "correct"
    ? "✓ Correct!"
    : result === "incorrect"
    ? "✗ Not quite — see the answer above."
    : null;

  const statusClass = result === "correct" ? "status-correct" : "status-incorrect";

  return (
    <div className="guess-wrap">
      <label className="guess-label" htmlFor="guess-input">
        Your answer
      </label>
      <div className="guess-row">
        <input
          id="guess-input"
          className={`guess-input ${result ? `input-${result}` : ""}`}
          type="text"
          value={guess}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type your answer and press Submit…"
          disabled={disabled}
          autoComplete="off"
          spellCheck={false}
        />
        <button
          className="btn-submit"
          onClick={onSubmit}
          disabled={disabled || !guess.trim()}
        >
          Submit
        </button>
      </div>
      {statusText && (
        <p className={`guess-status ${statusClass}`}>{statusText}</p>
      )}
    </div>
  );
}