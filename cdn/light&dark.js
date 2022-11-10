const setTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  
  // Default to light theme
  if (!currentTheme) {
    localStorage.setItem('theme', 'light');
    document.documentElement.dataset.theme = 'light';
    return;
  }
  
  document.documentElement.dataset.theme = currentTheme;
}

// Set theme on page load
setTheme();

const transition = () => {
  document.documentElement.classList.add('transition');
  
  setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
}

// Handle theme toggle
const themeToggleBtn = document.querySelector('.js-toggle-theme');

themeToggleBtn.addEventListener('click', () => {  
  const { theme } = document.documentElement.dataset;
  const themeTo = theme === 'light' ? 'dark' : 'light';
  const themeLabel = `Activate ${theme} mode`;
  
  document.documentElement.dataset.theme = themeTo;
  localStorage.setItem('theme', themeTo);
  
  themeToggleBtn.setAttribute('aria-label', themeLabel);
  themeToggleBtn.setAttribute('title', themeLabel);
  
  transition();
});