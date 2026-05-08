function updateDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString();   // Date
  const time = now.toLocaleTimeString();   // Time

  document.getElementById("datetime").innerHTML =
    date + " | " + time;
}

setInterval(updateDateTime, 1000);


updateDateTime();