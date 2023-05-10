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
    alert('Por favor, preencha todos os campos!');
  } else {
    // Redirecione o usuário para a página home.html
    window.location.href = 'home.html';
  }
});