document.addEventListener("DOMContentLoaded", function () {
    var domainSelect = document.getElementById("email-domain");
    var customDomain = document.getElementById("email-domain-custom");

    if (!domainSelect || !customDomain) {
        return;
    }

    function updateCustomDomain() {
        var isCustom = domainSelect.value === "";

        customDomain.hidden = !isCustom;
        customDomain.required = isCustom;

        if (!isCustom) {
            customDomain.value = "";
        }
    }

    domainSelect.addEventListener("change", updateCustomDomain);
    updateCustomDomain();
});
