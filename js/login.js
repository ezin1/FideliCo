// Selecione o botão de login
const submitBtn = document.querySelector('#submitLogin');

// Adicione um evento de clique ao botão
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Previne o envio do formulário padrão

  // Obtenha o valor dos campos de login e senha
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Verifique se os campos foram preenchidos
  if (username === '' || password === '') {
    showOverlay('Por favor, preencha todos os campos.');
  } else {
    // Redirecione o usuário para a página home.html
    window.location.href = '/html/home.html';
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
          Fechar
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