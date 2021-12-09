export default class AMMPool {

    constructor(address) {
        this.address = address;
        this.secondsInDay = 86400; 
        this.sushiUrl = "https://api2.sushipro.io/?" 
        this.chainIDs = {ethereum: 1, 
                        matic: 137, 
                        fantom: 250, 
                        arbitrum: 42161}
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
        return Promise.all(data)
               .then(result => result.flat());
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

}




