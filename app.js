// Haiku Daily — picks today's haiku and handles rerolls.

const haikuEl = document.getElementById("haiku");
const seasonEl = document.getElementById("season");
const dateLabel = document.getElementById("dateLabel");
const poolCount = document.getElementById("poolCount");
const rerollBtn = document.getElementById("rerollBtn");

// --- Helpers -------------------------------------------------------------

// Turn a date into a stable integer "day number" so the same calendar day
// always maps to the same haiku for everyone, in any timezone.
function dayNumber(date) {
  const utcMidnight = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor(utcMidnight / 86400000); // ms per day
}

// Deterministic index for "today" — no randomness, so it's the same all day.
function indexForToday() {
  return dayNumber(new Date()) % HAIKUS.length;
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Render a haiku with a soft fade so swaps feel calm.
function render(haiku) {
  haikuEl.classList.add("is-swapping");
  window.setTimeout(() => {
    haikuEl.innerHTML = haiku.lines
      .map((line) => `<span class="line">${line}</span>`)
      .join("");
    seasonEl.textContent =
      haiku.season && haiku.season !== "any" ? haiku.season : "";
    haikuEl.classList.remove("is-swapping");
  }, 200);
}

// --- Reroll: a random haiku that isn't the one currently shown ----------

let currentIndex = indexForToday();

function reroll() {
  if (HAIKUS.length < 2) return;
  let next = currentIndex;
  while (next === currentIndex) {
    next = Math.floor(Math.random() * HAIKUS.length);
  }
  currentIndex = next;
  render(HAIKUS[currentIndex]);

  // Spin the icon for a little feedback.
  rerollBtn.classList.add("spin");
  window.setTimeout(() => rerollBtn.classList.remove("spin"), 500);
}

// --- Init ----------------------------------------------------------------

dateLabel.textContent = formatDate(new Date());
poolCount.textContent = `${HAIKUS.length} haiku in the well`;
render(HAIKUS[currentIndex]);

rerollBtn.addEventListener("click", reroll);

// Spacebar / R also reroll, for the keyboard-inclined.
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.key.toLowerCase() === "r") {
    e.preventDefault();
    reroll();
  }
});
