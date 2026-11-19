const scholarships = [
  { title: 'Zambia Education Trust Scholarship', category: 'undergraduate', summary: 'Support for high-achieving Zambian students beginning their first degree.', funding: 'Tuition support', deadline: '30 Jun 2026' },
  { title: 'Commonwealth Master’s Award', category: 'postgraduate', summary: 'Study a postgraduate programme at a participating university in the Commonwealth.', funding: 'Fully funded', deadline: '15 Jul 2026' },
  { title: 'African Leadership Fellowship', category: 'fully-funded', summary: 'A transformational opportunity for emerging African leaders and innovators.', funding: 'Full costs covered', deadline: '01 Aug 2026' }
];

const list = document.querySelector('#scholarship-list');
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const empty = document.querySelector('#empty-state');

function label(value) { return value === 'fully-funded' ? 'Fully funded' : value.charAt(0).toUpperCase() + value.slice(1); }
function render() {
  const term = search.value.toLowerCase().trim();
  const selected = category.value;
  const matches = scholarships.filter(item => {
    const searchable = `${item.title} ${item.summary} ${item.category} ${item.funding}`.toLowerCase();
    return searchable.includes(term) && (selected === 'all' || item.category === selected);
  });
  list.innerHTML = matches.map(item => `<article class="scholarship-card"><span class="card-category">${label(item.category)}</span><h3>${item.title}</h3><p>${item.summary}</p><div class="card-meta"><span>Funding<strong>${item.funding}</strong></span><span>Deadline<strong>${item.deadline}</strong></span></div></article>`).join('');
  empty.hidden = matches.length > 0;
}
search.addEventListener('input', render);
category.addEventListener('change', render);
render();

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const links = document.querySelector('.nav-links');
  const open = links.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open')));
