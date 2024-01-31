
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
  if (window.scrollY > 2600) {
    const fallingShapes = document.querySelector('.falling-shapes');
    fallingShapes.classList.add('active')
  }

  // testimonials section
  if (window.scrollY > 3300) {
    const testimonials = document.querySelector('.testimonials-container');
    testimonials.style.position = 'sticky';
    testimonials.style.top = '100px'
  }

  if (window.scrollY > 3300) {
    quoteScroll();
  }

}, false);

function quoteScroll() {

  const quote1 = document.querySelector('.quote-1');
  const quote2 = document.querySelector('.quote-2');
  const quote3 = document.querySelector('.quote-3');
  const quote4 = document.querySelector('.quote-4');
  const quote5 = document.querySelector('.quote-5');

  const percentInSection = (window.scrollY - 3500) / 1000;

  const transformString = getTransformString(percentInSection)

  if (window.scrollY > 3500 && window.scrollY < 4500) {
    
    quote1.style.opacity = 1 - percentInSection;
    quote2.style.opacity = percentInSection;

    quote1.style.transform = transformString;
    quote2.style.transform = transformString

  } else if (window.scrollY > 4500 && window.scrollY < 5500) {
    
    quote2.style.opacity = 1 - (percentInSection - 1);
    quote3.style.opacity = percentInSection - 1;

    quote2.style.transform = transformString;
    quote3.style.transform = transformString;

  } else if (window.scrollY > 5500 && window.scrollY < 6500) {
    
    quote3.style.opacity = 1 - (percentInSection - 2);
    quote4.style.opacity = percentInSection - 2;

    quote3.style.transform = transformString;
    quote4.style.transform = transformString;

  } else if (window.scrollY > 6500 && window.scrollY < 7500) {
    
    quote4.style.opacity = 1 - (percentInSection - 3);
    quote5.style.opacity = percentInSection - 3;

    quote4.style.transform = transformString;
    quote5.style.transform = transformString;
  }
}

function getTransformString(percentInSection) {
  const isMobile = window.innerWidth < 600;

  const multiplier = isMobile ? 65 : 300;

  const units = isMobile ? 'vh' : 'px';

  const movement = multiplier * percentInSection;

  return `translate3d(0px, -${movement}${units}, 0px)`;
}
