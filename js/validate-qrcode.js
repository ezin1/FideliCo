// Obtém o elemento do botão de leitura de QR code
const qrCodeButton = document.querySelector('.qr-code-icon');

// Adiciona o evento de clique ao botão de leitura de QR code
qrCodeButton.addEventListener('click', async () => {
  try {
    // Solicita permissão para acessar a câmera
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Cria um elemento de vídeo para exibir a câmera
    const videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    videoElement.play();

    // Cria um elemento para exibir a saída do código QR lido
    const qrCodeOutput = document.createElement('div');
    qrCodeOutput.classList.add('qr-code-output');

    // Adiciona o elemento de vídeo e o elemento de saída do QR code à página
    document.body.appendChild(videoElement);
    document.body.appendChild(qrCodeOutput);

    // Função para processar o código QR lido
    function handleQRCode(decodedText) {
      // Aqui você pode implementar a lógica para validar o código QR lido

      // Exibe o resultado do código QR na saída
      qrCodeOutput.textContent = `QR Code lido: ${decodedText}`;
    }

    // Inicia a leitura do código QR a partir do vídeo
    const qrCodeReader = new window.QRCodeReader(videoElement, handleQRCode);
    qrCodeReader.start();

  } catch (error) {
    console.error('Erro ao acessar a câmera:', error);
  }
});
