
const targetDate = new Date('May 15, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  updateFlipCard('days', days);
  updateFlipCard('hours', hours);
  updateFlipCard('minutes', minutes);
  updateFlipCard('seconds', seconds);
}

function updateFlipCard(unit, value) {
  const card = document.querySelector(`[data-${unit}]`);
  const currentValue = card.querySelector('.top').textContent;
  const newValue = String(value).padStart(2, '0');

  if (currentValue !== newValue) {
    card.querySelector('.top').textContent = newValue;
    card.querySelector('.bottom').textContent = newValue;
    card.querySelector('.top').classList.add('flip');
    
    setTimeout(() => {
      card.querySelector('.top').classList.remove('flip');
    }, 600);
  }
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
