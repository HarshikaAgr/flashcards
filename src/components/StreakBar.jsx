import "./StreakBar.css";

export default function StreakBar({ streak, bestStreak }) {
  return (
    <div className="streak-bar">
      <div className="streak-item">
        <span className="streak-label">Current streak</span>
        <span className={`streak-value ${streak > 0 ? "streak-active" : ""}`}>
          🔥 {streak}
        </span>
      </div>
      <div className="streak-divider" />
      <div className="streak-item">
        <span className="streak-label">Best streak</span>
        <span className="streak-value">⭐ {bestStreak}</span>
      </div>
    </div>
  );
}