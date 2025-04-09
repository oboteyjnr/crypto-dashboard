
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const themeButton = document.getElementById('theme-toggle');
    themeButton.textContent = document.body.classList.contains('dark') ? '🌞 Light Mode' : '🌙 Dark Mode';
});

async function fetchCryptoData() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily');
    const data = await response.json();
    const prices = data.prices.map(price => {
        return { time: new Date(price[0]), value: price[1] };
    });

    // Render the chart with data
    renderChart(prices);
}

function renderChart(prices) {
    const ctx = document.createElement('canvas');
    document.getElementById('chart-container').appendChild(ctx);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: prices.map(price => price.time),
            datasets: [{
                label: 'BTC Price (USD)',
                data: prices.map(price => price.value),
                fill: true,
                borderColor: '#f7931a',
                backgroundColor: 'rgba(247, 147, 26, 0.2)',
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
        },
    });
}

fetchCryptoData();
