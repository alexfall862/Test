function runPlay() {
    if (down < 4) {
    play();
    nextPlay();
    } else {
        //If the line of scrimmage is in fg range, kick
        if (lineOfScrimmage > 60) {
            //field goal attempt, need to work in attempt odds evetnually
            kickFieldGoal();
            //resetting down
            alignKickoff();
        } else if (lineOfScrimmage > 40 && yardsToGo < 3) {
            //go for it
            play();
            nextPlay();
        } else {
            //punt
            punt();
            }
        }
    }

function playPrep() {
    if (lineOfScrimmage > 99) {
        scoreTouchdown();
    } else {
        if (yardsToGo < 1) {
        //if firstDown
        resetDowns();
        } else if (down < 5) {
        //if not first, but not fourth
        } else if (down === 5) {
        //if turnover on downs
        flipPossession();
        }
    }
}

