# Web Development Project 2 - CS Fundamentals Flashcards

Submitted by: **Harshika Agrawal**

This web app: **An interactive flashcard app for studying Computer Science fundamentals. Cards are color-coded by difficulty (Easy / Medium / Hard), flip with a smooth 3D animation on click, and the Next Card button picks a new card at random. A session counter tracks how many cards you've studied.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (array of objects with `question`, `answer`, and `difficulty`)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards have different visual styles such as color based on their category
  - [x] Difficulty categories: Easy (green), Medium (amber), Hard (red) — each with distinct badge + glow styling

The following **additional** features are implemented:

* [x] Session counter in the header tracks how many cards have been studied
* [x] Card auto-resets to front face when Next is clicked (via React `key` prop)
* [x] Keyboard accessible — Enter key flips the card; focus ring shown on keyboard navigation
* [x] Sticky header with backdrop blur for a polished, app-like feel
* [x] Subtle grid texture and ambient glow on each card face for visual depth
* [x] Fully responsive layout down to 375px mobile screens
* [x] Monospace font (`JetBrains Mono`) used for labels and wordmark for a CS-appropriate aesthetic

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='c:\Users\harsh\AppData\Local\Packages\Microsoft.ScreenSketch_8wekyb3d8bbwe\TempState\Gif\20260617-0013-51.0646344.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace the src URL above with your actual GIF link after recording -->
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux -->

GIF created with [ScreenToGif](https://www.screentogif.com/)

## Notes

Challenges encountered while building the app:

- **3D flip reset on Next:** When clicking Next, the card needs to reset to the front face. Solved cleanly by passing `key={card.id}` to the Flashcard component — React unmounts and remounts it fresh on each new card, so `isFlipped` always starts as `false`.
- **CSS backface-visibility:** Getting `backface-visibility: hidden` to work consistently across browsers required also setting `-webkit-backface-visibility: hidden` and ensuring `transform-style: preserve-3d` was on the inner wrapper, not the outer container.
- **Random card logic:** A basic `Math.random()` call can return the same index twice in a row. Fixed with a `do...while` loop that keeps picking until a different card is selected.

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