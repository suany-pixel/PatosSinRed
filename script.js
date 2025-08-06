// Cambiar entre modo claro y oscuro
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️ Cambiar Tema' : '🌙 Cambiar Tema';
});
