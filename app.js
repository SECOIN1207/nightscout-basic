document.addEventListener("DOMContentLoaded", () => {
  const starterCities = [
    "Jersey City NJ",
    "Hoboken NJ",
    "Weehawken NJ",
    "Fort Lee NJ",
    "Glen Rock NJ",
    "Fairview NJ",
    "Hackensack NJ",
    "Saddle Brook NJ",
    "New Milford NJ",
    "Lyndhurst NJ",
    "Totowa NJ",
    "Montclair NJ",
    "Morristown NJ",
    "West Orange NJ"
  ];

  const starterVenues = [
    {
      id: "grand-vin",
      name: "Grand Vin",
      city: "Hoboken",
      address: "500 Grand St, Hoboken, NJ 07030",
      crowd: "35–55+",
      type: ["lounge", "restaurant", "live music"],
      music: ["live music", "acoustic", "jazz"],
      bestNights: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      specials: ["Happy hour 5–7 PM", "Wine deals", "Live music Tue–Sat"],
      beer: 7,
      cocktail: 12,
      tags: ["40+", "singles", "mature crowd", "happy hour"],
      desc: "Polished grown-up Hoboken pick with cocktails, music nights, and easy conversation energy.",
      events: [
        "Social music nights and rotating wine specials",
        "Good first-date / mature crowd reputation",
        "Use as a steady backup if younger spots feel too loud"
      ],
      lat: 40.7447,
      lng: -74.0416
    },
    {
      id: "bar-franco",
      name: "Bar Franco",
      city: "Montclair",
      address: "5 Church St, Montclair, NJ 07042",
      crowd: "30–45+",
      type: ["lounge", "cocktail bar"],
      music: ["dj", "house", "lounge"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Date-night vibe", "Craft cocktails"],
      beer: 8,
      cocktail: 14,
      tags: ["30+", "singles", "lounge"],
      desc: "Stylish date-night lounge with polished crowd energy and stronger cocktail focus.",
      events: [
        "Weekend cocktail traffic",
        "Good surprise pick if your group wants something upscale",
        "Better for conversation than bar hopping"
      ],
      lat: 40.8142,
      lng: -74.2165
    },
    {
      id: "mcgoverns",
      name: "McGovern's Tavern",
      city: "Newark",
      address: "58 New St, Newark, NJ 07102",
      crowd: "30–60+",
      type: ["pub", "irish bar"],
      music: ["live music", "irish music", "classic rock"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Classic pub pours", "Traditional tavern feel"],
      beer: 6,
      cocktail: 10,
      tags: ["30+", "40+", "cheap drinks", "mature crowd"],
      desc: "Historic Newark tavern with a mature crowd, cheaper drinks, and dependable pub energy.",
      events: [
        "Reliable old-school fallback",
        "Strong for lower-spend nights",
        "Good if the group values conversation over flash"
      ],
      lat: 40.7388,
      lng: -74.1725
    },
    {
      id: "vanguard",
      name: "The Vanguard",
      city: "Harrison",
      address: "1 Park Ave, Harrison, NJ 07029",
      crowd: "25–40+",
      type: ["rooftop", "restaurant", "lounge"],
      music: ["dj", "house"],
      bestNights: ["Friday", "Saturday", "Sunday"],
      specials: ["Brunch + rooftop cocktails"],
      beer: 8,
      cocktail: 15,
      tags: ["brunch", "rooftop", "dj"],
      desc: "Modern rooftop social spot that bridges dinner, drinks, and upbeat lounge energy.",
      events: [
        "Weekend brunch crowd",
        "DJ-oriented rooftop energy",
        "Good for mixed groups wanting something modern"
      ],
      lat: 40.7421,
      lng: -74.1531
    },
    {
      id: "highlawn",
      name: "The Highlawn",
      city: "West Orange",
      address: "1 Crest Dr, West Orange, NJ 07052",
      crowd: "35–60+",
      type: ["rooftop", "lounge", "restaurant"],
      music: ["lounge"],
      bestNights: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      specials: ["Social hour 4–6 PM", "Scenic views"],
      beer: 8,
      cocktail: 16,
      tags: ["40+", "50+", "rooftop"],
      desc: "Upscale scenic lounge and dinner stop for more mature crowd energy.",
      events: [
        "Good for date-night and group dinners",
        "Premium view destination",
        "Less chaotic than party strips"
      ],
      lat: 40.7822,
      lng: -74.2456
    },
    {
      id: "finnegans",
      name: "Finnegan's Pub",
      city: "Hoboken",
      address: "734 Willow Ave, Hoboken, NJ 07030",
      crowd: "30–50+",
      type: ["pub", "live music"],
      music: ["live music", "rock"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Live bands most weekends"],
      beer: 7,
      cocktail: 11,
      tags: ["30+", "rock", "live music"],
      desc: "Classic pub with stronger live-music nights and broader grown-up crowd.",
      events: [
        "Live-band fallback",
        "Good when house/DJ spots are not the mood",
        "Stronger for laid-back mixed groups"
      ],
      lat: 40.7527,
      lng: -74.041
    }
  ];

  const dayOptions = ["Tonight", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const crowdOptions = ["All crowds", "20s", "30+", "40+", "50+", "Singles", "Mature crowd"];
  const venueOptions = ["All types", "Bar", "Lounge", "Club", "Restaurant + dancing", "Rooftop", "Music venue", "Brunch"];
  const musicOptions = ["Any music", "Live music", "DJ", "Hip-hop", "Country", "EDM", "House", "Reggaeton", "Rock", "Jazz"];
  const extrasOptions = ["Any extras", "Happy hour", "$5 beers", "$10 cocktails", "Brunch", "Singles"];
  const beerOptions = ["Any", "$3", "$5", "$7", "$10", "$15"];
  const cocktailOptions = ["Any", "$8", "$10", "$12", "$15", "$20"];

  const filters = {
    day: "Tonight",
    crowd: "All crowds",
    venue: "All types",
    music: "Any music",
    extra: "Any extras",
    beer: "Any",
    cocktail: "Any"
  };

  let currentResults = [...starterVenues];

  const ratingKey = "nightscout-v4-ratings";
  const ratings = JSON.parse(localStorage.getItem(ratingKey) || "{}");

  function byId(id) { return document.getElementById(id); }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function plannerText(text, summary = "") {
    const planner = byId("plannerResult");
    const summaryEl = byId("plannerSummary");
    if (planner) planner.innerHTML = text;
    if (summaryEl && summary) summaryEl.textContent = summary;
  }

  function renderSeedCities() {
    const wrap = byId("seedCities");
    if (!wrap) return;
    wrap.innerHTML = "";
    starterCities.forEach((city) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "seed-chip";
      b.textContent = city;
      b.addEventListener("click", () => {
        byId("soloQuery").value = city;
      });
      wrap.appendChild(b);
    });
  }

  function renderChips(id, items, stateKey) {
    const wrap = byId(id);
    if (!wrap) return;
    wrap.innerHTML = "";
    items.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip" + (filters[stateKey] === item ? " selected" : "");
      button.textContent = item;
      button.addEventListener("click", () => {
        filters[stateKey] = item;
        renderResults(currentResults);
      });
      wrap.appendChild(button);
    });
  }

  function setupSelect(id, items, key) {
    const select = byId(id);
    if (!select) return;
    select.innerHTML = "";
    items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    });
    select.value = filters[key];
    select.addEventListener("change", () => {
      filters[key] = select.value;
      renderResults(currentResults);
    });
  }

  function inBudget(price, cap) {
    if (cap === "Any") return true;
    return price <= Number(cap.replace("$", ""));
  }

  function passesFilters(v) {
    if (filters.day !== "Tonight" && !v.bestNights.includes(filters.day)) return false;
    if (filters.crowd === "30+" && !v.tags.includes("30+")) return false;
    if (filters.crowd === "40+" && !v.tags.includes("40+")) return false;
    if (filters.crowd === "50+" && !v.tags.includes("50+")) return false;
    if (filters.crowd === "Singles" && !v.tags.includes("singles")) return false;
    if (filters.crowd === "Mature crowd" && !v.tags.includes("mature crowd")) return false;

    if (filters.venue !== "All types") {
      const low = filters.venue.toLowerCase();
      const typeText = v.type.join(" ").toLowerCase();
      if (low === "restaurant + dancing") {
        if (!(typeText.includes("restaurant") && (typeText.includes("lounge") || typeText.includes("dj") || typeText.includes("music")))) return false;
      } else if (low === "music venue") {
        if (!(typeText.includes("live music") || v.music.includes("live music") || v.music.includes("dj"))) return false;
      } else if (!typeText.includes(low.split(" ")[0])) {
        return false;
      }
    }

    if (filters.music !== "Any music") {
      const low = filters.music.toLowerCase();
      if (!v.music.join(" ").toLowerCase().includes(low)) return false;
    }

    if (filters.extra !== "Any extras") {
      const low = filters.extra.toLowerCase();
      const haystack = `${v.specials.join(" ")} ${v.tags.join(" ")} ${v.desc}`.toLowerCase();
      if (filters.extra === "$5 beers" && !(v.beer <= 5 || haystack.includes("$5 beers") || haystack.includes("5 beers"))) return false;
      else if (filters.extra === "$10 cocktails" && !(v.cocktail <= 10 || haystack.includes("$10 cocktails") || haystack.includes("10 cocktails"))) return false;
      else if (!["$5 beers", "$10 cocktails"].includes(filters.extra) && !haystack.includes(low)) return false;
    }

    if (!inBudget(v.beer, filters.beer)) return false;
    if (!inBudget(v.cocktail, filters.cocktail)) return false;
    return true;
  }

  function distanceMiles(aLat, aLng, bLat, bLng) {
    const toRad = (d) => d * Math.PI / 180;
    const R = 3958.8;
    const dLat = toRad(bLat - aLat);
    const dLng = toRad(bLng - aLng);
    const sa = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(sa));
  }

  function nearbyBackups(venue) {
    if (!venue.lat || !venue.lng) return [];
    return currentResults
      .filter((other) => other.id !== venue.id && other.lat && other.lng)
      .map((other) => ({ ...other, dist: distanceMiles(venue.lat, venue.lng, other.lat, other.lng) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 3);
  }

  function ratingMarkup(id) {
    const saved = ratings[id] || {};
    return `
      <div class="rating-box" data-rating-id="${escapeHtml(id)}">
        <label>Rate this venue</label>
        <select class="rating-select">
          <option value="">Select rating</option>
          ${["Loved it", "Good", "Just okay", "Would not go back"].map((item) => `<option ${saved.score === item ? "selected" : ""}>${item}</option>`).join("")}
        </select>
        <textarea class="rating-note" rows="2" placeholder="Crowd attractive? Too many guys? Not enough women? Worth it?">${escapeHtml(saved.note || "")}</textarea>
        <button type="button" class="save-rating">Save note</button>
      </div>`;
  }

  function eventMarkup(events) {
    const items = events?.length ? events : [
      "Live event scraping can be layered in later by plugging a backend or Sheets feed into this card.",
      "For now, use manual event notes and Google Places live venue discovery.",
      "You can keep updating this starter list with real specials and socials."
    ];
    return `<div class="event-box"><h4>Event & special notes</h4><ul class="event-list">${items.map((e) => `<li>${escapeHtml(e)}</li>`).join("")}</ul></div>`;
  }

  function backupsMarkup(venue) {
    const backups = nearbyBackups(venue);
    if (!backups.length) return "";
    return `<div class="backup-box"><h4>Nearby backups</h4><ul class="event-list">${backups.map((b) => `<li>${escapeHtml(b.name)} · ${escapeHtml(b.city)} · ${b.dist.toFixed(1)} miles away</li>`).join("")}</ul></div>`;
  }

  function venueCard(v) {
    const query = encodeURIComponent(`${v.name} ${v.address}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    const websiteBtn = v.website ? `<button type="button" class="open-site" data-url="${escapeHtml(v.website)}">Website</button>` : "";

    return `
      <article class="venue-card">
        <div class="venue-top">
          <div>
            <h3 class="venue-title">${escapeHtml(v.name)}</h3>
            <div class="address">${escapeHtml(v.city)} • ${escapeHtml(v.address)}</div>
          </div>
          <div class="status">${v.live ? "Live" : "Starter"}</div>
        </div>
        <div class="info-grid">
          <div class="info"><div class="label">Best nights</div><div class="value">${escapeHtml(v.bestNights.join(", "))}</div></div>
          <div class="info"><div class="label">Crowd</div><div class="value">${escapeHtml(v.crowd)}</div></div>
          <div class="info"><div class="label">Music</div><div class="value">${escapeHtml(v.music.join(", "))}</div></div>
          <div class="info"><div class="label">Typical prices</div><div class="value">Beer $${escapeHtml(v.beer)} • Cocktail $${escapeHtml(v.cocktail)}</div></div>
          <div class="info"><div class="label">Type</div><div class="value">${escapeHtml(v.type.join(", "))}</div></div>
          <div class="info"><div class="label">Specials</div><div class="value">${escapeHtml(v.specials.join(" • "))}</div></div>
        </div>
        <div class="description">${escapeHtml(v.desc)}</div>
        ${eventMarkup(v.events)}
        ${backupsMarkup(v)}
        ${ratingMarkup(v.id || v.name)}
        <div class="action-row">
          <button type="button" class="open-map" data-url="${mapsUrl}">Directions</button>
          ${websiteBtn}
          <button type="button" class="show-backups" data-id="${escapeHtml(v.id || v.name)}">Backup spots</button>
          <button type="button" class="share-venue" data-share="${escapeHtml(v.name)} – ${escapeHtml(v.address)}">Share</button>
        </div>
      </article>`;
  }

  function attachCardActions() {
    document.querySelectorAll(".open-map").forEach((btn) => {
      btn.addEventListener("click", () => window.open(btn.dataset.url, "_blank"));
    });

    document.querySelectorAll(".open-site").forEach((btn) => {
      btn.addEventListener("click", () => window.open(btn.dataset.url, "_blank"));
    });

    document.querySelectorAll(".share-venue").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const text = btn.dataset.share;
        try {
          if (navigator.share) {
            await navigator.share({ title: "NightScout V4", text });
          } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
            plannerText(`Copied venue to clipboard: ${escapeHtml(text)}`, "Venue copied");
          }
        } catch (err) {
          console.error(err);
        }
      });
    });

    document.querySelectorAll(".save-rating").forEach((btn) => {
      btn.addEventListener("click", () => {
        const box = btn.closest(".rating-box");
        const id = box.dataset.ratingId;
        ratings[id] = {
          score: box.querySelector(".rating-select").value,
          note: box.querySelector(".rating-note").value.trim()
        };
        localStorage.setItem(ratingKey, JSON.stringify(ratings));
        plannerText(`Saved your note for ${escapeHtml(id)}. NightScout can keep learning from these ratings on this phone.`, "Rating saved");
      });
    });

    document.querySelectorAll(".show-backups").forEach((btn) => {
      btn.addEventListener("click", () => {
        const venue = currentResults.find((v) => (v.id || v.name) === btn.dataset.id);
        if (!venue) return;
        const backups = nearbyBackups(venue);
        if (!backups.length) {
          plannerText(`No close backup spots are stored yet for ${escapeHtml(venue.name)}.`, "No backups");
          return;
        }
        plannerText(`Closest backups to ${escapeHtml(venue.name)}: ${backups.map((b) => `${escapeHtml(b.name)} (${b.dist.toFixed(1)} mi)`).join(", ")}.`, "Nearby backups");
      });
    });
  }

  function renderResults(inputResults) {
    currentResults = inputResults;
    const list = inputResults.filter(passesFilters);
    const resultsCount = byId("resultsCount");
    const venueList = byId("venueList");
    if (resultsCount) resultsCount.textContent = `${list.length} venue ${list.length === 1 ? "match" : "matches"}`;
    if (venueList) {
      venueList.innerHTML = list.length
        ? list.map(venueCard).join("")
        : `<article class="venue-card"><h3 class="venue-title">No matches</h3><div class="description">Try widening your age, music, or budget filters.</div></article>`;
    }
    attachCardActions();
  }

  function setMode(modeName) {
    document.querySelectorAll(".mode").forEach((button) => {
      button.classList.toggle("active", button.dataset.mode === modeName);
    });
    document.querySelectorAll(".mode-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `${modeName}-mode`);
    });
  }

  function geocodeAddress(query) {
    return new Promise((resolve, reject) => {
      if (typeof google === "undefined" || !google.maps || !google.maps.Geocoder) {
        reject(new Error("Google Maps unavailable"));
        return;
      }
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: query }, (results, status) => {
        if (status === "OK" && results[0]) {
          resolve(results[0]);
        } else {
          reject(new Error(`Could not locate ${query}`));
        }
      });
    });
  }

  function nearbySearch(location, keyword = "bar lounge pub nightlife restaurant live music dj") {
    return new Promise((resolve, reject) => {
      if (typeof google === "undefined" || !google.maps || !google.maps.places) {
        reject(new Error("Google Places unavailable"));
        return;
      }
      const map = new google.maps.Map(document.createElement("div"));
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location,
          radius: 5500,
          keyword,
          type: "bar"
        },
        (places, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && places?.length) {
            resolve(places);
          } else {
            reject(new Error("No nearby venues found"));
          }
        }
      );
    });
  }

  function normalizePlace(place, fallbackCity = "Local") {
    return {
      id: `place-${place.place_id}`,
      name: place.name || "Unknown venue",
      city: fallbackCity,
      address: place.vicinity || place.formatted_address || "Google Places result",
      crowd: "Mixed",
      type: ["bar", "live result"],
      music: ["varies"],
      bestNights: ["Tonight"],
      specials: ["Check socials / venue site"],
      beer: 8,
      cocktail: 14,
      tags: ["live result"],
      desc: place.vicinity || "Live Google result",
      events: [
        "Use the Website or Directions button to check current socials and events.",
        "Places API gives live venue discovery, not full social scraping by itself.",
        "For true live specials scraping, add a backend or curated data feed next."
      ],
      lat: place.geometry?.location?.lat?.() ?? null,
      lng: place.geometry?.location?.lng?.() ?? null,
      live: true,
      website: ""
    };
  }

  async function runSolo() {
    const query = byId("soloQuery").value.trim();
    if (!query) {
      plannerText("Enter a city, ZIP, or address first.", "Need a location");
      return;
    }

    plannerText(`Searching around ${escapeHtml(query)}...`, "Live search");

    try {
      const result = await geocodeAddress(query);
      const location = result.geometry.location;
      const places = await nearbySearch(location);
      const city = result.address_components?.find((c) => c.types.includes("locality"))?.long_name || query;
      const live = places.slice(0, 10).map((p) => normalizePlace(p, city));
      renderResults(live);
      plannerText(`Live search completed near ${escapeHtml(query)}. Use filters to narrow by crowd, music, and price.`, `Live venues near ${query}`);
    } catch (err) {
      console.error(err);
      renderResults(starterVenues);
      plannerText(`Live search hit a wall for ${escapeHtml(query)}. Showing starter venues so the app still works.`, "Starter fallback");
    }
  }

  async function runMiddle() {
    const a = byId("midA").value.trim();
    const b = byId("midB").value.trim();
    if (!a || !b) {
      plannerText("Enter both addresses or ZIP codes to calculate the middle.", "Need two locations");
      return;
    }

    plannerText(`Calculating the middle between ${escapeHtml(a)} and ${escapeHtml(b)}...`, "Finding midpoint");

    try {
      const [ga, gb] = await Promise.all([geocodeAddress(a), geocodeAddress(b)]);
      const lat = (ga.geometry.location.lat() + gb.geometry.location.lat()) / 2;
      const lng = (ga.geometry.location.lng() + gb.geometry.location.lng()) / 2;
      const midpoint = { lat, lng };
      const places = await nearbySearch(midpoint);
      const live = places.slice(0, 10).map((p) => normalizePlace(p, "Middle spot"));
      renderResults(live);
      plannerText(
        `Midpoint found between <strong>${escapeHtml(a)}</strong> and <strong>${escapeHtml(b)}</strong>. NightScout is showing venues near that center, plus close backups once you open a card.`,
        "Meet-in-the-middle ready"
      );
      setMode("middle");
    } catch (err) {
      console.error(err);
      renderResults(starterVenues);
      plannerText(`Could not fully calculate the live midpoint. Starter venues are loaded so you can still plan from the NJ beta list.`, "Starter fallback");
    }
  }

  async function runGroup() {
    const raw = byId("groupList").value.trim();
    if (!raw) {
      plannerText("Add at least two locations for group planning.", "Need group locations");
      return;
    }
    const lines = raw.split(/\n+/).map((x) => x.trim()).filter(Boolean).slice(0, 10);
    try {
      const geocoded = await Promise.all(lines.map(geocodeAddress));
      const avgLat = geocoded.reduce((sum, item) => sum + item.geometry.location.lat(), 0) / geocoded.length;
      const avgLng = geocoded.reduce((sum, item) => sum + item.geometry.location.lng(), 0) / geocoded.length;
      const places = await nearbySearch({ lat: avgLat, lng: avgLng });
      const live = places.slice(0, 10).map((p) => normalizePlace(p, "Group center"));
      renderResults(live);
      plannerText(`Group center calculated for ${lines.length} people. Venues below aim to balance travel time and keep close alternatives nearby.`, "Group center ready");
      setMode("group");
    } catch (err) {
      console.error(err);
      renderResults(starterVenues);
      plannerText("Group triangulation hit a snag, so the NJ starter list is loaded as fallback.", "Starter fallback");
    }
  }

  function runAI() {
    const q = byId("aiPrompt").value.trim() || "Find a 40+ lounge with cocktails under $14 and nearby backup venues.";
    plannerText(
      `AI read: <strong>${escapeHtml(q)}</strong><br><br>Use the filters to lock your age group, music, and budget. For live results, run Solo or Meet in the middle. For a safer grown-up flow, start with Grand Vin or The Highlawn. For lower spend, McGovern's Tavern is the cheap-drinks fallback.`,
      "AI planning notes"
    );
    setMode("ai");
  }

  function runFun() {
    const list = currentResults.length ? currentResults : starterVenues;
    const pick = list[Math.floor(Math.random() * list.length)];
    renderResults([pick]);
    plannerText(`Surprise pick: <strong>${escapeHtml(pick.name)}</strong> in ${escapeHtml(pick.city)}. Open the card for backups nearby if it is not the vibe.`, "Surprise venue");
  }

  function exploreStarterCities() {
    renderResults(starterVenues);
    plannerText("Loaded the NightScout V4 starter city pack for North Jersey. Use filters for age, music, spend, and extras.", "Starter city pack");
  }

  document.querySelectorAll(".mode").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  byId("runSolo").addEventListener("click", runSolo);
  byId("runMiddle").addEventListener("click", runMiddle);
  byId("runGroup").addEventListener("click", runGroup);
  byId("runAi").addEventListener("click", runAI);
  byId("runFun").addEventListener("click", runFun);
  byId("loadNj").addEventListener("click", exploreStarterCities);

  renderSeedCities();
  renderChips("dayFilters", dayOptions, "day");
  renderChips("crowdFilters", crowdOptions, "crowd");
  renderChips("venueFilters", venueOptions, "venue");
  renderChips("musicFilters", musicOptions, "music");
  renderChips("specialFilters", extrasOptions, "extra");
  setupSelect("beerBudget", beerOptions, "beer");
  setupSelect("cocktailBudget", cocktailOptions, "cocktail");
  renderResults(starterVenues);
  plannerText("NightScout V4 loaded. Run Solo, Meet in the middle, or Group plan to start building the night.", "Choose a mode above");
});
