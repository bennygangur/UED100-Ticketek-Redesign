/* UED100 Assessment 2: client-side interactions for a simulated Ticketek redesign.
   No back-end connections, payments, reservations or ticket authentication are made. */
'use strict';
const categories = [
  { id: 1, seat: 'Level 2 / 2A' },
  { id: 2, seat: 'Level 1 Wing' },
  { id: 3, seat: 'Level 1 Goals' },
  { id: 4, seat: 'Level 4 Front' },
  { id: 5, seat: 'Level 4 Middle' },
  { id: 6, seat: 'Level 4 Back' },
  { id: 7, seat: 'Level 4 Goals' }
];
const views = new Set(['home','event','tickets','seating','summary','confirmed','verify','verify-result','ballot','hospitality','cricket','concert','contact']);
const appState = { selectedCategory: null, quantity: 1 };
const $ = (selector) => document.querySelector(selector);

// Render seating categories as genuine button elements to support keyboard and touch input.
const categoryList = $('#categoryList');
categories.forEach((category) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'category-choice';
  button.dataset.category = String(category.id);
  const number = document.createElement('strong');
  number.textContent = `CATEGORY ${category.id}`;
  const area = document.createElement('span');
  area.textContent = category.seat;
  button.append(number, area);
  button.addEventListener('click', () => {
    appState.selectedCategory = category;
    appState.quantity = 1;
    $('#ticketQuantity').value = '1';
    window.location.hash = '#summary';
  });
  categoryList.append(button);
});

// Route with URL hashes so browser back and forward work without a framework.
function showRoute() {
  let hash = decodeURIComponent(window.location.hash.slice(1) || 'home');
  if (hash === 'featured') {
    hash = 'home';
    requestAnimationFrame(() => $('#featured').scrollIntoView({ behavior: 'auto' }));
  }
  const route = views.has(hash) ? hash : 'home';
  if ((route === 'summary' || route === 'confirmed') && !appState.selectedCategory) {
    window.location.replace('#seating'); return;
  }
  document.querySelectorAll('[data-view]').forEach((element) => { element.hidden = element.dataset.view !== route; });
  document.querySelectorAll('[data-nav]').forEach((element) => {
    if (element.dataset.nav === route) element.setAttribute('aria-current', 'page');
    else element.removeAttribute('aria-current');
  });
  if (route === 'summary') updateSummary();
  if (route === 'confirmed') updateConfirmation();
  $('#siteNav').classList.remove('open');
  $('#menuToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  const heading = $(`#view-${route} h1`);
  if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
}
window.addEventListener('hashchange', showRoute);
showRoute();

function updateSummary() {
  const cat = appState.selectedCategory;
  if (!cat) return;
  $('#summaryCategory').textContent = `Category ${cat.id} — ${cat.seat}`;
  $('#reviewCategory').textContent = `Category ${cat.id} (${cat.seat})`;
  $('#reviewQuantity').textContent = String(appState.quantity);
}
$('#ticketQuantity').addEventListener('change', (event) => {
  appState.quantity = Number(event.target.value);
  updateSummary();
});
$('#confirmSelection').addEventListener('click', () => {
  if (!appState.selectedCategory) { window.location.hash = '#seating'; return; }
  window.location.hash = '#confirmed';
});
function updateConfirmation() {
  const cat = appState.selectedCategory;
  if (!cat) return;
  $('#confirmationDescription').textContent = `Category ${cat.id}: ${cat.seat} • ${appState.quantity} ${appState.quantity === 1 ? 'ticket' : 'tickets'} selected.`;
}

// Mobile navigation and content-based event search.
$('#menuToggle').addEventListener('click', () => {
  const next = $('#menuToggle').getAttribute('aria-expanded') !== 'true';
  $('#menuToggle').setAttribute('aria-expanded', String(next));
  $('#siteNav').classList.toggle('open', next);
});
function filterEvents(query = '', kind = '') {
  const norm = query.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll('.event-card').forEach((card) => {
    const match = (!norm || card.dataset.search.includes(norm)) && (!kind || card.dataset.kind === kind);
    card.hidden = !match;
    if (match) visible++;
  });
  $('#noResults').hidden = visible !== 0;
  $('#searchStatus').textContent = norm || kind ? `${visible} event ${visible === 1 ? 'result' : 'results'} found.` : '';
}
$('#searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  filterEvents($('#eventSearch').value);
  $('#featured').scrollIntoView({ behavior: 'smooth' });
});
$('#eventSearch').addEventListener('input', (event) => filterEvents(event.target.value));
document.querySelectorAll('[data-filter-link]').forEach((link) => link.addEventListener('click', () => {
  $('#eventSearch').value = '';
  filterEvents('', link.dataset.filterLink);
  // Route update comes from the anchor; scroll to event results after view swap.
  setTimeout(() => $('#featured').scrollIntoView({ behavior: 'smooth' }), 0);
}));

// Demonstration check validates fields, not the authenticity of tickets or uploaded files.
$('#verificationForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const field = $('#verifyFile');
  const error = $('#verifyError');
  error.hidden = true;
  const file = field.files && field.files[0];
  if (file && (file.size > 10 * 1024 * 1024 || !['application/pdf','image/jpeg','image/png'].includes(file.type))) {
    error.textContent = 'Use a JPG, PNG or PDF file smaller than 10 MB.';
    error.hidden = false;
    field.focus(); return;
  }
  if (!$('#verificationForm').reportValidity()) return;
  // Deliberately do not read, upload, persist or authenticate entered data.
  window.location.hash = '#verify-result';
});
$('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!$('#contactForm').reportValidity()) return;
  $('#contactFeedback').textContent = 'Your example enquiry passed form validation. This is a demonstration: nothing was sent or saved.';
});
