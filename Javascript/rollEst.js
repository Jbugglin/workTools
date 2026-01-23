let rollSeqStart = document.getElementById('rollSeqStart');
let rollSeqStartValue = 0;
let rollSeqEnd = document.getElementById('rollSeqEnd');
let rollSeqEndValue = 0;
let totalJobQty = document.getElementById('totalJobQty');
let totalJobQtyValue = 0;
let fullRoll = 0;
let numOfRolls = 0;
let toleranceLevel = 0.1;
let rollsWithTolerance = 0;
let numPerSheet = document.getElementById('numPerSheet');
let numPerSheetValue = 0;
let totalRolls

function displayRollEstimate() {
    document.getElementById('dispRollCount').innerHTML = numOfRolls+ " rolls";
    document.getElementById('dispTolerance').innerHTML = " +/- " +rollsWithTolerance+ " rolls";
}

function calcTolerance() {
    rollsWithTolerance = numOfRolls * toleranceLevel;
    console.log("Rolls: " +numOfRolls+ " +/- " +rollsWithTolerance);
}

function calcRollEst() {
    numOfRolls =  (totalJobQtyValue / numPerSheetValue) / fullRoll;
}

function getNumPerSheetCount() {
    numPerSheetValue = numPerSheet.value;
}

function getTotalJobQty() {
    totalJobQtyValue = totalJobQty.value;
}

function calcQtyFull(){
    if (rollSeqEndValue > rollSeqStartValue) {
        fullRoll = (rollSeqEndValue - rollSeqStartValue) + 1;
    } else {
        fullRoll = (rollSeqStartValue - rollSeqEndValue) + 1;
    }
}

function getSeqEndValue() {
    rollSeqEndValue = rollSeqEnd.value;
}

function getSeqStartValue() {
    rollSeqStartValue = rollSeqStart.value;
}

/**
 *  Main driver, also handles the submit button clicked. 
 */
let estimateForm = document.getElementById('rollEst-input');
estimateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getSeqStartValue();
    getSeqEndValue();
    calcQtyFull();
    getTotalJobQty();
    getNumPerSheetCount();
    calcRollEst();
    calcTolerance();
    displayRollEstimate();
});