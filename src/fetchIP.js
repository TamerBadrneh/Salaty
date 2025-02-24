async function getUserIP() {
  let result = await fetch("https://api.ipify.org?format=json");
  result = await result.json();
  return result.ip;
}
