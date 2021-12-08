export class AMMPool {

    constructor(address) {
        this.address = address;
        this.secondsInDay = 86400; 
        this.sushiUrl = "https://api2.sushipro.io/?" 
        this.chainIDs = {ethereum: 1, 
                        matic: 137, 
                        fantom: 250, 
                        arbitrum: 42161}
    } 
    //= "data:text/csv;charset=utf-8,";
    createCSV(array){
        let csv; 
        for(let property in array[0][0]){csv += `${property},`}
        csv = `${csv.slice(0,csv.length - 1)}\n`;
        array[0].forEach(object => {
            for(let key in object) {
                csv += `${object[key]},`;
                csv = `${csv.slice(0,csv.length - 1)}\n`; 
            }
        });
        return csv;
    }

    requestUrl(optionsHash){ //url to request historical liquidity or volume
        if(!optionsHash['chainID']) optionsHash['chainID'] = 1; 
        
        let requestUrl = `${this.sushiUrl}action=${optionsHash['action']}`+
                            `&pair=${this.address}`+
                            `&from=${optionsHash['from']}&to=${optionsHash['to']}`+
                            `&chainID=${optionsHash['chainID']}`;
        return requestUrl;
    }



    async getHistoricalData(type, from, to) { //type can be liquidity or volume
        let arr = [];
        let result = await fetch(this.requestUrl({action: `get_historical_${type}`,
                                                  to: to,
                                                  from: from,
                                                  pair: this.address,}))
                        .then(result => result.json())
                        .then(result => result[1][0])
                        .then(result => arr.push(result));
        return arr;
    }

    lastXDays(x, type) { // gets historical data for the last x days
        let data  = [];
        let resolved = [];
        let day;
        const startTime = this.now() - (x * this.secondsInDay) + 1;
        for(let i = startTime; i <= this.now(); i += this.secondsInDay) {
            day =  this.getHistoricalData(type, i, i + this.secondsInDay - 1);
            data = data.concat(day);
        }
        Promise.all(data)
               .then(result => resolved.push(result.flat()));
        return  resolved;
    }

    extractData(dataArray, type) {
        let extracted = [];
        (dataArray[0]).forEach((ele) => {
            extracted.push(ele[type]);
        });
        return extracted;
    }

    now() { 
        let now  = new Date().getTime();
        now = Math.round(now / 1000);
        return Math.round(now);
    }
    
    getDailyRevenue(volumeArray, percentage = 0.0025){
        const fees = [];
        volumeArray.forEach(ele => fees.push(ele * percentage));
        return fees;
    }


    



}



// const sushiApi = new AMMPool('0xb5de0c3753b6e1b4dba616db82767f17513e6d4e');

// let a = sushiApi.lastXDays(30, 'volume');
// console.log(a);

// let b = sushiApi.createCSV(a);
// console.log(b);
// let volumes = sushiApi.extractData(a, 'USD_total_volume');


// console.log(volumes)
