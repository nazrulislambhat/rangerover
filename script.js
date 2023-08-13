const colorSpans = document.querySelectorAll('.product-color span');
const buyButton = document.querySelector('.product-footer__button');
const popover = document.createElement('div');

colorSpans.forEach((span) => {
  span.addEventListener('click', () => {
    colorSpans.forEach((s) => s.classList.remove('selected'));
    span.classList.add('selected');
    buyButton.removeAttribute('disabled');
  });
});

buyButton.addEventListener('click', () => {
  popover.textContent = 'Product added to cart!';
  popover.className = 'popover';
  document.body.appendChild(popover);

  setTimeout(() => {
    popover.remove();
  }, 2000);
});
