class DonutMaker {
    constructor(donutCount, autoClickerCount, donutMultiplierCount) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.donutMultiplierCount = donutMultiplierCount;
    }

    donutClick() {
        this.donutCount ++;
    }

    incrementDonuts(amount) {
        this.donutCount = this.donutCount + amount;
    }
}

export default DonutMaker;