# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wintry Mix is a collection of holiday season music mixtapes dating back to 2015, hosted at https://awintrymix.net. Each year has its own standalone audio player implementation featuring custom cassette-tape-style UI.

## Architecture

### Directory Structure

The project follows a year-based organization:
- Root `index.html` - Landing page that dynamically generates cards for all years (2015-present)
- `YYYY/` directories (2015-2024) - Each contains a self-contained player with `index.html`, `bbplayer.js`, and `mixtape.css`
- `next/` directory - Development version with modernized player architecture

### Player Evolution

**Legacy Player (2015-2024):**
- Single-file `bbplayer.js` with self-contained BBPlayer object
- jQuery-based track loading from Google Sheets API
- Uses HTML5 `<audio>` with `<source>` elements for tracks
- Custom icon font for player controls
- Background images blend with cassette tape imagery

**Modern Player (next/):**
- Split into modular components: `nextPlayer.js` (controls), `nextTracks.js` (data)
- Tracks defined as JavaScript array with Dropbox URLs
- CSS-animated cassette reels that spin during playback
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

**next/ directory:**
```javascript
const tracks = [
  { order: 1, artist: "...", song: "...", url: "https://www.dropbox.com/..." }
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

### Creating a New Year's Mix

1. Copy the most recent year directory (e.g., `cp -r 2024 2025`)
2. Update `index.html`:
   - Meta tags (title, OG tags, social image path)
   - Google Sheets API URL with new year's sheet name
   - Footer links if needed
3. Update `mixtape.css`:
   - Background image reference (line 95): `url(snow2025.jpg)`
4. Add new social image as `social_2025.jpg`
5. Add new background image as `snow2025.jpg`

The landing page `index.html` will automatically include the new year based on `currentYear`.

### Modernizing a Year (Using next/ Pattern)

1. Replace jQuery API call with static `tracks` array in separate JS file
2. Split monolithic player into `nextPlayer.js` + `nextTracks.js`
3. Update CSS to use modern cassette animation styles from `next/nextTape.css`
4. Ensure Dropbox URLs include `?dl=1` parameter for direct download

### Testing Locally

Track loading from Google Sheets API will fail locally (403 error) due to domain restrictions. For local testing:
- Use the `next/` pattern with hardcoded track arrays
- Or temporarily host with a local server that bypasses CORS

### Styling Notes

- All years use custom cassette tape aesthetic with winter imagery
- Legacy players blend two background images: cassette tape + winter scene
- Font: "Give You Glory" (cursive) for headings, "Open Sans" for body
- Custom icon font "mixtapes" for player controls (play, pause, forward, rewind)
- Responsive sizing using viewport units (vw)
