// Modal Logic
function showModal(person) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  if (person === 'rahi') {
      modalTitle.textContent = "رەهێ";
      modalDescription.textContent = "رەهێ داهێنەری زانستی کۆمپیوتری بەرزی تایبەتیە، بە شەڕنامەی ٢٠ یاری ڕوونەکی.";
  } else if (person === 'matin') {
      modalTitle.textContent = "ماتین";
      modalDescription.textContent = "ماتین توانایە لە بەکارهێنانی زانیاری نوێیە و ئەو بەشە یەکەمە بە چاکسازی تایبەتی.";
  }

  modal.classList.remove('hidden');
}

function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

// Flappy Bird Game Logic
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let birdY = 200;
let birdVelocity = 0;
const gravity = 0.5;
const jump = -10;
const birdRadius = 10;

const pipeWidth = 40;
const pipeGap = 100;
let pipeX = canvas.width;
let pipeHeight = Math.random() * (canvas.height - pipeGap);

function drawBird() {
  ctx.beginPath();
  ctx.arc(50, birdY, birdRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#e43f5a';
  ctx.fill();
  ctx.closePath();
}

function drawPipe() {
  ctx.fillStyle = '#1f4068';
  ctx.fillRect(pipeX, 0, pipeWidth, pipeHeight);
  ctx.fillRect(pipeX, pipeHeight + pipeGap, pipeWidth, canvas.height - pipeHeight - pipeGap);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  birdVelocity += gravity;
  birdY += birdVelocity;

  pipeX -= 2;
  if (pipeX + pipeWidth < 0) {
      pipeX = canvas.width;
      pipeHeight = Math.random() * (canvas.height - pipeGap);
  }

  if (
      (birdY - birdRadius < 0 || birdY + birdRadius > canvas.height) ||
      (pipeX < 50 + birdRadius && pipeX + pipeWidth > 50 - birdRadius && (birdY - birdRadius < pipeHeight || birdY + birdRadius > pipeHeight + pipeGap))
  ) {
      alert("تۆ بردووە!");
      birdY = 200;
      birdVelocity = 0;
      pipeX = canvas.width;
  }

  drawBird();
  drawPipe();
  requestAnimationFrame(updateGame);
}

canvas.addEventListener('click', () => {
  birdVelocity = jump;
});

updateGame();
