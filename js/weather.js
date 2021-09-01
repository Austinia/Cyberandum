const API_key = "098f99aaf7a5d89e623f3961fa80786c";
//API키 사용 이상시 교체 및 숨김 예정
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather #w");
      const city = document.querySelector("#weather #c");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert(
    "이 기기의 좌표를 찾지 못했습니다. 요청된 권한을 다시 확인해 주십시오."
  );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
