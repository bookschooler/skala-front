export async function getRealtimeWeather(latitude, longitude) {
    var endpoint = "https://api.open-meteo.com/v1/forecast"
        + "?latitude=" + latitude
        + "&longitude=" + longitude
        + "&current=temperature_2m,relative_humidity_2m";

    var response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("날씨 정보를 불러오지 못했습니다.");
    }

    var data = await response.json();

    return {
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m
    };
}

export async function getKoreanAddress(latitude, longitude) {
    var endpoint = "https://api.bigdatacloud.net/data/reverse-geocode-client"
        + "?latitude=" + latitude
        + "&longitude=" + longitude
        + "&localityLanguage=ko";

    var response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("주소 정보를 불러오지 못했습니다.");
    }

    var data = await response.json();
    var administrativeAreas = data.localityInfo && data.localityInfo.administrative
        ? data.localityInfo.administrative
        : [];
    var district = administrativeAreas.find(function (area) {
        return area.adminLevel === 7;
    });
    var parts = [
        data.principalSubdivision,
        data.city,
        district && district.name,
        data.locality
    ];
    var uniqueParts = parts.filter(function (part, index) {
        return part && parts.indexOf(part) === index;
    });

    if (uniqueParts.length > 0) {
        return uniqueParts.join(" ");
    }

    throw new Error("주소 정보를 찾지 못했습니다.");
}
