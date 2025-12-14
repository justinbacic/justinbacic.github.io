const container = document.querySelector('.stars');

const density = 0.0001;
const MAX_STARS = 400;

const numStars = Math.min(
  Math.floor(window.innerWidth * window.innerHeight * density),
  MAX_STARS
);

const cols = Math.floor(Math.sqrt(numStars));
const rows = Math.ceil(numStars / cols);

let index = 0;

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    if (index >= numStars) break;
    index++;

    const star = document.createElement('div');
    star.classList.add('star');

    const cellW = 100 / cols;
    const cellH = 100 / rows;

    star.style.left = `${x * cellW + Math.random() * cellW}vw`;
    star.style.top = `${y * cellH + Math.random() * cellH}vh`;

    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    if (Math.random() < 0.5) {
      star.style.animationDuration = `${(Math.random() + 0.8).toFixed(2)}s`;
      star.style.animationDelay = `${(Math.random() * 2).toFixed(2)}s`;
    } else {
      star.style.animation = 'none';
    }

    container.appendChild(star);
  }
}
