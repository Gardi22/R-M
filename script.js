// Function to show the modal with dynamic content based on the person
function showModal(person) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  // Update modal content based on the person selected
  if (person === 'rahi') {
      modalTitle.textContent = "Rahi - The Visionary";
      modalDescription.textContent = 
          "Rahi is the brain behind over 500 technological marvels. Rumored to have created a time machine in his basement, Rahi is recognized as a global force in AI and robotics.";
  } else if (person === 'matin') {
      modalTitle.textContent = "Matin - The Innovator";
      modalDescription.textContent = 
          "Matin has developed technologies used on Mars missions. He also allegedly created a device to translate dolphin languages into human speech!";
  }

  // Show the modal by adding the 'active' class
  modal.classList.add('active');
}

// Function to hide the modal
function hideModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active'); // Hide the modal by removing the 'active' class
}

// Attach event listener to close button
document.querySelector('.close').addEventListener('click', hideModal);

// Prevent the modal from automatically showing when the page loads
// The modal only appears when the showModal function is triggered by a button click or other action.
