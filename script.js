// PRESALE END: August 4, 2025 at 5:21 PM (local time)
const presaleEnd = new Date(2025, 7, 4, 17, 21, 0); // Month is 0-indexed (7 = August)

// Countdown Timer
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

// Copy Address Function
document.getElementById("copyButton").addEventListener("click", function() {
  const address = document.getElementById("walletAddress").textContent;
  navigator.clipboard.writeText(address.trim());
  
  // Visual feedback
  const btn = this;
  btn.innerHTML = '<i class="fas fa-check"></i>';
  btn.classList.add("pulse");
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-copy"></i>';
    btn.classList.remove("pulse");
  }, 2000);
});

// Initialize
setInterval(updateCountdown, 1000);
updateCountdown();
