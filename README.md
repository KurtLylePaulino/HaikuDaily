# Haiku Daily

> 🌱 One haiku a day — with a reroll for when you want another.

A tiny static site that shows one haiku per day, with a **Reroll** button to draw another from the pool. No server, no API key, no build step — just open `index.html`.

## How it works

- **`haikus.js`** — the pool of haikus (this is the only file you'll usually edit).
- **`app.js`** — picks "today's" haiku deterministically from the date, and handles reroll.
- **`index.html` / `style.css`** — the page and its styling.

"Today's haiku" is chosen by the calendar day, so everyone sees the same one each day. **Reroll** (button, or press `R` / `Space`) shows a random different one.

## Adding more haikus

Open `haikus.js` and append to the `HAIKUS` array:

```js
{ lines: ["first line", "second line", "third line"], season: "summer" },
```

`season` can be `"spring"`, `"summer"`, `"autumn"`, `"winter"`, or `"any"` (shown without a season tag). Save, refresh, done.

## Run locally

Just open `index.html` in a browser. (Or serve the folder: `python -m http.server`.)

## Publish free on GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.
