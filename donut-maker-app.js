import DonutMaker from './donut-maker';

const myDonutsDiv = document.querySelector('#myDonuts');
const myAutoClicksDiv = document.querySelector('#myAutoClicks');
const myDonutMultipliersDiv = document.querySelector('#myDonutMultipliers');

let currentMultiplierPrice = 10;
let currentAutoClickerPrice = 100;
let ticks = 0;
let autoClickerActivated = false;


const createdDonut = new DonutMaker(0, 0, 0);
const createDonutBtn = document.querySelector('#donut-button');
const createdDonutSection = document.createElement('section');
const donutClicksPara = document.createElement('p');
const donutMultiValuePara = document.createElement('p');
const buyAutoClickerBtn = document.querySelector('#autoclicker-button');
const createdAutoClickSection = document.createElement('section');
const autoClicksPara = document.createElement('p');
const actAutoClickerBtn = document.querySelector('#actautoclicker-button');
const buyMuliplierBtn = document.querySelector('#donutmultiplier-button');
const createdMultipliersSection = document.createElement('section');
const multipliersPara = document.createElement('p');
const resetGameBtn = document.querySelector('#reset-button');
const modal = document.getElementById('about-dev-modal');
const modalBtn = document.getElementById('about-dev-button');
const span = document.getElementById('close');
const autoClickCostPara = document.createElement('p');
const donutMutliCostPara = document.createElement('p');


renderPage();

function renderPage() {
    addADonut();
    buyAutoClicker();
    actAutoClicker();
    buyDonutMultiplier();
    resetGame();
    updateBtns();
    modalEffects();
    let autoClick = setInterval(() => {
        if (autoClickerActivated) {
            ticks++;
            createdDonut.donutCount += (1 * createdDonut.autoClickerCount) * Math.pow(1.2, createdDonut.donutMultiplierCount);
            updateBtns();

            donutClicksPara.innerText = 'Total amount of donuts: ' + Math.round(createdDonut.donutCount);
            if (ticks >= 1000000000000000) {
                clearInterval(autoClick);
            }
        }
    }, 1000);

}



function addADonut() {

    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);

    createDonutBtn.addEventListener('click', () => {

        updateBtns();
        incrementedDonuts();

        donutClicksPara.innerText = 'Total amount of donuts: ' + Math.round(createdDonut.donutCount);
    });

}

function buyAutoClicker() {
    createdAutoClickSection.appendChild(autoClicksPara);
    myAutoClicksDiv.appendChild(createdAutoClickSection);
    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);
    myAutoClicksDiv.appendChild(autoClickCostPara);



    buyAutoClickerBtn.addEventListener('click', () => {
        if (currentAutoClickerPrice <= createdDonut.donutCount) {
            createdDonut.donutCount = createdDonut.donutCount - currentAutoClickerPrice;
            currentAutoClickerPrice = currentAutoClickerPrice * 1.1;
            createdDonut.autoClickerCount += 1;
        }

        updateBtns();

        donutClicksPara.innerText = 'Total amount of donuts: ' + Math.round(createdDonut.donutCount);
        autoClicksPara.innerText = 'You have purchased ' + createdDonut.autoClickerCount + ' auto click(s)';
        autoClickCostPara.innerText = 'Cost of next Auto Clicker: ' + currentAutoClickerPrice;

    });

}

function actAutoClicker() {
    actAutoClickerBtn.addEventListener('click', () => {
        autoClickerActivated = true;
        autoClicksPara.innerText = 'You have activated your first ' + createdDonut.autoClickerCount + ' auto click(s)';
    });
}

function buyDonutMultiplier() {
    createdMultipliersSection.appendChild(multipliersPara);
    myDonutMultipliersDiv.appendChild(createdMultipliersSection);
    myDonutMultipliersDiv.appendChild(donutMutliCostPara);

    buyMuliplierBtn.addEventListener('click', () => {
        if (currentMultiplierPrice <= createdDonut.donutCount) {
            createdDonut.donutCount = createdDonut.donutCount - currentMultiplierPrice;
            currentMultiplierPrice = currentMultiplierPrice * 1.1;
            createdDonut.donutMultiplierCount += 1;
        }
        updateBtns();
        donutClicksPara.innerText = 'Total amount of donuts: ' + Math.round(createdDonut.donutCount);
        multipliersPara.innerText = 'You have purchased and activated ' + createdDonut.donutMultiplierCount + ' donut multiplier(s)';
        donutMutliCostPara.innerText = 'Cost of next Donut Multiplier: ' + currentMultiplierPrice;

    });
}

function resetGame() {
    resetGameBtn.addEventListener('click', () => {
        location.reload();
    });
}

function incrementedDonuts() {
    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);
    createdDonutSection.appendChild(donutMultiValuePara);

    if (createdDonut.donutMultiplierCount >= 1) {

        createdDonut.incrementDonuts(donutsToIncrementBy);
    } else {
        createdDonut.donutClick();
    }
    updateBtns();
    let donutsToIncrementBy = Math.pow(1.2, createdDonut.donutMultiplierCount)
    donutMultiValuePara.innerText = 'Value of each click: ' + donutsToIncrementBy;




}

function updateBtns() {
    if (currentAutoClickerPrice > createdDonut.donutCount) {
        document.getElementById('autoclicker-button').disabled = true;
    } else {
        document.getElementById('autoclicker-button').disabled = false;
    }
    if (createdDonut.autoClickerCount < 1) {
        document.getElementById('actautoclicker-button').disabled = true;
    } else {
        document.getElementById('actautoclicker-button').disabled = false;
    }
    if (currentMultiplierPrice > createdDonut.donutCount) {
        document.getElementById('donutmultiplier-button').disabled = true;
    } else {
        document.getElementById('donutmultiplier-button').disabled = false;
    }
    if (autoClickerActivated) {
        document.getElementById('actautoclicker-button').disabled = true;
    }

}

function modalEffects() {
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}