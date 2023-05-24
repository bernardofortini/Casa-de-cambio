export function fetchExchange(inputValue) {
    return fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
      .then(response => response.json())
      .then(result => {
        const base = result.base;
  
        if(base !== inputValue.toUpperCase()) {
          throw new Error('Tem certeza que digitou corretamente, lírio do vale?');
        }
  
        return result;
      })
  }