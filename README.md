# Rick and Morty Image Feed

## Overview

This project is a Next.js application built with React and TypeScript that implements an Image Feed using the public API provided by [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest). The main features include displaying a list of episodes on the initial page load, highlighting the selected episode, and updating the main view with characters from the selected episode.

[Demo](https://rickandmorty-diaz-demo.netlify.app/) 

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Initial Page Load 

- The left side-nav displays a list of episodes retrieved from the API endpoint.
- Each episode in the list is clickable.
- On initial load, the main view displays character images from first page in the API endpoint.

### Selecting an Episode 

- Clicking on an episode in the left side-nav highlights it with a dark border and a different color.
- The main view updates the characters' images and names from the selected episode.
- Selecting a different episode highlights new active episode.
- Unselecting currently active episode, the view reverts to the initial page load state.


## Technologies Used

- Next.js
- React
- TypeScript
- CSS
