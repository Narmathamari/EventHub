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

  const searchInput = document.getElementById('eventSearch');
  const categoryButtons = document.querySelectorAll('.category-pill');
  const eventCards = document.querySelectorAll('.event-card');

  const applyFilter = () => {
    const query = searchInput?.value.trim().toLowerCase() || '';
    const activeCategory = document.querySelector('.category-pill.active')?.dataset.category || 'all';

    eventCards.forEach(card => {
      const title = card.dataset.title.toLowerCase();
      const category = card.dataset.category.toLowerCase();
      const matchesSearch = !query || title.includes(query) || card.textContent.toLowerCase().includes(query);
      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      card.style.display = matchesSearch && matchesCategory ? '' : 'none';
    });
  };

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      applyFilter();
    });
  });

  searchInput?.addEventListener('input', applyFilter);
});

function generateRegistrationId() {
  const timestamp = Date.now().toString().slice(-6);
  const suffix = Math.floor(100 + Math.random() * 900);
  return `EVT-${timestamp}-${suffix}`;
}
