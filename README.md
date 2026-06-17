# CS Fundamentals Flashcards

A full-featured, interactive flashcard web app for studying Computer Science fundamentals, built with React and Vite. Features answer guessing with fuzzy matching, sequential navigation, shuffle, streak tracking, and a mastered-cards system.

<img src='src/assets/demo.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [What I Learned](#what-i-learned)
- [License](#license)

---

## Overview

This project started as a course assignment and grew into a portfolio piece I'm happy about. The goal was to build something genuinely useful for studying, not just a card flipper, but a full study tool that enforces a guess-first workflow, gives immediate feedback, tracks your performance over time, and lets you retire cards you've fully mastered.

The design is intentionally minimal and developer-focused: dark theme, monospace accents, and color-coded difficulty levels that feel at home in a CS context.

---

## Features

### Core
- **10 CS flashcard pairs** covering HTML, CSS, React, JavaScript, and algorithms
- **3D flip animation** — cards flip smoothly on click using CSS `perspective` and `rotateY`
- **Color-coded difficulty** — Easy (green), Medium (amber), Hard (red) with distinct card styling per level

### Guessing & Feedback
- **Guess input** — type an answer before seeing the card's back face
- **Fuzzy matching** — answers accepted even with different casing, punctuation, or partial matches
- **Instant visual feedback** — correct guesses glow green, wrong guesses glow red, with a status message
- **Enforced flow** — card can only be flipped after submitting a guess

### Navigation
- **Sequential Prev / Next** — move through cards in order, not randomly
- **Disabled at boundaries** — Back is disabled on card 1, Next is disabled on the last card; no wrap-around
- **Shuffle** — randomizes the card order with one click; stays in that order until shuffled again

### Progress Tracking
- **Streak counter** — increments on correct answers, resets to 0 on wrong
- **Best streak** — tracks your all-time best streak for the session
- **Cards remaining** — header shows how many cards are left in the active pool

### Mastered Cards
- **Mark as mastered** — removes a card from the active deck permanently for the session
- **Mastered list** — mastered cards appear in a section at the bottom for reference
- **Empty state** — when all cards are mastered, a congratulations screen appears with a Reset button

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components and state management |
| Vite | Build tool and dev server |
| CSS3 | 3D flip animation, custom design tokens, responsive layout |
| JavaScript (ES6+) | Logic, fuzzy matching, Fisher-Yates shuffle |

No external UI libraries, all components and styles are written from scratch.

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/HarshikaAgr/flashcards.git

# 2. Move into the project folder
cd flashcards

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy to GitHub Pages, Vercel, or Netlify.

---

## Project Structure

```
flashcards/
├── public/
├── src/
│   ├── components/
│   │   ├── Flashcard.jsx       # Card with 3D flip animation
│   │   ├── Flashcard.css
│   │   ├── GuessInput.jsx      # Answer input with submit + feedback
│   │   ├── GuessInput.css
│   │   ├── StreakBar.jsx        # Current and best streak display
│   │   └── StreakBar.css
│   ├── App.jsx                 # Root component, all state lives here
│   └── App.css                 # Global tokens, layout, and shared styles
├── assets/
│   └── demo.gif
├── index.html
├── vite.config.js
└── README.md
```

**State management approach:** all state lives in `App.jsx` and is passed down as props. No external state library is needed at this scale, this is intentional to keep the architecture easy to follow.

---

## What I Learned

- **useState with multiple interdependent pieces of state**: managing `cardOrder`, `position`, `guess`, `guessResult`, `flipped`, `streak`, and `masteredIds` together and keeping them consistent across user actions
- **CSS 3D transforms**: getting `backface-visibility`, `preserve-3d`, and `perspective` to work reliably across browsers
- **Controlled components**: wiring the guess `<input>` to React state with `onChange` and handling the submit flow correctly
- **useMemo for derived state**: computing `activeCards` (cards minus mastered ones) reactively without duplicating state
- **Edge case thinking**: preventing the same card from repeating on shuffle, clamping the position index when a card is removed, disabling navigation at list boundaries

---

## License

    Copyright 2026 Harshika Agrawal

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.