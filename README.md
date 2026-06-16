# Web Development Project - CS Fundamentals Flashcards

Submitted by: **Harshika Agrawal**

This web app: **An interactive flashcard app to study Computer Science fundamentals. Cards are color-coded by difficulty (Easy / Medium / Hard), flip with a smooth 3D animation when clicked, and a new random card is shown each time you press "Next Card". A streak counter tracks how many cards you've studied in one session.**

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of objects where each object contains the question, answer, and difficulty)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards have different visual styles such as color based on their category
  - [x] Difficulty categories: Easy (green), Medium (yellow/amber), Hard (red)
  - [x] Each difficulty level has a distinct gradient background on the card front

The following **additional** features are implemented:

* [x] Streak counter that tracks how many cards the user has studied in the current session
* [x] Difficulty badge dynamically updates in the header to show the current card's difficulty
* [x] Smooth 3D CSS flip animation using `perspective` and `rotateY` — card auto-resets to front when "Next" is clicked
* [x] Dark theme with gradient UI, responsive layout for mobile screens
* [x] Difficulty legend at the bottom of the page for reference
* [x] `aria-label` on the card for basic accessibility

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [Kap](https://getkap.co/) (macOS) / [ScreenToGif](https://www.screentogif.com/) (Windows)

## Notes

Challenges encountered while building the app:

- Getting the CSS 3D flip to work correctly required making sure `backface-visibility: hidden` and `transform-style: preserve-3d` were set on the right elements.
- The card needed to automatically reset to the front face when "Next" is clicked — solved by passing `key={currentIndex}` to the `Flashcard` component, which remounts it fresh on each new card.
- Ensuring the random next-card logic never repeats the same card required a `do...while` loop.

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