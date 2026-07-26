document.addEventListener("DOMContentLoaded", function () {
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
        var frame = document.querySelector(".newspaper");
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

    document.body.appendChild(topButton);
    window.addEventListener("scroll", toggleTopButton, { passive: true });
    window.addEventListener("resize", positionTopButton);
    positionTopButton();
    toggleTopButton();
});
