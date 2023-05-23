const hamburguerBtn = document.querySelector('#hamburguer-btn');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close');

hamburguerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    // Array de valores de exemplo para as barras de progresso
    const exampleValues = [75, 50, 80];
    
    // Obtém todas as barras de progresso
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Itera sobre cada barra de progresso e atribui os valores correspondentes
    progressBars.forEach((progressBar, index) => {
      // Verifica se há um valor correspondente no array exampleValues
      if (exampleValues[index] !== undefined) {
        // Obtém o valor da barra de progresso do array
        const progressValue = exampleValues[index];
      
        // Verifica se o valor é válido (entre 0 e 100)
        if (progressValue >= 0 && progressValue <= 100) {
          // Calcula a largura do preenchimento da barra
          const fillWidth = (progressValue / 100) * 100;
        
          // Define a largura de preenchimento da barra
          progressBar.style.width = `${fillWidth}%`;
        } else {
          // Valor inválido, define a largura como 100%
          progressBar.style.width = '100%';
        }
      }
    });
  });

