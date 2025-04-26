const container = document.getElementById('cestas');

// Função para scroll manual via setas
function scrollCestas(direction) {
  const scrollAmount = 300;

  if (direction === 'left') {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

// Função para detectar se é touch (mobile)
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Se for touch, adiciona drag manual
if (isTouchDevice()) {
  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('touchend', () => {
    isDragging = false;
  });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // velocidade do arraste
    container.scrollLeft = scrollLeft - walk;
  });
}
