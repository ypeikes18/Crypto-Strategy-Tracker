import AMMPool from './scripts/amm_pool.js';
import Chart from './scripts/chart.js';
import {sushiPoolAddresses, descriptions} from './scripts/resources.js';
import View from './scripts/view.js';
document.addEventListener('DOMContentLoaded', async function(){


  const sushiApi = new AMMPool('0xb5de0c3753b6e1b4dba616db82767f17513e6d4e');

  // let a = await sushiApi.lastXDays(30, 'volume');
  // console.log(a);

  const showInfo = (e) => {

    const info = document.getElementById('info');
    info.innerHTML = ''
    
    //create elements 
    const description = document.createElement('p');

    const pros = document.createElement('ol');
    pros.append('Pros:')

    const cons = document.createElement('ol');
    cons.append('Cons:')

    const select = document.createElement('select');
    

    //pull info on specific strategy to fill in the created elements
    const strategyInfo = descriptions[e.target.id]

    description.innerText = (strategyInfo['description'])
    
    info.append(description, pros,cons,select);


    strategyInfo['pros'].forEach(ele => {
      const li = document.createElement('li');
      li.append(`${ele}`);
      pros.append(li)
    });

    strategyInfo['cons'].forEach(ele => {
      const li = document.createElement('li');
      li.append(ele);
      cons.append(li)
    });

    strategyInfo['options'].forEach(ele => {
      let option = document.createElement('option');
      option.append(ele);
      select.append(option);
    });



  }


  const strategiesBar = document.getElementById('strategies-bar');
  strategiesBar.addEventListener('click', showInfo)      

  const sushiApi2 = new AMMPool('0xb5de0c3753b6e1b4dba616db82767f17513e6d4e');
  let obj = [{Date: 1, USD_total_volume: 1},
             {Date: 2, USD_total_volume: 4},
             {Date: 3, USD_total_volume: 9},
             {Date: 4, USD_total_volume: 2}];

  let graph = new Chart(obj, 'Days', 'APR', 'Strategy');



  graph.render();

  


});






