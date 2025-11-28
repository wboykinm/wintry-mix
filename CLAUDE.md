# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wintry Mix is a collection of holiday season music mixtapes dating back to 2015, hosted at https://awintrymix.net. Each year has its own standalone audio player implementation featuring custom cassette-tape-style UI.

## Architecture

### Directory Structure

The project follows a year-based organization:
- Root `index.html` - Landing page that displays cassette shelf with all years (2015-present)
- `YYYY/` directories (2015-2024) - Legacy players with `index.html`, `bbplayer.js`, and `mixtape.css`
- `2025/` directory - Modern player with modular architecture

### Player Evolution

**Legacy Player (2015-2024):**
- Single-file `bbplayer.js` with self-contained BBPlayer object
- jQuery-based track loading from Google Sheets API
- Uses HTML5 `<audio>` with `<source>` elements for tracks
- Custom icon font for player controls
- Background images blend with cassette tape imagery

**Modern Player (2025+):**
- Split into modular components: `nextPlayer.js` (controls), `nextTracks.js` (data)
- Tracks defined as JavaScript array with Dropbox URLs
- Skeuomorphic cassette design with realistic styling
- CSS-animated cassette reels that spin during playback
- Handwriting font for active track display
- No external dependencies (vanilla JS)

### Data Source Pattern

**2024 and earlier years:**
```javascript
var mixUrl = 'https://sheets.googleapis.com/v4/spreadsheets/.../values/YYYY?key=...'
$.getJSON(mixUrl, function(data) {
  records = data.values
  // Builds tracklist and audio sources from spreadsheet
})
```

**Important:** The Google Sheets API is locked to the awintrymix.net domain and will 403 during local testing.

**2025+ directories:**
```javascript
const tracks = [
  { order: 1, artist: "...", song: "...", url: "https://www.dropbox.com/...?dl=1" }
]
```

### Player Components

**BBPlayer Object (legacy):**
- `loadSources()` - Parses `<source>` tags into playlist
- `loadTrack(trackNumber)` - Sets current audio source
- `loadNext()`/`loadPrevious()` - Navigation
- `updateDisplay()` - Syncs UI with playback state
- `setAudioEventHandlers()` - HTML5 audio event listeners
- `setClickHandlers()` - Control button events

**Key Features:**
- Multiple players per page supported via `bbplayers` array
- Auto-pause other players when starting playback
- Loop support (hijacks native loop attribute for custom handling)
- File type detection via `canPlay()` method

## Common Development Tasks

### Creating a New Year's Mix (Modern Player)

1. Copy the most recent modern year directory (e.g., `cp -r 2025 2026`)
2. Add new background image as `snow2026.jpg`
3. Generate social image: `node generate-social-image.js 2026`
4. Update `index.html`:
   - Meta tags (title, OG tags, year references)
   - Footer links if needed
5. Update `nextTracks.js`:
   - Track list title year
   - Track data array
6. Update `nextTape.css` if needed:
   - Background image reference: `url(snow2026.jpg)`

The landing page `index.html` will automatically include the new year based on `currentYear`.

### Generating Social Images

Social images (1024x474px) can be auto-generated from the year's snow background image using ImageMagick:

```bash
node generate-social-image.js <year>
```

This script:
- Requires ImageMagick to be installed on the system
- Loads `<year>/snow<year>.jpg`
- Resizes/crops to 1024x474px with smart centering
- Adds "A Wintry Mix <year>" text overlay in Marker Felt font
- Adds black stroke for readability over any background
- Saves as `<year>/social_<year>.jpg`

### Modernizing a Year (Using 2025 Pattern)

1. Replace jQuery API call with static `tracks` array in separate JS file
2. Split monolithic player into `nextPlayer.js` + `nextTracks.js`
3. Update CSS to use modern cassette styles from `nextTape.css`
4. Ensure Dropbox URLs include `?dl=1` parameter for direct download
5. Import handwriting font for track display

### Testing Locally

Track loading from Google Sheets API will fail locally (403 error) due to domain restrictions. For local testing:
- Use the modern player pattern (2025+) with hardcoded track arrays
- Or temporarily host with a local server that bypasses CORS

### Styling Notes

**Landing Page:**
- Cassette shelf design with vertical spines
- 11 different handwritten Google Fonts rotating through years
- Auto-generates cassettes from current year back to 2015

**Legacy Players (2015-2024):**
- Blend two background images: cassette tape + winter scene
- Font: "Give You Glory" (cursive) for headings, "Open Sans" for body
- Custom icon font "mixtapes" for player controls
- Responsive sizing using viewport units (vw)

**Modern Players (2025+):**
- Skeuomorphic cassette with realistic gradients and screws
- Transparent window (25%) showing background image
- Handwriting font (Permanent Marker) for active track
- Monospace font for j-card track listing
- CSS-animated spinning reels synchronized with playback
