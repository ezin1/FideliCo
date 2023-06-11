// Obtém o botão "Editar perfil"
const editProfileButton = document.querySelector('.button-edit-profile');
let overlay; // Variável global para o elemento overlay

// Função para exibir o overlay
function showOverlay() {
  // Cria o elemento overlay
  overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.innerHTML = `
    <div class="message-box">
      <h3>O que deseja editar?</h3>
      <div>
        <div class="buttons-message-box-edit">
          <button class="edit-name">Nome</button>
          <button class="edit-cellphone">Telefone</button>
          <button class="edit-email">Email</button>
          <button class="edit-password">Senha</button>
        </div>
        <div class="close-button-container">
          <button class="close-button-edit">
            <i class="material-icons">cancel</i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Adiciona o overlay à página
  document.body.appendChild(overlay);

  // Adiciona o evento de clique ao botão de fechar
  const closeButton = overlay.querySelector('.close-button-edit');
  closeButton.addEventListener('click', () => {
    // Remove o overlay da página
    overlay.remove();
  });

  // Adiciona o evento de clique aos botões de edição no overlay
  const editButtons = overlay.querySelectorAll('.buttons-message-box-edit button');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const option = button.textContent;
      showEditOverlay(option);
    });
  });
}

// Função para exibir o overlay de edição
function showEditOverlay(option) {
    // Remove o conteúdo atual do overlay
    const messageBox = overlay.querySelector('.message-box');
    messageBox.innerHTML = '';
  
    // Cria o elemento de título do overlay de edição
    const title = document.createElement('h3');
    title.textContent = `Editar ${option}`;
  
    // Cria o elemento de campo de edição
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Insira o novo ${option}`;
  
    // Cria o botão de salvar
    const saveButton = document.createElement('button');
    saveButton.classList.add('button-save');
    saveButton.textContent = 'Salvar';
  
    saveButton.style.backgroundColor = '#005CD6';
    saveButton.style.color = 'white';
    saveButton.style.padding = '10px 20px';
    saveButton.style.fontSize = '16px';
    saveButton.style.border = 'none';
    saveButton.style.cursor = 'pointer';
  
    // Cria o botão de fechar
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button-edit-2');
    closeButton.innerHTML = '<i class="material-icons" style="color: #FF3131">cancel</i>';
  
    // Adiciona os elementos ao messageBox
    messageBox.appendChild(closeButton);
    messageBox.appendChild(title);
    messageBox.appendChild(input);
    messageBox.appendChild(saveButton);
  
    // Adiciona o evento de clique ao botão de fechar
    closeButton.addEventListener('click', () => {
      // Remove o overlay de edição
      overlay.remove();
    });
  
    // Adiciona o evento de clique ao botão de salvar
    saveButton.addEventListener('click', () => {
      const newValue = input.value;
      if (newValue.trim() !== '') {
        // Aqui você pode implementar a lógica para salvar o novo valor
  
        // Remove o overlay de edição
        overlay.remove();
      } else {
        // Exibe uma mensagem de aviso para o usuário
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'Por favor, digite algo antes de salvar.';
        warningMessage.style.color = '#FF3131';
        messageBox.appendChild(warningMessage);
      }
    });
  }
// Adiciona o evento de clique ao botão "Editar perfil"
editProfileButton.addEventListener('click', showOverlay);
