document.addEventListener("DOMContentLoaded", () => {
  const STARTER_CITIES = [
    "Jersey City NJ",
    "Hoboken NJ",
    "Weehawken NJ",
    "Fort Lee NJ",
    "Hackensack NJ",
    "Fairview NJ",
    "Saddle Brook NJ",
    "New Milford NJ",
    "Lyndhurst NJ",
    "Totowa NJ",
    "Montclair NJ",
    "Morristown NJ",
    "West Orange NJ"
  ];

  const VENUES = [
    {
      id: "grand-vin",
      name: "Grand Vin",
      city: "Hoboken",
      zip: "07030",
      address: "500 Grand St, Hoboken, NJ 07030",
      lat: 40.7486,
      lng: -74.0324,
      type: ["lounge", "restaurant", "wine bar", "italian"],
      crowd: "35–55+",
      crowdTags: ["30+", "40+", "mature crowd", "singles"],
      music: ["live music", "jazz", "acoustic"],
      bestNights: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      specials: ["Happy hour 5–7 PM", "Wine deals", "Live music Tue–Sat"],
      beerMax: 9,
      cocktailMax: 16,
      events: ["Tuesday jazz trio", "Thursday wine special", "Saturday live music"],
      desc: "Polished Hoboken pick with a stronger 30+ to 50+ crowd and grown-up vibe."
    },
    {
      id: "finnegans",
      name: "Finnegan's Pub",
      city: "Hoboken",
      zip: "07030",
      address: "734 Willow Ave, Hoboken, NJ 07030",
      lat: 40.7517,
      lng: -74.0333,
      type: ["pub", "tavern", "live music"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+"],
      music: ["live music", "rock"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Weekend live bands"],
      beerMax: 9,
      cocktailMax: 14,
      events: ["Friday cover band", "Saturday rock set"],
      desc: "Classic live-music pub with a broader grown-up crowd and easier vibe."
    },
    {
      id: "mills-tavern",
      name: "Mills Tavern",
      city: "Hoboken",
      zip: "07030",
      address: "125 Washington St, Hoboken, NJ 07030",
      lat: 40.7398,
      lng: -74.0306,
      type: ["restaurant", "cocktail bar", "lounge", "tavern"],
      crowd: "30–45+",
      crowdTags: ["30+", "singles", "dinner"],
      music: ["dj", "top 40"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Dinner + cocktails", "Late-night bar crowd"],
      beerMax: 10,
      cocktailMax: 18,
      events: ["Friday dinner-to-drinks flow", "Saturday late crowd"],
      desc: "Good crossover pick when you want dinner first and nightlife after."
    },
    {
      id: "mcgoverns",
      name: "McGovern's Tavern",
      city: "Newark",
      zip: "07102",
      address: "58 New St, Newark, NJ 07102",
      lat: 40.7369,
      lng: -74.1706,
      type: ["tavern", "pub", "irish bar", "restaurant"],
      crowd: "30–60+",
      crowdTags: ["30+", "40+", "50+", "mature crowd"],
      music: ["live music", "rock", "irish music"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Classic pub pours", "Occasional live sets"],
      beerMax: 8,
      cocktailMax: 13,
      events: ["Friday band night", "Saturday neighborhood crowd peak"],
      desc: "Historic Newark tavern with cheaper drinks, mature crowd, and classic pub energy."
    },
    {
      id: "bar-franco",
      name: "Bar Franco",
      city: "Montclair",
      zip: "07042",
      address: "5 Church St, Montclair, NJ 07042",
      lat: 40.8177,
      lng: -74.2102,
      type: ["lounge", "cocktail bar"],
      crowd: "30–45+",
      crowdTags: ["30+", "singles"],
      music: ["house", "dj", "lounge"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Date-night vibe", "Select half-price cocktails"],
      beerMax: 10,
      cocktailMax: 17,
      events: ["Friday lounge DJ", "Saturday late cocktail crowd"],
      desc: "Stylish Montclair cocktail lounge with polished crowd energy and strong weekend appeal."
    },
    {
      id: "hudson-view",
      name: "Hudson View Lounge",
      city: "Weehawken",
      zip: "07086",
      address: "1200 Harbor Blvd, Weehawken, NJ 07086",
      lat: 40.7718,
      lng: -74.0153,
      type: ["lounge", "rooftop", "restaurant"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+", "mature crowd"],
      music: ["house", "lounge", "dj"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Skyline cocktail hour", "Waterfront vibe"],
      beerMax: 11,
      cocktailMax: 19,
      events: ["Friday skyline DJ", "Saturday cocktail crowd"],
      desc: "Scenic-style lounge profile for skyline drinks and older social energy."
    },
    {
      id: "son-cubano",
      name: "Son Cubano",
      city: "West New York",
      zip: "07093",
      address: "40-4 Riverwalk Pl, West New York, NJ 07093",
      lat: 40.7785,
      lng: -74.0078,
      type: ["restaurant", "lounge", "spanish", "latin"],
      crowd: "30–55+",
      crowdTags: ["30+", "40+", "mature crowd"],
      music: ["latin", "lounge", "dj"],
      bestNights: ["Thursday", "Friday", "Saturday", "Sunday"],
      specials: ["Waterfront dining", "Cocktail crowd"],
      beerMax: 9,
      cocktailMax: 17,
      events: ["Weekend lounge energy", "Latin dinner crowd"],
      desc: "Strong date-night and upscale Latin dining option with nightlife crossover."
    },
    {
      id: "fort-lee-social",
      name: "Fort Lee Social",
      city: "Fort Lee",
      zip: "07024",
      address: "204 Main St, Fort Lee, NJ 07024",
      lat: 40.8509,
      lng: -73.9701,
      type: ["bar", "lounge", "restaurant", "sports bar"],
      crowd: "30–45+",
      crowdTags: ["30+", "singles"],
      music: ["hip-hop", "house", "dj"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Thursday DJ happy hour", "Late-night cocktails"],
      beerMax: 10,
      cocktailMax: 16,
      events: ["Thursday after-work social", "Saturday lounge crowd"],
      desc: "Flexible bar-lounge crossover for bridge-side meetups."
    },
    {
      id: "ventanas",
      name: "Ventanas Restaurant & Lounge",
      city: "Fort Lee",
      zip: "07024",
      address: "200 Park Ave, Fort Lee, NJ 07024",
      lat: 40.8516,
      lng: -73.9735,
      type: ["restaurant", "lounge", "steakhouse", "rooftop"],
      crowd: "30–60+",
      crowdTags: ["30+", "40+", "50+", "mature crowd"],
      music: ["lounge", "dj"],
      bestNights: ["Friday", "Saturday", "Sunday"],
      specials: ["Dinner and cocktails", "Event nights"],
      beerMax: 10,
      cocktailMax: 18,
      events: ["Upscale lounge nights", "Private event energy"],
      desc: "Big upscale restaurant-lounge destination in the Fort Lee area."
    },
    {
      id: "hackensack-live-room",
      name: "Hackensack Live Room",
      city: "Hackensack",
      zip: "07601",
      address: "55 Main St, Hackensack, NJ 07601",
      lat: 40.8862,
      lng: -74.0435,
      type: ["music venue", "bar", "live music"],
      crowd: "25–45+",
      crowdTags: ["20s", "30+", "40+"],
      music: ["live music", "rock", "country", "edm"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Show-night drink bundles"],
      beerMax: 9,
      cocktailMax: 15,
      events: ["Friday live band schedule", "Saturday rotating event nights"],
      desc: "Good starter profile for people who care about the music first."
    },
    {
      id: "totowa-night-hub",
      name: "Totowa Night Hub",
      city: "Totowa",
      zip: "07512",
      address: "650 Union Blvd, Totowa, NJ 07512",
      lat: 40.9052,
      lng: -74.2238,
      type: ["bar", "restaurant", "sports bar"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+"],
      music: ["top 40", "house", "dj"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Friday cocktail special", "Saturday social room"],
      beerMax: 8,
      cocktailMax: 14,
      events: ["Friday crowd builder", "Saturday social night"],
      desc: "Starter Totowa option for a flexible social night without huge travel."
    },
    {
      id: "franklin-steakhouse",
      name: "Franklin Steakhouse",
      city: "Fair Lawn",
      zip: "07410",
      address: "318 Broadway, Fair Lawn, NJ 07410",
      lat: 40.9406,
      lng: -74.1186,
      type: ["steakhouse", "restaurant", "bar"],
      crowd: "35–65+",
      crowdTags: ["30+", "40+", "50+", "mature crowd"],
      music: ["lounge"],
      bestNights: ["Thursday", "Friday", "Saturday", "Sunday"],
      specials: ["Steakhouse dining", "Cocktail bar"],
      beerMax: 9,
      cocktailMax: 18,
      events: ["Dinner crowd", "Weekend social dining"],
      desc: "A strong upscale North Jersey steakhouse option with bar appeal."
    }
  ];

  const DAYS = ["Tonight", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const CROWDS = ["All crowds", "20s", "30+", "40+", "50+", "Singles", "Mature crowd"];
  const VENUE_TYPES = [
    "All types",
    "Bar",
    "Lounge",
    "Pub",
    "Tavern",
    "Dive bar",
    "Sports bar",
    "Speakeasy",
    "Restaurant",
    "Steakhouse",
    "Sushi",
    "Italian",
    "Portuguese",
    "Spanish",
    "Brazilian",
    "Rooftop",
    "Music venue",
    "Pool hall",
    "Bar arcade",
    "Brunch"
  ];
  const MUSIC_TYPES = ["Any music", "Live music", "DJ", "Rock", "Country", "Hip-hop", "House", "Reggaeton", "EDM", "Jazz", "Top 40", "Latin", "Lounge"];
  const EXTRAS = ["Any extras", "Happy hour", "Cheap drinks", "Live music", "DJ night", "Singles vibe", "Mature crowd", "Brunch", "Date night", "Waterfront"];
  const PRICE_OPTIONS = ["Any", "$5", "$7", "$8", "$9", "$10", "$12", "$14", "$16", "$18", "$20"];

  let filters = {
    day: "Tonight",
    crowd: "All crowds",
    venue: "All types",
    music: "Any music",
    extra: "Any extras",
    beer: "Any",
    cocktail: "Any"
  };

  let activeVenues = [...VENUES];
  let currentQuery = "";

  const $ = (id) => document.getElementById(id);

  const els = {
    searchPanel: $("searchPanel"),
    seedCities: $("seedCities"),
    plannerResult: $("plannerResult"),
    plannerSummary: $("plannerSummary"),
    resultsCount: $("resultsCount"),
    venueList: $("venueList"),
    dayFilters: $("dayFilters"),
    crowdFilters: $("crowdFilters"),
    venueFilters: $("venueFilters"),
    musicFilters: $("musicFilters"),
    specialFilters: $("specialFilters"),
    beerBudget: $("beerBudget"),
    cocktailBudget: $("cocktailBudget"),
    runSolo: $("runSolo"),
    runMiddle: $("runMiddle"),
    runGroup: $("runGroup"),
    runAi: $("runAi"),
    loadNj: $("loadNj"),
    soloQuery: $("soloQuery"),
    midA: $("midA"),
    midB: $("midB"),
    groupList: $("groupList"),
    aiPrompt: $("aiPrompt"),
    funFloating: $("funFloating")
  };

  function setPlanner(text, summary = "Plan updated") {
    if (els.plannerResult) els.plannerResult.textContent = text;
    if (els.plannerSummary) els.plannerSummary.textContent = summary;
  }

  function setBusy(state) {
    const buttons = [els.runSolo, els.runMiddle, els.runGroup, els.runAi, els.loadNj];
    buttons.forEach((btn) => {
      if (btn) btn.disabled = state;
    });
    if (els.searchPanel) {
      els.searchPanel.classList.toggle("loading-state", state);
    }
  }

  function setMode(mode) {
    document.querySelectorAll(".mode").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });

    document.querySelectorAll(".mode-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `${mode}-mode`);
    });
  }

  function normalize(text) {
    return (text || "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/,/g, "");
  }

  function moneyToNumber(value) {
    return value === "Any" ? Infinity : Number(value.replace("$", ""));
  }

  function scoreVenue(v, queryText = "") {
    let score = 0;
    const q = normalize(queryText);
    const text = normalize(`${v.name} ${v.city} ${v.zip} ${v.address} ${v.type.join(" ")} ${v.specials.join(" ")} ${v.events.join(" ")}`);

    if (q && normalize(v.city).includes(q)) score += 45;
    if (q && normalize(v.zip) === q) score += 45;
    if (q && text.includes(q)) score += 15;

    if (filters.music !== "Any music" && v.music.map(normalize).includes(normalize(filters.music))) score += 10;
    if (filters.venue !== "All types" && v.type.map(normalize).includes(normalize(filters.venue))) score += 10;

    return score;
  }

  function renderChipGroup(container, list, key) {
    if (!container) return;
    container.innerHTML = "";

    list.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (filters[key] === item ? " selected" : "");
      btn.textContent = item;

      btn.addEventListener("click", () => {
        filters[key] = item;
        renderFilters();
        renderResults(currentQuery);
      });

      container.appendChild(btn);
    });
  }

  function renderSelect(selectEl, key) {
    if (!selectEl) return;
    selectEl.innerHTML = "";

    PRICE_OPTIONS.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      selectEl.appendChild(option);
    });

    selectEl.value = filters[key];
    selectEl.onchange = () => {
      filters[key] = selectEl.value;
      renderResults(currentQuery);
    };
  }

  function renderSeedCities() {
    if (!els.seedCities) return;
    els.seedCities.innerHTML = "";

    STARTER_CITIES.forEach((city) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "seed-chip";
      btn.textContent = city;
      btn.addEventListener("click", () => {
        els.soloQuery.value = city;
        runSolo();
      });
      els.seedCities.appendChild(btn);
    });
  }

  function venueMatches(v) {
    if (filters.day !== "Tonight" && !v.bestNights.includes(filters.day)) return false;

    if (filters.crowd === "20s" && !v.crowdTags.includes("20s")) return false;
    if (filters.crowd === "30+" && !v.crowdTags.includes("30+")) return false;
    if (filters.crowd === "40+" && !v.crowdTags.includes("40+")) return false;
    if (filters.crowd === "50+" && !v.crowdTags.includes("50+")) return false;
    if (filters.crowd === "Singles" && !v.crowdTags.includes("singles")) return false;
    if (filters.crowd === "Mature crowd" && !v.crowdTags.includes("mature crowd")) return false;

    if (filters.venue !== "All types") {
      const selected = normalize(filters.venue);
      const types = v.type.map(normalize);
      const combined = normalize(`${v.type.join(" ")} ${v.desc}`);

      if (selected === "brunch") {
        const text = normalize(`${v.specials.join(" ")} ${v.events.join(" ")}`);
        if (!text.includes("brunch")) return false;
      } else if (!types.includes(selected) && !combined.includes(selected)) {
        return false;
      }
    }

    if (filters.music !== "Any music") {
      const selected = normalize(filters.music);
      if (!v.music.map(normalize).includes(selected)) return false;
    }

    if (filters.extra !== "Any extras") {
      const extraText = normalize(`${v.specials.join(" ")} ${v.events.join(" ")} ${v.crowdTags.join(" ")} ${v.desc}`);
      const extra = normalize(filters.extra);

      if (extra === "cheap drinks") {
        if (!(v.beerMax <= 8 || v.cocktailMax <= 13)) return false;
      } else if (!extraText.includes(extra.replace(" vibe", ""))) {
        return false;
      }
    }

    if (v.beerMax > moneyToNumber(filters.beer)) return false;
    if (v.cocktailMax > moneyToNumber(filters.cocktail)) return false;

    return true;
  }

  function venueCard(v) {
    const article = document.createElement("article");
    article.className = "venue-card";

    article.innerHTML = `
      <div class="venue-top">
        <div>
          <h3 class="venue-title">${v.name}</h3>
          <div class="address">${v.city} • ${v.address}</div>
        </div>
        <div class="status">${v.source === "google" ? "Live" : "Starter"}</div>
      </div>

      <div class="info-grid">
        <div class="info"><div class="label">Best nights</div><div class="value">${v.bestNights.join(", ")}</div></div>
        <div class="info"><div class="label">Crowd</div><div class="value">${v.crowd}</div></div>
        <div class="info"><div class="label">Music</div><div class="value">${v.music.join(", ")}</div></div>
        <div class="info"><div class="label">Typical prices</div><div class="value">Beer up to $${v.beerMax} • Cocktails up to $${v.cocktailMax}</div></div>
        <div class="info"><div class="label">Type</div><div class="value">${v.type.join(", ")}</div></div>
        <div class="info"><div class="label">Specials</div><div class="value">${v.specials.join(" • ")}</div></div>
      </div>

      <div class="description">${v.desc}</div>

      <div class="event-box">
        <h4>Events / notes</h4>
        <ul class="event-list">${v.events.map((e) => `<li>${e}</li>`).join("")}</ul>
      </div>

      <div class="action-row">
        <button type="button" data-map="${encodeURIComponent(v.name + " " + v.address)}">Directions</button>
        <button type="button" data-search="${encodeURIComponent(v.name + " " + v.city + " bar lounge pub tavern nightlife")}">Search</button>
        <button type="button" data-photos="${encodeURIComponent(v.name + " " + v.city + " photos")}">Photos</button>
      </div>
    `;

    article.querySelector("[data-map]")?.addEventListener("click", (e) => {
      window.open(`https://www.google.com/maps/search/?api=1&query=${e.currentTarget.dataset.map}`, "_blank");
    });

    article.querySelector("[data-search]")?.addEventListener("click", (e) => {
      window.open(`https://www.google.com/search?q=${e.currentTarget.dataset.search}`, "_blank");
    });

    article.querySelector("[data-photos]")?.addEventListener("click", (e) => {
      window.open(`https://www.google.com/search?tbm=isch&q=${e.currentTarget.dataset.photos}`, "_blank");
    });

    return article;
  }

  function renderResults(queryText = "") {
    const filtered = activeVenues
      .filter(venueMatches)
      .sort((a, b) => scoreVenue(b, queryText) - scoreVenue(a, queryText));

    if (els.resultsCount) {
      els.resultsCount.textContent = `${filtered.length} venue ${filtered.length === 1 ? "match" : "matches"}`;
    }

    if (!els.venueList) return;
    els.venueList.innerHTML = "";

    if (filtered.length === 0) {
      setPlanner(
        "No venues matched the current combo. Try raising beer/cocktail max, changing crowd, venue type, or music.",
        "No matches"
      );
      return;
    }

    filtered.forEach((venue) => {
      els.venueList.appendChild(venueCard(venue));
    });
  }

  function renderFilters() {
    renderChipGroup(els.dayFilters, DAYS, "day");
    renderChipGroup(els.crowdFilters, CROWDS, "crowd");
    renderChipGroup(els.venueFilters, VENUE_TYPES, "venue");
    renderChipGroup(els.musicFilters, MUSIC_TYPES, "music");
    renderChipGroup(els.specialFilters, EXTRAS, "extra");
    renderSelect(els.beerBudget, "beer");
    renderSelect(els.cocktailBudget, "cocktail");
  }

  function lookupStarterMatches(query) {
    const q = normalize(query);
    if (!q) return [];

    const direct = VENUES.filter((v) => {
      const city = normalize(v.city);
      const zip = normalize(v.zip);
      const name = normalize(v.name);
      const address = normalize(v.address);
      return city === q || zip === q || name.includes(q) || address.includes(q);
    });

    if (direct.length) return direct;

    return VENUES.filter((v) => {
      const text = normalize(`${v.name} ${v.city} ${v.zip} ${v.address} ${v.type.join(" ")}`);
      return text.includes(q);
    });
  }

  function findClosestStarterZone(lat, lng) {
    const starterZones = [
      { city: "Hackensack", lat: 40.8862, lng: -74.0435 },
      { city: "Fort Lee", lat: 40.8509, lng: -73.9701 },
      { city: "Fairview", lat: 40.8162, lng: -73.9990 },
      { city: "Weehawken", lat: 40.7718, lng: -74.0153 },
      { city: "Hoboken", lat: 40.7433, lng: -74.0288 },
      { city: "Jersey City", lat: 40.7178, lng: -74.0431 },
      { city: "Lyndhurst", lat: 40.8120, lng: -74.1243 },
      { city: "Totowa", lat: 40.9052, lng: -74.2238 },
      { city: "Montclair", lat: 40.8176, lng: -74.2090 },
      { city: "Morristown", lat: 40.7968, lng: -74.4815 },
      { city: "West Orange", lat: 40.7987, lng: -74.2390 },
      { city: "Saddle Brook", lat: 40.8984, lng: -74.0926 },
      { city: "New Milford", lat: 40.9351, lng: -74.0201 }
    ];

    let closest = null;
    let bestDistance = Infinity;

    starterZones.forEach((zone) => {
      const d = Math.sqrt(
        Math.pow(zone.lat - lat, 2) + Math.pow(zone.lng - lng, 2)
      );
      if (d < bestDistance) {
        bestDistance = d;
        closest = zone;
      }
    });

    return closest;
  }

  function geocodeAddress(address) {
    return new Promise((resolve, reject) => {
      if (!window.google || !google.maps || !google.maps.Geocoder) {
        reject(new Error("Google Geocoder unavailable"));
        return;
      }

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status !== "OK" || !results?.[0]) {
          reject(new Error(`Could not locate ${address}`));
          return;
        }

        const loc = results[0].geometry.location;
        resolve({
          lat: loc.lat(),
          lng: loc.lng(),
          formatted: results[0].formatted_address
        });
      });
    });
  }

  function reverseGeocode(lat, lng) {
    return new Promise((resolve) => {
      if (!window.google || !google.maps || !google.maps.Geocoder) {
        resolve(null);
        return;
      }

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status !== "OK" || !results?.[0]) {
          resolve(null);
          return;
        }
        resolve(results[0].formatted_address);
      });
    });
  }

  function textSearchPlaces(center, radiusMeters = 7000, queryText = "") {
    return new Promise((resolve, reject) => {
      if (!window.google || !google.maps || !google.maps.places) {
        reject(new Error("Google Places unavailable"));
        return;
      }

      const map = new google.maps.Map(document.createElement("div"));
      const service = new google.maps.places.PlacesService(map);

      const searchText = `${queryText} bars lounges pubs taverns dive bars sports bars steakhouses sushi speakeasies pool halls live music nightlife`;

      service.textSearch(
        {
          location: new google.maps.LatLng(center.lat, center.lng),
          radius: radiusMeters,
          query: searchText
        },
        (results, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK || !results?.length) {
            reject(new Error("No nearby places found"));
            return;
          }

          const mapped = results
            .filter((p) => p.name && p.formatted_address)
            .slice(0, 18)
            .map((p) => ({
              id: `${p.place_id}`,
              name: p.name || "Unknown venue",
              city: center.formatted || "Search area",
              zip: "",
              address: p.formatted_address || p.vicinity || "Google result",
              lat: p.geometry?.location?.lat?.() ?? center.lat,
              lng: p.geometry?.location?.lng?.() ?? center.lng,
              type: ["bar", "lounge", "restaurant"],
              crowd: "Mixed",
              crowdTags: ["20s", "30+", "40+"],
              music: ["dj", "top 40", "house"],
              bestNights: ["Thursday", "Friday", "Saturday"],
              specials: ["Check venue socials", "Check live specials"],
              beerMax: 10,
              cocktailMax: 16,
              events: ["Live Google result", "Check social pages for current event info"],
              desc: p.formatted_address || p.vicinity || "Live venue result from Google Places.",
              source: "google"
            }));

          resolve(mapped);
        }
      );
    });
  }

  async function runSolo() {
    const query = els.soloQuery?.value?.trim();
    if (!query) {
      setPlanner('Enter a ZIP, city, or address.', "Need a search");
      return;
    }

    currentQuery = query;
    setBusy(true);
    setPlanner(`Searching "${query}" for bars, lounges, pubs, taverns, restaurants, sports bars, steakhouses, sushi, speakeasies, pool halls, and nightlife...`, "Solo search running");

    try {
      const starter = lookupStarterMatches(query);
      if (starter.length) {
        activeVenues = starter;
        renderResults(query);
        setPlanner(`Found ${starter.length} starter venue match(es) around "${query}".`, "Starter match");
        return;
      }

      const center = await geocodeAddress(query);
      const live = await textSearchPlaces(center, 7000, query);
      activeVenues = live;
      renderResults(query);
      setPlanner(`Found live venues around "${center.formatted}".`, "Live search complete");
    } catch (err) {
      activeVenues = lookupStarterMatches(query);
      if (!activeVenues.length) activeVenues = [...VENUES];
      renderResults(query);
      setPlanner(`Google search did not fully complete for "${query}". Showing best starter matches instead.`, "Starter fallback");
    } finally {
      setBusy(false);
    }
  }

  async function runMiddle() {
    const a = els.midA?.value?.trim();
    const b = els.midB?.value?.trim();

    if (!a || !b) {
      setPlanner("Enter both addresses or ZIPs first.", "Need two locations");
      return;
    }

    currentQuery = "";
    setBusy(true);
    setPlanner(`Calculating the midpoint between "${a}" and "${b}"...`, "Middle search running");

    try {
      const [locA, locB] = await Promise.all([geocodeAddress(a), geocodeAddress(b)]);

      const rawMidLat = (locA.lat + locB.lat) / 2;
      const rawMidLng = (locA.lng + locB.lng) / 2;
      const reverseMid = await reverseGeocode(rawMidLat, rawMidLng);
      const bestZone = findClosestStarterZone(rawMidLat, rawMidLng);

      if (!bestZone) throw new Error("No usable middle zone found");

      const live = await textSearchPlaces(
        { lat: bestZone.lat, lng: bestZone.lng, formatted: `${bestZone.city}, NJ` },
        8000,
        bestZone.city
      );

      activeVenues = live.length ? live : VENUES.filter((v) => normalize(v.city) === normalize(bestZone.city));
      if (!activeVenues.length) activeVenues = [...VENUES];

      currentQuery = bestZone.city;
      renderResults(bestZone.city);

      setPlanner(
        `Midpoint between ${locA.formatted} and ${locB.formatted}: ${reverseMid || `${rawMidLat.toFixed(4)}, ${rawMidLng.toFixed(4)}`}. Best meetup zone: ${bestZone.city}, NJ. Showing venues near that area based on your filters.`,
        `Middle zone: ${bestZone.city}`
      );

      setMode("middle");
    } catch (err) {
      activeVenues = [...VENUES];
      renderResults();
      setPlanner("Meet-in-the-middle could not fully calculate right now. Showing starter venues instead.", "Fallback results");
    } finally {
      setBusy(false);
    }
  }

  async function runGroup() {
    const lines = (els.groupList?.value || "")
      .split(/\n+/)
      .map((x) => x.trim())
      .filter(Boolean)
      .slice(0, 10);

    if (lines.length < 2) {
      setPlanner("Enter at least 2 group locations.", "Need more locations");
      return;
    }

    currentQuery = "";
    setBusy(true);
    setPlanner(`Triangulating ${lines.length} group locations...`, "Group search running");

    try {
      const geocoded = await Promise.all(lines.map(geocodeAddress));

      const center = {
        lat: geocoded.reduce((sum, x) => sum + x.lat, 0) / geocoded.length,
        lng: geocoded.reduce((sum, x) => sum + x.lng, 0) / geocoded.length
      };

      const reverseMid = await reverseGeocode(center.lat, center.lng);
      const bestZone = findClosestStarterZone(center.lat, center.lng);

      const live = await textSearchPlaces(
        { lat: bestZone.lat, lng: bestZone.lng, formatted: `${bestZone.city}, NJ` },
        9000,
        bestZone.city
      );

      activeVenues = live.length ? live : VENUES.filter((v) => normalize(v.city) === normalize(bestZone.city));
      if (!activeVenues.length) activeVenues = [...VENUES];

      currentQuery = bestZone.city;
      renderResults(bestZone.city);

      setPlanner(
        `Group midpoint for ${geocoded.length} people: ${reverseMid || `${center.lat.toFixed(4)}, ${center.lng.toFixed(4)}`}. Best meetup zone: ${bestZone.city}, NJ.`,
        "Group center ready"
      );

      setMode("group");
    } catch (err) {
      activeVenues = [...VENUES];
      renderResults();
      setPlanner("Group midpoint search hit a Google issue. Showing starter venues instead.", "Fallback results");
    } finally {
      setBusy(false);
    }
  }

  function runAi() {
    const prompt = (els.aiPrompt?.value || "").trim();
    if (!prompt) {
      setPlanner("Ask NightScout AI for a crowd, music, price, and area.", "Need a prompt");
      return;
    }

    currentQuery = prompt;
    const p = prompt.toLowerCase();

    filters.crowd =
      p.includes("50") ? "50+" :
      p.includes("40") ? "40+" :
      p.includes("30") ? "30+" :
      p.includes("20") ? "20s" :
      "All crowds";

    filters.music =
      p.includes("hip-hop") ? "Hip-hop" :
      p.includes("reggaeton") ? "Reggaeton" :
      p.includes("house") ? "House" :
      p.includes("edm") ? "EDM" :
      p.includes("country") ? "Country" :
      p.includes("jazz") ? "Jazz" :
      p.includes("live music") ? "Live music" :
      p.includes("dj") ? "DJ" :
      p.includes("rock") ? "Rock" :
      p.includes("latin") ? "Latin" :
      p.includes("lounge") ? "Lounge" :
      "Any music";

    filters.venue =
      p.includes("speakeasy") ? "Speakeasy" :
      p.includes("sports bar") ? "Sports bar" :
      p.includes("pool hall") ? "Pool hall" :
      p.includes("bar arcade") ? "Bar arcade" :
      p.includes("steakhouse") ? "Steakhouse" :
      p.includes("sushi") ? "Sushi" :
      p.includes("italian") ? "Italian" :
      p.includes("portuguese") ? "Portuguese" :
      p.includes("spanish") ? "Spanish" :
      p.includes("brazilian") ? "Brazilian" :
      p.includes("rooftop") ? "Rooftop" :
      p.includes("lounge") ? "Lounge" :
      p.includes("tavern") ? "Tavern" :
      p.includes("pub") ? "Pub" :
      p.includes("bar") ? "Bar" :
      p.includes("restaurant") ? "Restaurant" :
      p.includes("music venue") ? "Music venue" :
      p.includes("brunch") ? "Brunch" :
      "All types";

    if (p.includes("single")) filters.extra = "Singles vibe";
    else if (p.includes("mature")) filters.extra = "Mature crowd";
    else if (p.includes("happy hour")) filters.extra = "Happy hour";
    else if (p.includes("live music")) filters.extra = "Live music";
    else if (p.includes("date")) filters.extra = "Date night";
    else if (p.includes("waterfront")) filters.extra = "Waterfront";
    else filters.extra = "Any extras";

    const beerMatch = p.match(/beer[^0-9]*\$?(\d{1,2})/);
    const cocktailMatch = p.match(/cocktail[^0-9]*\$?(\d{1,2})/);
    filters.beer = beerMatch ? `$${beerMatch[1]}` : "Any";
    filters.cocktail = cocktailMatch ? `$${cocktailMatch[1]}` : "Any";

    renderFilters();
    renderResults(prompt);
    setPlanner(`AI plan built from: "${prompt}". Filters were updated to match that vibe.`, "AI plan ready");
    setMode("ai");
  }

  function runFun() {
    const pool = activeVenues.filter(venueMatches);
    const pickFrom = pool.length ? pool : VENUES;
    const pick = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    activeVenues = [pick];
    currentQuery = pick.city;
    renderResults(currentQuery);
    setPlanner(`Surprise pick: ${pick.name} in ${pick.city}.`, "Surprise mode");
  }

  function loadAllStarterCities() {
    activeVenues = [...VENUES];
    currentQuery = "";
    renderResults();
    setPlanner("Loaded all starter NJ venues.", "Starter venues loaded");
    setMode("solo");
  }

  document.querySelectorAll(".mode").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  els.runSolo?.addEventListener("click", runSolo);
  els.runMiddle?.addEventListener("click", runMiddle);
  els.runGroup?.addEventListener("click", runGroup);
  els.runAi?.addEventListener("click", runAi);
  els.loadNj?.addEventListener("click", loadAllStarterCities);
  els.funFloating?.addEventListener("click", runFun);

  els.soloQuery?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runSolo();
    }
  });

  els.midA?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runMiddle();
    }
  });

  els.midB?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runMiddle();
    }
  });

  renderSeedCities();
  renderFilters();
  renderResults();
  setPlanner("NightScout V4 Lite loaded. Pick a mode and start building the night.", "Choose a mode above.");
});
