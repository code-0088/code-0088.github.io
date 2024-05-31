async function fetchIndicators() {
    try {
      const response = await fetch('https://mindicador.cl/api');
      const data = await response.json();
  
      const indicators = [
        { name: 'Dólar', value: data.dolar.valor, unit: 'CLP' },
        { name: 'UF', value: data.uf.valor, unit: 'CLP' },
        { name: 'Euro', value: data.euro.valor, unit: 'CLP' },
        { name: 'Bitcoin', value: data.bitcoin.valor, unit: 'USD' },
        // Añade más indicadores si es necesario
      ];
  
      const ticker = document.getElementById('ticker');
      const tickerDuplicate = document.getElementById('ticker-duplicate');
  
      indicators.forEach(indicator => {
        const item = document.createElement('div');
        item.className = 'ticker-item';
        item.textContent = `${indicator.name}: ${indicator.value} ${indicator.unit}`;
        ticker.appendChild(item);
      });
  
      // Duplicar el contenido para que se vea continuo
      tickerDuplicate.innerHTML = ticker.innerHTML;
    } catch (error) {
      console.error('Error al obtener los indicadores:', error);
    }
  }
  
  // Llama a la función para obtener los indicadores al cargar la página
  fetchIndicators();
  