async function getPrayerTimes() {
  const userIP = await getUserIP();
  const userLocation = await getUserLocation(userIP);

  const result = await fetch(
    `https://api.aladhan.com/v1/timings/${new Date("dd-mm-yyyy")}?longitude=${
      userLocation.longitude
    }&latitude=${userLocation.latitude}`
  );
  const prayerTime = await result.json();
  return prayerTime;
}
