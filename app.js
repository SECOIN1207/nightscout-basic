document.addEventListener("DOMContentLoaded", () => {
  const STARTER_CITIES = [
    "Jersey City NJ","Hoboken NJ","Weehawken NJ","Fort Lee NJ","Glen Rock NJ",
    "Fairview NJ","Hackensack NJ","Saddle Brook NJ","New Milford NJ","Lyndhurst NJ",
    "Totowa NJ","Montclair NJ","Morristown NJ","West Orange NJ"
  ];

  const VENUES = [
    {
      id: "grand-vin",
      name: "Grand Vin",
      city: "Hoboken",
      zip: "07030",
      address: "500 Grand St, Hoboken, NJ 07030",
      lat: 40.7486, lng: -74.0324,
      type: ["lounge", "restaurant", "live music"],
      crowd: "35–55+",
      crowdTags: ["30+", "40+", "mature crowd", "singles"],
      music: ["live music", "jazz", "acoustic"],
      bestNights: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      specials: ["Happy hour 5–7 PM", "Wine deals", "Live music Tue–Sat"],
      beerMax: 9, cocktailMax: 16,
      events: ["Tuesday jazz trio", "Thursday wine special", "Saturday live music"],
      desc: "Polished Hoboken pick with a stronger 30+ to 50+ crowd and safer grown-up vibe."
    },
    {
      id: "bar-franco",
      name: "Bar Franco",
      city: "Montclair",
      zip: "07042",
      address: "5 Church St, Montclair, NJ 07042",
      lat: 40.8177, lng: -74.2102,
      type: ["lounge", "cocktail bar"],
      crowd: "30–45+",
      crowdTags: ["30+", "singles"],
      music: ["house", "dj", "lounge"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Date-night vibe", "Select half-price cocktails"],
      beerMax: 10, cocktailMax: 17,
      events: ["Friday lounge DJ", "Saturday late cocktail crowd"],
      desc: "Stylish Montclair cocktail lounge with polished crowd energy and strong weekend appeal."
    },
    {
      id: "mcgoverns",
      name: "McGovern's Tavern",
      city: "Newark",
      zip: "07102",
      address: "58 New St, Newark, NJ 07102",
      lat: 40.7369, lng: -74.1706,
      type: ["pub", "irish bar", "restaurant"],
      crowd: "30–60+",
      crowdTags: ["30+", "40+", "50+", "mature crowd"],
      music: ["live music", "rock", "irish music"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Classic pub pours", "Occasional live sets"],
      beerMax: 8, cocktailMax: 13,
      events: ["Friday band night", "Saturday neighborhood crowd peak"],
      desc: "Historic Newark tavern with cheaper drinks, mature crowd, and classic pub energy."
    },
    {
      id: "vanguard",
      name: "The Vanguard",
      city: "Harrison",
      zip: "07029",
      address: "1 Park Ave, Harrison, NJ 07029",
      lat: 40.7444, lng: -74.1569,
      type: ["rooftop", "restaurant", "lounge"],
      crowd: "25–40+",
      crowdTags: ["30+", "singles", "brunch"],
      music: ["house", "dj", "top 40"],
      bestNights: ["Friday", "Saturday", "Sunday"],
      specials: ["Rooftop cocktails", "Brunch specials"],
      beerMax: 10, cocktailMax: 18,
      events: ["Sunday brunch crowd", "Friday rooftop DJ"],
      desc: "Modern rooftop social spot for brunch, cocktails, and upbeat lounge energy."
    },
    {
      id: "finnegans",
      name: "Finnegan's Pub",
      city: "Hoboken",
      zip: "07030",
      address: "734 Willow Ave, Hoboken, NJ 07030",
      lat: 40.7517, lng: -74.0333,
      type: ["pub", "live music"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+"],
      music: ["live music", "rock"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Weekend live bands"],
      beerMax: 9, cocktailMax: 14,
      events: ["Friday cover band", "Saturday rock set"],
      desc: "Classic live-music pub with a broader grown-up crowd and easier vibe."
    },
    {
      id: "mills-tavern",
      name: "Mills Tavern",
      city: "Hoboken",
      zip: "07030",
      address: "125 Washington St, Hoboken, NJ 07030",
      lat: 40.7398, lng: -74.0306,
      type: ["restaurant", "cocktail bar", "lounge"],
      crowd: "30–45+",
      crowdTags: ["30+", "singles", "dinner"],
      music: ["dj", "top 40"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Dinner + cocktails", "Late-night bar crowd"],
      beerMax: 10, cocktailMax: 18,
      events: ["Friday dinner-to-drinks flow", "Saturday late crowd"],
      desc: "Good crossover pick when you want dinner first and nightlife after."
    },
    {
      id: "hudson-view",
      name: "Hudson View Lounge",
      city: "Weehawken",
      zip: "07086",
      address: "1200 Harbor Blvd, Weehawken, NJ 07086",
      lat: 40.7718, lng: -74.0153,
      type: ["lounge", "rooftop"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+", "mature crowd"],
      music: ["house", "lounge", "dj"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Skyline cocktail hour"],
      beerMax: 11, cocktailMax: 19,
      events: ["Friday skyline DJ", "Saturday cocktail crowd"],
      desc: "Scenic-style lounge profile for skyline drinks and older social energy."
    },
    {
      id: "fort-lee-social",
      name: "Fort Lee Social",
      city: "Fort Lee",
      zip: "07024",
      address: "204 Main St, Fort Lee, NJ 07024",
      lat: 40.8509, lng: -73.9701,
      type: ["bar", "lounge", "restaurant"],
      crowd: "30–45+",
      crowdTags: ["30+", "singles"],
      music: ["hip-hop", "house", "dj"],
      bestNights: ["Thursday", "Friday", "Saturday"],
      specials: ["Thursday DJ happy hour", "Late-night cocktails"],
      beerMax: 10, cocktailMax: 16,
      events: ["Thursday after-work social", "Saturday lounge crowd"],
      desc: "Flexible bar-lounge crossover for bridge-side meetups."
    },
    {
      id: "hackensack-live-room",
      name: "Hackensack Live Room",
      city: "Hackensack",
      zip: "07601",
      address: "55 Main St, Hackensack, NJ 07601",
      lat: 40.8862, lng: -74.0435,
      type: ["music venue", "bar", "live music"],
      crowd: "25–45+",
      crowdTags: ["20s", "30+", "40+"],
      music: ["live music", "rock", "country", "edm"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Show-night drink bundles"],
      beerMax: 9, cocktailMax: 15,
      events: ["Friday live band schedule", "Saturday rotating event nights"],
      desc: "Good starter profile for people who care about the music first."
    },
    {
      id: "totowa-night-hub",
      name: "Totowa Night Hub",
      city: "Totowa",
      zip: "07512",
      address: "650 Union Blvd, Totowa, NJ 07512",
      lat: 40.9052, lng: -74.2238,
      type: ["bar", "restaurant", "dj"],
      crowd: "30–50+",
      crowdTags: ["30+", "40+"],
      music: ["top 40", "house", "dj"],
      bestNights: ["Friday", "Saturday"],
      specials: ["Friday cocktail special", "Saturday social room"],
      beerMax: 8, cocktailMax: 14,
      events: ["Friday crowd builder", "Saturday social night"],
      desc: "Starter Totowa option for a flexible social night without huge travel."
    }
  ];

  const DAYS = ["Tonight", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const CROWDS = ["All crowds", "20s", "30+", "40+", "50+", "Singles", "Mature crowd"];
  const VENUE_TYPES = ["All types", "Bar", "Lounge", "Club", "Restaurant", "Restaurant + dancing", "Rooftop", "Music venue", "Brunch"];
  const MUSIC_TYPES = ["Any music", "Live music", "DJ", "Rock", "Country", "Hip-hop", "House", "Reggaeton", "EDM", "Jazz", "Top 40"];
  const EXTRAS = ["Any extras", "Happy hour", "Cheap drinks", "Live music", "DJ night", "Singles vibe", "Mature crowd", "Brunch"];
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

  const $ = (id) => document.getElementById(id);

  const els = {
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
    runFun: $("runFun"),
    loadNj: $("loadNj"),
    soloQuery: $("soloQuery"),
    midA: $("midA"),
    midB: $("midB"),
    groupList: $("groupList"),
    aiPrompt: $("aiPrompt")
  };

  function setPlanner(text, summary = "Plan updated") {
    if (els.plannerResult) els.plannerResult.textContent = text;
    if (els.plannerSummary) els.plannerSummary.textContent = summary;
  }

  function setMode(mode) {
    document.querySelectorAll(".mode").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });
    document.querySelectorAll(".mode-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `${mode}-mode`);
    });
  }

  function moneyToNumber(value) {
    return value === "Any" ? Infinity : Number(value.replace("$", ""));
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
        renderResults();
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
      renderResults();
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
      const selected = filters.venue.toLowerCase();
      const types = v.type.map((t) => t.toLowerCase());
      if (selected === "restaurant + dancing") {
        if (!(types.includes("restaurant") && (types.includes("lounge") || types.includes("bar") || types.includes("dj")))) return false;
      } else if (selected === "brunch") {
        if (!v.specials.join(" ").toLowerCase().includes("brunch")) return false;
      } else if (!types.includes(selected)) {
        return false;
      }
    }

    if (filters.music !== "Any music") {
      const selected = filters.music.toLowerCase();
      if (!v.music.map((m) => m.toLowerCase()).includes(selected)) return false;
    }

    if (filters.extra !== "Any extras") {
      const extraText = `${v.specials.join(" ")} ${v.events.join(" ")} ${v.crowdTags.join(" ")}`.toLowerCase();
      const extra = filters.extra.toLowerCase();
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
        <button type="button" data-search="${encodeURIComponent(v.name + " " + v.city + " nightlife")}">Search</button>
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

  function renderResults() {
    const filtered = activeVenues.filter(venueMatches);

    if (filtered.length === 0 && activeVenues.length > 0) {
      if (els.resultsCount) els.resultsCount.textContent = "0 venue matches";
      if (els.venueList) els.venueList.innerHTML = "";
      setPlanner(
        "No venues matched the current combo. Try raising beer/cocktail max, changing crowd, or switching music/venue type.",
        "No matches"
      );
      return;
    }

    if (els.resultsCount) els.resultsCount.textContent = `${filtered.length} venue ${filtered.length === 1 ? "match" : "matches"}`;
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
    renderChipGroup(els.specialFilters, EXTRAS, "extra");
    renderSelect(els.beerBudget, "beer");
    renderSelect(els.cocktailBudget, "cocktail");
  }

  function lookupStarterMatches(query) {
    const q = query.toLowerCase();
    return VENUES.filter((v) =>
      `${v.name} ${v.city} ${v.zip} ${v.address}`.toLowerCase().includes(q)
    );
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
    { city: "New Milford", lat: 40.9351, lng: -74.0201 },
    { city: "Glen Rock", lat: 40.9629, lng: -74.1329 }
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

function nearbyPlaces(center, radiusMeters = 7000) {
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
        if (status !== google.maps.places.PlacesServiceStatus.OK || !results?.length) {
          reject(new Error("No nearby places found"));
          return;
        }

        resolve(
          results.slice(0, 12).map((p) => ({
            id: `${p.place_id}`,
            name: p.name || "Unknown venue",
            city: center.formatted || "Search area",
            zip: "",
            address: p.vicinity || "Google result",
            lat: p.geometry?.location?.lat?.() ?? center.lat,
            lng: p.geometry?.location?.lng?.() ?? center.lng,
            type: ["bar", "lounge"],
            crowd: "Mixed",
            crowdTags: ["20s", "30+", "40+"],
            music: ["dj", "top 40", "house"],
            bestNights: ["Thursday", "Friday", "Saturday"],
            specials: ["Check venue socials", "Check live specials"],
            beerMax: 10,
            cocktailMax: 16,
            events: ["Live Google result", "Check social pages for current event info"],
            desc: p.vicinity || "Live venue result from Google Places.",
            source: "google"
          }))
        );
      }
    );
  });
}
    const query = els.soloQuery?.value?.trim();
    if (!query) {
      setPlanner('Enter a ZIP, city, or address.', "Need a search");
      return;
    }

    setPlanner(`Searching nightlife around "${query}"...`, "Solo search running");

    const starter = lookupStarterMatches(query);
    if (starter.length) {
      activeVenues = starter;
      renderResults();
      setPlanner(`Found ${starter.length} starter venue match(es) around "${query}".`, "Starter match");
      return;
    }

    try {
      const center = await geocodeAddress(query);
      const live = await nearbyPlaces(center, 7000);
      activeVenues = live;
      renderResults();
      setPlanner(`Found live venues around "${center.formatted}".`, "Live search complete");
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
    setPlanner("Enter both addresses or ZIPs first.", "Need two locations");
    return;
  }

  setPlanner(
    `Calculating the middle spot between "${a}" and "${b}"...`,
    "Middle search running"
  );

  try {
    const [locA, locB] = await Promise.all([
      geocodeAddress(a),
      geocodeAddress(b)
    ]);

    const rawMidLat = (locA.lat + locB.lat) / 2;
    const rawMidLng = (locA.lng + locB.lng) / 2;

    const bestZone = findClosestStarterZone(rawMidLat, rawMidLng);

    if (!bestZone) {
      throw new Error("No usable middle zone found");
    }

    const live = await nearbyPlaces(
      {
        lat: bestZone.lat,
        lng: bestZone.lng,
        formatted: `${bestZone.city}, NJ`
      },
      8000
    );

    if (live.length) {
      activeVenues = live;
    } else {
      activeVenues = VENUES.filter(
        (v) => v.city.toLowerCase() === bestZone.city.toLowerCase()
      );

      if (!activeVenues.length) {
        activeVenues = [...VENUES];
      }
    }

    renderResults();

    setPlanner(
      `Best meetup zone between ${locA.formatted} and ${locB.formatted}: ${bestZone.city}, NJ. Showing venues near that area based on your filters.`,
      `Middle zone: ${bestZone.city}`
    );

    setMode("solo");
  } catch (err) {
    console.error("runMiddle error:", err);
    activeVenues = [...VENUES];
    renderResults();
    setPlanner(
      "Meet-in-the-middle could not fully calculate right now. Showing starter venues instead.",
      "Fallback results"
    );
    setMode("solo");
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

    setPlanner(`Triangulating ${lines.length} group locations...`, "Group search running");

    try {
      const geocoded = await Promise.all(lines.map(geocodeAddress));
      const center = {
        lat: geocoded.reduce((sum, x) => sum + x.lat, 0) / geocoded.length,
        lng: geocoded.reduce((sum, x) => sum + x.lng, 0) / geocoded.length,
        formatted: `Central meetup area for ${geocoded.length} people`
      };
      const live = await nearbyPlaces(center, 9000);
      activeVenues = live.length ? live : [...VENUES];
      renderResults();
      setPlanner(`Built a central meetup zone for ${geocoded.length} people and found nearby venues.`, "Group center ready");
      setMode("solo");
    } catch (err) {
      activeVenues = [...VENUES];
      renderResults();
      setPlanner("Group midpoint search hit a Google issue. Showing starter venues instead.", "Fallback results");
      setMode("solo");
    }
  }

  function runAi() {
    const prompt = (els.aiPrompt?.value || "").trim();
    if (!prompt) {
      setPlanner("Ask NightScout AI for a crowd, music, price, and area.", "Need a prompt");
      return;
    }

    const p = prompt.toLowerCase();

    filters.crowd = p.includes("50") ? "50+" : p.includes("40") ? "40+" : p.includes("30") ? "30+" : p.includes("20") ? "20s" : "All crowds";
    filters.music =
      p.includes("hip-hop") ? "Hip-hop" :
      p.includes("reggaeton") ? "Reggaeton" :
      p.includes("house") ? "House" :
      p.includes("edm") ? "EDM" :
      p.includes("country") ? "Country" :
      p.includes("jazz") ? "Jazz" :
      p.includes("live music") ? "Live music" :
      p.includes("dj") ? "DJ" : "Any music";

    filters.venue =
      p.includes("rooftop") ? "Rooftop" :
      p.includes("lounge") ? "Lounge" :
      p.includes("bar") ? "Bar" :
      p.includes("restaurant") ? "Restaurant" :
      p.includes("music venue") ? "Music venue" :
      p.includes("brunch") ? "Brunch" : "All types";

    if (p.includes("single")) filters.extra = "Singles vibe";
    else if (p.includes("mature")) filters.extra = "Mature crowd";
    else if (p.includes("happy hour")) filters.extra = "Happy hour";
    else filters.extra = "Any extras";

    const beerMatch = p.match(/beer[^0-9]*\$?(\d{1,2})/);
    const cocktailMatch = p.match(/cocktail[^0-9]*\$?(\d{1,2})/);
    filters.beer = beerMatch ? `$${beerMatch[1]}` : "Any";
    filters.cocktail = cocktailMatch ? `$${cocktailMatch[1]}` : "Any";

    renderFilters();
    renderResults();
    setPlanner(`AI plan built from: "${prompt}". Filters were updated to match that vibe.`, "AI plan ready");
    setMode("solo");
  }

  function runFun() {
    const pool = activeVenues.filter(venueMatches);
    const pickFrom = pool.length ? pool : VENUES;
    const pick = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    activeVenues = [pick];
    renderResults();
    setPlanner(`Surprise pick: ${pick.name} in ${pick.city}.`, "Surprise mode");
    setMode("solo");
  }

  function loadAllStarterCities() {
    activeVenues = [...VENUES];
    renderResults();
    setPlanner("Loaded all starter NJ venues.", "Starter venues loaded");
    setMode("solo");
  }

  els.runSolo?.addEventListener("click", runSolo);
  els.runMiddle?.addEventListener("click", runMiddle);
  els.runGroup?.addEventListener("click", runGroup);
  els.runAi?.addEventListener("click", runAi);
  els.runFun?.addEventListener("click", runFun);
  els.loadNj?.addEventListener("click", loadAllStarterCities);

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

  document.querySelectorAll(".mode").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  renderSeedCities();
  renderFilters();
  renderResults();
  setPlanner("NightScout V4 loaded. Pick a mode and start building the night.", "Choose a mode above.");
});
