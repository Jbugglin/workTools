/**
 *  Calculate time for roll changes (based on 20 minutes per), 
 *      and gap run outs (based on 5 min per)
 */



/**
 *  Calculate Velocity to meet Estimated runtime for job.
 */
let pieceCount = document.getElementById('pieceCount');
let totalPieceCount = 0;
let estimatedRunTime = document.getElementById('estRun');
let estRun = 0;
let piecePerSheet = document.getElementById('piecePerSheet')
let ppsVal = 0;
let calculatedVelo = 0;

function clearVeloDisp(){
    document.getElementById('velo-disp').innerHTML = "";
}

function dispVelo(){
    document.getElementById('velo-disp').innerHTML = calculatedVelo+ " m/min";
}

function calcVelo(){
    calculatedVelo = Math.ceil(((totalPieceCount / ppsVal) / estRun));
}

function getPiecePerSheet(){
    ppsVal = piecePerSheet.value;
}

function getEstRun(){
    estRun = estimatedRunTime.value;
}

function getPieceCount(){
    totalPieceCount = pieceCount.value;
}

let veloForm = document.getElementById('calcVeloForm');
veloForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    getPieceCount();
    getEstRun();
    getPiecePerSheet();
    calcVelo();
    dispVelo();
});