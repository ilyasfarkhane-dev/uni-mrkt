
// Particles.js Config
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#cbac70"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#cbac70",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});

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
  const newValue = String(value).padStart(2, '0');

  // Determine the maximum based on the unit
  const maxValue = {
    seconds: 59,
    minutes: 59,
    hours: 23,
    days: 999, // arbitrary large number
  }[unit];

  // Compute top value (less than bottom)
  let topValue = value - 1;
  if (topValue < 0) topValue = maxValue;
  const topString = String(topValue).padStart(2, '0');

  const topElement = card.querySelector('.top');
  const bottomElement = card.querySelector('.bottom');

  topElement.textContent = topString;
  bottomElement.textContent = newValue;

  // Optional: trigger flip animation
  topElement.classList.add('flip');
  setTimeout(() => {
    topElement.classList.remove('flip');
  }, 600);
}


// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
