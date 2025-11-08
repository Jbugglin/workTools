// Global variables.
let ticketPieceCount = document.getElementById('totalPieceCount');
let ticketPieceValue = 0;

let ticketRunTime = document.getElementById('ticketRunTime');
let ticketRunValue = 0;

let calculatedVelo = 0.00;

function calcVelo(){
    calculatedVelo = Math.round((ticketPieceValue / 2) / ticketRunValue);
}

function getTicketRunTime() {
    ticketRunValue = ticketRunTime.value;
}

function getTicketPieceCount() {
    ticketPieceValue = ticketPieceCount.value;
}

function displayResult() {
    //console.log("Piece count: " +ticketPieceValue+ " , Runtime: " +ticketRunValue);
    document.getElementById("velocity").innerHTML = calculatedVelo+ " shts / hr";
}

let veloForm = document.getElementById('user-input');
veloForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    getTicketPieceCount();
    getTicketRunTime();
    calcVelo();
    displayResult();
});