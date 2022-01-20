import DonutMaker from './donut-maker';

const myDonutsDiv = document.querySelector('#myDonuts');
const myAutoClicksDiv = document.querySelector('#myAutoClicks');

let currentPrice = 100;
let ticks = 0;


const createdDonut = new DonutMaker(0, 0, 0);


const createDonutBtn = document.querySelector('#donut-button');
const createdDonutSection = document.createElement('section');
const donutClicksPara = document.createElement('p');
const buyAutoClickerBtn = document.querySelector('#autoclicker-button');
const createdAutoClickSection = document.createElement('section');
const autoClicksPara = document.createElement('p');

renderPage();

function renderPage() {
    addADonut();
    buyAutoClicker();
}

function addADonut() {

    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);


    createDonutBtn.addEventListener('click', () => {

        createdDonut.donutClick();


        donutClicksPara.innerText = 'You have made ' + Math.floor(createdDonut.donutCount) + ' donuts!';
    });


}

function buyAutoClicker() {

    createdAutoClickSection.appendChild(autoClicksPara);
    myAutoClicksDiv.appendChild(createdAutoClickSection);
    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);


    buyAutoClickerBtn.addEventListener('click', () => {
        if (currentPrice <= createdDonut.donutCount) {
            createdDonut.donutCount = createdDonut.donutCount - currentPrice;
            currentPrice = currentPrice * 1.1;
            createdDonut.autoClickerCount += 1;
        }


        if (createdDonut.autoClickerCount >= 1) {
            let autoClick = setInterval(() => {
                // console.log(ticks ++, createdDonut.donutCount++);
                ticks++;
                createdDonut.donutCount += 1;
                donutClicksPara.innerText = 'Automatically making: ' + Math.floor(createdDonut.donutCount) + ' donuts';
                if (ticks >= 100000) {
                    clearInterval(autoClick);
                    // console.log('stop');
                }
            }, 1000);
        }


        autoClicksPara.innerText = 'You have purchased ' + createdDonut.autoClickerCount + ' auto click(s)';
        console.log(createdDonut.donutCount);
        console.log(currentPrice);

    });



}