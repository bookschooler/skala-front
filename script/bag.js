function showMyBag() {
    var myBag = [
        { name: "양우산", count: 1 },
        { name: "스마트폰", count: 1 },
        { name: "지갑", count: 1 },
        { name: "버즈", count: 1 },
        { name: "간식", count: 2 },
    ];

    var message = "👜 [내 가방 속 물품 목록]\n"
        + "-------------------------\n";

    for (var i = 0; i < myBag.length; i++) {
        message += "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
    }

    message += "-------------------------\n";
    message += "총 물품 종류: " + myBag.length + "가지";

    alert(message);
}
