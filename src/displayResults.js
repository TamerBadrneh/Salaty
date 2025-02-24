function displayTimeTable() {
  const prayerTimeTable = document.getElementById("prayer-grid");
  let classes = prayerTimeTable.classList;
  classes.remove("hidden");
  classes.add("grid");
}

function displayPrayerTime(prayerTime) {
  displayTimeTable();
  for (let index = 0; index < prayerTime.length; index++)
    writePrayerTime(index + 1, prayerTime[index]);
}

function convertTo12Hrs(time) {
  return parseTime(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function parseTime(time) {
  let [hours, mins] = time.split(":");

  let date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(mins));

  return date;
}

function writePrayerTime(order, prayerTime) {
  document.getElementById(`prayer-${order}`).innerText =
    convertTo12Hrs(prayerTime);
}
