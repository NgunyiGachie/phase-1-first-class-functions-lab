const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(allDrivers) {
    return allDrivers.slice(0, 2);
}

function returnLastTwoDrivers(allDrivers) {
    return allDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(allDrivers, fn) {
    return fn(allDrivers);
}


module.exports = {
    drivers,
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};

