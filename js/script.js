// Função assíncrona para converter a moeda
async function converterMoeda() {
    const valorEmReais = document.getElementById('valor').value;

    // Verificar se o valor inserido é válido
    if (isNaN(valorEmReais) || valorEmReais <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    // URL da API de câmbio com o código da moeda base (BRL para Real Brasileiro)
    const apiUrl = `https://open.er-api.com/v6/latest/${encodeURIComponent('BRL')}`;

    // Faz uma requisição assíncrona para obter dados da API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Verifica se houve erro ao obter a taxa de câmbio
        if (data.result === 'error') {
            alert('Erro ao obter a taxa de câmbio. Tente novamente mais tarde.');
            return;
        }

        // Obtém a taxa de câmbio desejada (neste caso USD)
        const taxaDeCambio = data.rates.USD;

        const valorConvertido = valorEmReais * taxaDeCambio;

        // Exibe o resultado na página
        const resultado = `R$ ${valorEmReais} em dólares (USD) é aproximadamente $ ${valorConvertido.toFixed(2)}`;

        document.getElementById('converter').innerText = resultado;
    } 
    // Trata erros na requisição da API
    catch (error) {
        console.error('Erro na requisição API:', error);
        alert('Erro ao converter moeda. Tente novamente mais tarde.');
    }
}