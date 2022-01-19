import DonutMaker from './donut-maker';

describe('DonutMaker', () => {

    test('does it return a donut count', () => {
        const underTest = new DonutMaker(3);
        expect(typeof underTest.donutCount).toMatch('number');
    });

    test('does it return a donut count of 5 when clicked', () => {
        const underTest = new DonutMaker(4, 10, 10);
        underTest.donutClick();
        expect(underTest.donutCount).toEqual(5);
    });
});