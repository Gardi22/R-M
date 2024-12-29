function showInfo(person) {
  const infoText = document.getElementById('info-text');
  const moreInfoSection = document.getElementById('more-info');

  if (person === 'rahi') {
      infoText.textContent = "رەهێ تێکنیشنەکی پەروەردەی بواری کۆمپیووتر و چاکسازی.";
  } else if (person === 'matin') {
      infoText.textContent = "ماتین بەرز بووە لە بواری چاکسازی ئەلیکترۆنی و کەلوپەلی.";
  }

  moreInfoSection.classList.remove('hidden');
}

function hideInfo() {
  const moreInfoSection = document.getElementById('more-info');
  moreInfoSection.classList.add('hidden');
}
