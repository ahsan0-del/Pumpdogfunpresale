// PRESALE END: August 4, 2025 at 5:21 PM (local time)
const presaleEnd = new Date(2025, 7, 4, 17, 21, 0); // Month is 0-indexed (7 = August)

// Countdown Timer
function updateCountdown() {
  const now = new Date();
  const diff = presaleEnd - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = '<div class="countdown-ended">PRESALE ENDED!</div>';
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
  const address = document.getElementById("walletAddress").textContent.trim();
  navigator.clipboard.writeText(address);
  
  // Visual feedback
  const btn = this;
  btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
  btn.classList.add("copied");
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    btn.classList.remove("copied");
  }, 2000);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const answer = button.nextElementSibling;
    if (button.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

// Simulate presale progress (for demo)
function simulateProgress() {
  const progressFill = document.querySelector('.progress-fill');
  let progress = 25;
  const interval = setInterval(() => {
    progress += Math.random() * 2;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }
    progressFill.style.width = `${progress}%`;
    document.querySelector('.raised').textContent = `$${Math.floor(500000 * progress / 100).toLocaleString()}/$500,000`;
  }, 3000);
}

// Initialize
setInterval(updateCountdown, 1000);
updateCountdown();
simulateProgress();
