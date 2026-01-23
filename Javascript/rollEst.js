const rollSeqStart = document.getElementById('rollSeqStart');
let rollSeqStartValue = 0;
const rollSeqEnd = document.getElementById('rollSeqEnd');
let rollSeqEndValue = 0;

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
    console.log(rollSeqStartValue)
    console.log(rollSeqEndValue)
});