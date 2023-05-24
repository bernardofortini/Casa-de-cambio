
import './style.css'

const elementoUl = document.querySelector('.container main ul');
const elementoh2 = document.querySelector('.container main h2');

function criarElemtoLi (nome, valor) {
    const elementoLi =document.createElement('li');

    elementoLi.innerHTML =
    `<b>${nome}</b>
    <span>${valor}</span>`

return elementoLi;
}


function receberCoins (coins, basecoins) {
    elementoUl.innerHTML = '';

  coins.forEach(coin => {
    const nome = coin.nome
    const valor = coin.valor

    const elementoLi = criarElemtoLi(nome,valor)
    
    elementoUl.appendChild(elementoLi)



  });
}

