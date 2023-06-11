const form = document.querySelector('form');
const submitButton = document.getElementById('submitRegister');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll('input');
  let isValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false;
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  });

  if (isValid) {
    // Todos os campos estão preenchidos, enviar o formulário ou realizar outras ações
    form.submit();
  } else {
    // Exibir overlay informando que todos os campos devem ser preenchidos
    showOverlay('Por favor, preencha todos os campos.');
  }
});

function showOverlay(message) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.innerHTML = `
    <div class="message-box">
      <h3>${message}</h3>
      <div class="close-button-container">
        <button class="close-button">
          <i class="material-icons">Fechar</i>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeButton = overlay.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    overlay.remove();
  });
}
