//Global variables. 
let totalRolls = document.getElementById('totalReadyRolls');
let rollsReady = 0;
let rollsHours = 0;
let rollsMinutes = 0;

let seqStart = document.getElementById('seqStart');
let seqEnd = document.getElementById('seqEnd');
let totalQty = 0;

let prodVelo = document.getElementById('prodVelo');
let prodTime = 0;
let prodHours = 0;
let prodMinutes = 0;

let numOfGaps = document.getElementById('numOfGaps');
let gapHours = 0;
let gapMinutes = 0;
let gapTime = 0;

let totalTime = 0;
let totalHours = 0;
let totalMinutes = 0;

let completedHours = 0;
let completedMin = 0;

let numberFormatter = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2, useGrouping: false
});

function formatTime(number){
    return number < 10 ? '0' + number : number;
}

/**
 *  Calculate estimated completion time.
 *      completionTime = (current time) + (est total runtime)
 */
function calcCompletionTime(){
    let currentTime = Date.now() //Returns current date in ms
    // There is 3600000 ms in 1 hour. 
    // There is 60000 ms in 1 minute. 
    // Define how much time to add - convert runtime to ms.
    let convRunTimeHours = totalHours * 3600000;
    let convRunTimeMin = totalMinutes * 60000;

    //Add to current time in ms....
    let completionTime = currentTime + convRunTimeHours + convRunTimeMin;
    //Create Date object for future time
    const futureDate = new Date(completionTime);
    const completedDate = futureDate.toLocaleDateString();
    let compHours = formatTime(futureDate.getHours());
    let compMin = formatTime(futureDate.getMinutes());

    console.log(`Completion Date: ${completedDate}`);
    console.log(`Completion Time: ${compHours}:${compMin}`);
    //Now to append it to the display...
    document.getElementById("completionDate").innerHTML = completedDate;

    //This will display the time in a 24hr format
    //document.getElementById("completeHours").innerHTML = compHours;
    //document.getElementById("completeMinutes").innerHTML = compMin;

    // convert 24-hour to 12-hour clock with AM/PM
    const hour24 = compHours;
    const ampm = hour24 >= 12 ? 'PM' : 'AM';
    let hour12 = hour24 % 12;
    if (hour12 === 0) hour12 = 12;
    const compHours12 = formatTime(hour12);

    // update display (use a dedicated AM/PM element if present, otherwise append to minutes)
    document.getElementById("completeHours").innerHTML = compHours12;
    const ampmEl = document.getElementById("completeAmPm");
    if (ampmEl) {
        ampmEl.innerHTML = ampm;
    } else {
        document.getElementById("completeMinutes").innerHTML = compMin + ' ' + ampm;
    }

}

/**
 *  Calculate total estimated runtime. 
 *      totalRunTime = production run time + roll change time + gap run time
 */
function calcTotalRuntime(){
    totalTime = rollsReady + (prodTime * 60) + gapTime;
    if (totalTime >= 60){
        //Hours
        totalHours = Math.floor(totalTime / 60);
        document.getElementById("totalHours").innerHTML = numberFormatter.format(totalHours);
        //Minutes
        totalMinutes = totalTime % 60;
        document.getElementById("totalMinutes").innerHTML = numberFormatter.format(totalMinutes.toFixed(0));
    } else {
        totalMinutes = totalTime;
        document.getElementById("totalHours").innerHTML = numberFormatter.format(totalHours);
        document.getElementById("totalMinutes").innerHTML = totalMinutes.toFixed(0);
    }
}

/**
 *  Calculates the total time for gaps in the roll due to print errors. 
 *      Typically these take about 5-10 minutes to completely run out, but
 *          for the scope of this project, we'll go with the former of the timings.
 *              (user input for # of gaps in ready rolls) * 5...in minutes.
 */
function calcGapRun(){
    gapTime = numOfGaps.value * 5; //Calculates 5 min per gap
    if (gapTime >= 60){
        gapHours = Math.floor(gapTime / 60);
        gapMinutes = gapTime % 60;
        document.getElementById("gapHours").innerHTML = numberFormatter.format(gapHours);
        document.getElementById("gapMinutes").innerHTML = numberFormatter.format(gapMinutes);
    } else {
        gapHours = 0;
        gapMinutes = gapTime;
        document.getElementById("gapHours").innerHTML = numberFormatter.format(gapHours);
        document.getElementById("gapMinutes").innerHTML = numberFormatter.format(gapMinutes);
    }
}

/**
 *  Calculates the total time for roll changes, this is the total rolls ready field.
 *      1 roll change equals 20 minutes (may need to adjust based on estimated time).
 *          (user input for total rolls ready) * 20...in minutes.
 *              Once the total time exceeds 60 minutes, add up to hour.
 */
function calcRollChange(){
    rollsReady = Math.round(totalRolls.value * 20); //Calculates 20 min per roll change.
    if (rollsReady >= 60){
        rollsHours = Math.floor(rollsReady / 60);
        rollsMinutes = (rollsReady % 60);
        document.getElementById("rollChangeHours").innerHTML = numberFormatter.format(rollsHours);
        document.getElementById("rollChangeMinutes").innerHTML = numberFormatter.format(rollsMinutes);
    } else {
        rollsHours = 0;
        rollsMinutes = rollsReady;
        document.getElementById("rollChangeHours").innerHTML = numberFormatter.format(rollsHours);
        document.getElementById("rollChangeMinutes").innerHTML = numberFormatter.format(rollsMinutes);
    }
}

/**
 *  Calculates the production run time and converting to hours : minutes.
 *      Calculation (in per hour): (total quantity / # of sheets per hour)
 *          Need to take the whole number -> hours
 *          The decimal * 60 -> minutes.
 */
function calcProdRun(){
    prodTime = (totalQty / prodVelo.value)
    prodHours = Math.floor(prodTime);
    prodMinutes = (prodTime % 1) * 60; //Mod 1 will return the decimal
    document.getElementById("prodHours").innerHTML = numberFormatter.format(prodHours);
    document.getElementById("prodMinutes").innerHTML = numberFormatter.format(prodMinutes.toFixed(0));
}

/**
 *  Calculates the total quantity from the user inputs.
 *      Also makes sure that the ending sequence is not greater than the starting.
 *      If submitted without a sequence number, throw an error message.
 */
function calcTotalQty() {
    if (seqStart.value >= 0 && seqEnd.value > 0){
        totalQty = seqStart.value - (seqEnd.value - 1);
        document.getElementById("quantity").innerHTML = totalQty;
    } else {
        seqInputError();
    }
}

/**
 *  This will print an error message to the user to prompt them to check their inputs. 
 */
function seqInputError(){
    alert("Check Sequence Inputs");
}

/**
 *  Main driver, also handles the submit button clicked. 
 */
let estimateForm = document.getElementById('user-input');
estimateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    calcTotalQty();
    calcProdRun();
    calcRollChange();
    calcGapRun();
    calcTotalRuntime();
    calcCompletionTime()
});
