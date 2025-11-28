let currentTrack = 0;
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const playPauseBtn = document.getElementById('play-pause-btn');
const reelLeft = document.getElementById('reel-left');
const reelRight = document.getElementById('reel-right');

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "⏸ Pause";
        document.querySelectorAll('.reel').forEach(reel => reel.style.animationPlayState = 'running');
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "▶ Play";
        document.querySelectorAll('.reel').forEach(reel => reel.style.animationPlayState = 'paused');
    }
}

function nextTrack() {
    const wasPlaying = !audioPlayer.paused;
    currentTrack = (currentTrack + 1) % tracks.length;
    updateTrack(wasPlaying);
}

function prevTrack() {
    const wasPlaying = !audioPlayer.paused;
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    updateTrack(wasPlaying);
}

function updateTrack(shouldPlay = false) {
    let track = tracks[currentTrack];
    let url = new URL(track.url);
    url.searchParams.set('dl', '1'); // Ensure the URL has dl=1
    audioPlayer.src = url.toString();
    trackTitle.textContent = `${track.song} - ${track.artist}`;
    audioPlayer.load();

    if (shouldPlay) {
        audioPlayer.play();
        playPauseBtn.textContent = "⏸ Pause";
        document.querySelectorAll('.reel').forEach(reel => reel.style.animationPlayState = 'running');
    }
}

function firstTrack() {
    let track = tracks[currentTrack];
    let url = new URL(track.url);
    url.searchParams.set('dl', '1'); // Ensure the URL has dl=1
    audioPlayer.src = url.toString();
    trackTitle.textContent = `${track.song} - ${track.artist}`;
    audioPlayer.load();
}

// Handle track ending
audioPlayer.addEventListener('ended', () => {
    // Check if this is the last track
    if (currentTrack === tracks.length - 1) {
        // Last track finished - reset to first track and stop
        currentTrack = 0;
        updateTrack(false);
        playPauseBtn.textContent = "▶ Play";
        document.querySelectorAll('.reel').forEach(reel => reel.style.animationPlayState = 'paused');
    } else {
        // Not the last track - auto-play next
        currentTrack = (currentTrack + 1) % tracks.length;
        updateTrack(true);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    firstTrack();
});