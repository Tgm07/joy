const $ = selector => document.querySelector(selector);
const icons = {
 instagram: '<rect x="4" y="4" width="24" height="24" rx="7"/><circle cx="16" cy="16" r="6"/><circle cx="23.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>',
 x: '<path d="M6 5h6l14 22h-6L6 5Z"/><path d="M25 5 7 27"/>',
 snapchat: '<path d="M16 3c-5 0-7 4-7 8l.3 4-3.4-1.2c-1.7-.6-2.4 1.6-.7 2.4l3.6 1.5c-.8 3.3-2.8 5-5.5 6 1.1 1.4 2.7 1.5 4 1.6l.7 2.1c2.3-.7 3.5-.1 5 1 1.2.8 2.8.8 4 0 1.5-1.1 2.7-1.7 5-1l.7-2.1c1.3-.1 2.9-.2 4-1.6-2.7-1-4.7-2.7-5.5-6l3.6-1.5c1.7-.8 1-3-.7-2.4L23 15l.3-4c0-4-2.3-8-7.3-8Z"/>',
 pinterest: '<circle cx="16" cy="16" r="13"/><path d="m12 27 3.4-15m-.9 4c-3-7 8-9 7 0-.5 5-6 6-7 1m-4 2c-4-3-3-11 3-12"/>'
};
window.portfolio.socials.forEach(social => {
 const url = new URL(social.url);
 if (url.protocol !== 'https:') return;
 const card = document.createElement('a'); card.href = url.href; card.target = '_blank'; card.rel = 'noopener noreferrer'; card.className = 'social-card glass ' + social.key;
 card.setAttribute('aria-label', social.name + ', ' + social.handle + ' (opens in a new tab)');
 card.innerHTML = '<span class="card-top"><span class="social-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[social.key] + '</svg></span><span class="card-arrow" aria-hidden="true">↗</span></span><span class="social-name"></span><span class="social-handle"></span><span class="social-note"></span>';
 card.querySelector('.social-name').textContent = social.name;
 card.querySelector('.social-handle').textContent = social.handle;
 card.querySelector('.social-note').textContent = social.note;
 $('#socials').append(card);
});
$('#open-project').addEventListener('click', () => $('#project-dialog').showModal());
$('.dialog-close').addEventListener('click', () => $('#project-dialog').close());
$('#project-dialog').addEventListener('click', e => {
 if(e.target !== e.currentTarget) return;
 const r = e.currentTarget.getBoundingClientRect();
 if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.currentTarget.close();
});
function markNavigation(hash) { document.querySelectorAll('.nav a').forEach(a => { const active = a.hash === hash; a.classList.toggle('active', active); if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); }); }
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) markNavigation('#' + entry.target.id); }),{rootMargin:'-15% 0px -55% 0px'});
['home','connect','about'].forEach(id => observer.observe(document.getElementById(id)));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click',() => markNavigation(a.hash)));
$('#year').textContent = new Date().getFullYear();
