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

    function toggleTopButton() {
        topButton.classList.toggle("is-visible", window.scrollY > 260);
    }

    document.body.appendChild(topButton);
    window.addEventListener("scroll", toggleTopButton, { passive: true });
    toggleTopButton();
});
