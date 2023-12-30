
window.addEventListener('scroll', () => {

  // set css variable for scroll position
  const scrollPercent = window.scrollY / (document.body.offsetHeight - window.innerHeight);
  document.body.style.setProperty('--scroll', scrollPercent);

  // hero section
  const borderBox = document.querySelector('.hero-border-box');

  if (window.scrollY > 2000) {
    borderBox.style.display = 'none';
  } else {
    borderBox.style.display = 'block';
  }

  // technical section
  if (window.scrollY > 2400) {
    const fallingShapes = document.querySelector('.falling-shapes');
    fallingShapes.classList.add('active')
  }

  // testimonials section
  if (window.scrollY > 3300) {
    const testimonials = document.querySelector('.testimonials-container');
    testimonials.style.position = 'sticky';
    testimonials.style.top = '100px'
  }

  if (window.scrollY > 3600) {
    quoteScroll();
  }

}, false);

function quoteScroll() {

  const quote1 = document.querySelector('.quote-1');
  const quote2 = document.querySelector('.quote-2');
  const quote3 = document.querySelector('.quote-3');

  const percentInSection = (window.scrollY - 3800) / 1000;

  const transformString = getTransformString(percentInSection)

  if (window.scrollY > 3800 && window.scrollY < 4800) {
    
    quote1.style.opacity = 1 - percentInSection;
    quote3.style.opacity = 1 - percentInSection;
    quote2.style.opacity = percentInSection;

    quote1.style.transform = transformString;
    quote2.style.transform = transformString

  } else if (window.scrollY > 4800 && window.scrollY < 5800) {
    
    quote2.style.opacity = 1 - (percentInSection - 1);
    quote3.style.opacity = percentInSection - 1;

    quote2.style.transform = transformString;
    quote3.style.transform = transformString;
  }
}

function getTransformString(percentInSection) {
  const isMobile = window.innerWidth < 600;

  const multiplier = isMobile ? 60 : 300;

  const units = isMobile ? 'vh' : 'px';

  const movement = multiplier * percentInSection;

  return `translate3d(0px, -${movement}${units}, 0px)`;
}
