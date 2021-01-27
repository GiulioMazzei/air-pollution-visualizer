const content = document.querySelector('.content');

const showMenu = (toggleID, navbarID) => {
  const toggle = document.getElementById(toggleID);
  navbarID = document.getElementById(navbarID);

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('expander');
      content.classList.toggle('expander-content');
    });
  }
};

showMenu('nav-toggle', 'navbar');
