/**
 * Global Variables
 */
let jobTotalQty = document.getElementById('jobTotalQty');
let numPerSheet = document.getElementById('numPerSheet');
let jobRunTime = document.getElementById('jobRunTime');
let veloDisplay = document.getElementById('veloDisplay');
let estVelo = 0;

// Calculating The Estimated Velocity. 

function dispVelo() {
    veloDisplay.innerText = estVelo+ " shts/hr";
}

function calcVelo() {
    estVelo = (jobTotalQty / numPerSheet) / jobRunTime;
    console.log(estVelo);
}

function getRunTime() {
    jobRunTime = jobRunTime.value;
}

function getNumPerSheet() {
    numPerSheet = numPerSheet.value;
}

function getTotalQty(){
    jobTotalQty = jobTotalQty.value;
}

/**
 * Add an event listener to the velocity submit button.
 */
let veloEstimate = document.getElementById('veloCalc');
veloEstimate.addEventListener("submit", (e) => {
    e.preventDefault();
    getTotalQty();
    getNumPerSheet();
    getRunTime();
    calcVelo();
    dispVelo();
});

/**
 * Add an event listener to the finishing submit button
 */
let finishingCalc = document.getElementById('finishing');
finishingCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    //Handling the finishing calculations....
});
