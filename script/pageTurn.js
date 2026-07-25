document.addEventListener("DOMContentLoaded", function () {
    var intro = document.querySelector(".page-turn-intro");
    var button = document.querySelector(".intro-next-button");
    var bookElement = document.getElementById("intro-flipbook");
    var replayButton = document.querySelector(".intro-replay-button");
    var pages = document.querySelectorAll(".intro-page");
    var skipIntroKey = "soyoungSkipIntro";
    var pageFlip;
    var pageFlipReady = false;
    var finishTimer;
    var resizeTimer;
    var replayLastScrollY = window.scrollY;
    var replayCurrentOffset = 0;
    var replayAnimationFrame = null;

    function positionIntroButton() {
        if (intro.classList.contains("intro-hidden")) {
            return;
        }

        var visiblePage = bookElement.querySelector(".stf__item.--right, .stf__item.--left");
        var paperRect = visiblePage ? visiblePage.getBoundingClientRect() : bookElement.getBoundingClientRect();
        var buttonWidth = button.offsetWidth;
        var buttonHeight = button.offsetHeight;
        var left = paperRect.right + 28;
        var top = paperRect.top + (paperRect.height / 2);

        left = Math.min(window.innerWidth - buttonWidth - 16, left);

        button.style.left = Math.round(left) + "px";
        button.style.top = Math.round(top) + "px";
        button.style.transform = "translateY(-50%)";
    }

    function dispatchIntroClosed() {
        window.soyoungIntroClosed = true;
        window.dispatchEvent(new CustomEvent("soyoung:intro-closed"));
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
        dispatchIntroClosed();
        return;
    }

    if (window.sessionStorage.getItem(skipIntroKey) === "true") {
        window.sessionStorage.removeItem(skipIntroKey);
    }

    if (window.St && typeof window.St.PageFlip === "function") {
        var compactViewport = window.innerWidth <= 860;
        var introHeight = compactViewport
            ? Math.min(820, Math.max(520, window.innerHeight - 60))
            : Math.min(700, Math.max(520, window.innerHeight - 96));

        pageFlip = new window.St.PageFlip(bookElement, {
            width: 940,
            height: introHeight,
            size: "stretch",
            minWidth: 260,
            maxWidth: 940,
            minHeight: compactViewport ? 520 : 520,
            maxHeight: introHeight,
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
            disableFlipByClick: false
        });

        pageFlip.loadFromHTML(pages);
        pageFlipReady = true;
        pageFlip.on("flip", finishIntro);
    } else {
        intro.classList.add("intro-fallback");
    }

    positionIntroButton();
    window.setTimeout(positionIntroButton, 120);

    function finishIntro() {
        if (intro.classList.contains("intro-finishing")) {
            return;
        }

        window.clearTimeout(finishTimer);
        intro.classList.add("intro-finishing");
        intro.setAttribute("aria-hidden", "true");

        window.setTimeout(function () {
            intro.classList.add("intro-hidden");
            document.body.classList.remove("intro-is-open");
            dispatchIntroClosed();
        }, 300);
    }

    button.addEventListener("click", function () {
        if (intro.classList.contains("intro-finishing")) {
            return;
        }

        button.disabled = true;

        if (pageFlipReady) {
            pageFlip.flipNext("top");
            finishTimer = window.setTimeout(finishIntro, 1350);
            return;
        }

        finishIntro();
    });

    window.addEventListener("resize", function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(positionIntroButton, 80);
    });

    window.addEventListener("load", positionIntroButton);
});
