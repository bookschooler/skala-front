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
