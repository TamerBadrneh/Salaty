document.querySelector("button").addEventListener("click", async () => {
  const PRAYER_TIME_API_RESULT = await getPrayerTimes();
  const TIMES = PRAYER_TIME_API_RESULT.data.timings;

  displayPrayerTime([
    TIMES.Fajr,
    TIMES.Sunrise,
    TIMES.Dhuhr,
    TIMES.Asr,
    TIMES.Maghrib,
    TIMES.Isha,
  ]);
});
