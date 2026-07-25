document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("trip-audio");
    var status = document.getElementById("trip-audio-status");
    var controls = document.querySelector(".trip-audio-controls");
    var playButton = document.getElementById("trip-audio-play");
    var progress = document.getElementById("trip-audio-progress");
    var volumeButton = document.getElementById("trip-audio-volume");
    var volumeRange = document.getElementById("trip-audio-volume-range");

    if (!audio || !status || !controls || !playButton || !progress || !volumeButton || !volumeRange) {
        return;
    }

    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        var minutes = Math.floor(seconds / 60);
        var remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
        return minutes + ":" + remainder;
    }

    function updateStatus() {
        status.textContent = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
        progress.setAttribute("aria-valuemax", audio.duration || 0);
        progress.setAttribute("aria-valuenow", audio.currentTime);
        var percentage = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        progress.style.setProperty("--progress", percentage + "%");
    }

    function updatePlayState() {
        var isPlaying = !audio.paused;

        playButton.textContent = isPlaying ? "❚❚" : "▶";
        playButton.setAttribute("aria-label", isPlaying ? "일시정지" : "재생");
    }

    function updateVolumeState() {
        var isMuted = audio.muted || audio.volume === 0;

        volumeButton.textContent = isMuted ? "🔇" : "🔊";
        volumeButton.setAttribute("aria-label", isMuted ? "음소거 해제" : "음소거");
        volumeRange.value = isMuted ? 0 : audio.volume;
    }

    audio.volume = 0.1;

    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    volumeButton.addEventListener("click", function () {
        audio.muted = !audio.muted;
        updateVolumeState();
    });

    volumeRange.addEventListener("input", function () {
        audio.muted = false;
        audio.volume = Number(volumeRange.value);
        updateVolumeState();
    });

    progress.addEventListener("click", function (event) {
        if (!audio.duration) {
            return;
        }

        var rect = progress.getBoundingClientRect();
        var ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        audio.currentTime = ratio * audio.duration;
        updateStatus();
    });

    progress.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            audio.currentTime = Math.min(
                audio.duration || 0,
                Math.max(0, audio.currentTime + (event.key === "ArrowRight" ? 5 : -5))
            );
            updateStatus();
        }
    });

    audio.addEventListener("timeupdate", updateStatus);
    audio.addEventListener("loadedmetadata", updateStatus);
    audio.addEventListener("durationchange", updateStatus);
    audio.addEventListener("play", updatePlayState);
    audio.addEventListener("pause", updatePlayState);
    audio.addEventListener("volumechange", updateVolumeState);
    updateStatus();
    updatePlayState();
    updateVolumeState();
    function startAudio() {
        audio.play().catch(function () {
            updatePlayState();
        });
    }

    audio.play().catch(function () {
        document.addEventListener("pointerdown", startAudio, { once: true });
        updatePlayState();
    });
});
