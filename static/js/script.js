document.addEventListener('DOMContentLoaded', () => {
  const registrationId = document.getElementById('registrationId');
  if (registrationId) {
    registrationId.value = generateRegistrationId();
  }

  const form = document.getElementById('registrationForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      const fullName = document.getElementById('fullName').value.trim();
      const emailAddress = document.getElementById('emailAddress').value.trim();
      if (!fullName || !emailAddress) {
        event.preventDefault();
        alert('Please complete your name and email before submitting.');
      }
    });
  }
});

function generateRegistrationId() {
  const timestamp = Date.now().toString().slice(-6);
  const suffix = Math.floor(100 + Math.random() * 900);
  return `EVT-${timestamp}-${suffix}`;
}
