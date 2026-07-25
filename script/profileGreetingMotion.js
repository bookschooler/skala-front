document.addEventListener("DOMContentLoaded", function () {
    var image = document.querySelector(".profile-greeting-image img");

    if (!image) {
        return;
    }

    var lastScrollY = window.scrollY;
    var currentShift = 0;
    var targetShift = 0;
    var frame = null;
    var resetTimer = null;

    function animate() {
        currentShift += (targetShift - currentShift) * 0.32;
        image.style.setProperty("--greeting-scroll-shift", currentShift.toFixed(2) + "px");

        if (Math.abs(currentShift - targetShift) < 0.2) {
            currentShift = targetShift;
            image.style.setProperty("--greeting-scroll-shift", currentShift.toFixed(2) + "px");
            frame = null;
            return;
        }

        frame = window.requestAnimationFrame(animate);
    }

    function handleScroll() {
        var scrollDelta = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;
        targetShift = Math.max(-14, Math.min(14, scrollDelta * 0.22));

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
            targetShift = 0;
            if (!frame) {
                frame = window.requestAnimationFrame(animate);
            }
        }, 120);

        if (!frame) {
            frame = window.requestAnimationFrame(animate);
        }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
});
