function showInfo(person) {
  const infoText = document.getElementById('info-text');
  const moreInfoSection = document.getElementById('more-info');

  if (person === 'rahi') {
      infoText.textContent = "تەمەنی ١٥ سالە وە لە شاری سۆران دەژێت هەروەها درووستکەری پرۆگرامی گووگلە.";
  } else if (person === 'matin') {
      infoText.textContent = "تەمەنی ١٣ سالە وە خەلکی شاری سۆرانە هەروەها خاوەنی کۆمپانیای فیرارییە.";
  }

  moreInfoSection.classList.remove('hidden');
}

function hideInfo() {
  const moreInfoSection = document.getElementById('more-info');
  moreInfoSection.classList.add('hidden');
}
