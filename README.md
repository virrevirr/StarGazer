# StarGazer

A web app for people who love nature and stargazing. Search any city to get weather forecasts, the current moon phase, local astronomy news, and constellation details — then save your favorite locations to your profile.

## Features

- **City search** — search for any city worldwide using the GeoDB Cities API
- **Weather forecast** — 3-day weather forecast for the selected location
- **Moon phase** — current moon phase (same worldwide)
- **Astronomy news** — local-language news articles about astronomy for the selected country
- **Constellations** — browse constellations and view the stars within them
- **User profiles** — log in with Firebase Authentication to save locations to "Places I want to go" and "Places I have visited", including constellations seen at each location

## Tech Stack

- **Framework:** Vue 3 with JSX
- **Build tool:** Vite
- **Styling:** Bootstrap 5
- **Backend/Auth:** Firebase (Authentication + Firestore)
- **APIs (via RapidAPI):**
  - [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities) — city search
  - [WeatherAPI](https://rapidapi.com/weatherapi/api/weatherapi-com) — weather forecast
  - [Google News](https://rapidapi.com/ubillarnet/api/google-news13) — astronomy news
  - [Moon Phase](https://rapidapi.com/MoonAPIcom/api/moon-phase1) — moon phase data
  - [Stars by API Ninjas](https://rapidapi.com/apininjas/api/stars-by-api-ninjas) — star/constellation data

## Project Structure

```
StarGazer/
├── src/
│   ├── presenter/
│   │   ├── allConstellationsPresenter.jsx
│   │   ├── constellationPresenter.jsx
│   │   ├── informationPresenter.jsx
│   │   ├── loginPresenter.jsx
│   │   ├── profilePresenter.jsx
│   │   └── searchPresenter.jsx
│   ├── views/
│   │   ├── allConstellationsView.jsx
│   │   ├── constellationView.jsx
│   │   ├── informationView.jsx
│   │   ├── loginView.jsx
│   │   ├── moonView.jsx
│   │   ├── newsView.jsx
│   │   ├── profileView.jsx
│   │   ├── searchFormView.jsx
│   │   ├── searchResultsView.jsx
│   │   └── weatherView.jsx
│   ├── starModel.js        — app state (locations, constellations, promise states)
│   ├── starSource.js       — all API fetch calls
│   ├── firebaseModel.js    — Firebase read/write
│   ├── resolvePromise.js   — promise state handler
│   ├── root.jsx            — Vue Router setup
│   ├── components.jsx      — shared components
│   ├── countries.jsx       — country code/language lookup table
│   ├── apiConfig.js        — API keys (not committed)
│   └── index.jsx           — app entry point
├── public/
├── index.html
├── firebase.json
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js and npm
- A Firebase project with Authentication and Firestore enabled
- RapidAPI keys for the APIs listed above

### Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd StarGazer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `src/apiConfig.js` with your API keys:
   ```js
   export const API_KEY = "your-rapidapi-key";
   export const API_KEY_MOON = "your-moon-api-key";
   ```

4. Add your Firebase config to `firebaseConfig.js`.

### Development

```bash
npm run dev
```

Open the local URL printed in the terminal (Ctrl+Click or Cmd+Click).

### Deploy

```bash
firebase deploy
```

### Preview a single presenter (dev only)

To isolate a specific presenter during development, edit `src/index.jsx` temporarily:

```jsx
import Information from "./presenter/informationPresenter.jsx";
import { createApp } from "vue";
function App() { return <div><Information /></div>; }
const app = createApp(App);
app.mount("#root");
```

Remember to revert before pushing to main.
