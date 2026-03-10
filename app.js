document.addEventListener("DOMContentLoaded", () => {
  const STARTER_CITIES = [
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

  const VENUES = [
    {
      id: "grand-vin",
      name: "Grand Vin",
      city: "Hoboken",
      zip: "07030",
      address: "500 Grand St, Hoboken, NJ 07030",
      lat: 40.7486,
      lng: -74.0324,
      type: ["lounge", "restaurant", "live music"],
      crowd: "35–55+",
      crowdTags: ["30+", "40+", "mature crowd", "singles"],
      music: ["live music", "jazz", "acoustic"],
      bestNights: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      specials: ["Happy hour 5–7 PM", "Wine deals", "Live music Tue–Sat"],
      beerMax: 9,
      cocktailMax: 16,
      events: ["Tuesday jazz trio", "Thursday wine special", "Saturday live music"],
      desc: "Polished Hoboken pick with a stronger 30+ to 50+ crowd and safer grown-up vibe."
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
      id: "mcgoverns",
      name: "McGovern's Tavern",
      city: "Newark",
      zip: "07102",
      address: "58 New St, Newark, NJ 07102",
      lat: 40.7369,
      lng: -74.1706,
      type: ["pub", "irish bar", "restaurant"],
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
      id: "vanguard",
      name: "The Vanguard",
      city: "Harrison",
      zip: "07029",
      address: "1 Park Ave, Harrison, NJ 07029",
      lat: 40.7444,
      lng: -74.1569,
      type: ["rooftop", "restaurant", "lounge"],
      crowd: "25–40+",
      crowdTags: ["30+", "singles", "brunch"],
      music: ["house", "dj", "top 40"],
      bestNights: ["Friday", "Saturday", "Sunday"],
      specials: ["Rooftop cocktails", "Brunch specials"],
      beerMax: 10,
      cocktailMax: 18,
      events: ["Sunday brunch crowd", "Friday rooftop DJ"],
      desc: "Modern rooftop social spot for brunch, cocktails, and upbeat lounge energy."
    },
    {
      id: "finnegans",
      name: "Finnegan's Pub",
      city: "Hoboken",
      zip: "07030",
      address: "734 Willow Ave, Hoboken, NJ 07030",
      lat: 40.7517,
      lng: -74.0333,
      type: ["pub", "live music"],
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
      type: ["restaurant", "cocktail bar", "lounge"],
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
      id: "hudson-view",
      name: "Hudson View Lounge",
      city: "Weehawken",
      zip: "07086",
      address: "1200 Harbor Blvd, Weehawken, NJ 07086",
      lat: 40.7718,
      lng: -74.0153,
      type: ["lounge", "rooftop"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+", "mature crowd"],
      music: ["house", "lounge", "dj"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Skyline cocktail hour"],
      beerMax: 11,
      cocktailMax: 19,
      events: ["Friday skyline DJ", "Saturday cocktail crowd"],
      desc: "Scenic-style lounge profile for skyline drinks and older social energy."
    },
    {
      id: "fort-lee-social",
      name: "Fort Lee Social",
      city: "Fort Lee",
      zip: "07024",
      address: "204 Main St, Fort Lee, NJ 07024",
      lat: 40.8509,
      lng: -73.9701,
      type: ["bar", "lounge", "restaurant"],
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
      type: ["bar", "restaurant", "dj"],
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
      id: "glen-rock-room",
      name: "Glen Rock Room",
      city: "Glen Rock",
      zip: "07452",
      address: "210 Rock Rd, Glen Rock, NJ 07452",
      lat: 40.9629,
      lng: -74.1329,
      type: ["restaurant", "bar", "lounge"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+", "mature crowd"],
      music: ["lounge", "acoustic"],
      bestNights: ["Thursday", "Friday"],
      specials: ["Thursday social hour"],
      beerMax: 8,
      cocktailMax: 15,
      events: ["Thursday acoustic set"],
      desc: "Lower-chaos, more mature starter option for North Jersey."
    },
    {
      id: "fairview-social",
      name: "Fairview Social",
      city: "Fairview",
      zip: "07022",
      address: "255 Bergen Blvd, Fairview, NJ 07022",
      lat: 40.8162,
      lng: -73.9990,
      type: ["bar", "lounge"],
      crowd: "25–40+",
      crowdTags: ["20s", "30+", "singles"],
      music: ["reggaeton", "hip-hop", "dj"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Late-night specials"],
      beerMax: 8,
      cocktailMax: 15,
      events: ["Friday reggaeton night", "Saturday mixed DJ room"],
      desc: "Starter Fairview option for more energetic late-night crowds."
    },
    {
      id: "saddle-brook-tap",
      name: "Saddle Brook Tap",
      city: "Saddle Brook",
      zip: "07663",
      address: "150 Market St, Saddle Brook, NJ 07663",
      lat: 40.9042,
      lng: -74.0926,
      type: ["pub", "bar", "sports bar"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+"],
      music: ["rock", "top 40"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Beer buckets", "Game-night food deals"],
      beerMax: 8,
      cocktailMax: 13,
      events: ["Thursday crowd builder", "Saturday bar peak"],
      desc: "Casual Saddle Brook starter for lower-cost drinks and easier parking."
    },
    {
      id: "new-milford-lounge",
      name: "New Milford Lounge",
      city: "New Milford",
      zip: "07646",
      address: "185 Main St, New Milford, NJ 07646",
      lat: 40.9340,
      lng: -74.0205,
      type: ["lounge", "cocktail bar"],
      crowd: "30–45+",
      crowdTags: ["30+", "singles"],
      music: ["house", "lounge", "dj"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Craft cocktails"],
      beerMax: 9,
      cocktailMax: 16,
      events: ["Friday lounge set", "Saturday cocktail room"],
      desc: "Starter New Milford option for more polished, smaller-room nights."
    },
    {
      id: "lyndhurst-social",
      name: "Lyndhurst Social Club",
      city: "Lyndhurst",
      zip: "07071",
      address: "600 Ridge Rd, Lyndhurst, NJ 07071",
      lat: 40.8120,
      lng: -74.1243,
      type: ["bar", "restaurant", "live music"],
      crowd: "30–55+",
      crowdTags: ["30+", "40+", "mature crowd"],
      music: ["live music", "rock", "acoustic"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Friday music night"],
      beerMax: 8,
      cocktailMax: 14,
      events: ["Friday local band", "Saturday mature social room"],
      desc: "Starter Lyndhurst venue profile for more mature mixed crowds."
    },
    {
      id: "morristown-after-dark",
      name: "Morristown After Dark",
      city: "Morristown",
      zip: "07960",
      address: "10 South St, Morristown, NJ 07960",
      lat: 40.7968,
      lng: -74.4815,
      type: ["bar", "lounge", "restaurant"],
      crowd: "25–45+",
      crowdTags: ["20s", "30+", "singles"],
      music: ["house", "top 40", "dj"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Thursday bar specials", "Weekend cocktail crowd"],
      beerMax: 9,
      cocktailMax: 16,
      events: ["Thursday happy-hour run", "Saturday social peak"],
      desc: "Starter Morristown nightlife profile for busier suburban social scenes."
    },
    {
      id: "west-orange-view",
      name: "West Orange View Bar",
      city: "West Orange",
      zip: "07052",
      address: "1 Crest Dr, West Orange, NJ 07052",
      lat: 40.8066,
      lng: -74.2593,
      type: ["rooftop", "lounge", "restaurant"],
      crowd: "35–60+",
      crowdTags: ["30+", "40+", "50+", "mature crowd"],
      music: ["lounge", "acoustic"],
      bestNights: ["Friday", "Saturday"],
      specials: ["View-side cocktails"],
      beerMax: 10,
      cocktailMax: 18,
      events: ["Friday sunset room", "Saturday mature crowd"],
      desc: "Starter West Orange view-driven lounge for a nicer mature night out."
    },
    {
      id: "jc-pier-house",
      name: "JC Pier House",
      city: "Jersey City",
      zip: "07302",
      address: "90 Hudson St, Jersey City, NJ 07302",
      lat: 40.7197,
      lng: -74.0346,
      type: ["rooftop", "bar", "restaurant"],
      crowd: "25–40+",
      crowdTags: ["20s", "30+", "singles"],
      music: ["house", "dj", "top 40"],
      bestNights: ["Friday", "Saturday", "Sunday"],
      specials: ["Pier cocktails", "Weekend social crowd"],
      beerMax: 10,
      cocktailMax: 18,
      events: ["Friday social set", "Sunday day-drink crowd"],
      desc: "Starter Jersey City option for skyline views and social energy."
    }
  ];

  const DAYS = ["Tonight", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const CROWDS = ["All crowds", "20s", "30+", "40+", "50+", "Singles", "Mature crowd"];
  const VENUE_TYPES = ["All types", "Bar", "Lounge", "Club", "Restaurant", "Restaurant + dancing", "Rooftop", "Music venue", "Brunch"];
  const MUSIC_TYPES = ["Any music", "Live music", "DJ", "Rock", "Country", "Hip-hop", "House", "Reggaeton", "EDM", "Jazz", "Top 40"];
  const SPECIALS = ["Any extras", "Happy hour", "Cheap drinks", "Live music", "DJ night", "Singles vibe", "Mature crowd", "Brunch"];
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
  let lastSearchCenter = null;

  const els = {
    seedCities: document.getElementById("seedCities"),
    plannerResult: document.getElementById("plannerResult"),
    plannerSummary: document.getElementById("plannerSummary"),
    resultsCount: document.getElementById("resultsCount"),
    venueList: document.getElementById("venueList"),
    dayFilters: document.getElementById("dayFilters"),
    crowdFilters: document.getElementById("crowdFilters"),
    venueFilters: document.getElementById("venueFilters"),
    musicFilters: document.getElementById("musicFilters"),
    specialFilters: document.getElementById("specialFilters"),
    beerBudget: document.getElementById("beerBudget"),
    cocktailBudget: document.getElementById("cocktailBudget"),
    runSolo: document.getElementById("runSolo"),
    runMiddle: document.getElementById("runMiddle"),
    runGroup: document.getElementById("runGroup"),
    runAi: document.getElementById("runAi"),
    runFun: document.getElementById("runFun"),
    loadNj: document.getElementById("loadNj"),
    soloQuery: document.getElementById("soloQuery"),
    midA: document.getElementById("midA"),
    midB: document.getElementById("midB"),
    groupList: document.getElementById("groupList"),
    aiPrompt: document.getElementById("aiPrompt"),
    ratingTemplate: document.getElementById("ratingTemplate")
  };

  function setPlanner(text, summary = "Plan updated") {
    if (els.plannerResult) els.plannerResult.textContent = text;
    if (els.plannerSummary) els.plannerSummary.textContent = summary;
  }

  function moneyToNumber(value) {
    if (!value || value === "Any") return Infinity;
    return Number(value.replace("$", ""));
  }

  function slug(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  function ratingKey(venueId) {
    return `nightscout-rating-${venueId}`;
  }

  function saveRating(venueId, data) {
    localStorage.setItem(ratingKey(venueId), JSON.stringify(data));
  }

  function loadRating(venueId) {
    try {
      return JSON.parse(localStorage.getItem(ratingKey(venueId)) || "null");
    } catch {
      return null;
    }
  }

  function renderSeedCities() {
    if (!els.seedCities) return;
    els.seedCities.innerHTML = "";
    STARTER_CITIES.forEach((city) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "seed-chip";
      b.textContent = city;
      b.addEventListener("click", () => {
        if (els.soloQuery) els.soloQuery.value = city;
        runSolo();
      });
      els.seedCities.appendChild(b);
    });
  }

  function renderChipGroup(container, items, key) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (filters[key] === item ? " selected" : "");
      b.textContent = item;
      b.addEventListener("click", () => {
        filters[key] = item;
        renderResults();
      });
      container.appendChild(b);
    });
  }

  function setupSelect(select, key) {
    if (!select) return;
    select.innerHTML = "";
    PRICE_OPTIONS.forEach((opt) => {
      const o = document.createElement("option");
      o.value = opt;
      o.textContent = opt;
      select.appendChild(o);
    });
    select.value = filters[key];
    select.addEventListener("change", () => {
      filters[key] = select.value;
      renderResults();
    });
  }

  function normalizeType(type) {
    return type.toLowerCase();
  }

  function matchesVenueFilters(v) {
    if (filters.day !== "Tonight" && !v.bestNights.includes(filters.day)) return false;

    if (filters.crowd === "20s" && !v.crowdTags.includes("20s")) return false;
    if (filters.crowd === "30+" && !v.crowdTags.includes("30+")) return false;
    if (filters.crowd === "40+" && !v.crowdTags.includes("40+")) return false;
    if (filters.crowd === "50+" && !v.crowdTags.includes("50+")) return false;
    if (filters.crowd === "Singles" && !v.crowdTags.includes("singles")) return false;
    if (filters.crowd === "Mature crowd" && !v.crowdTags.includes("mature crowd")) return false;

    if (filters.venue !== "All types") {
      const selected = filters.venue.toLowerCase();
      const types = v.type.map(normalizeType);
      if (selected === "restaurant + dancing") {
        if (!(types.includes("restaurant") && (types.includes("lounge") || types.includes("bar") || types.includes("dj")))) return false;
      } else if (selected === "brunch") {
        if (!v.crowdTags.includes("brunch") && !v.specials.join(" ").toLowerCase().includes("brunch")) return false;
      } else if (!types.includes(selected)) {
        return false;
      }
    }

    if (filters.music !== "Any music") {
      const selected = filters.music.toLowerCase();
      const music = v.music.map((m) => m.toLowerCase());
      if (!music.includes(selected)) return false;
    }

    if (filters.extra !== "Any extras") {
      const hay = `${v.specials.join(" ")} ${v.events.join(" ")} ${v.crowdTags.join(" ")}`.toLowerCase();
      const extra = filters.extra.toLowerCase();
      if (extra === "cheap drinks" && !(v.beerMax <= 8 || v.cocktailMax <= 13)) return false;
      else if (!hay.includes(extra.replace(" vibe", ""))) return false;
    }

    if (v.beerMax > moneyToNumber(filters.beer)) return false;
    if (v.cocktailMax > moneyToNumber(filters.cocktail)) return false;

    return true;
  }

  function milesBetween(a, b) {
    if (!a || !b || typeof a.lat !== "number" || typeof b.lat !== "number") return null;
    const toRad = (n) => (n * Math.PI) / 180;
    const R = 3958.8;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const lat1 = toRad(a.lat);
    const lat2 = toRad(b.lat);
    const x =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }

  function nearbyBackups(venue, count = 3) {
    return VENUES
      .filter((v) => v.id !== venue.id)
      .map((v) => ({ ...v, dist: milesBetween(venue, v) }))
      .filter((v) => v.dist !== null)
      .sort((a, b) => a.dist - b.dist)
      .slice(0, count);
  }

  function renderRatingBox(venue) {
    const stored = loadRating(venue.id);
    const wrapper = document.createElement("div");
    wrapper.className = "rating-box";

    const label = document.createElement("label");
    label.textContent = "Rate this venue";
    wrapper.appendChild(label);

    const select = document.createElement("select");
    select.className = "rating-select";
    ["", "Loved it", "Good", "Just okay", "Would not go back"].forEach((val) => {
      const o = document.createElement("option");
      o.value = val;
      o.textContent = val || "Select rating";
      select.appendChild(o);
    });
    select.value = stored?.rating || "";
    wrapper.appendChild(select);

    const note = document.createElement("textarea");
    note.className = "rating-note";
    note.rows = 2;
    note.placeholder = "Crowd attractive? Too many guys? Not enough women? Worth it?";
    note.value = stored?.note || "";
    wrapper.appendChild(note);

    const save = document.createElement("button");
    save.type = "button";
    save.className = "save-rating";
    save.textContent = "Save note";
    save.addEventListener("click", () => {
      saveRating(venue.id, {
        rating: select.value,
        note: note.value.trim(),
        updatedAt: new Date().toISOString()
      });
      save.textContent = "Saved";
      setTimeout(() => {
        save.textContent = "Save note";
      }, 1200);
    });
    wrapper.appendChild(save);

    if (stored?.updatedAt) {
      const saved = document.createElement("div");
      saved.className = "small-note";
      saved.textContent = `Saved note on ${new Date(stored.updatedAt).toLocaleString()}`;
      wrapper.appendChild(saved);
    }

    return wrapper;
  }

  function venueCard(venue) {
    const card = document.createElement("article");
    card.className = "venue-card";

    const top = document.createElement("div");
    top.className = "venue-top";
    top.innerHTML = `
      <div>
        <h3 class="venue-title">${venue.name}</h3>
        <div class="address">${venue.city} • ${venue.address}</div>
      </div>
      <div class="status">${venue.source === "google" ? "Live" : "Starter"}</div>
    `;
    card.appendChild(top);

    const info = document.createElement("div");
    info.className = "info-grid";
    info.innerHTML = `
      <div class="info"><div class="label">Best nights</div><div class="value">${venue.bestNights.join(", ")}</div></div>
      <div class="info"><div class="label">Crowd age</div><div class="value">${venue.crowd}</div></div>
      <div class="info"><div class="label">Music</div><div class="value">${venue.music.join(", ")}</div></div>
      <div class="info"><div class="label">Typical prices</div><div class="value">Beer up to $${venue.beerMax} • Cocktails up to $${venue.cocktailMax}</div></div>
      <div class="info"><div class="label">Venue type</div><div class="value">${venue.type.join(", ")}</div></div>
      <div class="info"><div class="label">Specials</div><div class="value">${venue.specials.join(" • ")}</div></div>
    `;
    card.appendChild(info);

    const desc = document.createElement("div");
    desc.className = "description";
    desc.textContent = venue.desc;
    card.appendChild(desc);

    const eventBox = document.createElement("div");
    eventBox.className = "event-box";
    eventBox.innerHTML = `
      <h4>Events / notes</h4>
      <ul class="event-list">
        ${venue.events.map((e) => `<li>${e}</li>`).join("")}
      </ul>
    `;
    card.appendChild(eventBox);

    const backup = nearbyBackups(venue, 3);
    if (backup.length) {
      const backupBox = document.createElement("div");
      backupBox.className = "backup-box";
      backupBox.innerHTML = `
        <h4>Nearby backups</h4>
        <ul class="event-list">
          ${backup.map((b) => `<li>${b.name} — ${b.city} (${b.dist.toFixed(1)} mi)</li>`).join("")}
        </ul>
      `;
      card.appendChild(backupBox);
    }

    card.appendChild(renderRatingBox(venue));

    const actionRow = document.createElement("div");
    actionRow.className = "action-row";

    const mapBtn = document.createElement("button");
    mapBtn.type = "button";
    mapBtn.textContent = "Directions";
    mapBtn.addEventListener("click", () => {
      const q = encodeURIComponent(`${venue.name} ${venue.address}`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, "_blank");
    });

    const menuBtn = document.createElement("button");
    menuBtn.type = "button";
    menuBtn.textContent = "Search";
    menuBtn.addEventListener("click", () => {
      const q = encodeURIComponent(`${venue.name} ${venue.city} nightlife`);
      window.open(`https://www.google.com/search?q=${q}`, "_blank");
    });

    const photoBtn = document.createElement("button");
    photoBtn.type = "button";
    photoBtn.textContent = "Photos";
    photoBtn.addEventListener("click", () => {
      const q = encodeURIComponent(`${venue.name} ${venue.city} photos`);
      window.open(`https://www.google.com/search?tbm=isch&q=${q}`, "_blank");
    });

    const shareBtn = document.createElement("button");
    shareBtn.type = "button";
    shareBtn.textContent = "Share";
    shareBtn.addEventListener("click", async () => {
      const text = `${venue.name} — ${venue.address}`;
      if (navigator.share) {
        try {
          await navigator.share({ title: venue.name, text });
        } catch {}
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        shareBtn.textContent = "Copied";
        setTimeout(() => (shareBtn.textContent = "Share"), 1200);
      }
    });

    actionRow.append(mapBtn, menuBtn, photoBtn, shareBtn);
    card.appendChild(actionRow);

    return card;
  }

  function renderResults() {
    const filtered = activeVenues.filter(matchesVenueFilters);
    if (els.resultsCount) {
      els.resultsCount.textContent = `${filtered.length} venue ${filtered.length === 1 ? "match" : "matches"}`;
    }
    if (els.venueList) {
      els.venueList.innerHTML = "";
      filtered.forEach((venue) => els.venueList.appendChild(venueCard(venue)));
    }
  }

  function renderFilters() {
    renderChipGroup(els.dayFilters, DAYS, "day");
    renderChipGroup(els.crowdFilters, CROWDS, "crowd");
    renderChipGroup(els.venueFilters, VENUE_TYPES, "venue");
    renderChipGroup(els.musicFilters, MUSIC_TYPES, "music");
    renderChipGroup(els.specialFilters, SPECIALS, "extra");
    setupSelect(els.beerBudget, "beer");
    setupSelect(els.cocktailBudget, "cocktail");
  }

  function setMode(mode) {
    document.querySelectorAll(".mode").forEach((b) => {
      b.classList.toggle("active", b.dataset.mode === mode);
    });
    document.querySelectorAll(".mode-panel").forEach((p) => {
      p.classList.toggle("active", p.id === `${mode}-mode`);
    });
  }

  document.querySelectorAll(".mode").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  function lookupStarterMatch(query) {
    const q = query.toLowerCase();
    return VENUES.filter((v) =>
      `${v.city} ${v.zip} ${v.address} ${v.name}`.toLowerCase().includes(q)
    );
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
          address,
          lat: loc.lat(),
          lng: loc.lng(),
          formatted: results[0].formatted_address
        });
      });
    });
  }

  function nearbyPlaces(center, radiusMeters = 5000) {
    return new Promise((resolve, reject) => {
      if (!window.google || !google.maps || !google.maps.places) {
        reject(new Error("Google Places unavailable"));
        return;
      }
      const map = new google.maps.Map(document.createElement("div"));
      const service = new google.maps.places.PlacesService(map);

      service.nearbySearch(
        {
          location: new google.maps.LatLng(center.lat, center.lng),
          radius: radiusMeters,
          keyword: "bar lounge nightclub live music cocktail brunch dj restaurant",
          type: "bar"
        },
        (results, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
            reject(new Error("No nearby places found"));
            return;
          }

          const mapped = results.slice(0, 12).map((p) => ({
            id: slug(`${p.name}-${p.place_id}`),
            name: p.name || "Unknown venue",
            city: center.formatted || "Search area",
            zip: "",
            address: p.vicinity || "Google Places result",
            lat: p.geometry?.location?.lat?.() ?? center.lat,
            lng: p.geometry?.location?.lng?.() ?? center.lng,
            type: ["bar", "lounge"],
            crowd: "Mixed",
            crowdTags: ["20s", "30+", "40+"],
            music: ["dj", "top 40", "house"],
            bestNights: ["Thursday", "Friday", "Saturday"],
            specials: ["Check live venue pages"],
            beerMax: 10,
            cocktailMax: 16,
            events: ["Live Google Places match", "Check social pages for specials/events"],
            desc: p.vicinity || "Live venue result from Google Places.",
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
      setPlanner('Enter a ZIP, city, address, or "near me".', "Need a search location");
      return;
    }

    setPlanner(`Searching nightlife around "${query}"...`, "Running solo search");

    const starter = lookupStarterMatch(query);
    if (starter.length) {
      activeVenues = starter;
      lastSearchCenter = starter[0];
      renderResults();
      setPlanner(`Starter data matched ${starter.length} venue(s) near "${query}".`, "Starter city match");
      return;
    }

    try {
      const center = await geocodeAddress(query);
      lastSearchCenter = center;
      const live = await nearbyPlaces(center, 6000);
      activeVenues = live.length ? live : [...VENUES];
      renderResults();
      setPlanner(`Found live venues near "${center.formatted}".`, "Live solo search complete");
    } catch (err) {
      activeVenues = [...VENUES];
      renderResults();
      setPlanner(`Google search did not complete for "${query}". Showing starter NJ venues instead.`, "Starter fallback");
    }
  }

  async function runMiddle() {
    const a = els.midA?.value?.trim();
    const b = els.midB?.value?.trim();
    if (!a || !b) {
      setPlanner("Enter both your location and your friend's location.", "Need two locations");
      return;
    }

    setPlanner(`Calculating the middle spot between "${a}" and "${b}"...`, "Meet-in-the-middle running");

    try {
      const [locA, locB] = await Promise.all([geocodeAddress(a), geocodeAddress(b)]);
      const middle = {
        lat: (locA.lat + locB.lat) / 2,
        lng: (locA.lng + locB.lng) / 2,
        formatted: `Middle area between ${locA.formatted} and ${locB.formatted}`
      };
      lastSearchCenter = middle;
      const live = await nearbyPlaces(middle, 7000);
      activeVenues = live.length ? live : [...VENUES];
      renderResults();
      setPlanner(
        `Middle zone found. Showing nightlife options near the midpoint between ${locA.formatted} and ${locB.formatted}.`,
        "Middle spot ready"
      );
      setMode("solo");
    } catch (err) {
      activeVenues = [...VENUES];
      renderResults();
      setPlanner("Could not calculate the middle spot with Google right now. Showing starter venues instead.", "Starter fallback");
    }
  }

  async function runGroup() {
    const lines = (els.groupList?.value || "")
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 10);

    if (lines.length < 2) {
      setPlanner("Enter at least 2 group locations.", "Need more group locations");
      return;
    }

    setPlanner(`Triangulating ${lines.length} group locations...`, "Group plan running");

    try {
      const geocoded = await Promise.all(lines.map((line) => geocodeAddress(line)));
      const avgLat = geocoded.reduce((sum, x) => sum + x.lat, 0) / geocoded.length;
      const avgLng = geocoded.reduce((sum, x) => sum + x.lng, 0) / geocoded.length;
      const center = {
        lat: avgLat,
        lng: avgLng,
        formatted: `Best central zone for ${geocoded.length} people`
      };
      lastSearchCenter = center;
      const live = await nearbyPlaces(center, 8000);
      activeVenues = live.length ? live : [...VENUES];
      renderResults();
      setPlanner(
        `Built a central meetup zone for ${geocoded.length} people and surfaced nightlife nearby.`,
        "Group center ready"
      );
      setMode("solo");
    } catch (err) {
      activeVenues = [...VENUES];
      renderResults();
      setPlanner("Could not triangulate the group with Google right now. Showing starter venues instead.", "Starter fallback");
    }
  }

  function runAi() {
    const prompt = (els.aiPrompt?.value || "").trim();
    if (!prompt) {
      setPlanner("Ask for a vibe, crowd, price, music style, or area.", "Need an AI prompt");
      return;
    }

    const p = prompt.toLowerCase();

    if (p.includes("40")) filters.crowd = "40+";
    else if (p.includes("50")) filters.crowd = "50+";
    else if (p.includes("30")) filters.crowd = "30+";
    else if (p.includes("20")) filters.crowd = "20s";

    if (p.includes("hip-hop")) filters.music = "Hip-hop";
    else if (p.includes("reggaeton")) filters.music = "Reggaeton";
    else if (p.includes("house")) filters.music = "House";
    else if (p.includes("edm")) filters.music = "EDM";
    else if (p.includes("country")) filters.music = "Country";
    else if (p.includes("jazz")) filters.music = "Jazz";
    else if (p.includes("live music")) filters.music = "Live music";
    else if (p.includes("dj")) filters.music = "DJ";

    if (p.includes("rooftop")) filters.venue = "Rooftop";
    else if (p.includes("lounge")) filters.venue = "Lounge";
    else if (p.includes("bar")) filters.venue = "Bar";
    else if (p.includes("restaurant")) filters.venue = "Restaurant";
    else if (p.includes("music venue")) filters.venue = "Music venue";
    else if (p.includes("brunch")) filters.venue = "Brunch";

    const beerMatch = p.match(/beer.*?\$?(\d{1,2})/);
    const cocktailMatch = p.match(/cocktail.*?\$?(\d{1,2})/);

    if (beerMatch) filters.beer = `$${beerMatch[1]}`;
    if (cocktailMatch) filters.cocktail = `$${cocktailMatch[1]}`;

    renderFilters();
    renderResults();
    setPlanner(`AI plan built from: "${prompt}". Filters were updated to match that vibe.`, "AI plan ready");
    setMode("solo");
  }

  function runFun() {
    const pool = activeVenues.filter(matchesVenueFilters);
    const source = pool.length ? pool : VENUES;
    const pick = source[Math.floor(Math.random() * source.length)];
    activeVenues = [pick];
    renderResults();
    setPlanner(`Surprise pick: ${pick.name} in ${pick.city}. Try it, and rate it after you go.`, "Surprise pick");
    setMode("solo");
  }

  function loadAllStarterCities() {
    activeVenues = [...VENUES];
    renderResults();
    setPlanner("Loaded all starter NJ nightlife cities and venues.", "Starter coverage loaded");
    setMode("solo");
  }

  els.runSolo?.addEventListener("click", runSolo);
  els.runMiddle?.addEventListener("click", runMiddle);
  els.runGroup?.addEventListener("click", runGroup);
  els.runAi?.addEventListener("click", runAi);
  els.runFun?.addEventListener("click", runFun);
  els.loadNj?.addEventListener("click", loadAllStarterCities);

  renderSeedCities();
  renderFilters();
  renderResults();
  setPlanner("NightScout V4 loaded. Pick a mode and start building the night.", "Choose a mode above.");
});
