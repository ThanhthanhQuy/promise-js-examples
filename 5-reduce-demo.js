'use strict';

const INIT_VALUE = 0;
const INPUT_NUMBER_ARRAY = [1, 2, 3, 4];

let sumFunc = function (currentValue, currentElement) {
    console.log(currentValue, currentElement);
    console.log('--------');

    return currentValue + currentElement;
};

let result = INPUT_NUMBER_ARRAY.reduce(sumFunc, INIT_VALUE);

console.log(result);