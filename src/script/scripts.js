// Dark/Light Mode Theme Toggle Button
const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    toggleTheme.classList.toggle('bi-cloud-sun');
    toggleTheme.classList.toggle('bi-moon-stars');

    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
});