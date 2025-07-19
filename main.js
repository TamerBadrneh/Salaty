// Governates - Long & Lat
const governates = {
  عمّان: { lat: 31.9539, lon: 35.9106 },
  الزرقاء: { lat: 32.0836, lon: 36.094 },
  إربد: { lat: 32.5556, lon: 35.85 },
  البلقاء: { lat: 32.0167, lon: 35.7333 },
  المفرق: { lat: 32.3422, lon: 36.2026 },
  جرش: { lat: 32.2769, lon: 35.8992 },
  عجلون: { lat: 32.3331, lon: 35.7522 },
  مأدبا: { lat: 31.7167, lon: 35.8 },
  الكرك: { lat: 31.18, lon: 35.7 },
  الطفيلة: { lat: 30.8333, lon: 35.6167 },
  معان: { lat: 30.1944, lon: 35.7372 },
  العقبة: { lat: 29.5267, lon: 35.0078 },
};

// form submission
$("#location-form").on("submit", (event) => {
  event.preventDefault();
  let selectedLocation = $("#select-input").val();
  fetchPrayerTimes(selectedLocation);
});

// API Call Logic
function fetchPrayerTimes(location) {
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();

  axios
    .get(
      `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${governates[location].lat}&longitude=${governates[location].lon}&method=23&timezone=Asia/Amman`
    )
    .then((response) => renderPrayerTimes(response.data.data.timings));
}

function renderPrayerTimes(prayerTimes) {
  for (let prayerTime of Object.entries(prayerTimes))
    $(`#${prayerTime[0]}`).html(
      `<td>${translatePrayerTime(prayerTime[0])}</td><td>${prayerTime[1]}</td>`
    );
}

function translatePrayerTime(englishPrayerTime) {
  switch (englishPrayerTime.toLowerCase()) {
    case "fajr":
      return "الفجر";
    case "dhuhr":
      return "الظهر";
    case "asr":
      return "العصر";
    case "maghrib":
      return "المغرب";
    case "isha":
      return "العشاء";
    case "sunrise":
      return "الشروق";
  }
}

// Clock Logic
function awakeClock() {
  setInterval(() => {
    let date = new Date();
    $("#clock").html(
      `${date.getHours() - 12}:${date.getMinutes()}:${date.getSeconds()} ${
        date.getHours() < 12 ? "AM" : "PM"
      }`
    );
  }, 100);
}

awakeClock();
fetchPrayerTimes("عمّان");
$("#copyrights").html(
  `&copy; ${new Date().getFullYear()} تامر بدرانه، جميع الحقوق محفوظة.`
);
