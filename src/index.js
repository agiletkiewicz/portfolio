
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY / (document.body.offsetHeight - window.innerHeight);
  document.body.style.setProperty('--scroll', scrollPosition);

  const testimonials = document.querySelector('.testimonials-container');

  const borderBox = document.querySelector('.hero-border-box');

  const quote1 = document.querySelector('.quote-1');
  const quote2 = document.querySelector('.quote-2');
  const quote3 = document.querySelector('.quote-3');

  if (window.scrollY > 2000) {
    borderBox.style.display = 'none';
  } else {
    borderBox.style.display = 'block';
  }


  if (window.scrollY > 3300) {
    testimonials.style.position = 'sticky';
    testimonials.style.top = '100px'
  }

  console.log(window.scrollY)


  if (window.innerWidth < 600) {
    if (window.scrollY > 3600 && window.scrollY < 4600) {
      const percent = (window.scrollY - 3600) / 1000;
      
      quote1.style.opacity = 1 - percent;
      quote3.style.opacity = 1 - percent;
      quote2.style.opacity = percent;
  
      const move = 60 * percent;
  
      quote1.style.transform = `translate3d(0px, -${move}vh, 0px)`;
      quote2.style.transform = `translate3d(0px, -${move}vh, 0px)`;
  
    } else if (window.scrollY > 4600 && window.scrollY < 5600) {
      const percent = (window.scrollY - 3600) / 1000;
      
      quote2.style.opacity = 1 - (percent - 1);
      quote3.style.opacity = percent - 1;
  
      const move = 60 * percent;
  
      quote2.style.transform = `translate3d(0px, -${move}vh, 0px)`;
      quote3.style.transform = `translate3d(0px, -${move}vh, 0px)`;
    }
  } else {
    if (window.scrollY > 3800 && window.scrollY < 4800) {
      const percent = (window.scrollY - 3800) / 1000;
      
      quote1.style.opacity = 1 - percent;
      quote3.style.opacity = 1 - percent;
      quote2.style.opacity = percent;
  
      const move = 300 * percent;
  
      quote1.style.transform = `translate3d(0px, -${move}px, 0px)`;
      quote2.style.transform = `translate3d(0px, -${move}px, 0px)`;
  
    } else if (window.scrollY > 4800 && window.scrollY < 5800) {
      const percent = (window.scrollY - 3800) / 1000;
      
      quote2.style.opacity = 1 - (percent - 1);
      quote3.style.opacity = percent - 1;
  
      const move = 300 * percent;
  
      quote2.style.transform = `translate3d(0px, -${move}px, 0px)`;
      quote3.style.transform = `translate3d(0px, -${move}px, 0px)`;
    }
  }

}, false);
