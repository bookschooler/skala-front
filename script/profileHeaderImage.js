document.addEventListener("DOMContentLoaded", function () {
    var title = document.querySelector(".profile-page-title span");
    var meta = document.querySelector(".subpage-masthead-meta p");
    var metaBlock = document.querySelector(".subpage-masthead-meta");
    var image = document.querySelector(".profile-page-title img");
    var header = document.querySelector(".profile-page-title");

    if (!title || !meta || !metaBlock || !image || !header) {
        return;
    }

    function syncImageSize() {
        var size = (title.getBoundingClientRect().height + meta.getBoundingClientRect().height) * 1.5;
        image.style.width = size.toFixed(2) + "px";
        image.style.height = size.toFixed(2) + "px";
        header.style.minHeight = (size + 24).toFixed(2) + "px";

        metaBlock.style.transform = "none";
        var shift = image.getBoundingClientRect().bottom - meta.getBoundingClientRect().bottom;
        metaBlock.style.transform = "translateY(" + shift.toFixed(2) + "px)";
    }

    syncImageSize();
    window.addEventListener("resize", syncImageSize);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(syncImageSize);
    }
});
