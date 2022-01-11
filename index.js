// Code your solution in this file!

const hqBlock = 42;

function distanceFromHqInBlocks(curBlock) {
    if (curBlock >= 42) {
        return curBlock - hqBlock;
    } else {
        return hqBlock - curBlock;
    }

}
distanceFromHqInBlocks(curBlock);


function distanceFromHqInFeet(curBlock) {
    distanceFromHqInBlocks(curBlock);
    return distanceFromHqInBlocks(curBlock) * 264;
}
distanceFromHqInFeet(curBlock);

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}
distanceTravelledInFeet(start, destination);

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    distanceTravelledInFeet(start, destination);

}
calculatesFarePrice(start, destination);