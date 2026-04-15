# React Pokedex

A React component exercise that displays a collection of Pokémon cards, built to practice props, component composition, and default props.

## Overview

This app renders a Pokedex — a grid of Pokémon cards showing each creature's name, sprite image, type, and base experience. It's built with three React components following a parent-child hierarchy:

- **App** — Top-level wrapper that renders the Pokedex
- **Pokedex** — Receives an array of Pokémon via props (with defaults) and maps over them to render individual cards
- **Pokecard** — Displays a single Pokémon's details with a dynamically colored type badge

## Concepts Practiced

- React functional components
- Passing and destructuring props
- Default props (`Component.defaultProps`)
- Rendering lists with `.map()` and the `key` prop
- Dynamic image URLs with template literals
- Inline styles driven by JavaScript data (type-based color mapping)
- Flexbox layout for responsive card grid
- CSS animations, transitions, and hover effects

## Tech Stack

- React 18 (via CDN)
- ReactDOM 18 (via CDN)
- Babel Standalone (in-browser JSX compilation)
- Vanilla CSS

## How to Run

1. Clone the repository
2. Open `index.html` in a browser, or serve