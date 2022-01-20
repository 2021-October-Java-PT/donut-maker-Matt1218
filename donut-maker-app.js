import DonutMaker from './donut-maker';

const myDonutsDiv = document.querySelector('#myDonuts');
const myAutoClicksDiv = document.querySelector('#myAutoClicks');
const myDonutMultipliersDiv = document.querySelector('#myDonutMultipliers');

let currentMultiplierPrice = 10;
let currentAutoClickerPrice = 100;
let ticks = 0;

const createdDonut = new DonutMaker(0, 0, 0);
const createDonutBtn = document.querySelector('#donut-button');
const createdDonutSection = document.createElement('section');
const donutClicksPara = document.createElement('p');
const buyAutoClickerBtn = document.querySelector('#autoclicker-button');
const createdAutoClickSection = document.createElement('section');
const autoClicksPara = document.createElement('p');
const actAutoClickerBtn = document.querySelector('#actautoclicker-button');
const buyMuliplierBtn = document.querySelector('#donutmultiplier-button');
const createdMultipliersSection = document.createElement('section');
const multipliersPara = document.createElement('p');

renderPage();

function renderPage() {
    addADonut();
    buyAutoClicker();
    actAutoClicker();
    buyDonutMultiplier();
}

function addADonut() {

    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);


    createDonutBtn.addEventListener('click', () => {

        createdDonut.donutClick();

        donutClicksPara.innerText = 'Total amount of donuts: ' + Math.floor(createdDonut.donutCount);
    });

}

function buyAutoClicker() {

    createdAutoClickSection.appendChild(autoClicksPara);
    myAutoClicksDiv.appendChild(createdAutoClickSection);
    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);

    buyAutoClickerBtn.addEventListener('click', () => {
        if (currentAutoClickerPrice <= createdDonut.donutCount) {
            createdDonut.donutCount = createdDonut.donutCount - currentAutoClickerPrice;
            currentAutoClickerPrice = currentAutoClickerPrice * 1.1;
            createdDonut.autoClickerCount += 1;
        }

        donutClicksPara.innerText = 'Total amount of donuts: ' + Math.floor(createdDonut.donutCount);
        autoClicksPara.innerText = 'You have purchased ' + createdDonut.autoClickerCount + ' auto click(s)';
        // console.log(createdDonut.donutCount);
        // console.log(currentAutoClickerPrice);

    });

}

function actAutoClicker() {
    actAutoClickerBtn.addEventListener('click', () => {
        if (createdDonut.autoClickerCount >= 1) {
            let autoClick = setInterval(() => {
                // console.log(ticks ++, createdDonut.donutCount++);
                ticks++;
                createdDonut.donutCount += 1 * createdDonut.autoClickerCount;
                donutClicksPara.innerText = 'Total amount of donuts: ' + Math.floor(createdDonut.donutCount);
                if (ticks >= 100000) {
                    clearInterval(autoClick);
                    // console.log('stop');
                }
            }, 1000);
        }
    });
}

function buyDonutMultiplier() {
    createdMultipliersSection.appendChild(multipliersPara);
    myDonutMultipliersDiv.appendChild(createdMultipliersSection);

    buyMuliplierBtn.addEventListener('click', () => {
        if (currentMultiplierPrice <= createdDonut.donutCount) {
            createdDonut.donutCount = createdDonut.donutCount - currentMultiplierPrice;
            currentMultiplierPrice = currentMultiplierPrice * 1.1;
            createdDonut.donutMultiplierCount += 1;
            // console.log(createdDonut.donutMultiplierCount);
        }
        donutClicksPara.innerText = 'Total amount of donuts: ' + Math.floor(createdDonut.donutCount);
        multipliersPara.innerText = 'You have purchased ' + createdDonut.donutMultiplierCount + ' donut multiplier(s)';
    });
}