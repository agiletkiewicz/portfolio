
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar-burger').addEventListener("click", (event) => toggleActive(event));
  });

  function toggleActive(event) {
      event.target.classList.toggle('is-active');
  }