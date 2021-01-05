
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar-burger').addEventListener("click", (event) => toggleActive(event));
  });

  function toggleActive(event) {
      event.target.classList.toggle('is-active');

      const menu = document.querySelector('#navbarMenuHeroA');
      menu.classList.toggle('is-active');
  }