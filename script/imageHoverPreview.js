document.addEventListener("DOMContentLoaded", function () {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
    }

    var images = document.querySelectorAll(".trip-card img");
    if (!images.length) {
        return;
    }

    var preview = document.createElement("div");
    var previewImage = document.createElement("img");

    preview.className = "image-hover-preview";
    preview.setAttribute("aria-hidden", "true");
    previewImage.alt = "";
    preview.appendChild(previewImage);
    document.body.appendChild(preview);

    function hidePreview() {
        preview.classList.remove("is-visible");
        previewImage.removeAttribute("src");
    }

    images.forEach(function (image) {
        image.addEventListener("mouseenter", function () {
            previewImage.src = image.currentSrc || image.src;
            preview.classList.add("is-visible");
        });

        image.addEventListener("mouseleave", hidePreview);
    });
});
