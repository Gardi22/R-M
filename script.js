// Modal Logic
function showModal(person) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  if (person === 'rahi') {
      modalTitle.textContent = "Rahi - The Visionary";
      modalDescription.textContent = 
          "Rahi is the brain behind over 500 technological marvels. Rumored to have created a time machine in his basement, Rahi is recognized as a global force in AI and robotics.";
  } else if (person === 'matin') {
      modalTitle.textContent = "Matin - The Innovator";
      modalDescription.textContent = 
          "Matin has developed technologies used on Mars missions. He also allegedly created a device to translate dolphin languages into human speech!";
  }

  modal.classList.remove('hidden');
}

function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}
