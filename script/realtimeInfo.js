import { getRealtimeWeather } from "./weatherAPI.js";

var cities = [
    { name: "광주광역시 광산구 KR", country: "대한민국", latitude: 35.1595, longitude: 126.8526 },
    { name: "서울 KR", country: "대한민국", latitude: 37.5665, longitude: 126.9780 },
    { name: "부산 KR", country: "대한민국", latitude: 35.1796, longitude: 129.0756 },
    { name: "제주 KR", country: "대한민국", latitude: 33.4996, longitude: 126.5312 },
    { name: "도쿄 JP", country: "일본", latitude: 35.6762, longitude: 139.6503 },
    { name: "오사카 JP", country: "일본", latitude: 34.6937, longitude: 135.5023 },
    { name: "베이징 CN", country: "중국", latitude: 39.9042, longitude: 116.4074 },
    { name: "상하이 CN", country: "중국", latitude: 31.2304, longitude: 121.4737 },
    { name: "청두 CN", country: "중국", latitude: 30.5728, longitude: 104.0668 },
    { name: "홍콩 HK", country: "중국", latitude: 22.3193, longitude: 114.1694 },
    { name: "타이베이 TW", country: "대만", latitude: 25.0330, longitude: 121.5654 },
    { name: "싱가포르 SG", country: "싱가포르", latitude: 1.3521, longitude: 103.8198 },
    { name: "방콕 TH", country: "태국", latitude: 13.7563, longitude: 100.5018 },
    { name: "하노이 VN", country: "베트남", latitude: 21.0278, longitude: 105.8342 },
    { name: "마닐라 PH", country: "필리핀", latitude: 14.5995, longitude: 120.9842 },
    { name: "자카르타 ID", country: "인도네시아", latitude: -6.2088, longitude: 106.8456 },
    { name: "쿠알라룸푸르 MY", country: "말레이시아", latitude: 3.1390, longitude: 101.6869 },
    { name: "뉴델리 IN", country: "인도", latitude: 28.6139, longitude: 77.2090 },
    { name: "두바이 AE", country: "아랍에미리트", latitude: 25.2048, longitude: 55.2708 },
    { name: "이스탄불 TR", country: "튀르키예", latitude: 41.0082, longitude: 28.9784 },
    { name: "파리 FR", country: "프랑스", latitude: 48.8566, longitude: 2.3522 },
    { name: "런던 GB", country: "영국", latitude: 51.5074, longitude: -0.1278 },
    { name: "베를린 DE", country: "독일", latitude: 52.5200, longitude: 13.4050 },
    { name: "로마 IT", country: "이탈리아", latitude: 41.9028, longitude: 12.4964 },
    { name: "마드리드 ES", country: "스페인", latitude: 40.4168, longitude: -3.7038 },
    { name: "암스테르담 NL", country: "네덜란드", latitude: 52.3676, longitude: 4.9041 },
    { name: "취리히 CH", country: "스위스", latitude: 47.3769, longitude: 8.5417 },
    { name: "비엔나 AT", country: "오스트리아", latitude: 48.2082, longitude: 16.3738 },
    { name: "프라하 CZ", country: "체코", latitude: 50.0755, longitude: 14.4378 },
    { name: "모스크바 RU", country: "러시아", latitude: 55.7558, longitude: 37.6173 },
    { name: "뉴욕 US", country: "미국", latitude: 40.7128, longitude: -74.0060 },
    { name: "로스앤젤레스 US", country: "미국", latitude: 34.0522, longitude: -118.2437 },
    { name: "샌프란시스코 US", country: "미국", latitude: 37.7749, longitude: -122.4194 },
    { name: "시카고 US", country: "미국", latitude: 41.8781, longitude: -87.6298 },
    { name: "워싱턴 DC US", country: "미국", latitude: 38.9072, longitude: -77.0369 },
    { name: "호놀룰루 US", country: "미국", latitude: 21.3069, longitude: -157.8583 },
    { name: "밴쿠버 CA", country: "캐나다", latitude: 49.2827, longitude: -123.1207 },
    { name: "토론토 CA", country: "캐나다", latitude: 43.6532, longitude: -79.3832 },
    { name: "멕시코시티 MX", country: "멕시코", latitude: 19.4326, longitude: -99.1332 },
    { name: "상파울루 BR", country: "브라질", latitude: -23.5558, longitude: -46.6396 },
    { name: "리우데자네이루 BR", country: "브라질", latitude: -22.9068, longitude: -43.1729 },
    { name: "부에노스아이레스 AR", country: "아르헨티나", latitude: -34.6037, longitude: -58.3816 },
    { name: "산티아고 CL", country: "칠레", latitude: -33.4489, longitude: -70.6693 },
    { name: "카이로 EG", country: "이집트", latitude: 30.0444, longitude: 31.2357 },
    { name: "케이프타운 ZA", country: "남아프리카공화국", latitude: -33.9249, longitude: 18.4241 },
    { name: "나이로비 KE", country: "케냐", latitude: -1.2921, longitude: 36.8219 },
    { name: "시드니 AU", country: "호주", latitude: -33.8688, longitude: 151.2093 },
    { name: "멜버른 AU", country: "호주", latitude: -37.8136, longitude: 144.9631 },
    { name: "오클랜드 NZ", country: "뉴질랜드", latitude: -36.8509, longitude: 174.7645 }
];

