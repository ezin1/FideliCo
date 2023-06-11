// Função para gerar um valor aleatório entre 0 e 10
function getRandomValue() {
  return Math.floor(Math.random() * 11);
}

// Função para gerar um código aleatório de 9 dígitos
function generateRandomCode() {
  let code = '';
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 9; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

// Obtém todos os elementos com a classe 'card-vertical'
const cards = document.querySelectorAll('.card-vertical');

// Itera sobre cada card
cards.forEach((card) => {
  // Obtém a barra de progresso dentro do card
  const progressBar = card.querySelector('.progress-bar');

  // Obtém o valor aleatório
  const randomValue = getRandomValue();

  // Atribui o valor aleatório ao atributo data-value do card
  card.setAttribute('data-value', randomValue);

  // Calcula a largura da barra de progresso com base no valor aleatório
  const width = (randomValue / 10) * 100;

  // Cria um elemento para representar o preenchimento da barra de progresso
  const fillElement = document.createElement('div');
  fillElement.classList.add('progress-bar-fill');
  fillElement.style.width = `${width}%`;

  // Adiciona o elemento de preenchimento à barra de progresso
  progressBar.appendChild(fillElement);

  // Atualiza o texto do segundo elemento <h2> dentro do card com o valor aleatório
  const h2 = card.querySelector('h2:last-child');
  h2.textContent = `${randomValue}/10`;

  // Adiciona o evento de clique à barra de progresso
  progressBar.addEventListener('click', () => {
    // Obtém o valor do data-value do card clicado
    const cardValue = parseInt(card.dataset.value);

    if (cardValue < 10) {
      // Exibe a caixa de mensagem informando que o cartão não está totalmente preenchido
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.innerHTML = `
        <div class="message-box">
          <p>O cartão ainda não está totalmente preenchido.</p>
          <button class="close-button">Fechar</button>
        </div>
      `;

      // Adiciona o overlay à página
      document.body.appendChild(overlay);

      // Adiciona o evento de clique ao botão de fechar
      const closeButton = overlay.querySelector('.close-button');
      closeButton.addEventListener('click', () => {
        // Remove o overlay da página
        overlay.remove();
      });
    } else {
      // Exibe a caixa de mensagem com o botão para gerar o código
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.innerHTML = `
        <div class="message-box">
          <p>Clique no botão abaixo para gerar o código:</p>
          <div id="codeDisplay"></div> 
          <div class="div-received-code">
          <button class="generate-code-button">Gerar Código</button>
          <button class="close-button">Fechar</button>
          </div>
        </div>
      `;

      // Adiciona o overlay à página
      document.body.appendChild(overlay);

      // Declara a variável generatedCode no escopo mais amplo
      let generatedCode;

      // Adiciona o evento de clique ao botão de gerar código
      const generateCodeButton = overlay.querySelector('.generate-code-button');
      generateCodeButton.addEventListener('click', () => {
        const codeDisplay = overlay.querySelector('#codeDisplay');
        generatedCode = generateRandomCode();
        codeDisplay.textContent = generatedCode;
        generateCodeButton.disabled = true; // Desabilita o botão de gerar código
      });

      // Adiciona o evento de clique ao #codeDisplay para copiar o código
      codeDisplay.addEventListener('click', () => {
        if (generatedCode) {
          const tempInput = document.createElement('input');
          tempInput.value = generatedCode;
          document.body.appendChild(tempInput);
      
          tempInput.select();
          tempInput.setSelectionRange(0, 99999);
      
          document.execCommand('copy');
      
          document.body.removeChild(tempInput);
      
          codeDisplay.textContent = 'Código copiado para a área de transferência!';
          codeDisplay.classList.add('copied');
        }
      });

      // Adiciona o overlay à página
      document.body.appendChild(overlay);

      // Adiciona o evento de clique ao botão de fechar
      const closeButton = overlay.querySelector('.close-button');
      closeButton.addEventListener('click', () => {
        // Remove o overlay da página
        overlay.remove();
      });
    }
  });
});
