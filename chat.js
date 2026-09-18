// Controle de Alternância de Abas na Sidebar
const navButtons = document.querySelectorAll('.nav-btn');
const tabs = document.querySelectorAll('.chat-tab');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.getAttribute('data-tab');

    navButtons.forEach(b => b.classList.remove('active'));
    tabs.forEach(t => t.classList.add('hidden'));

    btn.classList.add('active');
    document.getElementById(targetTab)?.classList.remove('hidden');
  });
});

// ABRIR SALA DE CHAT AO CLICAR EM UM AMIGO OU GRUPO
document.querySelectorAll('.chat-item').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.querySelector('.name').textContent;
    const roomTitle = document.getElementById('room-title');
    
    if (roomTitle) roomTitle.textContent = name;

    tabs.forEach(t => t.classList.add('hidden'));
    document.getElementById('tab-room')?.classList.remove('hidden');
  });
});