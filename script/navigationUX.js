document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".page-turn-intro")) {
        return;
    }

    var skipIntroKey = "soyoungSkipIntro";

    document.querySelectorAll(".home-current-date").forEach(function (dateElement) {
        var today = new Date();
        var year = today.getFullYear();
        var month = String(today.getMonth() + 1).padStart(2, "0");
        var day = String(today.getDate()).padStart(2, "0");

        dateElement.textContent = year + "." + month + "." + day;
    });

    // 브라우저 기본 뒤로가기로 홈에 돌아올 때도 인트로를 다시 열지 않는다.
    window.sessionStorage.setItem(skipIntroKey, "return-home");

    var homeButton = document.createElement("a");
    homeButton.className = "page-home-button";
    homeButton.href = "index.html";
    homeButton.setAttribute("aria-label", "홈으로 돌아가기");
    homeButton.innerHTML = "<span aria-hidden=\"true\">◀</span>";
    homeButton.addEventListener("click", function () {
        window.sessionStorage.setItem(skipIntroKey, "return-home");
    });

    function isMouseHoverEvent(event) {
        if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") {
            return false;
        }

        if (event.sourceCapabilities && event.sourceCapabilities.firesTouchEvents) {
            return false;
        }

        return true;
    }

    function updateEdgeHover(clientX) {
        if (window.innerWidth > 786) {
            homeButton.classList.remove("is-edge-hovered");
            return;
        }

        var edgeWidth = Math.max(48, window.innerWidth * 0.15);
        homeButton.classList.toggle("is-edge-hovered", clientX <= edgeWidth);
    }

    function activateEdgeHover(event) {
        if (window.innerWidth <= 786 && isMouseHoverEvent(event)) {
            homeButton.classList.add("is-edge-hovered");
        }
    }

    function clearEdgeHover() {
        homeButton.classList.remove("is-edge-hovered");
    }

    document.addEventListener("mousemove", function (event) {
        if (!isMouseHoverEvent(event)) {
            return;
        }

        updateEdgeHover(event.clientX);
    });

    document.addEventListener("pointermove", function (event) {
        if (!isMouseHoverEvent(event)) {
            return;
        }

        updateEdgeHover(event.clientX);
    });

    document.addEventListener("mouseover", function (event) {
        if (!isMouseHoverEvent(event)) {
            return;
        }

        updateEdgeHover(event.clientX);
    });

    homeButton.addEventListener("mouseenter", activateEdgeHover);
    homeButton.addEventListener("pointerenter", activateEdgeHover);
    homeButton.addEventListener("mouseover", activateEdgeHover);
    homeButton.addEventListener("mouseleave", clearEdgeHover);
    homeButton.addEventListener("pointerleave", clearEdgeHover);
    window.addEventListener("blur", clearEdgeHover);

    function positionHomeButton() {
        var frame = document.querySelector(".container");
        var buttonWidth = homeButton.offsetWidth;
        var left = 12;

        if (window.innerWidth <= 786) {
            homeButton.style.left = "0px";
            homeButton.style.right = "auto";
            return;
        }

        if (frame) {
            var frameRect = frame.getBoundingClientRect();
            left = frameRect.left - buttonWidth - 18;
        }

        if (left < 12) {
            left = 12;
        }

        homeButton.style.left = Math.round(left) + "px";
        homeButton.style.right = "auto";
    }

    var topButton = document.createElement("button");
    topButton.className = "scroll-top-button";
    topButton.type = "button";
    topButton.setAttribute("aria-label", "맨 위로 이동");
    topButton.innerHTML = "<span aria-hidden=\"true\">▲</span><span>Top</span>";

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    function positionTopButton() {
        var frame = document.querySelector(".container");
        var buttonWidth = topButton.offsetWidth;
        var left = window.innerWidth - buttonWidth - 16;

        if (frame) {
            var frameRect = frame.getBoundingClientRect();
            left = window.innerWidth <= 786 ? frameRect.right - buttonWidth - 12 : frameRect.right + 18;
        }

        if (left + buttonWidth > window.innerWidth - 12) {
            left = window.innerWidth - buttonWidth - 12;
        }

        topButton.style.left = Math.max(12, Math.round(left)) + "px";
        topButton.style.right = "auto";
    }

    function toggleTopButton() {
        topButton.classList.toggle("is-visible", window.scrollY > 80);
    }

    var lastScrollY = window.scrollY;
    var currentButtonOffset = 0;
    var targetButtonOffset = 0;
    var animationFrame = null;

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    function setBackButtonOffset(value) {
        homeButton.style.setProperty("--back-button-y", value.toFixed(2) + "px");
        homeButton.style.top = "calc(50% + " + value.toFixed(2) + "px)";
    }

    function animateBackButton() {
        currentButtonOffset += (targetButtonOffset - currentButtonOffset) * 0.38;

        if (Math.abs(currentButtonOffset) < 0.2) {
            currentButtonOffset = 0;
            setBackButtonOffset(0);
            animationFrame = null;
            return;
        }

        setBackButtonOffset(currentButtonOffset);
        animationFrame = window.requestAnimationFrame(animateBackButton);
    }

    function scheduleBackButtonMotion() {
        if (animationFrame === null) {
            animationFrame = window.requestAnimationFrame(animateBackButton);
        }
    }

    function handleScroll() {
        var scrollY = window.scrollY;
        var scrollDelta = scrollY - lastScrollY;

        lastScrollY = scrollY;
        currentButtonOffset = clamp(scrollDelta * 0.16, -18, 18);
        targetButtonOffset = 0;
        setBackButtonOffset(currentButtonOffset);
        scheduleBackButtonMotion();
        toggleTopButton();
    }

    document.body.appendChild(homeButton);
    document.body.appendChild(topButton);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", positionTopButton);
    window.addEventListener("resize", positionHomeButton);
    positionHomeButton();
    positionTopButton();
    toggleTopButton();
});
