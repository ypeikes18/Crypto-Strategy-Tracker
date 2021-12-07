

document.addEventListener('DOMContentLoaded', function(){

  const sushiApi = require('./scripts/amm_pool.js');
  const chart = require('./scripts/chart.js');
  const sushiPoolAddresses = require('./scripts/resources.js');


  let li = document.querySelector('li');
  li.firstChild.innerText = 'test';



  // var axis = d3.svg.axis()
  //              .scale(widthScale);

  


  // class coingeckoRequest{

  //   static url = 'https://api.coingecko.com/api/v3/simple/price?';

  //   static getPrice(coin) {
  //       let res = fetch(`${url}ids=${coin}vs_currencies=usd`)
  //           .then(response => response = response.json())
  //           .then(response => res = response)
  //       return res;
  //   }
  // }

});






