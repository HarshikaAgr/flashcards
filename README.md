# Web Development Project - CS Fundamentals Flashcards

Submitted by: **Harshika Agrawal**

This web app: **An interactive CS flashcard app with answer guessing, fuzzy matching, sequential navigation with prev/next, shuffle, streak counters, and a mastered-cards system. Built with React and Vite.**

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback (red border + error message + red card glow)
  - Clicking on the submit button with a **correct** answer shows visual feedback (green border + success message + green card glow)
- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button navigates to the next card in sequential order when clicked
  - A previous/back button returns to the previous card in sequential order when clicked
  - Both buttons are visually disabled (opacity reduced, cursor changes) at the beginning and end of the list — no wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards remain in sequential order unless the shuffle button is clicked
  - Cards change to a random sequence once the shuffle button is clicked, then stay in that new order
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - Answers are case-insensitive (uppercase/lowercase ignored)
  - Punctuation is stripped before comparison
  - Partial matches are accepted — the guess just needs to appear within the answer (or vice versa)
- [x] A counter displays the user's current and longest streak of correct responses
  - The current counter increments when a user guesses correctly
  - The current counter resets to 0 when a user guesses incorrectly
  - A separate "Best streak" counter updates whenever the current streak exceeds it
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can click "✓ Mastered" to mark the current card
  - Mastered cards are removed from the active deck and shown in a "Mastered" list at the bottom of the page
  - If all cards are mastered, an empty state is shown with a "Reset deck" button

The following **additional** features are implemented:

* [x] Answer input supports pressing **Enter** to submit (not just the button)
* [x] Submit button is disabled when input is empty or answer has already been submitted
* [x] Card auto-resets to the front face and clears the input when navigating to a new card
* [x] Card can only be manually flipped after a guess is submitted (enforces the guessing flow)
* [x] Sticky header with live "cards remaining / total" count, current streak, and best streak
* [x] Keyboard accessible — Enter flips cards, visible focus rings throughout
* [x] Fully responsive layout down to 375px mobile screens

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='src/assets/demo.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

<!-- Replace the src URL above with your actual GIF link after recording 
GIF created with [ScreenToGif](https://www.screentogif.com/) -->

## Notes

Challenges encountered while building the app:

- **Guess-then-flip flow:** The card needed to be unflippable until a guess was submitted, but still flippable again after. Solved by only calling `setFlipped` inside `onFlip` when `guessResult !== null`, and automatically flipping after submission.
- **Mastered card position clamping:** When a mastered card is removed, the `position` index could go out of bounds. Solved by computing `safePosition = Math.min(position, activeCards.length - 1)` reactively using `useMemo`.
- **Fuzzy matching:** A simple `.includes()` check after normalizing both strings (lowercase + strip punctuation) covers most partial-match cases without false positives.
- **Shuffle + mastered interaction:** Shuffle only operates on the currently active (non-mastered) card IDs, so mastered cards never re-appear.

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