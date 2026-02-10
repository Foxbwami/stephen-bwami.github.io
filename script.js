const whatsappBtn = document.getElementById('whatsappBtn');
const modal = document.getElementById('whatsappModal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

whatsappBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

confirmBtn.addEventListener('click', () => {
  window.open('https://wa.me/256000000000', '_blank');
  modal.style.display = 'none';
});
