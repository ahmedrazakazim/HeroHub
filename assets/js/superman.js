const darkmodeButton = document.getElementById('darkmode');
const body = document.body;

// Sync dark mode from localStorage on page load
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkmodeButton.classList.add('dark-mode');
}

darkmodeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkmodeButton.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// BFCache fix
window.addEventListener('pageshow', function(event) {
  let isBack = event.persisted;
  try {
    if (!isBack && window.performance && window.performance.getEntriesByType) {
      let entries = window.performance.getEntriesByType('navigation');
      if (entries.length > 0 && entries[0].type === 'back_forward') isBack = true;
    }
  } catch(e) {}
  document.querySelectorAll('#overlay').forEach(function(ov) { ov.remove(); });
  document.body.classList.remove('locked');
});
