// Show more info
function showInfo(person) {
  const infoText = document.getElementById('info-text');
  const moreInfoSection = document.getElementById('more-info');

  if (person === 'rahi') {
      infoText.textContent = "رەهێ: بەرز بووە لە زانیاری کۆمپیووتری و نوێکارە.";
  } else if (person === 'matin') {
      infoText.textContent = "ماتین: پەروەردەی زانستی نوێ و چاکسازی بووە.";
  }

  moreInfoSection.classList.remove('hidden');
}

// Hide more info
function hideInfo() {
  const moreInfoSection = document.getElementById('more-info');
  moreInfoSection.classList.add('hidden');
}

// Game logic
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ballX = Math.random() * 280 + 10;
let ballY = Math.random() * 280 + 10;
const ballRadius = 10;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ff6f61";
  ctx.fill();
  ctx.closePath();
}

function moveBall() {
  ballX = Math.random() * 280 + 10;
  ballY = Math.random() * 280 + 10;
  drawBall();
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  const distance = Math.sqrt((clickX - ballX) ** 2 + (clickY - ballY) ** 2);
  if (distance < ballRadius) {
      alert("تۆ بردووە!");
      moveBall();
  }
});

// Initial draw
drawBall();
