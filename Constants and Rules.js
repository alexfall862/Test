//declaring variables
//prints out the play number for diagnostics
var printCount = 0;
//lineOfScrimmage is 35 for the starting point of the game until I figure out how to add 1 play after certain 'events' for a kickoff.
var lineOfScrimmage = 35;
//pYards is the variable that store the play yardage of the current play.
var pYards = 0;
//down stores down.
var down = 1;
// ultimately, my thinking is that odds will store the modifier for success of a play. Not sure on that yet.
var odds = 0;
//Team possession.
var tPoss = Math.round(Math.random());
// Yards to Go for tracking change of downs.
var yardsToGo = 10;
//play time
var pTime;
//
var bPlayTime = 25;
//points.
var hPoints = 0;
var aPoints = 0;
// time left, will countdown as plays are run.
var tLeft = 3600;
//Fix for displaying Home or Away possession
var possession
if (tPoss === 0) {possession = "Home";} else {possession = "Away";};
// Who wins!?
var winner = 'game running';


function flipPossession() {
    tPoss ^= 1;
    resetDowns();
    lineOfScrimmage = Math.abs(lineOfScrimmage - 100);
    pYards = "####";
}

function alignTouchback() {
    flipPossession();
    lineOfScrimmage = 20;
}

function alignKickoff() {
    flipPossession();
    lineOfScrimmage = 35;
}

function resetDowns() {
    down = 1;
    yardsToGo = 10;
}

function play() {
    pYards = Math.floor(Math.random() * 20) - 4;
    pTime = 6;
}

function nextPlay() {
    yardsToGo -= pYards;
    lineOfScrimmage += pYards;
    tLeft -= (pTime + bPlayTime);
    down++;
}

function punt() {
    lineOfScrimmage += 40;
    if (lineOfScrimmage < 100) {
        flipPossession();
    } else {
        alignTouchback();
    }
        //Append the text to <p>
        var para = document.createElement("P");                       // Create a <p> node
        var textAlert = document.createTextNode(possession + " punts." + '\u000a');      // Create a text node
        para.appendChild(textAlert);
        document.getElementById("myDIV").appendChild(para);
}

function kickFieldGoal() {
    printCount++;
    printCount++;
    // Append the text to <p>
    if (tPoss === 0) {
        hPoints = hPoints + 3;
    } else {
        aPoints = aPoints + 3;
    }
    var para = document.createElement("P");                       // Create a <p> node
    para.id = 'score';
    var textAlert = document.createTextNode("Play " + printCount + ". " + possession + " team kicks " + (Math.abs(lineOfScrimmage - 100)) + " yard field goal!" + " | Score is now: Home " + hPoints + " Away " + aPoints + '\u000a');      // Create a text node
    para.appendChild(textAlert);
    document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV
}

function scoreTouchdown() {
    printCount++;
    // Append the text to <p>
    if (tPoss === 0) {
        hPoints = hPoints + 7;
    } else {
        aPoints = aPoints + 7;
    }
    var para = document.createElement("P");                       // Create a <p> node
    para.id = 'score';
    var textAlert = document.createTextNode("Play " + printCount + ". " + possession + " team scores " + (Math.abs(lineOfScrimmage - 100)) + " yard touchdown!" + " | Score is now: Home " + hPoints + " Away " + aPoints + '\u000a');      // Create a text node
    para.appendChild(textAlert);
    document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV
    alignKickoff();
}

function printToBox() {
    var para = document.createElement("P");                       // Create a <p> node
    var textAlert = document.createTextNode(possession + " team runs for " + pYards + " yards!" + " | It is now " + down + " and " + yardsToGo + " Ball is on the " + dLos + '\u000a');      // Create a text node
    para.appendChild(textAlert);
    document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"
}