var selectedCityName = "서울 KR";
var weatherMap;
var markersByCity = {};

function findCity(cityName) {
    return cities.find(function (city) {
        return city.name === cityName;
    });
}

function createCityIcon(isActive) {
    return L.divIcon({
        className: "",
        html: "<span class=\"city-weather-marker" + (isActive ? " active" : "") + "\"></span>",
        iconSize: [26, 26],
        iconAnchor: [13, 26],
        popupAnchor: [0, -26]
    });
}

function renderLocation(city, weather) {
    var weatherBox = document.getElementById("weather-box");

    weatherBox.innerHTML = ""
        + "<h3>🌎 " + city.name + " 실시간 날씨</h3>"
        + "<p class=\"weather-coordinates\">📍 위도: " + city.latitude.toFixed(4)
        + " &nbsp;&nbsp; 경도: " + city.longitude.toFixed(4) + "</p>"
        + "<div class=\"weather-meta\">"
        + "<p>🌡️ 현재 기온<br><strong>" + weather.temperature + "°C</strong></p>"
        + "<p>💧 현재 습도<br><strong>" + weather.humidity + "%</strong></p>"
        + "</div>";
}

function renderLoading(city) {
    var weatherBox = document.getElementById("weather-box");

    weatherBox.innerHTML = ""
        + "<h3>🌎 " + city.name + " 정보</h3>"
        + "<p class=\"weather-coordinates\">📍 위도: " + city.latitude.toFixed(4)
        + " &nbsp;&nbsp; 경도: " + city.longitude.toFixed(4) + "</p>"
        + "<p>실시간 날씨 로딩 중... ⏳</p>";
}

function renderError() {
    var weatherBox = document.getElementById("weather-box");

    weatherBox.innerHTML = "<p>날씨 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>";
}

function renderCityOptions() {
    var citySelect = document.getElementById("city-select");

    citySelect.innerHTML = cities.map(function (city) {
        return "<option value=\"" + city.name + "\">" + city.name + "</option>";
    }).join("");

    citySelect.value = selectedCityName;
}

function initializeMap() {
    if (typeof L === "undefined") {
        renderError();
        return;
    }

    weatherMap = L.map("leaflet-map", {
        center: [20, 15],
        zoom: 2,
        minZoom: 2,
        maxZoom: 8,
        worldCopyJump: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(weatherMap);

    cities.forEach(function (city) {
        var marker = L.marker([city.latitude, city.longitude], {
            icon: createCityIcon(city.name === selectedCityName),
            title: city.name
        }).addTo(weatherMap);

        marker.bindPopup("<strong>" + city.name + "</strong>");

        marker.on("click", function () {
            updateSelectedCity(city.name);
        });

        markersByCity[city.name] = marker;
    });
}

function renderMapPins() {
    if (!weatherMap) {
        return;
    }

    cities.forEach(function (city) {
        markersByCity[city.name].setIcon(createCityIcon(city.name === selectedCityName));
    });

    var selectedCity = findCity(selectedCityName);
    var selectedMarker = markersByCity[selectedCityName];

    selectedMarker.openPopup();
    weatherMap.flyTo([selectedCity.latitude, selectedCity.longitude], 4, {
        animate: true,
        duration: 0.7
    });
}

async function updateWeather() {
    var city = findCity(selectedCityName);

    renderMapPins();
    renderLoading(city);

    try {
        var weather = await getRealtimeWeather(city.latitude, city.longitude);
        renderLocation(city, weather);
    } catch (error) {
        renderError();
    }
}

function updateSelectedCity(cityName) {
    selectedCityName = cityName;
    document.getElementById("city-select").value = selectedCityName;
    updateWeather();
}

document.addEventListener("DOMContentLoaded", function () {
    var citySelect = document.getElementById("city-select");

    if (!citySelect) {
        return;
    }

    renderCityOptions();
    initializeMap();

    citySelect.addEventListener("change", function () {
        updateSelectedCity(citySelect.value);
    });

    updateWeather();
});
