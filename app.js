const navToggle = document.getElementById('nav-toggle');
const sidebarMenu = document.getElementById('sidebar-menu');
const menuBars = document.getElementById('menu-bars');
const menuCancel = document.getElementById('menu-cancel');

navToggle.onclick = function() {
  sidebarMenu.classList.toggle('active');
  // Toggle icons
  if (sidebarMenu.classList.contains('active')) {
    menuBars.style.display = 'none';
    menuCancel.style.display = 'inline';
  } else {
    menuBars.style.display = 'inline';
    menuCancel.style.display = 'none';
  }
};

// Optional: close menu when a link is clicked
sidebarMenu.querySelectorAll('a').forEach(link => {
  link.onclick = () => {
    sidebarMenu.classList.remove('active');
    menuBars.style.display = 'inline';
    menuCancel.style.display = 'none';
  };
});