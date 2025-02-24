async function getUserLocation(IP) {
  const result = await fetch(`http://ip-api.com/json/${IP}`);
  const userLocation = await result.json();
  return {
    longitude: userLocation.lon,
    latitude: userLocation.lat,
  };
}
