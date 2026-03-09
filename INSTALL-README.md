# NightScout NJ Upgrade Pack

This pack gives you a simpler V2-style structure for NightScout while keeping the high-value features you asked for.

## Included in this pack
- `nightscout-nj-upgrade.js`
  - "What are you looking for tonight?" question bar
  - FUN button label config
  - NJ vibe filters
  - crowd age filters
  - music filters
  - beer/cocktail max-price filters
  - simple suggestion rotation helper
- `nightscout-backend-plan.json`
  - backend feature list for Google + search limits + signals layer
- `INSTALL-README.md`
  - exact steps to wire this into GitHub
- `social-signals-notes.md`
  - realistic plan for venue specials / events signals

## IMPORTANT
This front-end file does not automatically search all social media.
That part must be handled by a backend and official API-approved sources or venue-submitted feeds.

## Add this file to your GitHub repo
Upload:
- `nightscout-nj-upgrade.js`

Then in `index.html`, add this near the bottom, under your other script tags:

```html
<script src="nightscout-nj-upgrade.js"></script>
```

## Add these placeholder containers to your page
Put these where you want them to appear:

```html
<div id="nightscout-question-bar"></div>
<div id="nightscout-price-filters"></div>
```

## Recommended next backend
For the Google-connected backend, use:
- Geocoding API
- Places API (New)
- Place Details (New)

And keep NJ scope first.