const form = document.querySelector('.form-add-card');
const inputEmpresaName = document.getElementById('input-company-name');
const inputValidationCode = document.getElementById('input-validation-code');
const inputCompanyCNPJ = document.getElementById('input-company-cnpj');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio do formulário padrão

  const empresaName = inputEmpresaName.value.trim();
  const validationCode = inputValidationCode.value.trim();
  const companyCNPJ = inputCompanyCNPJ.value.trim();
  if (empresaName === '' || validationCode === '' || companyCNPJ === '') {
    showOverlay('Por favor, preencha todos os campos.');
  } else {
    showOverlay(`Cartão fidelidade da empresa ${empresaName}, portadora do CNPJ: ${companyCNPJ} gerado com sucesso!`);
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
