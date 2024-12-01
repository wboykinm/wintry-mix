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
    currentTrack = (currentTrack + 1) % tracks.length;
    updateTrack();
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    updateTrack();
}

function updateTrack() {
    let track = tracks[currentTrack];
    let url = new URL(track.url);
    url.searchParams.set('dl', '1'); // Ensure the URL has dl=1
    audioPlayer.src = url.toString();
    trackTitle.textContent = `Track: ${track.song} - Artist: ${track.artist}`;
    audioPlayer.load(); 
    audioPlayer.play();
    playPauseBtn.textContent = "⏸ Pause";
    document.querySelectorAll('.reel').forEach(reel => reel.style.animationPlayState = 'running');
}

function firstTrack() {
    let track = tracks[currentTrack];
    let url = new URL(track.url);
    url.searchParams.set('dl', '1'); // Ensure the URL has dl=1
    audioPlayer.src = url.toString();
    trackTitle.textContent = `Track: ${track.song} - Artist: ${track.artist}`;
    audioPlayer.load(); 
}

document.addEventListener('DOMContentLoaded', () => {
    firstTrack();
});