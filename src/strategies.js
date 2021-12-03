class Strategy{

    constructor(name, description, links, URLs){
        this.name = name;
        this.description = description;
        this.URLs = URLs;
        this.links = links;
    }


}

class cashAndCarry extends Strategy {


}

class lendingArbitrage extends Strategy {

    getAPR() {
        return this.exchangeAPR(0) - this.exchangeAPR(1)
    }

    // pass in the position of link to the exchange in the array
    exchangeAPR(exchangeNum){

    }
    
}

class callPutFuturesArbitrage extends Strategy {

    dailyFundingRate(frequency){

    }

}

