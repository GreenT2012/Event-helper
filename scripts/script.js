'use-strict';

// This function calculate the space between each lamp, inclusive the start and end of the Truss
// the inputs come from the fields in the HTML document. 
//only with the same edge distance

// const trussLength = document.querySelector("#trussLength").value;
// const numbersOfLamps = document.querySelector("#numOfLamps").value;

// const trussBetweenEqual = function () {
//     const trussLength = document.querySelector("#trussLength").value;
//     const numbersOfLamps = document.querySelector("#numOfLamps").value;

//     const sum = Number(trussLength) / (Number(numbersOfLamps) + 1);
//     document.querySelector('#result').innerHTML = sum;
//     return console.log(sum);
// }

// console.log((Number(numbersOfLamps) - 1));

const trussBetween = function () {
    //variables
    const trussLength = document.querySelector("#trussLength").value;
    const numbersOfLamps = document.querySelector("#numOfLamps").value;
    const firstLamp = document.querySelector("#firstLamp").value;
    const lastLamp = document.querySelector("#lastLamp").value;
    //calculater
    const sum = Number(firstLamp) === 0 && Number(lastLamp) === 0 ? Number(trussLength) / (Number(numbersOfLamps) + 1) : (Number(trussLength) - (Number(firstLamp) + Number(lastLamp))) / (Number(numbersOfLamps) - 1);
    //Output
    document.querySelector('#result').innerHTML = `${sum} m`;

    return sum;
}



//This function calculates the electrical characteristics and shows how many phases are needed
//EU-Norm
const calcCurrent = function () {
    const numbersOfLamp = document.querySelector("#numOfLamps").value;
    const amp = document.querySelector("#powerConsumption").value;
    const voltage = 230;
    const phase = 3500;

    const sumAmp = (Number(numbersOfLamp) * Number(amp)) / Number(voltage);
    const sumKw = (Number(numbersOfLamp) * Number(amp));

    let rep = 1;
    while (rep * phase < sumKw) {
        console.log(rep, phase, sumKw);
        document.querySelector('#resultPhase').innerHTML = `${rep + 1} Phasen`;
        rep++;
    };

    // if (sumKw >= Phase && sumKw < 2 * Phase) {
    //     document.querySelector('#resultPhase').innerHTML = `2 Phasen`
    // } else if (sumKw >= 2 * Phase && sumKw <= 3 * Phase) {
    //     document.querySelector('#resultPhase').innerHTML = `3 Phasen`
    // } else if (sumKw >= 3 * Phase && sumKw <= 4 * Phase) {
    //     document.querySelector('#resultPhase').innerHTML = `4 Phasen`
    // } else {
    //     document.querySelector('#resultPhase').innerHTML = `1 Phasen`
    // }


    document.querySelector('#resultAmp').innerHTML = `${sumAmp} A`;
    if (sumKw <= 11000) {
        document.querySelector('#resultKwatt').innerHTML = `${sumKw} W  16er`
    } else if (sumKw > 11000 && sumKw <= 22000) {
        document.querySelector('#resultKwatt').innerHTML = `${sumKw} W  32er`
    } else if (sumKw > 22000 && sumKw <= 42000) {
        document.querySelector('#resultKwatt').innerHTML = `${sumKw} W  63er`
    } else if (sumKw > 42000 && sumKw <= 82000) {
        document.querySelector('#resultKwatt').innerHTML = `${sumKw} W  125er`
    }

    return sumAmp;

}