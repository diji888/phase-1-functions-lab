// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    let blocks = Math.abs(pickup - 42);
    return blocks;
}

function distanceFromHqInFeet(pickup) {
    let feet = distanceFromHqInBlocks(pickup) * 264;
    return feet;
}

function distanceTravelledInFeet(start, end) {
    let distance = Math.abs((start - end) * 264);
    return distance;
}

function calculatesFarePrice(start, destination) {
    let fare;
    let distance = Math.abs((start - destination) * 264);
    if (distance < 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
        return fare;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return `cannot travel that far`;
    }
}