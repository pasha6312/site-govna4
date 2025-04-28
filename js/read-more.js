document.querySelectorAll('.read-more').forEach((button) => {
  button.addEventListener('click', (e) => {
    const targetId= button.getAttribute('data-target');
    const parentBlock=document.getElementById(targetId);

    if (parentBlock) {
      const hiddenElements = parentBlock.querySelectorAll('.hidden');

      hiddenElements.forEach(el => {
        el.classList.remove('hidden'); // Показываем элемент
      });

      button.style.display = 'none';

    }
  })
})
