const colorSquars = document.querySelectorAll('.product-color span');
const buyButton = document.querySelector('.product-footer__button');
const card = document.createElement('div');

colorSquars.forEach((span) => {
  span.addEventListener('click', () => {
    colorSquars.forEach((s) => s.classList.remove('selected'));
    span.classList.add('selected');
    buyButton.removeAttribute('disabled');
  });
});

buyButton.addEventListener('click', () => {
  card.textContent = 'Product added to cart';
  card.className = 'added-to-cart';
  document.body.appendChild(card);

  setTimeout(() => {
    card.remove();
  }, 1500);
});
