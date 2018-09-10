//function just to make sure things are connected properly.
function button1click() {
    alert ("javascript is working");
}

function refresh() {
    location.reload();// ("javascript is working");
}

//Couldn't figure out a better way to have this display than copying and running at the top. Same thing copied on the bottom.
document.addEventListener('DOMContentLoaded', function() {
                // This is for monitoring the success of the code, not need in the final file.
                //LOS has a second variable and cascading if-else just for display, as I've also done elsewhere below. Keeps the running totals separate from places where I would want strings displayed.
                var dLos = lineOfScrimmage;
                if (dLos < 49 && tPoss === 0) {
                    dLos = "Home" + " " + lineOfScrimmage;
                }
                    else if (dLos > 49 && tPoss === 0){
                        dLos = "Away" + " " + (Math.abs(lineOfScrimmage-100));
                    }
                    else if (dLos < 49 && tPoss === 1) {
                        dLos = "Away" + " " + lineOfScrimmage;
                    }
                    else if (dLos > 49 && tPoss === 1){
                            dLos = "Home" + " " + (Math.abs(lineOfScrimmage-100));
                    }
                    else {
                        dLos = "50";
                    }
                document.getElementById("los").innerHTML = dLos;
                document.getElementById("down").innerHTML = down + " & " + yardsToGo;
                //tried to put if-else statement as the variable to print, but I got an error... this is my fix.
                var possession
                if (tPoss === 0) {possession = "Home";} else {possession = "Away";};
                document.getElementById("tPoss").innerHTML = possession;
                document.getElementById("pYards").innerHTML = pYards;
                document.getElementById("hPoints").innerHTML = hPoints;
                document.getElementById("aPoints").innerHTML = aPoints;
                //to make the clock display in a readable fashion.
                var cminutes = Math.floor(tLeft / 60);
                var cseconds = tLeft - (cminutes * 60); 
                document.getElementById("tLeft").innerHTML = cminutes + ":" + cseconds;
                document.getElementById("winner").innerHTML = winner;
}, false);



//Actual function that simulates 'play'.
            function playButton() {
            while (tLeft >= 0) {
                if (tPoss === 0) {possession = "Home";} else {possession = "Away";};
                // Append the text to <p>
                //LOS has a second variable and cascading if-else just for display, as I've also done elsewhere below. Keeps the running totals separate from places where I would want strings displayed.
                //line of scrimmage
                var dLos = lineOfScrimmage;
                if (dLos < 49 && tPoss === 0) {
                    dLos = "Home" + " " + lineOfScrimmage;
                }
                    else if (dLos > 49 && tPoss === 0){
                        dLos = "Away" + " " + (Math.abs(lineOfScrimmage-100));
                    }
                    else if (dLos < 49 && tPoss === 1) {
                        dLos = "Away" + " " + lineOfScrimmage;
                    }
                    else if (dLos > 49 && tPoss === 1){
                            dLos = "Home" + " " + (Math.abs(lineOfScrimmage-100));
                    }
                    else {
                        dLos = "50";
                    }
                var para = document.createElement("P");                       // Create a <p> node
                var textAlert = document.createTextNode("Play " + printCount + ". " + possession + " team runs for " + pYards + " yards!" + " | It is now " + down + " and " + yardsToGo + " Ball is on the " + dLos + '\u000a');      // Create a text node
                para.appendChild(textAlert);
                document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"
                // Game end criteria.
                if (tLeft <= 0){
                    if (hPoints > aPoints) {
                        winner = 'Home Team Wins!'
                    } else if (hPoints < aPoints) {
                        winner = 'Away Team Wins!'
                    } else {
                        winner = 'Tie :('
                    }
                }
                // This is for monitoring the success of the code, not need in the final file.
                document.getElementById("los").innerHTML = dLos;
                document.getElementById("down").innerHTML = down + " & " + yardsToGo;
                document.getElementById("tPoss").innerHTML = possession;
                document.getElementById("pYards").innerHTML = pYards;
                document.getElementById("hPoints").innerHTML = hPoints;
                document.getElementById("aPoints").innerHTML = aPoints;
                //to make the clock display in a readable fashion.
                var cminutes = Math.floor(tLeft / 60);
                var cseconds = tLeft - (cminutes * 60); 
                document.getElementById("tLeft").innerHTML = cminutes + ":" + cseconds;
                document.getElementById("winner").innerHTML = winner;
                runPlay();
                playPrep();
                printCount++;
            }
            if (tPoss === 0) {possession = "Home";} else {possession = "Away";};
                // Append the text to <p>
                //LOS has a second variable and cascading if-else just for display, as I've also done elsewhere below. Keeps the running totals separate from places where I would want strings displayed.
                //line of scrimmage
                var dLos = lineOfScrimmage;
                if (dLos < 49 && tPoss === 0) {
                    dLos = "Home" + " " + lineOfScrimmage;
                }
                    else if (dLos > 49 && tPoss === 0){
                        dLos = "Away" + " " + (Math.abs(lineOfScrimmage-100));
                    }
                    else if (dLos < 49 && tPoss === 1) {
                        dLos = "Away" + " " + lineOfScrimmage;
                    }
                    else if (dLos > 49 && tPoss === 1){
                            dLos = "Home" + " " + (Math.abs(lineOfScrimmage-100));
                    }
                    else {
                        dLos = "50";
                    }
                var para = document.createElement("P");                       // Create a <p> node
                var textAlert = document.createTextNode("Play " + printCount + ". " + possession + " team runs for " + pYards + " yards!" + " | It is now " + down + " and " + yardsToGo + " Ball is on the " + dLos + '\u000a');      // Create a text node
                para.appendChild(textAlert);
                document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"
                // Game end criteria.
                if (tLeft <= 0){
                    if (hPoints > aPoints) {
                        winner = 'Home Team Wins!'
                    } else if (hPoints < aPoints) {
                        winner = 'Away Team Wins!'
                    } else {
                        winner = 'Tie :('
                    }
                }
                // This is for monitoring the success of the code, not need in the final file.
                document.getElementById("los").innerHTML = dLos;
                document.getElementById("down").innerHTML = down + " & " + yardsToGo;
                document.getElementById("tPoss").innerHTML = possession;
                document.getElementById("pYards").innerHTML = pYards;
                document.getElementById("hPoints").innerHTML = hPoints;
                document.getElementById("aPoints").innerHTML = aPoints;
                //to make the clock display in a readable fashion.
                var cminutes = 0 //Math.floor(Math.abs(tLeft / 60));
                var cseconds = '00'//tLeft - (cminutes * 60); 
                document.getElementById("tLeft").innerHTML = cminutes + ":" + cseconds;
                document.getElementById("winner").innerHTML = winner;
        }