async function converterMoeda() {
    const valorEmReais = document.getElementById('valor').value;

    if (isNaN(valorEmReais) || valorEmReais <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    const apiKey = 'YOUR_ACCESS_KEY'; // Replace with your actual access key
    const apiUrl = `https://open.er-api.com/v6/latest/${encodeURIComponent('BRL')}?apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result === 'error') {
            alert('Erro ao obter a taxa de câmbio. Tente novamente mais tarde.');
            return;
        }

        const taxaDeCambio = data.rates.USD; // Replace USD with your desired currency code

        const valorConvertido = valorEmReais * taxaDeCambio;

        const resultado = `R$ ${valorEmReais} em dólares (USD) é aproximadamente $ ${valorConvertido.toFixed(2)}`;

        document.getElementById('converter').innerText = resultado;
    } catch (error) {
        console.error('Erro na requisição API:', error);
        alert('Erro ao converter moeda. Tente novamente mais tarde.');
    }
}