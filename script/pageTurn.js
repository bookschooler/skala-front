document.addEventListener("DOMContentLoaded", function () {
    var intro = document.querySelector(".page-turn-intro");
    var button = document.querySelector(".intro-next-button");
    var bookElement = document.getElementById("intro-flipbook");
    var replayButton = document.querySelector(".intro-replay-button");
    var pages = document.querySelectorAll(".intro-page");
    var skipIntroKey = "soyoungSkipIntro";
    var pageFlip;
    var staticPaper;
    var resizeTimer;
    var replayLastScrollY = window.scrollY;
    var replayCurrentOffset = 0;
    var replayAnimationFrame = null;

    function positionIntroButton() {
        if (!staticPaper || intro.classList.contains("intro-hidden")) {
            return;
        }

        var paperRect = staticPaper.getBoundingClientRect();
        var buttonWidth = button.offsetWidth;
        var buttonHeight = button.offsetHeight;
        var rightMarginWidth = window.innerWidth - paperRect.right;
        var left = paperRect.right + ((rightMarginWidth - buttonWidth) / 2);
        var top = paperRect.top + (paperRect.height / 2);

        left = Math.max(paperRect.right + 12, left);
        left = Math.min(window.innerWidth - buttonWidth - 16, left);

        button.style.left = Math.round(left) + "px";
        button.style.top = Math.round(top) + "px";
        button.style.transform = "translateY(-50%)";
    }

    if (!intro || !button || !bookElement) {
        document.body.classList.remove("intro-is-open");
        return;
    }

    document.querySelectorAll(".intro-current-date, .home-current-date").forEach(function (dateElement) {
        var today = new Date();
        var year = today.getFullYear();
        var month = String(today.getMonth() + 1).padStart(2, "0");
        var day = String(today.getDate()).padStart(2, "0");

        dateElement.textContent = year + "." + month + "." + day;
    });

    if (replayButton) {
        replayButton.addEventListener("click", function () {
            window.sessionStorage.removeItem(skipIntroKey);
            window.location.href = "index.html";
        });

        function setReplayButtonOffset(value) {
            replayButton.style.top = "calc(50% + " + value.toFixed(2) + "px)";
        }

        function animateReplayButton() {
            replayCurrentOffset += (0 - replayCurrentOffset) * 0.38;

            if (Math.abs(replayCurrentOffset) < 0.2) {
                replayCurrentOffset = 0;
                setReplayButtonOffset(0);
                replayAnimationFrame = null;
                return;
            }

            setReplayButtonOffset(replayCurrentOffset);
            replayAnimationFrame = window.requestAnimationFrame(animateReplayButton);
        }

        window.addEventListener("scroll", function () {
            var scrollDelta = window.scrollY - replayLastScrollY;

            replayLastScrollY = window.scrollY;
            replayCurrentOffset = Math.min(18, Math.max(-18, scrollDelta * 0.16));
            setReplayButtonOffset(replayCurrentOffset);

            if (replayAnimationFrame === null) {
                replayAnimationFrame = window.requestAnimationFrame(animateReplayButton);
            }
        }, { passive: true });
    }

    if (window.sessionStorage.getItem(skipIntroKey) === "return-home") {
        window.sessionStorage.removeItem(skipIntroKey);
        intro.classList.add("intro-hidden");
        intro.setAttribute("aria-hidden", "true");
        document.body.classList.remove("intro-is-open");
        return;
    }

    if (window.sessionStorage.getItem(skipIntroKey) === "true") {
        window.sessionStorage.removeItem(skipIntroKey);
    }

    if (pages.length > 0) {
        staticPaper = pages[0].cloneNode(true);
        staticPaper.classList.remove("intro-page");
        staticPaper.classList.add("intro-static-paper");
        staticPaper.removeAttribute("data-density");
        staticPaper.removeAttribute("style");
        bookElement.before(staticPaper);
        positionIntroButton();
        window.setTimeout(positionIntroButton, 80);
    }

    if (window.St && typeof window.St.PageFlip === "function") {
        pageFlip = new window.St.PageFlip(bookElement, {
            width: 940,
            height: 700,
            size: "stretch",
            minWidth: 310,
            maxWidth: 940,
            minHeight: 520,
            maxHeight: 700,
            drawShadow: true,
            flippingTime: 1150,
            usePortrait: true,
            startPage: 0,
            autoSize: true,
            maxShadowOpacity: 0.42,
            showCover: true,
            mobileScrollSupport: true,
            swipeDistance: 30,
            clickEventForward: true,
            useMouseEvents: true,
            disableFlipByClick: true
        });

        pageFlip.loadFromHTML(pages);

        window.setTimeout(function () {
            var visiblePage = bookElement.querySelector(".stf__item.--right");

            if (!visiblePage) {
                return;
            }

            bookElement.style.setProperty("--intro-cover-shift", (visiblePage.offsetLeft / 2) + "px");
        }, 80);
    } else {
        intro.classList.add("intro-fallback");
    }

    button.addEventListener("click", function () {
        if (intro.classList.contains("intro-leaving")) {
            return;
        }

        intro.classList.add("intro-leaving");
        button.disabled = true;

        window.setTimeout(function () {
            intro.classList.add("intro-hidden");
            intro.setAttribute("aria-hidden", "true");
            document.body.classList.remove("intro-is-open");
        }, 1450);
    });

    window.addEventListener("resize", function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(positionIntroButton, 80);
    });

    window.addEventListener("load", positionIntroButton);
});
