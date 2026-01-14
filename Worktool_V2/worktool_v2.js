let form = document.getElementById('jobForm');
let jobNo = document.getElementById('jobNo');
let jobNum = "";
let pieceCount = document.getElementById('pieceCount');
let totalPieceCount = 0;
let estimatedRunTime = document.getElementById('estRun');
let estRun = 0;

function getJobNumber(){
    jobNum = jobNo.value;
    console.log("Job Number: " +jobNum);
}

function getEstRun(){
    estRun = estimatedRunTime.value;
    console.log("Est Run: " +estRun);
}

function getPieceCount(){
    totalPieceCount = pieceCount.value;
    console.log("Piece count: " +totalPieceCount);
}

function jobDetailSubmit(){
    getJobNumber();
    getPieceCount();
    getEstRun();
}