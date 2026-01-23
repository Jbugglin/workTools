// Global variables.
let ticketPieceCount = document.getElementById('totalPieceCount');
let ticketPieceValue = 0;

let ticketRunTime = document.getElementById('ticketRunTime');
let ticketRunValue = 0;

let pcPerSheet = document.getElementById('pcPerSht');
let pcPerSheetValue = 0;

let calculatedVelo = 0.00;

function calcVelo(){
    calculatedVelo = Math.round((ticketPieceValue / pcPerSheetValue) / ticketRunValue);
}

function getPcPerSheetCount() {
    pcPerSheetValue = pcPerSheet.value;
}

function getTicketRunTime() {
    ticketRunValue = ticketRunTime.value;
}

function getTicketPieceCount() {
    ticketPieceValue = ticketPieceCount.value;
}

function displayResult() {
    //console.log("Piece count: " +ticketPieceValue+ " , Runtime: " +ticketRunValue);
    document.getElementById("velocity").innerHTML = calculatedVelo.toLocaleString("en-US")+ " shts / hr";
}

let veloForm = document.getElementById('velo-input');
veloForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    getTicketPieceCount();
    getTicketRunTime();
    getPcPerSheetCount();
    calcVelo();
    displayResult();
});