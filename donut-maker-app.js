import DonutMaker from './donut-maker';

const myDonutsDiv = document.querySelector('#myDonuts');
const myAutoClicksDiv = document.querySelector('#myAutoClicks');

let currentPrice = 100;
const createdDonut = new DonutMaker(0, 0, 0);

renderPage();

function renderPage() {
    addADonut();
    buyAutoClicker();
}

function addADonut() {
    const createDonutBtn = document.querySelector('#donut-button');
    const createdDonutSection = document.createElement('section');
    const donutClicksPara = document.createElement('p');

    createdDonutSection.appendChild(donutClicksPara);
    myDonutsDiv.appendChild(createdDonutSection);


    createDonutBtn.addEventListener('click', () => {

        createdDonut.donutClick();

        donutClicksPara.innerText = 'You have made ' + createdDonut.donutCount + ' donuts!';
    });


}

function buyAutoClicker() {
    const buyAutoClickerBtn = document.querySelector('#autoclicker-button');
    const createdAutoClickSection = document.createElement('section');
    const autoClicksPara = document.createElement('p');

    createdAutoClickSection.appendChild(autoClicksPara);
    myAutoClicksDiv.appendChild(createdAutoClickSection);


    buyAutoClickerBtn.addEventListener('click', () => {
        if (currentPrice <= createdDonut.donutCount) {
            createdDonut.donutCount = createdDonut.donutCount - currentPrice;
            currentPrice = currentPrice * 1.1;
        }


        autoClicksPara.innerText = 'You have purchased ' + createdDonut.autoClickerCount + ' auto click(s)';
        console.log(createdDonut.donutCount);
        console.log(currentPrice);

    });


}