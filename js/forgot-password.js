// Obtém o formulário
const form = document.querySelector('.forgot-password');

// Adiciona o evento de envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Verifica se os campos foram preenchidos
  const username = document.querySelector('#username-forgot').value.trim();
  const email = document.querySelector('#email-recup').value.trim();

  if (username === '' || email === '') {
    // Mostra o overlay informando que todos os campos devem ser preenchidos
    showOverlay('Por favor, preencha todos os campos.');
    return;
  }

  // Simulação de envio do formulário
  // Aqui você pode adicionar a lógica real de envio do formulário de recuperação de senha

  // Exibe uma mensagem de sucesso
  showOverlay('Um email de recuperação de senha foi enviado para o seu email!')

  // Limpa os campos
  document.querySelector('#username-forgot').value = '';
  document.querySelector('#email-recup').value = '';
});

function showOverlay(message) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.innerHTML = `
    <div class="message-box">
      <h3>${message}</h3>
      <div class="close-button-container">
        <button class="close-button">
          <i>Fechar</i>
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
