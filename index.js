const returnFirstTwoDrivers = function(drivers) {
       return drivers.slice(0,2)
}


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, placing) {
    if (placing === returnFirstTwoDrivers)
        return returnFirstTwoDrivers(drivers)
    else if (placing === returnLastTwoDrivers)
        return returnLastTwoDrivers(drivers)
    else
        return "error"
}
