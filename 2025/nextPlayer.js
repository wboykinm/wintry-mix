(function (root) {
    const PLAY_LABEL = '▶ Play';
    const PAUSE_LABEL = '⏸ Pause';

    function createPlayer({ audio, tracks, titleEl, playPauseBtn, reels }) {
        let currentTrack = 0;
        let isPlaying = false;   // what the user asked for; drives the button
        let isBuffering = false; // reels only spin when audio is actually moving
        let playToken = 0;       // invalidates play() promises superseded by a newer action

        function render() {
            playPauseBtn.textContent = isPlaying ? PAUSE_LABEL : PLAY_LABEL;
            const spin = isPlaying && !isBuffering;
            reels.forEach(reel => { reel.style.animationPlayState = spin ? 'running' : 'paused'; });
        }

        function setPlaying(playing) {
            isPlaying = playing;
            if (!playing) isBuffering = false;
            render();
        }

        function startPlayback() {
            const token = ++playToken;
            setPlaying(true);
            let result;
            try {
                result = audio.play();
            } catch (err) {
                setPlaying(false);
                return;
            }
            if (result && typeof result.catch === 'function') {
                result.catch(() => {
                    if (token === playToken) setPlaying(false);
                });
            }
        }

        function play() {
            // An errored element won't recover on play(); reload the track to retry.
            if (audio.error) {
                loadTrack(currentTrack, true);
            } else {
                startPlayback();
            }
        }

        function pause() {
            playToken++;
            setPlaying(false);
            audio.pause();
        }

        function togglePlay() {
            if (isPlaying) pause(); else play();
        }

        function loadTrack(index, autoplay) {
            playToken++;
            currentTrack = (index + tracks.length) % tracks.length;
            const track = tracks[currentTrack];
            const url = new URL(track.url);
            url.searchParams.set('dl', '1');
            isBuffering = false;
            audio.src = url.toString(); // assigning src starts the load; no load() call needed
            titleEl.textContent = `${track.song} - ${track.artist}`;
            if (autoplay) startPlayback(); else setPlaying(false);
        }

        function nextTrack() {
            loadTrack(currentTrack + 1, isPlaying);
        }

        function prevTrack() {
            loadTrack(currentTrack - 1, isPlaying);
        }

        // Keep UI in sync with play/pause triggered outside our buttons (media keys, OS controls, etc.).
        audio.addEventListener('play', () => {
            if (!audio.paused && !isPlaying) setPlaying(true);
        });
        audio.addEventListener('pause', () => {
            if (audio.paused && !audio.ended && isPlaying) {
                playToken++;
                setPlaying(false);
            }
        });
        audio.addEventListener('waiting', () => {
            isBuffering = true;
            render();
        });
        audio.addEventListener('playing', () => {
            isBuffering = false;
            render();
        });
        audio.addEventListener('ended', () => {
            if (currentTrack === tracks.length - 1) {
                loadTrack(0, false);
            } else {
                loadTrack(currentTrack + 1, true);
            }
        });
        audio.addEventListener('error', () => {
            if (!audio.error) return;
            playToken++;
            setPlaying(false);
            const track = tracks[currentTrack];
            titleEl.textContent = `⚠ Couldn't load ${track.song} - try Play again or skip ahead`;
        });

        loadTrack(0, false);

        return {
            play,
            pause,
            togglePlay,
            nextTrack,
            prevTrack,
            loadTrack,
            get currentTrack() { return currentTrack; },
            get isPlaying() { return isPlaying; },
            get isBuffering() { return isBuffering; },
        };
    }

    root.createPlayer = createPlayer;

    if (typeof document !== 'undefined' && typeof tracks !== 'undefined') {
        const audio = document.getElementById('audio-player');
        if (audio) {
            const player = createPlayer({
                audio,
                tracks,
                titleEl: document.getElementById('track-title'),
                playPauseBtn: document.getElementById('play-pause-btn'),
                reels: Array.from(document.querySelectorAll('.reel')),
            });
            document.getElementById('prev-btn').addEventListener('click', player.prevTrack);
            document.getElementById('play-pause-btn').addEventListener('click', player.togglePlay);
            document.getElementById('next-btn').addEventListener('click', player.nextTrack);
            root.wintryPlayer = player;
        }
    }
})(window);
