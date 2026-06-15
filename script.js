const slider = document.getElementById('productSlider');
let slideTimer;

if (slider) {
  slider.addEventListener('mouseenter', () => {
    slideTimer = setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: 360, behavior: 'smooth' });
      }
    }, 1200);
  });

  slider.addEventListener('mouseleave', () => clearInterval(slideTimer));
}
