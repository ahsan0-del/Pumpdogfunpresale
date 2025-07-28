// Set presale end date (7 days from now)
const presaleEnd = new Date();
presaleEnd.setDate(presaleEnd.getDate() + 7);
presaleEnd.setHours(23, 59, 59, 0); // Ends at 11:59 PM

function updateCountdown() {
  const now = new Date();
  const diff = presaleEnd - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "PRESALE ENDED!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
