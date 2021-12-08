const sushiPoolAddresses = {
    'spell-weth': '0xb5de0c3753b6e1b4dba616db82767f17513e6d4e',
    'weth-usdt':'0x06da0fd433c1a5d7a4faa01111c044910a184553'
};

function createCSV(array){
    let csv = "data:text/csv;charset=utf-8,";
    for(key in array[0][0]){csv += `${key},`}
    csv = `${csv.slice(0,csv.length - 1)}\n`;
    array[0].forEach(object => {
        for(key in object) {
            csv += `${object[key]},`;
            csv = `${csv.slice(0,csv.length - 1)}\n`; 
        }
    });
    return csv;
}

module.exports  = sushiPoolAddresses ; 