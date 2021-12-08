import AMMPool from './scripts/amm_pool.js';
import Chart from './scripts/chart.js';
// require('./scripts/resources.js');



document.addEventListener('DOMContentLoaded', function(){
  


  // const sushiApi2 = new AMMPool('0xb5de0c3753b6e1b4dba616db82767f17513e6d4e');
  let obj = [{x: 1, y: 1},{x: 2, y: 4},{x: 3, y: 9},{x: 4, y: 16}]
  let graph = new Chart(obj, 'Days', 'APR', 'Strategy');



  graph.render();


});






