/*
  NightScout NJ Upgrade Layer
  Front-end enhancement config + UI helper for simplified NightScout MVP.
  Upload this file to your GitHub repo root and load it after app.js.

  This file does NOT replace your Google backend.
  It adds:
  - "What are you looking for tonight?" choices
  - NJ filters for age, music, vibe, brunch, sports, dancing, chill
  - beer/cocktail max-price filters
  - suggestion rotation helper
*/

window.NIGHTSCOUT_NJ = {
  questionPrompt: "What are you looking for tonight?",
  funButtonLabel: "FUN",
  state: "New Jersey",
  ageRanges: [
    { id: "20s", label: "20s" },
    { id: "30plus", label: "30+" },
    { id: "40plus", label: "40+" },
    { id: "50plus", label: "50+" },
    { id: "mixed", label: "Mixed" }
  ],
  musicTypes: [
    "EDM",
    "House",
    "Country",
    "Rock",
    "Jazz",
    "Reggaeton",
    "Hip-Hop",
    "Live Band",
    "DJ",
    "Piano Bar"
  ],
  vibeTypes: [
    "Dancing",
    "Chill",
    "Sports Bar",
    "Brunch",
    "Cocktail Lounge",
    "Date Spot",
    "Live Music",
    "Piano Bar",
    "Mature Crowd"
  ],
  beerPriceCaps: ["$4", "$5", "$6", "$7", "$8", "$10+"],
  cocktailPriceCaps: ["$8", "$10", "$12", "$14", "$16", "$18+"],
  nightlyModes: [
    "Tonight",
    "Meet in the Middle",
    "Group Triangulation",
    "Brunch",
    "Cheap Drinks"
  ],
  actionButtons: [
    { id: "fun", label: "FUN" },
    { id: "question", label: "What are you looking for tonight?" }
  ]
};

function nsScoreVenue(venue, filters = {}) {
  let score = 0;

  if (venue.rotationBoost) score += venue.rotationBoost;

  if (filters.age && venue.crowdAge && venue.crowdAge.includes(filters.age.replace("plus", ""))) {
    score += 3;
  }

  if (filters.music && venue.music && venue.music.toLowerCase().includes(filters.music.toLowerCase())) {
    score += 3;
  }

  if (filters.vibe && venue.vibeTags && venue.vibeTags.includes(filters.vibe)) {
    score += 3;
  }

  if (filters.beerMax && venue.beerAvg && venue.beerAvg <= filters.beerMax) {
    score += 2;
  }

  if (filters.cocktailMax && venue.cocktailAvg && venue.cocktailAvg <= filters.cocktailMax) {
    score += 2;
  }

  if (venue.rating) score += venue.rating / 2;
  if (venue.reviewCount && venue.reviewCount > 25) score += 1;

  return score;
}

function nsCreateSimpleQuestionBar(targetId = "nightscout-question-bar") {
  const host = document.getElementById(targetId);
  if (!host) return;

  const title = document.createElement("div");
  title.className = "ns-question-title";
  title.textContent = NIGHTSCOUT_NJ.questionPrompt;

  const row = document.createElement("div");
  row.className = "ns-chip-row";

  NIGHTSCOUT_NJ.vibeTypes.forEach((tag) => {
    const chip = document.createElement("button");
    chip.className = "ns-chip";
    chip.textContent = tag;
    chip.type = "button";
    row.appendChild(chip);
  });

  host.innerHTML = "";
  host.appendChild(title);
  host.appendChild(row);
}

function nsCreatePriceFilters(targetId = "nightscout-price-filters") {
  const host = document.getElementById(targetId);
  if (!host) return;

  const beer = document.createElement("select");
  beer.id = "beerMax";
  NIGHTSCOUT_NJ.beerPriceCaps.forEach((p) => {
    const option = document.createElement("option");
    option.value = p;
    option.textContent = `Max beer ${p}`;
    beer.appendChild(option);
  });

  const cocktails = document.createElement("select");
  cocktails.id = "cocktailMax";
  NIGHTSCOUT_NJ.cocktailPriceCaps.forEach((p) => {
    const option = document.createElement("option");
    option.value = p;
    option.textContent = `Max cocktail ${p}`;
    cocktails.appendChild(option);
  });

  host.innerHTML = "";
  host.appendChild(beer);
  host.appendChild(cocktails);
}

function nsInjectBasicStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .ns-question-title { font-weight: 700; font-size: 1rem; margin: 10px 0; color: white; }
    .ns-chip-row { display: flex; gap: 10px; flex-wrap: wrap; }
    .ns-chip {
      padding: 10px 14px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,.12);
      background: rgba(255,255,255,.06);
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
    #nightscout-price-filters { display: flex; gap: 10px; margin-top: 12px; }
    #nightscout-price-filters select {
      background: rgba(255,255,255,.08);
      color: white;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 12px;
      padding: 10px 12px;
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", () => {
  nsInjectBasicStyles();
  nsCreateSimpleQuestionBar();
  nsCreatePriceFilters();
});